"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const userAuthorities = localStorage.getItem("authorities");

  useEffect(() => {
    if (!(userAuthorities?.length === 214)) {
      router.push("/admin");
    }
  }, [userAuthorities]);

  return (
    <div>
      <div>{children}</div>
    </div>
  );
}
