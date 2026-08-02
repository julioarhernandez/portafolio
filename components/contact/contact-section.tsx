import { ContactForm } from "@/components/contact/contact-form";
import { Reveal } from "@/components/motion/reveal";
import { siteConfig } from "@/lib/site-config";

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <Reveal>
        <h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">Get in Touch</h2>
        <p className="mt-3 max-w-lg text-muted-foreground">
          Have a role, project, or question in mind? Send a message and I&apos;ll get back to you
          — or reach me directly at{" "}
          <a href={`mailto:${siteConfig.email}`} className="underline underline-offset-4">
            {siteConfig.email}
          </a>{" "}
          or{" "}
          <a
            href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
            className="underline underline-offset-4"
          >
            {siteConfig.phone}
          </a>
          .
        </p>
        <div className="mt-8">
          <ContactForm />
        </div>
      </Reveal>
    </section>
  );
}
