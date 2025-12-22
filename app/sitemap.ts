import type { MetadataRoute } from "next";

import { getAllPosts } from "@/lib/mdx";
import { playgroundDemos } from "@/lib/playground-config";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/playground", "/blog"].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));

  const playgroundRoutes = playgroundDemos.map((demo) => ({
    url: `${siteUrl}/playground/${demo.slug}`,
    lastModified: new Date(),
  }));

  const postRoutes = getAllPosts().map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.frontmatter.date),
  }));

  return [...staticRoutes, ...playgroundRoutes, ...postRoutes];
}
