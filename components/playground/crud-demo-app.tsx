"use client";

import { Pencil, Trash2, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { DataFlowStrip } from "@/components/playground/data-flow-strip";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";

type Note = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

const STAGE_COUNT = 4;
const STAGE_STEP_MS = 200;

function useStagePulse() {
  const [active, setActive] = useState<number | null>(null);
  const generation = useRef(0);

  async function run<T>(fn: () => Promise<T>): Promise<T> {
    const myGeneration = ++generation.current;

    const wave = (async () => {
      for (let i = 0; i < STAGE_COUNT; i++) {
        if (generation.current !== myGeneration) return;
        setActive(i);
        await new Promise((resolve) => setTimeout(resolve, STAGE_STEP_MS));
      }
    })();

    try {
      const result = await fn();
      await wave;
      return result;
    } finally {
      if (generation.current === myGeneration) setActive(null);
    }
  }

  return { active, run };
}

export function CrudDemoApp() {
  const [notes, setNotes] = useState<Note[] | null>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");
  const { active, run } = useStagePulse();

  useEffect(() => {
    run(() => fetch("/api/notes").then((res) => res.json())).then(setNotes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleCreate(event: React.FormEvent) {
    event.preventDefault();
    if (!title.trim() || !content.trim()) return;

    const note = await run(() =>
      fetch("/api/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content }),
      }).then((res) => res.json())
    );

    setNotes((prev) => [note, ...(prev ?? [])]);
    setTitle("");
    setContent("");
  }

  function startEdit(note: Note) {
    setEditingId(note.id);
    setEditTitle(note.title);
    setEditContent(note.content);
  }

  async function handleUpdate(id: string) {
    const updated = await run(() =>
      fetch(`/api/notes/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: editTitle, content: editContent }),
      }).then((res) => res.json())
    );

    setNotes((prev) => prev?.map((note) => (note.id === id ? updated : note)) ?? null);
    setEditingId(null);
  }

  async function handleDelete(id: string) {
    await run(() => fetch(`/api/notes/${id}`, { method: "DELETE" }));
    setNotes((prev) => prev?.filter((note) => note.id !== id) ?? null);
  }

  return (
    <div className="space-y-6">
      <DataFlowStrip activeStage={active} />

      <form onSubmit={handleCreate} className="space-y-3">
        <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <Textarea
          placeholder="Content"
          rows={3}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button type="submit">Add Note</Button>
      </form>

      <div className="space-y-3">
        {notes === null && (
          <>
            <Skeleton className="h-20 w-full" />
            <Skeleton className="h-20 w-full" />
          </>
        )}

        {notes?.length === 0 && (
          <p className="text-sm text-muted-foreground">No notes yet — add one above.</p>
        )}

        {notes?.map((note) => (
          <Card key={note.id}>
            <CardContent>
              {editingId === note.id ? (
                <div className="space-y-3">
                  <Input value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
                  <Textarea
                    rows={3}
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                  />
                  <div className="flex gap-2">
                    <Button size="sm" onClick={() => handleUpdate(note.id)}>
                      Save
                    </Button>
                    <Button size="sm" variant="ghost" onClick={() => setEditingId(null)}>
                      <X className="size-4" />
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-sm font-semibold">{note.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{note.content}</p>
                  </div>
                  <div className="flex shrink-0 gap-1">
                    <Button size="icon-sm" variant="ghost" onClick={() => startEdit(note)}>
                      <Pencil className="size-3.5" />
                    </Button>
                    <Button size="icon-sm" variant="ghost" onClick={() => handleDelete(note.id)}>
                      <Trash2 className="size-3.5" />
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
