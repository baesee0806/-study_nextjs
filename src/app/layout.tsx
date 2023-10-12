import type { Metadata } from "next";
import Header from "../components/Header";
import "./global.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "900",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wani_Blog",
  description: "개인 블로그 입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={roboto.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
