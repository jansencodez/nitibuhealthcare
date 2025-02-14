import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { VectorPattern } from "@/components/vector-patterns/ProductsAndServices";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import ChatInterface from "@/components/chatbot/ChatInterface";

export const metadata: Metadata = {
  title: "Nitibu Healthcare",
  description:
    "Nitibu Healthcare is a leading provider of pharmaceuticals, medical supplies, and health promotion services in the region.",
};

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={"antialiased bg-teal-100"}>
        <Sidebar />
        <main className="flex-1 lg:ml-[266px] relative lg:mr-[10px] ">
          <VectorPattern
            type="diagonal"
            opacity={0.4}
            className="[background-size:40px_40px] inset-1"
          />
          {children}
          <ChatInterface />
          <Footer />
        </main>
      </body>
    </html>
  );
}

const ThemedLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <ThemeProvider>
      <RootLayout>{children}</RootLayout>
    </ThemeProvider>
  );
};

export default ThemedLayout;
