"use client";

import { BookOpenText, BriefcaseBusiness, Code2, ExternalLink, FolderKanban, FlaskConical, GraduationCap, Mail, Menu, UserRound, Wrench, X } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Collapse } from "@/components/motion/collapse";
import { Button } from "@/components/ui/button";
import { navItems, siteConfig, socialLinks } from "@/lib/site-config";

const navIcons = [UserRound, BriefcaseBusiness, GraduationCap, Wrench, FolderKanban, FlaskConical, BookOpenText] as const
const socialIcons = { github: Code2, linkedin: BriefcaseBusiness, mail: Mail, twitter: ExternalLink } as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="font-display text-base font-semibold tracking-tight" onClick={() => setOpen(false)}>
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-medium text-muted-foreground sm:text-sm transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <Button size="sm" nativeButton={false} render={<Link href="/#contact">Contact</Link>} />
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
        </div>
      </div>

      <div className={`fixed inset-x-0 top-16 bottom-0 z-40 min-h-[calc(100svh-4rem)] md:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}>
        <Collapse open={open} className="h-full">
          <nav className="flex min-h-[calc(100svh-4rem)] flex-col gap-1.5 border-b border-border/60 bg-background px-4 py-5 shadow-lg">
            {navItems.map((item, index) => {
              const Icon = navIcons[index];

              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.32, delay: index * 0.07, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 rounded-md px-3 py-3 font-display text-lg font-medium tracking-tight text-foreground transition-colors hover:bg-muted hover:text-primary"
                    onClick={() => setOpen(false)}
                  >
                    <Icon className="size-5 text-primary" strokeWidth={1.8} aria-hidden="true" />
                    {item.label}
                  </Link>
                </motion.div>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32, delay: navItems.length * 0.07, ease: "easeOut" }}
              className="mt-3 border-t border-border/60 pt-4"
            >
              <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Connect</p>
              <div className="flex flex-col gap-1.5">
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.32, delay: navItems.length * 0.07, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <Link
                    href="/#contact"
                    className="flex items-center gap-3 rounded-md px-3 py-2.5 font-display text-base font-medium tracking-tight text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    onClick={() => setOpen(false)}
                  >
                    <Mail className="size-5 text-primary" strokeWidth={1.8} aria-hidden="true" />
                    Contact
                  </Link>
                </motion.div>

                {socialLinks.map((social, index) => {
                  const Icon = socialIcons[social.icon];
                  const delay = (navItems.length + 1 + index) * 0.07;

                  return (
                    <motion.div
                      key={social.href}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.32, delay, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <a
                        href={social.href}
                        target={social.href.startsWith("http") ? "_blank" : undefined}
                        rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                        className="flex items-center gap-3 rounded-md px-3 py-2.5 font-display text-base font-medium tracking-tight text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                        onClick={() => setOpen(false)}
                      >
                        <Icon className="size-5 text-primary" strokeWidth={1.8} aria-hidden="true" />
                        {social.label}
                      </a>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </nav>
        </Collapse>
      </div>
    </header>
  );
}

