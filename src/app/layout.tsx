import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import TanStackProvider from "@/components/providers/TanStackProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "RediStash Application",
	description: "Enjoy seamless chat application",
	icons: { icon: "/redis-logo.svg" },
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
					<TanStackProvider>{children}</TanStackProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
