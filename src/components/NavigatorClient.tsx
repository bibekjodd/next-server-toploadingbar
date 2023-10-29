'use client';
import ProgressButton from '@/components/ProgressButton';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
const randomQueries = ['apple', 'dog', 'node_modules', 'everest'];

export default function NavigatorClient() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState('apple');

  useEffect(() => {
    let randomIndex = Math.floor(Math.random() * randomQueries.length);
    if (query === randomQueries[randomIndex]) {
      randomIndex++;
      if (randomIndex === randomQueries.length) {
        randomIndex = 0;
      }
    }
    setQuery(randomQueries[randomIndex]);
  }, [searchParams]);

  return (
    <ProgressButton
      href={`/?search=${query}`}
      className="my-10 rounded-lg bg-rose-500 px-6 py-2.5 font-semibold transition-all active:scale-90"
    >
      Navigate to Random Page Query
    </ProgressButton>
  );
}
