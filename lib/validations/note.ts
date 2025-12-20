import { z } from "zod";

export const noteSchema = z.object({
  title: z.string().trim().min(1, "Title is required").max(120),
  content: z.string().trim().min(1, "Content is required").max(2000),
});

export type NoteInput = z.infer<typeof noteSchema>;
