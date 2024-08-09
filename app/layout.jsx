import dynamic from "next/dynamic";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
	title: "Fabian | Personal Website",
	description:
		"My name is Fabian, I'm a IT Student and I'm passionate about Tech World. I'm currently studying at Universitas Negeri Malang.",
	author: "Avan Fabian Daniswara",
	siteUrl: "https://www.fabiandaniswara.my.id",
	applicationName: "Fabian | Personal Website",
	keywords: [
		"avanfabian",
		"avan fabian",
		"avanfabian.my.id",
		"avan fabian daniswara",
		"avan fabian website",
		"avan fabian portofolio",
		"avan fabian daniswara website",
		"avan fabian daniswara portofolio",
		"avan fabian daniswara personal website",
		"avan fabian daniswara personal portofolio",
		"avan fabian um",
		"avan fabian universitas negeri malang",
		"avan fabian malang",
		"avan fabian it um",
	],
	openGraph: {
		type: "website",
		url: "https://www.fabiandaniswara.my.id",
		title: "Fabian | Personal Website",
		description: "My name is Fabian, I'm a IT Student and I'm passionate about Tech World. I'm currently studying at Universitas Negeri Malang.",
		width: 1200,
		height: 630,
		images: [
			{
				url: "/og-image-rev.png",
				alt: "AvanFabian",
			},
		],
		site_name: "Fabian | Personal Website",
	},
};


import Chat from "@/components/Chat";

const TopProgressBar = dynamic(() => import("@/components/TopProgressbar"), {
	ssr: false,
});



export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<TopProgressBar />
				<Navbar />
				{children}
				<Chat />
				<Analytics />
			</body>
		</html>
	);
}
