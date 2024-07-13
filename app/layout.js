import Logo from "@/app/_compopents/Logo";
import Navigation from "./_compopents/Navigation";

import { Josefin_Sans } from "next/font/google";

import "@/app/_styles/globals.css";
import Header from "./_compopents/Header";
import { ReservationProvider } from "./_compopents/ReservationContext";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  // title: "The Wild Oasis",
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome/The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the of Italian Dolomites, surrounded by beautiful mountains and dark forests",
  twitter: {
    card: "summary_large_image",
  },
  opeGraph: {
    title: "The Wild Oasis",
    description:
      "Luxurious cabin hotel, located in the of Italian Dolomites, surrounded by beautiful mountains and dark forests",
    type: "website",
    local: "ar_SA",
    url: "https://the-wild-oasis-nextjs-umber.vercel.app",
    siteName: "The Wild Oasis",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}>
        <Header />

        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
