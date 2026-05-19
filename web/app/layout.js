import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
    "A 2-day hands-on workshop for working professionals. Open your laptop, learn from a builder, leave with working AI in your real job by Monday morning.",
  openGraph: {
    title: "Kairo by Anansi — Executive AI Education",
    description:
      "A 2-day hands-on workshop for working professionals. Open your laptop, learn from a builder, leave with working AI in your real job by Monday morning.",
    url: "https://kairo.anansi.xyz",
    siteName: "Kairo by Anansi",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${body.variable} bg-anansi-cream text-anansi-espresso font-body min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
