import { writeFile } from "node:fs/promises";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

const doc = await PDFDocument.create();
const page = doc.addPage([612, 792]);
const { height } = page.getSize();

const bold = await doc.embedFont(StandardFonts.HelveticaBold);
const regular = await doc.embedFont(StandardFonts.Helvetica);

let y = height - 80;

page.drawText("Jane Doe", { x: 60, y, size: 28, font: bold });
y -= 30;
page.drawText("Senior Software Engineer", { x: 60, y, size: 14, font: regular, color: rgb(0.35, 0.35, 0.35) });
y -= 50;

page.drawText("This is a placeholder resume.", { x: 60, y, size: 12, font: bold });
y -= 20;
page.drawText("Replace public/resume.pdf with your real resume before deploying.", {
  x: 60,
  y,
  size: 12,
  font: regular,
});
y -= 20;
page.drawText("Re-run `node scripts/generate-placeholder-resume.mjs` any time to regenerate this file.", {
  x: 60,
  y,
  size: 12,
  font: regular,
});

const bytes = await doc.save();
await writeFile(new URL("../public/resume.pdf", import.meta.url), bytes);

console.log("Wrote public/resume.pdf");
