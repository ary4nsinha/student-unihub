"use client";
import { useState, useEffect } from "react";
import { Input } from "./ui/input";
import {
  getGradeForMarks,
  getGradeForTwoCredits,
  getGradeColor,
} from "@/lib/utils";

interface CalcInputProps {
  subject: string;
  creditValue: number;
}

export default function CalcInput({ subject, creditValue }: CalcInputProps) {
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

      if (creditValue === 2) {
        setGrade(getGradeForTwoCredits(total));
      } else {
        setGrade(getGradeForMarks(total));
      }
    };

    calculateTotal();
  }, [caI, caII, midSem, endSem, creditValue]);

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value);
    };

  return (
    <section className="grid py-2 items-center grid-cols-8 gap-8 text-center border-b-2 border-zinc-200/20 rounded-md bg-zinc-400/20">
      <div className="">
        <h1 className="text-center text-xs font-medium text-zinc-900 uppercase tracking-tight">
          {subject}
        </h1>
      </div>
      <div className="">
        <h1 className="text-md text-center">{creditValue}</h1>
      </div>
      {creditValue > 0 && (
        <div className="">
          <Input
            className=" "
            placeholder="0.0"
            type="number"
            value={caI}
            onChange={handleInputChange(setCaI)}
          />
        </div>
      )}
      {creditValue > 0 && (
        <div className="">
          <Input
            className=""
            placeholder="0.0"
            type="number"
            value={caII}
            onChange={handleInputChange(setCaII)}
          />
        </div>
      )}
      {creditValue > 1 && (
        <div className="">
          <Input
            className=""
            placeholder="0.0"
            type="number"
            value={midSem}
            onChange={handleInputChange(setMidSem)}
          />
        </div>
      )}
      {creditValue > 2 && (
        <div className="">
          <Input
            className=""
            placeholder="0.0"
            type="number"
            value={endSem}
            onChange={handleInputChange(setEndSem)}
          />
        </div>
      )}
      {creditValue === 2 && <div className=""></div>}
      <div className=" text-center">
        <h1>{totalMarks} {creditValue === 2 ? "/100" : "/150"}</h1>
      </div>
      <div className={`text-center font-semibold ${getGradeColor(grade)}`}>
        <h1>{grade}</h1>
      </div>
    </section>
  );
}
