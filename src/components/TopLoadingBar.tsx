"use client";
import useLoadingBar from "@/hooks/useLoadingBar";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import LoadingBar from "react-top-loading-bar";

export default function TopLoadingBar() {
  const progress = useLoadingBar((state) => state.progress);
  const end = useLoadingBar((state) => state.end);
  const initial = useLoadingBar((state) => state.initial);
  const initialLoaded = useLoadingBar((state) => state.initialLoaded);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (initial) initialLoaded();
    else end();
  }, [pathname, searchParams]);

  return <LoadingBar progress={progress} waitingTime={200} />;
}
