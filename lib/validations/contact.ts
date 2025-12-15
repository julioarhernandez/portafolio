import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(80),
  email: z.string().trim().email("Enter a valid email address"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(5000),
  // Honeypot field: real users never fill this in, bots usually do.
  company: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
