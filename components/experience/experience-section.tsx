import { ExperienceCard } from "@/components/experience/experience-card";
import { Reveal } from "@/components/motion/reveal";
import { experience } from "@/lib/site-config";

export function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <Reveal>
        <h2 className="section-heading font-display text-3xl font-medium tracking-tight sm:text-4xl">
          Professional Experience
        </h2>
      </Reveal>
      <Reveal stagger className="mt-8 space-y-4">
        {experience.map((item) => (
          <ExperienceCard key={item.company} item={item} />
        ))}
      </Reveal>
    </section>
  );
}

