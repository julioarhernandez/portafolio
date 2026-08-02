import { Reveal } from "@/components/motion/reveal";
import { SkillCategoryCard } from "@/components/skills/skill-category-card";
import { skillCategories } from "@/lib/site-config";

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <Reveal>
        <h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
          Skills &amp; Technology Stack
        </h2>
      </Reveal>
      <Reveal stagger className="mt-8 grid gap-4 sm:grid-cols-2">
        {skillCategories.map((category) => (
          <SkillCategoryCard key={category.title} category={category} />
        ))}
      </Reveal>
    </section>
  );
}
