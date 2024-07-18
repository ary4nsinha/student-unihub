
import ContentBlock from "@/components/contentBlock";
import { FaqTabs } from "@/components/faqTabs";
import H1 from "@/components/h1";
import { faqItems } from "@/lib/constants";
import React from "react";

export default function Page() {
  return (
    <main>
      <H1 className="my-8 text-white">FAQs</H1>

      <ContentBlock className="h-[500px] flex flex-col p-4 gap-3 ">
        <FaqTabs/>
      </ContentBlock>
    </main>
  );
}
