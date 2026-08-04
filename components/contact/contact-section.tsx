import { CodeOrnament } from "@/components/decorations/code-ornament";
import { ContactForm } from "@/components/contact/contact-form";
import { Reveal } from "@/components/motion/reveal";
import { siteConfig } from "@/lib/site-config";

export function ContactSection() {
  return (
    <section id="contact" tabIndex={-1} className="border-t border-border/70 bg-secondary/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start lg:gap-16">
        <div className="order-2 lg:order-1">
          <Reveal>
            <h2 className="section-heading font-display text-3xl font-medium tracking-tight sm:text-4xl">Get in Touch</h2>
            <p className="mt-3 max-w-lg text-muted-foreground">
              Have a role, project, or question in mind? Send a message and I&apos;ll get back to you
              — or reach me directly at{" "}
              <a href={"mailto:" + siteConfig.email} className="underline underline-offset-4">
                {siteConfig.email}
              </a>{" "}
              .
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>

        <Reveal className="order-1 lg:order-2" aria-hidden="true">
          <CodeOrnament showEnvelope />
        </Reveal>
      </div>
    </section>
  );
}