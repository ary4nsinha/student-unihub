"use client";

import { CollapsibleFaq } from "@/components/collapsible";
import ContentBlock from "@/components/contentBlock";

import H1 from "@/components/h1";
import { AcademicFaqItems } from "@/lib/constants";

export default function Page() {
  return (
    <main>
      <H1 className="my-4 text-white text-center sm:text-left">
        Academic Section
      </H1>
      <ContentBlock className="min-h-[500px] flex flex-col p-4 gap-2  items-center">
        <div className="space-y-2 w-full">
          {AcademicFaqItems.map((item, index) => (
            <CollapsibleFaq
              key={index}
              title={item.title}
              content={item.content}
              link={item.link}
            />
          ))}
        </div>
      </ContentBlock>
    </main>
  );
}
