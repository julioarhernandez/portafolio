import { Reveal } from "@/components/motion/reveal";
import { siteConfig } from "@/lib/site-config";

export function AboutSection() {
  return (
    <section id="about" className="border-b border-border/70 bg-secondary/35">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-start lg:gap-16">
          <Reveal className="about-visual" aria-hidden="true">
            <div className="about-ornament">
              <div className="about-dot-grid" />
              <div className="about-browser">
                <div className="about-browser-bar">
                  <span className="about-window-dot" />
                  <span className="about-window-dot" />
                  <span className="about-window-dot" />
                </div>
                <div className="about-browser-body">
                  <div className="about-browser-input" />
                  <div className="about-browser-columns">
                    <div className="about-browser-block about-browser-block-tall" />
                    <div className="about-browser-stack">
                      <div className="about-browser-block" />
                      <div className="about-browser-block about-browser-block-wide" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-code-badge">&lt; / &gt;</div>
            </div>
          </Reveal>

          <div>
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