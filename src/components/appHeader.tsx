"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Logo from "./logo";
import { SignedIn, SignOutButton, UserButton } from "@clerk/nextjs";

const routes = [
  {
    label: "Calculator",
    path: "/app/calculator",
  },
  {
    label: "FAQs",
    path: "/app/faqs",
  },
  {
    label: "Account",
    path: "/app/account",
  },
];
export default function AppHeader() {
  const activePathname = usePathname();
  return (
    <header className="flex items-center border-b border-white/10 justify-between py-2">
      <Logo />
      <nav>
        <ul className="flex gap-4 text-md items-center">
          {routes.map((route) => (
            <li key={route.path}>
              <Link
                className={cn(
                  "text-zinc-900/70  rounded-sm px-2 py-1 hover:text-zinc-900 focus:text-white transition",
                  {
                    "bg-black/10 text-white": route.path === activePathname,
                  }
                )}
                href={route.path}
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
