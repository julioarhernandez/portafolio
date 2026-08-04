import { Reveal, RevealItem } from "@/components/motion/reveal";
import { education } from "@/lib/site-config";

export function EducationSection() {
  return (
    <section
      id="education"
      tabIndex={-1}
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <Reveal>
        <div className="mb-10">
          <h2 className="section-heading font-display text-3xl font-medium tracking-tight sm:text-4xl">
            Education
          </h2>
          <span aria-hidden="true" className="mt-3 block h-1 w-10 bg-primary" />
        </div>
      </Reveal>
      <Reveal stagger className="space-y-6">
        {education.map((item) => (
          <RevealItem key={item.degree}>
            <article className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <div>
                <h3 className="text-base font-semibold leading-tight sm:text-lg">{item.degree}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{item.institution}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.location}</p>
              </div>
              <p className="text-sm font-medium text-muted-foreground sm:shrink-0">{item.period}</p>
            </article>
          </RevealItem>
        ))}
      </Reveal>
    </section>
  );
}
