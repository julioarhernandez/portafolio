import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ThemeBuilderProvider } from "@/components/layout/theme-builder-provider";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { MotionConfigProvider } from "@/components/motion/motion-config-provider";
import { Toaster } from "@/components/ui/sonner";
import { siteConfig } from "@/lib/site-config";

import "./globals.css";

const sourceSans = Source_Sans_3({ variable: "--font-source-sans", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${siteConfig.name} — ${siteConfig.title}`, template: `%s — ${siteConfig.name}` },
  description: siteConfig.tagline,
  openGraph: { title: `${siteConfig.name} — ${siteConfig.title}`, description: siteConfig.tagline, url: siteUrl, siteName: siteConfig.name, type: "website" },
  twitter: { card: "summary", title: `${siteConfig.name} — ${siteConfig.title}`, description: siteConfig.tagline },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning className={`${sourceSans.variable} ${playfair.variable} h-full antialiased`}>
    <body className="flex min-h-full flex-col">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <ThemeBuilderProvider>
          <MotionConfigProvider>
            <a
              href="#main-content"
              className="bg-background text-foreground focus-visible:ring-ring sr-only z-[60] rounded-md px-4 py-2 focus-visible:not-sr-only focus-visible:fixed focus-visible:top-4 focus-visible:left-4 focus-visible:ring-2 focus-visible:outline-none"
            >
              Skip to content
            </a>
            <Navbar /><main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">{children}</main><Footer /><Toaster />
          </MotionConfigProvider>
        </ThemeBuilderProvider>
      </ThemeProvider>
    </body>
  </html>;
}
