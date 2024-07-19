"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Logo from "./logo";

const routes = [
  {
    label: "General",
    path: "/app/faqs/general",
  },

  {
    label: "Academics",
    path: "/app/faqs/academics",
  },
  {
    label: "Random",
    path: "/app/faqs/random",
  },
];
export default function FaqNav() {
  const activePathname = usePathname();
  return (
    <header className="flex bg-zinc-200/40 justify-center rounded-lg px-1 items-center border-b border-white/10 py-3 ">
      <nav>
        <ul className="flex gap-4 text-lg items-center">
          {routes.map((route) => (
            <li key={route.path}>
              <Link
                className={cn(
                  "text-zinc-900/70  rounded-lg px-2 py-3 hover:text-zinc-900 focus:text-white transition",
                  {
                    "bg-[#2C9676]/80 text-white": route.path === activePathname,
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
