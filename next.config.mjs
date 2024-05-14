/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "pics.freeicons.io",
				port: "",
			},

			{
				protocol: "https",
				hostname: "**.hearstapps.com",
				port: "",
			},

			{
				protocol: "https",
				hostname: "www.topgear.com",
				port: "",
			},
			{
				protocol: "https",
				hostname: "pics.freeicons.io",
				pathname: "**",
			},
			{
				protocol: "https",
				hostname: "i.pinimg.com",
				pathname: "**",
			},
			{
				protocol: "https",
				hostname: "t4.ftcdn.net",
				pathname: "**",
			},
			{
				protocol: "https",
				hostname: "onlinedoctor.lloydspharmacy.com",
				pathname: "**",
			},
			{
				protocol: "https",
				hostname: "www.northjersey.com",
				pathname: "**",
			},
			{
				protocol: "https",
				hostname: "www.shutterstock.com",
				pathname: "**",
			},
			{
				protocol: "https",
				hostname: "www.dentalhairclinicturkey.com",
				pathname: "**",
			},
		],
	},
};

export default nextConfig;
