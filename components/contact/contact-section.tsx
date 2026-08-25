import { Mail } from "lucide-react";

import { ContactForm } from "@/components/contact/contact-form";
import { Reveal } from "@/components/motion/reveal";
import { siteConfig } from "@/lib/site-config";

export function ContactSection() {
  return (
    <section
      id="contact"
      tabIndex={-1}
      className="border-t border-border/70 bg-secondary/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-sm">
            Let&apos;s work together
          </p>
          <h2 className="mt-4 font-display text-4xl font-medium leading-[1.05] tracking-tight text-balance sm:text-5xl">
            <span className="bg-linear-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
              Have a good idea?
              <br />
              Let&apos;s make it useful.
            </span>
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            I partner with startups and teams to build thoughtful, scalable products that solve
            real problems.
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-5 inline-flex items-center gap-2 text-base font-semibold text-primary underline-offset-4 hover:underline"
          >
            <Mail className="size-4" />
            {siteConfig.email}
          </a>

          <div className="mt-8 flex items-start gap-3 rounded-xl bg-primary/5 px-5 py-4">
            <span className="mt-1.5 size-2 shrink-0 rounded-full bg-emerald-500" />
            <div>
              <p className="text-sm font-semibold text-foreground">Available for select projects</p>
              <p className="text-sm text-muted-foreground">Currently open to new opportunities.</p>
            </div>
          </div>
        </Reveal>

        <Reveal className="rounded-2xl border border-border/70 bg-card p-6 shadow-xl shadow-foreground/5 sm:p-8">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
