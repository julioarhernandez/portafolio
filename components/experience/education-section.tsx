import { CodeRing } from "@/components/decorations/code-ring";
import { Reveal, RevealItem } from "@/components/motion/reveal";
import { education, educationHighlight } from "@/lib/site-config";

export function EducationSection() {
  return (
    <section
      id="education"
      tabIndex={-1}
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <Reveal>
        <div className="mb-10">
          <h2 className="section-heading font-heading text-xl font-semibold uppercase tracking-wide text-primary sm:text-2xl">
            Education
          </h2>
          <span aria-hidden="true" className="mt-3 block h-1 w-10 bg-primary" />
        </div>
      </Reveal>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
        <Reveal stagger className="space-y-6">
          {education.map((item) => (
            <RevealItem key={item.degree}>
              <article className="flex flex-col gap-1">
                <h3 className="text-base font-semibold leading-tight sm:text-lg">{item.degree}</h3>
                <p className="text-sm font-medium text-primary">{item.institution}</p>
                <p className="text-sm text-muted-foreground">
                  {item.location} &middot; {item.period}
                </p>
              </article>
            </RevealItem>
          ))}
        </Reveal>

        <Reveal>
          <div className="flex items-center justify-between gap-6 rounded-2xl border border-border/70 bg-secondary/50 p-6">
            <div>
              <h3 className="font-display text-lg font-semibold">{educationHighlight.title}</h3>
              <p className="mt-2 max-w-[24ch] text-sm text-muted-foreground">
                {educationHighlight.description}
              </p>
            </div>
            <CodeRing />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
