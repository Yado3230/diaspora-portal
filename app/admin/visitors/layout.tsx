"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const userAuthorities: string =
    (typeof window !== "undefined"
      ? localStorage.getItem("authorities")
      : "") || "";

  useEffect(() => {
    if (!userAuthorities?.includes("READ_VISITORS")) {
      router.push("/admin");
    }
  }, [userAuthorities]);

  return (
    <div>
      <div>{children}</div>
    </div>
  );
}
