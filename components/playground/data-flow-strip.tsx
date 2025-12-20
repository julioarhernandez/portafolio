"use client";

import { motion } from "framer-motion";
import { Code2, Database, Server, Sparkles } from "lucide-react";

const stages = [
  { label: "React UI", icon: Sparkles },
  { label: "API Route", icon: Code2 },
  { label: "Prisma", icon: Server },
  { label: "Postgres", icon: Database },
] as const;

export function DataFlowStrip({ activeStage }: { activeStage: number | null }) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto rounded-lg border p-3">
      {stages.map((stage, index) => {
        const Icon = stage.icon;
        const active = activeStage === index;
        return (
          <div key={stage.label} className="flex items-center gap-2">
            <motion.div
              animate={{ scale: active ? 1.06 : 1 }}
              className={`flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs whitespace-nowrap ${
                active ? "border-primary bg-primary/10 text-foreground" : "border-border text-muted-foreground"
              }`}
            >
              <Icon className="size-3.5" />
              {stage.label}
            </motion.div>
            {index < stages.length - 1 && <span className="text-muted-foreground">→</span>}
          </div>
        );
      })}
    </div>
  );
}
