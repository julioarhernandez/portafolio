import { RevealItem } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { SkillCategory } from "@/types";

export function SkillCategoryCard({ category }: { category: SkillCategory }) {
  return (
    <RevealItem>
      <Card>
        <CardHeader>
          <CardTitle>{category.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-1.5">
            {category.skills.map((skill) => (
              <Badge key={skill} variant="outline">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </RevealItem>
  );
}
