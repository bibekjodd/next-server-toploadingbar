"use client";
import ProgressButton from "@/components/ProgressButton";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
const randomQueries = ["apple", "dog", "node_modules", "everest"];

export default function NavigatorClient() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("apple");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * randomQueries.length);
    if (query !== randomQueries[randomIndex]) {
      setQuery(randomQueries[randomIndex]);
      return;
    }

    if (randomIndex === 0 || randomIndex === randomQueries.length - 1) {
      setQuery("air");
    }
  }, [searchParams]);

  return (
    <ProgressButton
      href={`/?search=${query}`}
      className="my-10 bg-rose-500 px-6 py-2.5 rounded-lg font-semibold active:scale-90 transition-all"
    >
      Navigate to Random Page Query
    </ProgressButton>
  );
}
