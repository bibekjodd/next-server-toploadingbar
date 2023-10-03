"use client";
import useLoadingBar from "@/hooks/useLoadingBar";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import LoadingBar from "react-top-loading-bar";

export default function TopLoadingBar() {
  const [progress, end] = useLoadingBar((state) => [state.progress, state.end]);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    end();
  }, [pathname, searchParams, end]);

  return <LoadingBar progress={progress} waitingTime={200} />;
}
