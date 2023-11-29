"use client";

import { Icons } from "@/components/icons";

const Loading = () => {
  return (
    <div className="flex min-h-screen w-full text-sm items-center justify-center">
      <Icons.spinner />
    </div>
  );
};

export default Loading;
