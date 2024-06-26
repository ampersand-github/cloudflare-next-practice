import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";
import "./globals.css";
import { cn } from "@/lib/shadcn/utils";
import { Header } from "./(root)/_components/header";

export const runtime = "edge";

const inter = Inter({ subsets: ["latin"] });

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
			<body className={cn(inter.className)}>
				<Header />
				<main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-100">
					{children}
				</main>
			</body>
		</html>
	);
}
