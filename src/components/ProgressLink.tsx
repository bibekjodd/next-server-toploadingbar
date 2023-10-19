"use client";
import useLoadingBar from "@/hooks/useLoadingBar";
import Link, { LinkProps } from "next/link";
import React, { AnchorHTMLAttributes } from "react";

type Props = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>;

export default function ProgressLink({
  children,
  href,
  onClick,
  ...props
}: Props) {
  const start = useLoadingBar((state) => state.start);
  const finish = useLoadingBar((state) => state.finish);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
    }

    if (href === location.pathname + location.search) {
      finish();
    } else {
      start();
    }
  };

  return (
    <Link {...props} href={href} onClick={handleClick}>
      {children}
    </Link>
  );
}
