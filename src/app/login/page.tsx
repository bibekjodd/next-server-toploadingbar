import ProgressButton from '@/components/progress-button';
import React from 'react';

export default function Login() {
  return (
    <div className="flex flex-col items-center">
      <ProgressButton
        href="/"
        className="my-32 rounded-lg bg-rose-500 px-6 py-2.5 font-semibold transition-all active:scale-90"
      >
        Click to Login
      </ProgressButton>
    </div>
  );
}
