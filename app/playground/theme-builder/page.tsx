import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ThemeBuilderGuide } from "@/components/playground/theme-builder-guide";
import { mdxOptions } from "@/lib/mdx";

export const metadata: Metadata = { title: "Theme Builder", description: "Learn how semantic theme variables power the portfolio and edit them live." };

export default function ThemeBuilderPage() {
  const source = fs.readFileSync(path.join(process.cwd(), "content/playground/theme-builder.mdx"), "utf8");
  return <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
    <Link href="/playground" className="text-sm text-muted-foreground hover:text-foreground">Back to Playground</Link>
    <h1 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Theme Builder</h1>
    <p className="mt-3 text-muted-foreground">Learn how semantic color roles work, then activate a live editor that follows you around the portfolio.</p>
    <div className="prose prose-neutral mt-10 max-w-none dark:prose-invert prose-pre:bg-muted"><MDXRemote source={source} options={mdxOptions}/></div>
    <ThemeBuilderGuide />
  </section>;
}
