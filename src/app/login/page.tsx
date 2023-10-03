import ProgressButton from "@/components/ProgressButton";
import React from "react";

export default function Login() {
  return (
    <div className="flex flex-col items-center">
      <ProgressButton
        href="/"
        className="my-32 bg-rose-500 px-6 py-2.5 rounded-lg font-semibold active:scale-90 transition-all"
      >
        Click to Login
      </ProgressButton>
    </div>
  );
}
