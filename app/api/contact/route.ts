import { prisma } from "@/lib/prisma";
import { contactSchema } from "@/lib/validations/contact";
import { resend } from "@/lib/resend";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return Response.json({ error: parsed.error.issues[0]?.message ?? "Invalid input" }, { status: 400 });
  }

  const { name, email, message, company } = parsed.data;
  if (company) {
    // Honeypot tripped — silently succeed so bots don't learn anything.
    return Response.json({ ok: true });
  }

  try {
    await prisma.contactMessage.create({ data: { name, email, message } });
  } catch (error) {
    console.error("Failed to save contact message", error);
    return Response.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }

  try {
    await resend.emails.send({
      from: "Portfolio <contact@juliorodriguez.dev>",
      to: process.env.CONTACT_EMAIL_TO ?? "",
      replyTo: email,
      subject: `New message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });
  } catch (error) {
    // The message is already persisted, so a failed notification email isn't fatal.
    console.error("Failed to send contact notification email", error);
  }

  return Response.json({ ok: true });
}
