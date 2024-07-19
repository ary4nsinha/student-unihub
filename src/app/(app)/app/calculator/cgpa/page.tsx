"use client";
import { useState } from "react";
import ContentBlock from "@/components/contentBlock";
import H1 from "@/components/h1";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Page() {
  const [semesterGPAs, setSemesterGPAs] = useState<number[]>([]);
  const [currentInput, setCurrentInput] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (
      value === "" ||
      (/^\d*\.?\d{0,2}$/.test(value) && parseFloat(value) <= 10)
    ) {
      setCurrentInput(value);
    }
  };

  const handleAddSemester = () => {
    if (currentInput && semesterGPAs.length < 8) {
      setSemesterGPAs([...semesterGPAs, parseFloat(currentInput)]);
      setCurrentInput("");
    }
  };

  const handleClear = () => {
    setSemesterGPAs([]);
    setCurrentInput("");
  };

  const calculateCGPA = (gpas: number[]): number => {
    if (gpas.length === 0) return 0;
    const sum = gpas.reduce((acc, curr) => acc + curr, 0);
    return sum / gpas.length;
  };

  return (
    <main>
      {" "}
      <H1 className="my-4 text-white text-center sm:text-left">
        Cumulative GPA Calculator
      </H1>
      <ContentBlock className="min-h-[500px] flex flex-col p-4 gap-2 items-center">
        <section className="p-2 space-y-2">
          <div className="">
            <Input
              className="  text-zinc-900 py-6"
              value={currentInput}
              onChange={handleInputChange}
              placeholder="Enter GPA"
            />
          </div>
          <div className="flex gap-4 items-center justify-center">
            <Button
              className="bg-[#2C9676] w-20"
              variant="default"
              onClick={handleAddSemester}
              disabled={semesterGPAs.length === 8 || !currentInput}
            >
              Add
            </Button>
            <Button
              className="bg-red-500 w-20"
              variant="default"
              onClick={handleClear}
            >
              Clear
            </Button>
          </div>
        </section>
        <section className="text-center ">
          <h2 className="text-lg font-bold tracking-wide">Entered GPAs:</h2>
          <div className="grid grid-cols-2 gap-x-1">
            {semesterGPAs.map((gpa, index) => (
              <div
                className="text-white bg-[#2C9676] text-base py-2 px-4 rounded-lg mt-1"
                key={index}
              >
                <span className="font-bold">Semester {index + 1}:</span>{" "}
                {gpa.toFixed(2)}
              </div>
            ))}
          </div>
        </section>
        {semesterGPAs.length > 0 && (
          <div className="text-center">
            <h2 className="text-lg font-bold">
              Cumunlative Grade Point Average:
            </h2>
            <div className="space-y-1">
              {semesterGPAs.map((_, index) => {
                const cgpa = calculateCGPA(semesterGPAs.slice(0, index + 1));
                return (
                  <div
                    className="text-lg bg-zinc-900/90 text-white rounded-lg px-2 py-2"
                    key={index}
                  >
                    <span>Up to Semester {index + 1}:</span>
                    <span className="text-lg font-extrabold">
                      {" "}
                      {cgpa.toFixed(2)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </ContentBlock>
    </main>
  );
}
