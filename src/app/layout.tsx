import type { Metadata } from "next";
import "./global.css";
import { Roboto } from "next/font/google";
import Nav from "@/components/Nav";

const roboto = Roboto({
  weight: "900",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
  parallel,
}: {
  children: React.ReactNode;
  parallel: React.ReactNode;
}) {
  return (
    <html className={roboto.className}>
      <body>
        <Nav />
        <main>
          {children}
          {parallel}
        </main>
      </body>
    </html>
  );
}
