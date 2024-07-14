"use client"
import { useState } from "react";
import ContentBlock from "@/components/contentBlock";
import { SelectCourse } from "@/components/courseSelector";
import H1 from "@/components/h1";
import { SelectSemester } from "@/components/semesterSelector";
import SubjectList from "@/components/subjectList";

export default function Page() {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [selectedSemester, setSelectedSemester] = useState<number | null>(null);

  return (
    <main>
      <H1 className="my-8 text-white">Calculator</H1>
      <ContentBlock className="min-h-[500px] flex flex-col p-4 gap-3 items-center">
        <section className="space-y-2 items-center justify-center px-2">
          <div className="flex space-x-2">
            <SelectCourse onValueChange={(value) => setSelectedCourse(value)} />
            <SelectSemester
              onValueChange={(value) =>
                setSelectedSemester(Number(value.replace("sem", "")))
              }
            />
          </div>
        </section>
        <section className="overflow-x-scroll w-full">
          <div className="min-w-[800px]">
            <SubjectList course={selectedCourse} semester={selectedSemester} />
          </div>
        </section>
      </ContentBlock>
    </main>
  );
}
