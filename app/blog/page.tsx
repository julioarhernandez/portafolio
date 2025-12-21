import type { Metadata } from "next";

import { PostCard } from "@/components/blog/post-card";
import { Reveal } from "@/components/motion/reveal";
import { getAllPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on React, TypeScript, architecture, backend development, AI, and cloud.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <Reveal>
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">Blog</h1>
        <p className="mt-3 text-muted-foreground">
          Notes on React, TypeScript, architecture, backend development, AI, and cloud.
        </p>
      </Reveal>
      <Reveal stagger className="mt-8 space-y-4">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </Reveal>
    </section>
  );
}
