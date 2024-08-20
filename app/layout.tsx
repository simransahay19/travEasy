import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

export const metadata: Metadata = {
  title: "Travel",
  description: "Travel App for Camping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ClerkProvider>
        <html lang="en">
          <body>
            <Navbar />
            <main className="relative overflow-hidden">
              {children}
            </main>
            <Footer />
          </body>
        </html>
        </ClerkProvider>
      

  );
}
