import { FeaturedProjectCard } from "@/components/projects/featured-project-card";
import { Reveal } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/lib/site-config";

export function ProjectsSection() {
  const [featuredProject, ...otherProjects] = projects;

  return (
    <section id="projects" tabIndex={-1} className="mx-auto max-w-6xl px-4 py-20 sm:px-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
      <Reveal>
        <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
          Selected Work
        </span>
        <h2 className="section-heading font-heading mt-2 text-xl font-semibold tracking-wide text-primary uppercase sm:text-2xl">
          Featured Projects
        </h2>
      </Reveal>

      {featuredProject && (
        <Reveal className="mt-8">
          <FeaturedProjectCard project={featuredProject} />
        </Reveal>
      )}

      <Reveal stagger className="mt-5 grid gap-5 sm:grid-cols-2">
        {otherProjects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </Reveal>
    </section>
  );
}
