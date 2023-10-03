import ProgressButton from "@/components/ProgressButton";
import wait from "@/lib/wait";
import React from "react";

export default async function Page() {
  await wait();
  return (
    <div className="flex items-center flex-col">
      <h1>Welcome to space page</h1>
    </div>
  );
}
