"use client";
import { Inter as FontSans } from "next/font/google";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const userAuthorities = localStorage.getItem("authorities");

  useEffect(() => {
    if (!userAuthorities?.includes("READ_ACCOUNT")) {
      // Redirect to login page if not authenticated
      router.push("/admin");
    }
  }, [userAuthorities]);

  return (
    <div>
      <div>{children}</div>
    </div>
  );
}
