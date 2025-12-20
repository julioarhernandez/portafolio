import type { Metadata } from "next";
import Link from "next/link";

import { CrudDemoApp } from "@/components/playground/crud-demo-app";

export const metadata: Metadata = {
  title: "Full-Stack CRUD",
};

export default function CrudDemoPage() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-20 sm:px-6">
      <Link href="/playground" className="text-sm text-muted-foreground hover:text-foreground">
        ← Playground
      </Link>
      <h1 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Full-Stack CRUD</h1>
      <p className="mt-3 text-muted-foreground">
        A small notes app backed by a real Postgres table. Every action below hits a live API
        route.
      </p>
      <div className="mt-10">
        <CrudDemoApp />
      </div>
    </section>
  );
}
