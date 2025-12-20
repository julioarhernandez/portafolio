import { prisma } from "@/lib/prisma";
import { noteSchema } from "@/lib/validations/note";

export async function GET() {
  const notes = await prisma.note.findMany({ orderBy: { createdAt: "desc" } });
  return Response.json(notes);
}

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = noteSchema.safeParse(body);

  if (!parsed.success) {
    return Response.json({ error: parsed.error.issues[0]?.message ?? "Invalid input" }, { status: 400 });
  }

  const note = await prisma.note.create({ data: parsed.data });
  return Response.json(note, { status: 201 });
}
