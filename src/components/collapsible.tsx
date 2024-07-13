"use client";

import * as React from "react";
import { ChevronsUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CollapsibleItemProps {
  title: string;
  summary: string;
  description: string;
  link?: {
    url: string;
    text: string;
  };
}

interface CollapsibleDemoProps {
  items: CollapsibleItemProps[];
}

export function CollapsibleDemo({ items }: CollapsibleDemoProps) {
  const [openItems, setOpenItems] = React.useState<boolean[]>(
    new Array(items.length).fill(false)
  );

  const toggleItem = (index: number) => {
    setOpenItems((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="w-full space-y-2 ">
      {items.map((item, index) => (
        <Collapsible
          key={index}
          open={openItems[index]}
          onOpenChange={() => toggleItem(index)}
          className="space-y-2"
        >
          <div
            className={cn(
              "flex flex-col bg-zinc-50    space-x-2 px-4 pb-2 border-b border-zinc-900/20 ",
              {
                "border-none": openItems[index],
              }
            )}
          >
            <div className="flex justify-between items-center space-x-2 px-4 py-2">
              <div>
                <h4 className="text-lg font-semibold">{item.title}</h4>
              </div>
              <div>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" size="sm" className="w-9 p-0">
                    <ChevronsUpDown className="h-4 w-4" />
                    <span className="sr-only">Toggle</span>
                  </Button>
                </CollapsibleTrigger>
              </div>
            </div>
            <div className="rounded-md  px-2 text-sm">{item.summary}</div>
          </div>

          <CollapsibleContent className="space-y-2 border-b border-zinc-900/20 transition">
            <div className="rounded-md border-b px-8 py-3">
              <p className="text-sm mb-2">{item.description}</p>
              {item.link && (
                <Link
                  href={item.link.url}
                  className="text-blue-500 hover:underline text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.link.text}
                </Link>
              )}
            </div>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  );
}
