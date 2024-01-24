import { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";

import "../globals.css";

//SEO optimization
export const metadata : Metadata = {
	title: "Thread Clone By Joseph Muvevi",
	description: "A thread clone built with Next.js and Prisma by Joseph Muvevi the web developer",
};

//fonts
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className={`${inter.className} bg-dark-1`}>
					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}
