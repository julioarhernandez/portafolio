import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { RevealItem } from "@/components/motion/reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { PlaygroundDemo } from "@/lib/playground-config";

export function PlaygroundCard({ demo }: { demo: PlaygroundDemo }) {
  return (
    <RevealItem>
      <Link href={`/playground/${demo.slug}`}>
        <Card className="h-full transition-colors hover:bg-muted/50">
          <CardHeader>
            <CardTitle className="flex items-center justify-between text-base">
              {demo.title}
              <ArrowRight className="size-4 text-muted-foreground" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{demo.description}</p>
          </CardContent>
        </Card>
      </Link>
    </RevealItem>
  );
}
