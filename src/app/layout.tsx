import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GradeCalc",
  description: "Makes your uni life easier",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.className} text-sm text-zinc-900 bg-[#E5E8EC] min-h-screen  `}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
