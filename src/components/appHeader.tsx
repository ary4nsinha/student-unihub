"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Logo from "./logo";

const routes = [
  {
    label: "Calculator",
    path: "/app/calculator/sgpa",
  },
  {
    label: "FAQs",
    path: "/app/faqs/general",
  },
  {
    label: "Account",
    path: "/app/account",
  },
];

export default function AppHeader() {
  const activePathname = usePathname();
  
  return (
    <header className="flex items-center border-white/10 justify-between py-2 border-b-2 ">
      <Logo />
      <nav>
        <ul className="flex gap-4 text-base items-center">
          {routes.map((route) => (
            <li key={route.path}>
              <Link
                className={cn(
                  "text-zinc-900/70 rounded-sm px-2 py-1 hover:text-zinc-900 focus:text-white transition",
                  {
                    "bg-black/10 text-white":
                      (route.path === activePathname) ||
                      (route.path === "/app/calculator/sgpa" && 
                       activePathname.startsWith("/app/calculator")) ||
                      (route.path === "/app/faqs/general" && 
                       activePathname.startsWith("/app/faqs")),
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
