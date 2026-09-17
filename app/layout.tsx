/**
 * Root Layout Component
 *
 * This is the root layout file for the Next.js App Router. It wraps all pages
 * and defines global configurations including:
 * - SEO metadata (title, description, Open Graph, Twitter Cards)
 * - Google Fonts optimization using next/font
 * - Global styles via globals.css
 * - Common layout structure (Header, Footer)
 */

import type { Metadata } from "next";
import "./globals.css";

// Google Fonts Configuration
// next/font automatically optimizes fonts by self-hosting them, reducing layout shift
// and improving performance. Fonts are converted to CSS variables for easy use.
import { Cormorant_Upright, Open_Sans } from "next/font/google";

// components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Primary font: Cormorant Upright (elegant serif for headings)
// Used for titles and headings throughout the site
const cormorant_upright = Cormorant_Upright({
  subsets: ["latin"], // Only load Latin character subset for performance
  weight: ["300", "400", "500", "600", "700"], // Available font weights
  variable: "--font-cormorant_upright", // CSS variable name for Tailwind
});

// Secondary font: Open Sans (clean sans-serif for body text)
// Used for body text, descriptions, and UI elements
const open_sans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"], // Extended weight range
  variable: "--font-open_sans", // CSS variable name for Tailwind
});

/**
 * SEO Metadata Configuration
 *
 * Comprehensive metadata setup for search engine optimization (SEO) and
 * social media sharing. This includes:
 * - Page titles with template support for dynamic pages
 * - Meta descriptions for search results
 * - Open Graph tags for Facebook/LinkedIn sharing
 * - Twitter Card tags for Twitter sharing
 * - Keywords for SEO
 * - Author information
 * - Robots directives for search engine crawling
 */
export const metadata: Metadata = {
  // Title configuration with template support
  // Template allows child pages to set their own title with site name appended
  title: {
    default: "Cafe Retroo | Saibaba Colony, Coimbatore",
    template: "%s | Cafe Retroo", // %s will be replaced with page-specific title
  },
  description:
    "Cafe Retroo is a popular café in Saibaba Colony, Coimbatore, Tamil Nadu, rated 4.8/5 on Google with 989+ reviews. Located on Raja Annamalai Road, we serve great food and drinks including Shrimp Dynamite, Peri Peri Wings, Chicken Wrap, Pizza, and more. ₹200–₹400 per person.",
  keywords: [
    "Cafe Retroo",
    "cafe in Coimbatore",
    "cafe Coimbatore",
    "Saibaba Colony cafe",
    "Raja Annamalai Road cafe",
    "Tamil Nadu cafe",
    "Shrimp Dynamite Coimbatore",
    "Peri Peri Wings Coimbatore",
    "Chicken Wrap Coimbatore",
    "best cafe Coimbatore",
    "cafe near me Coimbatore",
    "food and drinks Coimbatore",
    "cafe retroo menu",
  ],
  authors: [
    {
      name: "Cafe Retroo",
    },
  ],
  creator: "Cafe Retroo",
  publisher: "Cafe Retroo",
  metadataBase: new URL("https://caferetro.in"),
  alternates: {
    canonical: "/",
  },
  // Open Graph metadata for social media sharing (Facebook, LinkedIn, etc.)
  // These tags control how the site appears when shared on social platforms
  openGraph: {
    type: "website",
    locale: "en_IN", // Language and region
    url: "https://caferetro.in",
    siteName: "Cafe Retroo",
    title: "Cafe Retroo | Saibaba Colony, Coimbatore",
    description:
      "Cafe Retroo is a popular café in Saibaba Colony, Coimbatore, Tamil Nadu, rated 4.8/5 on Google. Located on Raja Annamalai Road, we serve great food and drinks in a warm, welcoming atmosphere.",
    images: [
      {
        url: "/assets/logo.svg",
        width: 1200,
        height: 630,
        alt: "Cafe Retroo Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cafe Retroo | Saibaba Colony, Coimbatore",
    description:
      "Cafe Retroo is a popular café in Saibaba Colony, Coimbatore, Tamil Nadu, rated 4.8/5 on Google. Located on Raja Annamalai Road, we serve great food and drinks in a warm, welcoming atmosphere.",
    images: ["/assets/logo.svg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: [{ url: "/favicon.ico", sizes: "180x180", type: "image/x-icon" }],
  },
  // Robots meta tags - Controls search engine crawling and indexing
  robots: {
    index: true, // Allow search engines to index this page
    follow: true, // Allow search engines to follow links on this page
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1, // Unlimited video preview length
      "max-image-preview": "large", // Large image previews in search results
      "max-snippet": -1, // Unlimited text snippet length
    },
  },
  verification: {
    // Add your verification codes here if needed
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  category: "Food & Beverage",
  applicationName: "Cafe Retroo",
  // Contact for site/author (SEO and discovery)
  other: {
    contact: "090809 90620",
  },
};

/**
 * RootLayout Component
 *
 * The root layout component that wraps all pages in the application.
 * This component:
 * - Provides the HTML structure (<html>, <body>)
 * - Applies font CSS variables to the body element for global font usage
 * - Renders the Header and Footer components that appear on every page
 * - Renders page-specific content via the {children} prop
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; // Page content from individual route files
}>) {
  return (
    <html lang="en">
      {/* Font variables are applied to body so they're available throughout the app */}
      <body className={`${cormorant_upright.variable} ${open_sans.variable}`}>
        <Header />
        {/* {children} renders the page component (e.g., page.tsx content) */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
