import { Source_Sans_3, Inter } from "next/font/google";
import '../scss/global.scss';
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import StyledComponentsRegistry from "@/lib/registry";

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

// export const metadata = {
//   title: "SevaHR - Modern HRMS Platform for Indian Businesses",
//   description: "Simplify HR, Attendance, Payroll & Compliance with SevaHR. A powerful, user-friendly HRMS built for shift-based operations across all industries in India.",
//   keywords: ["HRMS", "HR software", "payroll", "attendance management", "compliance", "Indian HR", "employee management"],
//   authors: [{ name: "SevaHR" }],
//   icons: {
//     icon: [
//       { url: "/favicon.svg", type: "image/svg+xml" },
//       { url: "/favicon.svg", sizes: "any" },
//     ],
//     shortcut: "/favicon.svg",
//     apple: "/favicon.svg",
//   },
//   openGraph: {
//     title: "SevaHR - Modern HRMS Platform for Indian Businesses",
//     description: "Simplify HR, Attendance, Payroll & Compliance with SevaHR. Built for shift-based operations across all industries.",
//     type: "website",
//     locale: "en_IN",
//     siteName: "SevaHR",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "SevaHR - Modern HRMS Platform",
//     description: "Simplify HR, Attendance, Payroll & Compliance with SevaHR.",
//   },
// };


export const metadata = {
  title: "SevaHR - Modern HRMS Platform for Indian Businesses",
  description:
    "Simplify HR, Attendance, Payroll & Compliance with SevaHR. A powerful, user-friendly HRMS built for shift-based operations across all industries in India.",
  robots: {
    index: false,
    follow: false,
  },

  keywords: [
    "HRMS",
    "HR software",
    "payroll",
    "attendance management",
    "compliance",
    "Indian HR",
    "employee management",
  ],
  authors: [{ name: "SevaHR" }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", sizes: "any" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "SevaHR - Modern HRMS Platform for Indian Businesses",
    description: "Simplify HR, Attendance, Payroll & Compliance with SevaHR. Built for shift-based operations across all industries.",
    type: "website",
    locale: "en_IN",
    siteName: "SevaHR",
  },
  twitter: {
    card: "summary_large_image",
    title: "SevaHR - Modern HRMS Platform",
    description:
      "Simplify HR, Attendance, Payroll & Compliance with SevaHR.",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sourceSansPro.variable} ${inter.variable}`}>
        <StyledComponentsRegistry>
          <Header />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
