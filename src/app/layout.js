import { Source_Sans_3, Inter } from "next/font/google";
import '../scss/global.scss';  
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const sourceSansPro = Source_Sans_3({
  variable: "--font-source-sans",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "SevaHR",
  description: "SevaHR - Simplifying HR Management for Small Businesses",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "manifest",
        url: "/manifest.json",
      },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "SEVA HRMS",
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sourceSansPro.variable} ${inter.variable}`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
