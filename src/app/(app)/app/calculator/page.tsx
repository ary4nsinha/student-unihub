"use client";
import { useState } from "react";
import ContentBlock from "@/components/contentBlock";
import { SelectCourse } from "@/components/selectCourse";
import H1 from "@/components/h1";
import { SelectSemester } from "@/components/selectSemester";
import SubjectList from "@/components/subjectList";
import CalcHeader from "@/components/calcHeader";

export default function Page() {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [selectedSemester, setSelectedSemester] = useState<number | null>(null);

  return (
    <main>
      <H1 className="my-8 text-white">Semester GPA Calculator</H1>
      <ContentBlock className="min-h-[500px] flex flex-col p-4 gap-2  items-center">
        <section className="space-y-2 items-center justify-center px-2">
          <div className="flex gap-4">
            <SelectCourse onValueChange={(value) => setSelectedCourse(value)} />
            <SelectSemester
              onValueChange={(value) =>
                setSelectedSemester(Number(value.replace("sem", "")))
              }
            />
          </div>
        </section>
        <section className=" overflow-x-scroll sm:overflow-x-scroll md:overflow-x-scroll lg:overflow-x-hidden w-full">
          <div className="overflow-x-scroll sm:overflow-x-scroll md:overflow-x-scroll lg:overflow-x-hidden min-w-[800px]">
            <CalcHeader />
          </div>
          <SubjectList course={selectedCourse} semester={selectedSemester} />
        </section>
      </ContentBlock>
    </main>
  );
}
