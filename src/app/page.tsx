import wait from '@/lib/wait';
import React from 'react';
import ProgressButton from '@/components/progress-button';
import NavigatorClient from '../components/navigator-client';

export default async function Space() {
  await wait(1000);
  return (
    <div className="flex flex-col items-center">
      <p className="text-lg font-bold">TopLoadingBar on Server Component</p>
      <NavigatorClient />
      <ProgressButton
        href="/"
        className=" rounded-lg bg-rose-500 px-6 py-2.5 font-semibold transition-all active:scale-90"
      >
        Clear Queries
      </ProgressButton>
    </div>
  );
}
