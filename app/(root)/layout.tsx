import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import TopBar from "@/components/shared/Topbar";
import LeftBar from "@/components/shared/Leftbar";
import RightBar from "@/components/shared/Rightbar";
import BottomBar from "@/components/shared/Bottombar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Thread Clone By Joseph Muvevi",
	description: "A thread clone built with Next.js and Prisma by Joseph Muvevi the web developer",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className={inter.className}>
					<TopBar />

					<main className="flex flex-row">
						<LeftBar />
						<section className="main-container">
							<div className="w-full max-w-4xl">{children}</div>
						</section>
						<RightBar />
					</main>
					<BottomBar />
				</body>
			</html>
		</ClerkProvider>
	);
}
