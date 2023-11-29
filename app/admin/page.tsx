"use client";

import { useEffect, useState } from "react";
import Overview from "./components/Overview";

export default function Admin() {
  const [mounted, setMounted] = useState(true);

  if (!mounted) {
    return null;
  }
  useEffect(() => {
    setMounted(true);
  });
  return (
    <main className="p-2">
      <Overview />
    </main>
  );
}
