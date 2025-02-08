import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { VectorPattern } from "@/components/vector-patterns/ProductsAndServices";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Nitibu Healthcare",
  description:
    "Nitibu Healthcare is a leading provider of pharmaceuticals, medical supplies, and health promotion services in the region.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={"antialiased"}>
        <Sidebar />
        <main className="flex-1 lg:ml-64 bg-opacity-40 relative">
          <VectorPattern
            type="diagonal"
            opacity={0.4}
            className="[background-size:40px_40px]"
          />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
