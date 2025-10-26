import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "RealSolveAI | AI Business Automation in Miami, Florida",
  description:
    "RealSolveAI helps businesses in Miami and across the U.S. automate communication, leads, and customer service through AI integration and automation.",
  keywords: [
    "AI automation Miami",
    "AI receptionist USA",
    "AI chatbot integration Florida",
    "AI for any size of businesses",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans bg-[#0B0C10] text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
