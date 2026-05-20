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
  title: "Kairo by Anansi — Executive AI Education",
  description:
    "Hands-on AI workshops for working professionals, taught by Dr. David Noel (Anansi founder, Senior Cybersecurity Engineer at American Express, CS adjunct at Nova Southeastern). 2 days. 15 seats. Real tools in your real job.",
  openGraph: {
    title: "Kairo by Anansi — Executive AI Education",
    description:
      "Hands-on AI workshops for working professionals, taught by Dr. David Noel (Anansi founder, Senior Cybersecurity Engineer at American Express, CS adjunct at Nova Southeastern). 2 days. 15 seats. Real tools in your real job.",
    url: "https://kairo.anansi.xyz",
    siteName: "Kairo by Anansi",
    type: "website",
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
