import wait from "@/lib/wait";
import React from "react";
import ProgressButton from "@/components/ProgressButton";
import NavigatorClient from "./space/NavigatorClient";

export default async function Space() {
  await wait(1000);
  return (
    <div className="flex items-center flex-col">
      <p className="text-lg font-bold">TopLoadingBar on Server Component</p>
      <NavigatorClient />
      <ProgressButton
        href="/"
        className=" bg-rose-500 px-6 py-2.5 rounded-lg font-semibold active:scale-90 transition-all"
      >
        Clear Queries
      </ProgressButton>
    </div>
  );
}
