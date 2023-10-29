import ProgressButton from "@/components/ProgressButton";
import React from "react";

export default function Profile() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-semibold">Hey There Welcome</h1>

      <ProgressButton
        href="/login"
        className="my-32 rounded-lg bg-rose-500 px-6 py-2.5 font-semibold transition-all active:scale-90"
      >
        Logout
      </ProgressButton>
    </div>
  );
}
