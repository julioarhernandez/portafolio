"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform, type Variants } from "framer-motion";
import { Download, Infinity as InfinityIcon, Lightbulb, Mail, Smile, Target } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

import { Button } from "@/components/ui/button";
import { heroStats, siteConfig } from "@/lib/site-config";

const statIconMap = {
  lightbulb: Lightbulb,
  target: Target,
  smile: Smile,
  infinity: InfinityIcon,
} as const;

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function HeroSection() {
  const imageRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [-90, 90]);
  const cardY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [90, -90]);

  return (
    <section className="relative isolate -mt-14 overflow-hidden pt-14">
      <div className="relative mx-auto grid min-h-[min(820px,100dvh)] w-full max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(390px,0.9fr)] lg:gap-16 lg:py-24">
        <motion.div initial={false} animate="visible" variants={container} className="max-w-2xl">
          <motion.p variants={item} className="text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-sm">
            Hi, I&apos;m {siteConfig.name}
          </motion.p>
          <motion.h1
            variants={item}
            className="mt-6 max-w-2xl font-display text-5xl font-medium leading-[0.95] tracking-tight text-balance sm:text-6xl lg:text-7xl"
          >
            <span className="bg-linear-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
              {siteConfig.title}
            </span>
          </motion.h1>
          <motion.p variants={item} className="mt-7 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-xl">
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

        <motion.div
          initial={false}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35, duration: 0.6, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[470px] pb-10 sm:pb-0 lg:mr-4"
        >
          <div ref={imageRef} className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border/60 bg-secondary/30 shadow-2xl shadow-foreground/10">
            <motion.div style={{ y: imageY }} className="absolute inset-0 -top-[16%] h-[132%] will-change-transform">
              <Image
                src="/hero-image-dev.webp"
                alt="Julio Rodriguez, software engineer"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
            </motion.div>
          </div>

          <motion.aside
            style={{ y: cardY }}
            className="absolute -bottom-8 right-4 z-10 w-[calc(100%-2rem)] max-w-xs rounded-2xl border border-border/70 bg-card/95 p-5 shadow-xl shadow-foreground/10 backdrop-blur will-change-transform sm:bottom-6 sm:right-[-1.5rem]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Currently building</p>
            <p className="mt-4 text-lg font-semibold tracking-tight">Interfaces that feel clear, fast and human.</p>
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
        </motion.div>

      </div>

      <motion.div
        initial={false}
        animate="visible"
        variants={container}
        className="relative border-t border-border/60"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-y divide-border/60 px-4 sm:px-6 lg:grid-cols-4 lg:divide-y-0">
          {heroStats.map((stat) => {
            const Icon = statIconMap[stat.icon];
            return (
              <motion.div
                key={stat.label}
                variants={item}
                className="flex items-center gap-3 px-4 py-6 sm:px-6"
              >
                <Icon className="size-5 shrink-0 text-primary" strokeWidth={1.75} />
                <div>
                  <p className="font-display text-2xl font-semibold tracking-tight">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

    </section>
  );
}