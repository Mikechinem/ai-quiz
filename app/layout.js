import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MetaPixel from "@/components/MetaPixel";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SyncSkills",
  description: "AI Skills for Real Income",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <MetaPixel />

        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-start px-6 py-4 border-b border-gray-200 bg-[#eae9f7]/90 backdrop-blur-sm">
          <span className="text-[#ef4444] text-lg md:text-xl font-extrabold tracking-tight">
            Sync<span className="text-[#2814de]">Skills</span>
          </span>
        </nav>

        {/* Pad content below fixed navbar */}
        <div className="pt-16">
          {children}
        </div>

      </body>
    </html>
  );
}