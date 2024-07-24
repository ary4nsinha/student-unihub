"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

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
    <header className="flex bg-[#2C9676] text-lg justify-center px-1 items-center border-b-2 border-white/10 py-3 ">
      <nav>
        <ul className="flex gap-4  items-center">
          {routes.map((route) => (
            <li key={route.path}>
              <Link
                className={cn(
                  "text-zinc-900/70 rounded-sm px-2 py-1 hover:text-zinc-900 focus:text-white transition",
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
