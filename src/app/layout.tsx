import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/next";
import FluidCursor from "@/components/ui/FluidCursor";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ayana-dinesh.com"),
  title: "Ayana Dinesh - Full Stack Developer | Backend Expert",
  description:
    "Portfolio of Ayana Dinesh, a Full Stack Developer from Irinjalakuda, Thrissur, India. Expert in Node.js, Express, React, Next.js, and scaling secure backend systems.",
  keywords: [
    "Ayana Dinesh",
    "Full Stack Developer",
    "Full Stack Development",
    "MERN Stack",
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "Web Development",
    "Thrissur",
    "Kerala",
    "Software Engineer",
  ],
  authors: [{ name: "Ayana Dinesh", url: "https://github.com/codewithayana" }],
  creator: "Ayana Dinesh",
  publisher: "Ayana Dinesh",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ayana-dinesh.com", // Recommendation: update this to your actual domain
    title: "Ayana Dinesh - Full Stack Developer Portfolio",
    description:
      "Explore the projects and skills of Ayana Dinesh. Specializing in scalable backend systems and modern frontend interfaces.",
    siteName: "Ayana Dinesh Portfolio",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Ayana Dinesh Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayana Dinesh - Full Stack Developer",
    description:
      "Explore the projects and skills of Ayana Dinesh. Specializing in scalable backend systems and modern frontend interfaces.",
    creator: "@ayanadinesh",
    images: ["/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Note: You might want to update this too
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://skillicons.dev" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ayana Dinesh",
              url: "https://ayana-dinesh.com",
              jobTitle: "Full Stack Developer",
              description:
                "Full Stack Developer specializing in Node.js, Express, and scalable backend architectures.",
              image: "https://ayana-dinesh.com/profile-image.jpg",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Irinjalakuda, Thrissur",
                addressRegion: "Kerala",
                addressCountry: "India",
              },
              knowsAbout: [
                "Full Stack Development",
                "Node.js",
                "Next.js",
                "React",
                "Nest.js",
                "Prisma",
                "TypeScript",
                "PostgreSQL",
                "MongoDB",
                "Redis",
                "Tailwind CSS",
                "Render",
                "Railway",
                "Swagger",
                "PowerShell",
                "Docker",
              ],
              sameAs: [
                "https://github.com/codewithayana",
                "https://www.linkedin.com/in/ayanadinesh/",
                "https://leetcode.com/u/ayanadinesh/",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${outfit.className} antialiased`}
        suppressHydrationWarning
      >
        <Providers>{children}</Providers>
        <FluidCursor />
        <Analytics />
      </body>
    </html>
  );
}
