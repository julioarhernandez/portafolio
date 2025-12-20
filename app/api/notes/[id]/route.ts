import { prisma } from "@/lib/prisma";
import { noteSchema } from "@/lib/validations/note";

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const body = await request.json();
  const parsed = noteSchema.safeParse(body);

  if (!parsed.success) {
    return Response.json({ error: parsed.error.issues[0]?.message ?? "Invalid input" }, { status: 400 });
  }

  const note = await prisma.note.update({ where: { id }, data: parsed.data });
  return Response.json(note);
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  await prisma.note.delete({ where: { id } });
  return Response.json({ ok: true });
}
