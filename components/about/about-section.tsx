import { Reveal } from "@/components/motion/reveal";
import { siteConfig } from "@/lib/site-config";

export function AboutSection() {
  return (
    <section id="about" className="border-b border-border/70 bg-secondary/35">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <h2 className="section-heading font-display text-3xl font-medium tracking-tight sm:text-4xl">About Me</h2>
          <div className="mt-8 max-w-3xl space-y-4 text-muted-foreground">
            {siteConfig.about.map((paragraph) => (
              <p key={paragraph} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}


