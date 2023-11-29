import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";

import Sidebar from "@/app/admin/components/Sidebar";
import Navbar from "@/app/admin/components/Navbar";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Diaspora Admin",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}
    >
      <div>
        <Navbar />
        <Sidebar />
        <div className="m-8 md:ml-72 mt-16 pt-4">{children}</div>
      </div>
    </div>
  );
}