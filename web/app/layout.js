import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const body = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
});

export const metadata = {
  title: "Kairo — Hands-on AI workshops for working professionals",
  description:
    "A 2-day hands-on AI workshop taught by Dr. David Noel (Anansi founder, Senior Cybersecurity Engineer at American Express, CS adjunct at Nova Southeastern). Open your laptop, learn from a builder, leave with working tools in your real job.",
  metadataBase: new URL("https://kairo.anansi.xyz"),
  icons: {
    icon: [
      { url: "/favicon/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon/favicon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon/favicon-512.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon/favicon-180.png",
  },
  openGraph: {
    title: "Kairo — Hands-on AI workshops for working professionals",
    description: "2 days. 15 seats. Real AI tools working in your real job by Monday. Taught by Dr. David Noel.",
    url: "https://kairo.anansi.xyz",
    siteName: "Kairo by Anansi",
    images: [{ url: "/social/social-card-dark.png", width: 1200, height: 630, alt: "Kairo by Anansi" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kairo — Hands-on AI workshops for working professionals",
    description: "2 days. 15 seats. Real AI tools working in your real job by Monday.",
    images: ["/social/social-card-dark.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${body.variable} bg-kairo-cream text-kairo-black font-body min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
