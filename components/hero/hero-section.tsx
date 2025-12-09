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
    <section className="mx-auto flex max-w-5xl flex-col items-start px-4 py-24 sm:px-6 sm:py-32">
      <motion.div initial="hidden" animate="visible" variants={container} className="max-w-2xl">
        <motion.p variants={item} className="text-sm font-medium text-muted-foreground">
          Hi, I&apos;m {siteConfig.name}
        </motion.p>
        <motion.h1
          variants={item}
          className="mt-3 text-4xl font-semibold tracking-tight text-balance sm:text-5xl"
        >
          {siteConfig.title}
        </motion.h1>
        <motion.p variants={item} className="mt-5 text-lg leading-relaxed text-muted-foreground">
          {siteConfig.tagline}
        </motion.p>
        <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
          <Button
            size="lg"
            nativeButton={false}
            render={<Link href="/#projects">View Projects</Link>}
          />
          <Button
            variant="outline"
            size="lg"
            nativeButton={false}
            render={
              <a href={siteConfig.resumeUrl} download>
                <Download className="size-4" data-icon="inline-start" />
                Download Resume
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-20 flex items-center gap-2 text-sm text-muted-foreground"
      >
        <ArrowDown className="size-4" />
        Scroll to learn more
      </motion.div>
    </section>
  );
}
