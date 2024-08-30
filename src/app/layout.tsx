import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "../styles/index.scss";

const isDev = process.env.NODE_ENV === "development";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});
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
      <body className={roboto.className} suppressHydrationWarning={false}>
        {children}
      </body>
    </html>
  );
}
