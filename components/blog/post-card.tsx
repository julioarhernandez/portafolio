import Link from "next/link";

import { RevealItem } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Post } from "@/lib/mdx";

export function PostCard({ post }: { post: Post }) {
  return (
    <RevealItem>
      <Link href={`/blog/${post.slug}`}>
        <Card className="transition-colors hover:bg-muted/50">
          <CardHeader>
            <p className="text-xs text-muted-foreground">
              {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                timeZone: "UTC",
              })}
            </p>
            <CardTitle className="text-lg text-primary">{post.frontmatter.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              {post.frontmatter.excerpt}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {post.frontmatter.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="bg-secondary text-secondary-foreground"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </Link>
    </RevealItem>
  );
}
