import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://curiousgradient.github.io";

export const metadata: Metadata = {
  title: "Rohit Ramaprasad - Machine Learning Engineer",
  description:
    "Machine learning engineer at Adobe Document Cloud. Research in computer vision (CVPRW, ECCVW). GenAI, RAG, and citation systems. Portfolio, projects, and technical deep dives.",
  keywords: ["machine learning engineer", "machine learning", "computer vision", "GenAI", "portfolio", "Adobe"],
  authors: [{ name: "Rohit Ramaprasad", url: "https://github.com/curiousgradient" }],
  creator: "Rohit Ramaprasad",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Rohit Ramaprasad - Machine Learning Engineer",
    description:
      "Machine learning engineer at Adobe Document Cloud. Research in computer vision, GenAI, and citation systems. Portfolio and technical deep dives.",
    siteName: "Rohit Ramaprasad",
    locale: "en_US",
    images: [{ url: `${siteUrl}/images/profile.png`, width: 512, height: 512, alt: "Rohit Ramaprasad" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohit Ramaprasad - Machine Learning Engineer",
    description:
      "Machine learning engineer at Adobe Document Cloud. Research in computer vision, GenAI, and citation systems.",
    // creator: "@yourtwitter", // Add if you have one
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className="antialiased flex flex-col min-h-screen">
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
            <GoogleAnalytics />
          </>
        )}
        <Navigation />
        <main className="flex-grow main-transition">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
