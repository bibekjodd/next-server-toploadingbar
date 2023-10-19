"use client";
import useLoadingBar from "@/hooks/useLoadingBar";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import TopLoadingBar from "react-top-loading-bar";

export default function LoadingBar() {
  const progress = useLoadingBar((state) => state.progress);
  const finish = useLoadingBar((state) => state.finish);
  const initial = useLoadingBar((state) => state.initial);
  const initialLoaded = useLoadingBar((state) => state.initialLoaded);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (initial) initialLoaded();
    else finish();
  }, [pathname, searchParams]);

  return <TopLoadingBar progress={progress} waitingTime={200} />;
}
