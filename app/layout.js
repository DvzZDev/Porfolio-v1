import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "David Esteban",
  description: "David Esteban Portfolio",
  og: {
    title: "David Esteban",
    image: "https://i.imgur.com/ril8Lee.png",
    url: "https://portfolio-dvz-z-node-js.vercel.app/",
    description: "David Esteban Portfolio",
    site_name: "https://portfolio-dvz-z-node-js.vercel.app/",
    locale: "es_ES",
    updated_time: new Date().toISOString(),
  },
};

export default function RootLayout({ children }) {
  return (
    (
      <head>
        <link rel="png" href="/buscar.png" sizes="any" />
      </head>
    ),
    (
      <html className="scroll-smooth" lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    )
  );
}
