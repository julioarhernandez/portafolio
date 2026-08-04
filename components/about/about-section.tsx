import { CodeOrnament } from "@/components/decorations/code-ornament";
import { Reveal } from "@/components/motion/reveal";
import { siteConfig } from "@/lib/site-config";

export function AboutSection() {
  return (
    <section id="about" tabIndex={-1} className="border-b border-border/70 bg-secondary/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-start lg:gap-16">
          <Reveal className="about-visual order-1 lg:order-1" aria-hidden="true">
            <CodeOrnament showBrowser />
          </Reveal>

          <div className="order-2 lg:order-2">
            <Reveal>
              <h2 className="section-heading font-display text-3xl font-medium tracking-tight sm:text-4xl">About Me</h2>
            </Reveal>
            <Reveal>
              <div className="mt-8 max-w-3xl space-y-4 text-muted-foreground">
                {siteConfig.about.map((paragraph) => (
                  <p key={paragraph} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}