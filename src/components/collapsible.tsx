"use client";

import * as React from "react";
import {
  ArrowDownIcon,
  CaretSortIcon,
  DoubleArrowDownIcon,
} from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Link from "next/link";
import { ArrowDownWideNarrowIcon } from "lucide-react";

interface LinkProps {
  url: string;
  text: string;
}

interface CollapsibleFaqProps {
  title: string;
  content: string;
  link?: LinkProps;
}

export function CollapsibleFaq({ title, content, link }: CollapsibleFaqProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full bg-zinc-200/40 rounded-lg space-y-2"
    >
      <div className="flex items-center justify-between py-1 rounded-lg space-x-12 px-4 border-b-2 border-zinc-900/20">
        <h4 className="text-sm font-semibold">{title}</h4>
        <CollapsibleTrigger asChild>
          <Button variant="outline" size="sm">
            <DoubleArrowDownIcon />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>

      <CollapsibleContent className="space-y-2 shadow-sm rounded-lg border-b-2 border-zinc-900/20">
        <div className="rounded-md px-4 py-2 text-sm">
          <p>{content}</p>
        </div>
        {link && (
          <div className="rounded-md px-4 py-1 text-sm">
            <Link href={link.url} className="text-blue-500 underline">
              {link.text}
            </Link>
          </div>
        )}
      </CollapsibleContent>
    </Collapsible>
  );
}
