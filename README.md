## React Top Loading Bar On Server Component

NextJS does not allow use of useRouter() and events on Next App Router.
We can use custom components to create our custom loadingbar on route change.

## Server Component

```ts
import ProgressLink from "@/components/ProgressLink";
import React from "react";

export default async function page() {
  await fetch("...");
  return (
    <div>
      <ProgressLink href="/profile">Go to Profile</ProgressLink>
    </div>
  );
}
```

## TopLoadingBar

```ts
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
```

## Layout

```ts
import Navbar from "@/components/Navbar";
import "./globals.css";
import TopLoadingBar from "@/components/TopLoadingBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TopLoadingBar />
        <Navbar />
        <main className="page-container">{children}</main>
      </body>
    </html>
  );
}
```

## Progress Link

```ts
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
  const end = useLoadingBar((state) => state.end);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
    }

    if (href === location.pathname + location.search) {
      end();
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
```

## Progress Button

```ts
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
```

## State Management for ProgressBar

```ts
import { create } from "zustand";

interface UseLoadingBar {
  initial: boolean;
  progress: number;

  initialLoaded: () => void;
  start: () => void;
  end: () => void;
}

const useLoadingBar = create<UseLoadingBar>((set) => ({
  progress: 0,
  initial: true,

  initialLoaded() {
    set({ initial: false });
  },
  start() {
    set({ progress: 90 });
  },
  end() {
    set({ progress: 100 });
  },
}));
export default useLoadingBar;
```
