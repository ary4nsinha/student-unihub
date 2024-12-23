import { CalendarIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";
import { PenToolIcon } from "lucide-react";

export function CreatorCard() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button className="text-base" variant="link">
          @website-created-by
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 ">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="/me.jpg" />
            <AvatarFallback>AS</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@aryansinha</h4>
            <p className="text-sm">just a chill guy</p>
            <div className="flex items-center pt-2">
              <GitHubLogoIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground text-blue-500">
                <Link href="https://github.com/ary4nsinha">
                  checkout my github
                </Link>
              </span>
            </div>
            <div className="flex items-center pt-2 gap-2">
              <PenToolIcon width={20} height={20} />
              <span className="text-xs text-muted-foreground text-blue-500 hover:underline">
                <Link href="https://aryansinha.dev">my website</Link>
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
