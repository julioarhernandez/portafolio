import type { Metadata } from "next";
import Link from "next/link";

import { ReactStateDemo } from "@/components/playground/react-state-demo";

export const metadata: Metadata = {
  title: "React State & Rendering",
};

export default function ReactStatePage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <Link href="/playground" className="text-sm text-muted-foreground hover:text-foreground">
        ← Playground
      </Link>
      <h1 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
        React State &amp; Rendering
      </h1>
      <p className="mt-3 text-muted-foreground">
        A live look at when and why components re-render.
      </p>
      <div className="mt-10">
        <ReactStateDemo />
      </div>
    </section>
  );
}
