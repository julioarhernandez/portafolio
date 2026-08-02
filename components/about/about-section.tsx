import { Reveal } from "@/components/motion/reveal";
import { siteConfig } from "@/lib/site-config";

export function AboutSection() {
  return (
    <section id="about" className="bg-secondary/55">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <Reveal>
          <h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">About Me</h2>
          <div className="mt-6 max-w-2xl space-y-4 text-muted-foreground">
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

