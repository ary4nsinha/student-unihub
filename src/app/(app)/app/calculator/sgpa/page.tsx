"use client";
import { useState, useEffect } from "react";
import ContentBlock from "@/components/contentBlock";
import { SelectCourse } from "@/components/selectCourse";
import H1 from "@/components/h1";
import { SelectSemester } from "@/components/selectSemester";
import SubjectList from "@/components/subjectList";
import CalcHeader from "@/components/calcHeader";

export default function Page() {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [selectedSemester, setSelectedSemester] = useState<number | null>(null);

  // Reset both selections when either changes
  useEffect(() => {
    setSelectedCourse(null);
    setSelectedSemester(null);
  }, []);

  const handleCourseChange = (value: string | null) => {
    setSelectedCourse(value);
    setSelectedSemester(null); // Reset semester when course changes
  };

  const handleSemesterChange = (value: string) => {
    const semesterNumber = value ? Number(value.replace("sem", "")) : null;
    setSelectedSemester(semesterNumber);
    if (!selectedCourse) {
      setSelectedCourse(null); // Reset course if it's not selected
    }
  };

  return (
    <main>
      <H1 className="my-4 text-white text-center sm:text-left">
        Semester GPA Calculator
      </H1>
      <ContentBlock className="min-h-[500px] flex flex-col p-4 gap-2 items-center">
        <section className="space-y-2 items-center justify-center px-2">
          <div className="flex gap-4">
            <SelectCourse
              onValueChange={handleCourseChange}
              value={selectedCourse || undefined}
            />
            <SelectSemester
              onValueChange={handleSemesterChange}
              value={selectedSemester ? `sem${selectedSemester}` : undefined}
              selectedCourse={selectedCourse}
            />
          </div>
        </section>
        <section className="overflow-x-scroll sm:overflow-x-scroll md:overflow-x-hidden lg:overflow-x-hidden w-full">
          <div className="min-w-[800px]">
            <CalcHeader />
          </div>
          <SubjectList course={selectedCourse} semester={selectedSemester} />
        </section>
      </ContentBlock>
    </main>
  );
}
