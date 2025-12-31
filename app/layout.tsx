import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/shared/navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: "ForgeLines | Global Manufacturing Representatives",
  description: "Authorized Regional Sales Representatives for Asia & Middle East. Connecting global manufacturers with buyers.",
};

import content from "@/lib/content.json";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased bg-background text-foreground min-h-screen flex flex-col overflow-x-hidden`}>
        <Navbar />
        <main className="flex-grow pt-16 md:pt-20">
          {children}
        </main>
        <footer className="py-8 bg-slate-50 border-t border-slate-200 text-center text-sm text-slate-500">
          <div className="container mx-auto px-4">
            <p>&copy; {new Date().getFullYear()} {content.layout.footer.rights}</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
