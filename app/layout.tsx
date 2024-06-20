import type { Metadata } from "next";
import "./globals.css";
import {firaCode, inter} from '@/components/ui/fonts'
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { BackgroundBeams } from "@/components/ui/background-beams";

export const metadata: Metadata = {
  title: "chinxeleer.io",
  description: "chinxeleer personal portfolio and blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<html lang="en" className="scroll-pt-[3.5rem]">
			<head>
				<link rel="icon" href="favicon.ico" />
			</head>
			<body className={`${firaCode.className} flex flex-col bg-slate-950 md:px-0 xl:px-20 items-center pt-20  min-w-screen min-h-screen`}>
				<Nav />
				<main className="xl:mt-6 sm:mt-2 min-w-full flex-1 flex flex-col items-center pt-4 pb-20">
          <BackgroundBeams/>
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
