"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function HeroSection() {
  return (
    <section className="hero-surface relative isolate -mt-14 flex min-h-[100dvh] overflow-hidden pt-14">

      <div className="mx-auto flex w-full max-w-5xl flex-1 items-center px-4 py-20 sm:px-6 sm:py-24">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[minmax(0,1fr)_250px]">
          <motion.div initial={false} animate="visible" variants={container} className="max-w-3xl">
            <motion.p variants={item} className="text-sm font-medium tracking-wide text-primary">
              Hi, I&apos;m {siteConfig.name}
            </motion.p>
            <motion.h1
              variants={item}
              className="mt-6 max-w-3xl font-display text-5xl font-medium leading-[0.95] tracking-tight text-balance sm:text-6xl lg:text-7xl"
            >
              <span className="bg-linear-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
                {siteConfig.title}
              </span>
            </motion.h1>
            <motion.p variants={item} className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-muted-foreground sm:text-xl">
              {siteConfig.tagline}
            </motion.p>
            <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
              <Button
                size="lg"
                nativeButton={false}
                render={<Link href="/#projects">Projects</Link>}
              />
              <Button
                variant="outline"
                size="lg"
                nativeButton={false}
                render={
                  <a href={siteConfig.resumeUrl} download>
                    <Download className="size-4" data-icon="inline-start" />
                    Resume
                  </a>
                }
              />
              <Button
                variant="ghost"
                size="lg"
                nativeButton={false}
                render={
                  <Link href="/#contact">
                    <Mail className="size-4" data-icon="inline-start" />
                    Contact
                  </Link>
                }
              />
            </motion.div>
          </motion.div>

          <motion.aside
            initial={false}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45, duration: 0.6, ease: "easeOut" }}
            className="hidden rounded-3xl border border-border/70 bg-card/70 p-5 shadow-xl shadow-foreground/5 backdrop-blur lg:block"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Currently building</p>
            <p className="mt-4 text-lg font-semibold tracking-tight">Interfaces that feel clear, fast, and human.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["React", "Vue", "Accessibility", "Design systems"].map((label) => (
                <span key={label} className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
                  {label}
                </span>
              ))}
            </div>
            <div className="mt-7 border-t border-border/70 pt-4 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">20+</span> years shaping the web
            </div>
          </motion.aside>
        </div>
      </div>

      <motion.a
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        href="#about"
        className="absolute bottom-7 left-1/2 flex -translate-x-1/2 items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowDown className="size-4" />
        Scroll to learn more
      </motion.a>
    </section>
  );
}

