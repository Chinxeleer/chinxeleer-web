import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col bg-slate-100 md:px-0 xl:px-20 justify-center items-center min-w-screen min-h-screen">
        <Nav />
        <main className="min-h-max xl:mt-6 sm:mt-2 min-w-full flex flex-col items-center pt-20 pb-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
