import fs from "node:fs";
import path from "node:path";

import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";

import { mdxOptions } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "TypeScript Patterns",
};

export default function TypeScriptPatternsPage() {
  const source = fs.readFileSync(
    path.join(process.cwd(), "content/playground/typescript-patterns.mdx"),
    "utf8"
  );

  return (
    <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <Link href="/playground" className="text-sm text-muted-foreground hover:text-foreground">
        ← Playground
      </Link>
      <h1 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
        TypeScript Patterns
      </h1>
      <p className="mt-3 text-muted-foreground">
        A quick tour of the TypeScript features used throughout this codebase.
      </p>
      <div className="prose prose-neutral mt-10 max-w-none dark:prose-invert prose-pre:bg-muted">
        <MDXRemote source={source} options={mdxOptions} />
      </div>
    </section>
  );
}
