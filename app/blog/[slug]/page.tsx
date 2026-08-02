import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { getAllPosts, getPostBySlug, mdxOptions } from "@/lib/mdx";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  try {
    const { frontmatter } = getPostBySlug(slug);
    return { title: frontmatter.title, description: frontmatter.excerpt };
  } catch {
    return {};
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  const { frontmatter, content } = post;

  return (
    <article className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <Link
        href="/blog"
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        ← Blog
      </Link>
      <p className="mt-3 text-xs text-muted-foreground">
        {new Date(frontmatter.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "UTC",
        })}
      </p>
      <h1 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
        {frontmatter.title}
      </h1>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {frontmatter.tags.map((tag) => (
          <Badge
            key={tag}
            variant="outline"
            className="bg-secondary text-secondary-foreground"
          >
            {tag}
          </Badge>
        ))}
      </div>
      <div className="prose mt-10 max-w-none text-foreground prose-headings:text-foreground prose-p:text-foreground prose-li:text-foreground prose-strong:text-foreground prose-code:text-foreground prose-a:text-primary prose-a:decoration-primary/40 prose-blockquote:border-primary prose-blockquote:text-muted-foreground prose-pre:bg-muted">
        <MDXRemote source={content} options={mdxOptions} />
      </div>
    </article>
  );
}
