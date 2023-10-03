"use client";
import useLoadingBar from "@/hooks/useLoadingBar";
import { useRouter } from "next/navigation";
import React, { ButtonHTMLAttributes } from "react";

type Props = { href: string } & ButtonHTMLAttributes<HTMLButtonElement>;

export default function ProgressButton({
  children,
  onClick,
  href,
  ...props
}: Props) {
  const start = useLoadingBar((state) => state.start);
  const end = useLoadingBar((state) => state.end);
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    }

    if (location.pathname + location.search === href) {
      end();
    } else {
      router.push(href);
      start();
    }
  };

  return (
    <button onClick={handleClick} {...props}>
      {children}
    </button>
  );
}
