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
  title: {
    default: "Ayana Dinesh | Full Stack Developer & Backend Engineer | Portfolio",
    template: "%s | Ayana Dinesh",
  },
  description:
    "Professional portfolio of Ayana Dinesh, a Full Stack Developer from Irinjalakuda, Thrissur, Kerala. Specializing in Node.js, Express, React, Next.js, and scaling secure backend systems. Explore my latest projects, technical skills, and professional journey.",
  keywords: [
    "Ayana Dinesh",
    "Full Stack Developer India",
    "Backend Developer Kerala",
    "MERN Stack Developer",
    "Next.js Developer",
    "Node.js Expert",
    "TypeScript Developer",
    "React.js Developer",
    "Web Development Thrissur",
    "Software Engineer Portfolio",
    "Scalable Web Applications",
    "Irinjalakuda Developer",
    "MERN Stack",
    "Nest.js",
    "PostgreSQL",
    "MongoDB",
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
    url: "https://ayana-dinesh.com",
    title: "Ayana Dinesh | Full Stack Developer & Backend Expert",
    description:
      "Full Stack Developer specializing in MERN stack and Next.js. Building scalable, high-performance web systems from Kerala, India. Explore my professional portfolio.",
    siteName: "Ayana Dinesh Portfolio",
    images: [
      {
        url: "/ayana 1 .jpg",
        width: 1200,
        height: 630,
        alt: "Ayana Dinesh - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayana Dinesh | Full Stack Developer Portfolio",
    description:
      "Full Stack Developer specializing in scalable MERN stack applications. Check out my latest work and technical expertise.",
    creator: "@ayanadinesh",
    images: ["/ayana 1 .jpg"],
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
    google: "GJ4iOimQgdeY9HJ8RKm8C5zndRcrffCqwYSKmRjEjXM",
  },
  other: {
    "geo.region": "IN-KL",
    "geo.placename": "Thrissur, Kerala, India",
    "geo.position": "10.33, 76.21", 
    ICBM: "10.33, 76.21",
    "revisit-after": "7 days",
    language: "English",
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

        {/* Apple Touch Icon - using the professional image */}
        <link rel="apple-touch-icon" href="/ayana 1 .jpg" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Ayana Dinesh",
                url: "https://ayana-dinesh.com",
                image: "https://ayana-dinesh.com/ayana 1 .jpg",
                jobTitle: "Full Stack Developer",
                worksFor: {
                  "@type": "Organization",
                  name: "Freelance",
                },
                description:
                  "Full Stack Developer specializing in MERN stack, Next.js, and scalable backend architectures.",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Irinjalakuda, Thrissur",
                  addressRegion: "Kerala",
                  addressCountry: "IN",
                },
                sameAs: [
                  "https://github.com/codewithayana",
                  "https://www.linkedin.com/in/ayanadinesh/",
                  "https://leetcode.com/u/ayanadinesh/",
                ],
                knowsAbout: [
                  "Full Stack Development",
                  "MERN Stack",
                  "Node.js",
                  "Next.js",
                  "React.js",
                  "TypeScript",
                  "MongoDB",
                  "PostgreSQL",
                  "Backend Architecture",
                  "API Development",
                  "AWS",
                  "Docker",
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "Ayana Dinesh - Full Stack Development Services",
                description:
                  "Specialized in building robust, scalable MERN stack applications and high-performance frontend interfaces.",
                image: "https://ayana-dinesh.com/ayana 1 .jpg",
                provider: {
                  "@type": "Person",
                  name: "Ayana Dinesh",
                },
                areaServed: {
                  "@type": "Country",
                  name: "India",
                },
                serviceType: [
                  "Web Development",
                  "Full Stack Development",
                  "Backend Engineering",
                  "Software Development",
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Ayana Dinesh Portfolio",
                url: "https://ayana-dinesh.com/",
                description:
                  "Professional portfolio website covering projects, skills, and experience as a Full Stack Developer.",
                author: {
                   "@type": "Person",
                   name: "Ayana Dinesh",
                },
              },
            ]),
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
