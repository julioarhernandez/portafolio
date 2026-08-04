import { Reveal } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/lib/site-config";

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <Reveal>
        <h2 className="section-heading font-display text-3xl font-medium tracking-tight sm:text-4xl">Featured Projects</h2>
      </Reveal>
      <Reveal stagger className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </Reveal>
    </section>
  );
}

