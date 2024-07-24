"use client";
import { useState, useEffect } from "react";
import { Input } from "./ui/input";
import {
  getGradeForMarks,
  getGradeForTwoCredits,
  getGradeColor,
  validateInput,
} from "@/lib/utils";

interface CalcInputProps {
  subject: string;
  creditValue: number;
  onGradeUpdate: (grade: string) => void;
}

export default function CalcInput({
  subject,
  creditValue,
  onGradeUpdate,
}: CalcInputProps) {
  const [caI, setCaI] = useState<string>("");
  const [caII, setCaII] = useState<string>("");
  const [midSem, setMidSem] = useState<string>("");
  const [endSem, setEndSem] = useState<string>("");
  const [totalMarks, setTotalMarks] = useState<number>(0);
  const [grade, setGrade] = useState<string>("");

  useEffect(() => {
    const calculateTotal = () => {
      const marks = [caI, caII, midSem, endSem];
      const total = marks.reduce(
        (sum, mark) => sum + (parseFloat(mark) || 0),
        0
      );
      setTotalMarks(total);

      let newGrade;
      if (creditValue === 2) {
        newGrade = getGradeForTwoCredits(total);
      } else {
        newGrade = getGradeForMarks(total);
      }

      if (newGrade !== grade) {
        setGrade(newGrade);
        onGradeUpdate(newGrade);
      }
    };

    calculateTotal();
  }, [caI, caII, midSem, endSem, creditValue, grade, onGradeUpdate]);

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>, max: number) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const validatedValue = validateInput(e.target.value, max);
      setter(validatedValue);
    };

  return (
    <section className="grid py-2 items-center grid-cols-8 gap-8 text-center border-b-2 border-zinc-900/30 rounded-md bg-zinc-200/30">
      <div className="flex items-center justify-center w-20 ">
        <h1 className="text-center text-xs font-semibold text-zinc-900 tracking-tighter">
          {subject}
        </h1>
      </div>
      <div>
        <h1 className="text-md text-center font-extrabold">{creditValue}</h1>
      </div>

      <div>
        <Input
          placeholder="0.0"
          type="number"
          step="0.5"
          min="0"
          max="20"
          value={caI}
          onChange={handleInputChange(setCaI, 20)}
        />
      </div>

      <div>
        <Input
          placeholder="0.0"
          type="number"
          step="0.5"
          min="0"
          max="20"
          value={caII}
          onChange={handleInputChange(setCaII, 20)}
        />
      </div>

      {creditValue > 2 && (
        <div>
          <Input
            placeholder="0.0"
            type="number"
            step="0.5"
            min="0"
            max="50"
            value={midSem}
            onChange={handleInputChange(setMidSem, 50)}
          />
        </div>
      )}
      {creditValue === 2 && (
        <div>
          <Input
            placeholder="0.0"
            type="number"
            step="0.5"
            min="0"
            max="60"
            value={midSem}
            onChange={handleInputChange(setMidSem, 60)}
          />
        </div>
      )}
      {creditValue > 2 && (
        <div>
          <Input
            placeholder="0.0"
            type="number"
            step="0.5"
            min="0"
            max="60"
            value={endSem}
            onChange={handleInputChange(setEndSem, 60)}
          />
        </div>
      )}
      {creditValue === 2 && <div className="placeholder endsem"></div>}
      <div className=" text-center">
        <h1>
          {totalMarks} {creditValue === 2 ? "/100" : "/150"}
        </h1>
      </div>
      <div
        className={`flex text-center  items-center justify-center font-semibold ${getGradeColor(
          grade
        )}`}
      >
        <div className="bg-white px-3 py-1 border border-zinc-900/20 rounded-md">
          <h1 className=" font-extrabold ">{grade}</h1>
        </div>
      </div>
    </section>
  );
}
