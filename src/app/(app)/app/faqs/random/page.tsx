"use client";

import ContentBlock from "@/components/contentBlock";

import H1 from "@/components/h1";

export default function Page() {
  return (
    <main>
      <H1 className="my-4 text-white text-center sm:text-left">Random Section</H1>
      <ContentBlock className="min-h-[500px] flex flex-col p-4 gap-2  items-center">
        <div className="">To be added</div>
      </ContentBlock>
    </main>
  );
}
