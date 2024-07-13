import ContentBlock from "@/components/contentBlock";
import { SelectCourse } from "@/components/courseSelector";
import H1 from "@/components/h1";
import { SelectSemester } from "@/components/semesterSelector";
import SubjectList from "@/components/subjectList";
import React from "react";

export default function Page() {
  return (
    <main>
      <H1 className="my-8 text-white">Calculator</H1>

      <ContentBlock className=" min-h-[500px] flex flex-col p-4 gap-3  items-center ">
        <section className=" space-y-2 items-center justify-center px-2">
          <div className="flex space-x-2">
            <SelectCourse />
            <SelectSemester />
          </div>
        </section>
        <section className="overflow-x-scroll w-full">
          <div className="min-w-[800px]"> {/* Adjust min-width based on your needs */}
            <SubjectList />
          </div>
        </section>
      </ContentBlock>
    </main>
  );
}
