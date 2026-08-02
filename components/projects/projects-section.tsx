import { Reveal } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/lib/site-config";

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <Reveal>
        <h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">Featured Projects</h2>
      </Reveal>
      <Reveal stagger className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </Reveal>
    </section>
  );
}
