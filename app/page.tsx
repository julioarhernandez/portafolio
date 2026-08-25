import { AboutSection } from "@/components/about/about-section";
import { CapabilitiesSection } from "@/components/about/capabilities-section";
import { ContactSection } from "@/components/contact/contact-section";
import { EducationSection } from "@/components/experience/education-section";
import { ExperienceSection } from "@/components/experience/experience-section";
import { HeroSection } from "@/components/hero/hero-section";
import { ProjectsSection } from "@/components/projects/projects-section";
import { SkillsSection } from "@/components/skills/skills-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CapabilitiesSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
