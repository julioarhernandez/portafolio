import { Mail } from "lucide-react";
import Link from "next/link";

import { GithubIcon, LinkedinIcon } from "@/components/layout/brand-icons";
import { siteConfig, socialLinks } from "@/lib/site-config";

const icons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: Mail,
  twitter: Mail
} as const;

export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:justify-between sm:px-6">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js.
        </p>
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => {
            const Icon = icons[link.icon];
            return (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground"
                aria-label={link.label}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <Icon className="size-4" />
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
