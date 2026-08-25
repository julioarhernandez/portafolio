import fs from "node:fs";
import path from "node:path";

import { imageSize } from "image-size";
import Image from "next/image";

export function MDXImage({ src, alt }: { src?: string; alt?: string }) {
  if (!src) return null;

  const filePath = path.join(process.cwd(), "public", src);
  const { width, height } = imageSize(fs.readFileSync(filePath));

  return (
    <Image
      src={src}
      alt={alt ?? ""}
      width={width}
      height={height}
      sizes="(max-width: 768px) 100vw, 768px"
      className="h-auto w-full rounded-lg border border-border"
    />
  );
}
