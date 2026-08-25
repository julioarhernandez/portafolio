import { ExperienceCard } from "@/components/experience/experience-card";
import { Reveal } from "@/components/motion/reveal";
import { experience } from "@/lib/site-config";

export function ExperienceSection() {
  return (
    <section id="experience" tabIndex={-1} className="mx-auto max-w-6xl px-4 py-20 sm:px-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
      <Reveal>
        <div className="mb-10">
          <h2 className="section-heading font-heading text-xl font-semibold uppercase tracking-wide text-primary sm:text-2xl">
            Professional Experience
          </h2>
          <span aria-hidden="true" className="mt-3 block h-1 w-10 bg-primary" />
        </div>
      </Reveal>
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute top-2 bottom-2 left-4 w-px bg-border sm:left-[10.5rem]"
        />
        <Reveal stagger className="space-y-8 sm:space-y-6">
          {experience.map((item) => (
            <ExperienceCard key={item.company} item={item} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
