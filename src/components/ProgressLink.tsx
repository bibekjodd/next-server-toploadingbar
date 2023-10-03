"use client";
import Link, { LinkProps } from "next/link";
import React, { AnchorHTMLAttributes } from "react";

type Props = LinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: React.ReactNode;
  };

export default function ProgressLink({ children, ...props }: Props) {
  return <Link {...props}>{children}</Link>;
}
