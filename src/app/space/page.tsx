import ProgressButton from '@/components/progress-button';
import wait from '@/lib/wait';
import React from 'react';

export default async function Page() {
  await wait();
  return (
    <div className="flex flex-col items-center">
      <h1>Welcome to space page</h1>
    </div>
  );
}
