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
  const [review1, setReview1] = useState<string>("");
  const [review2, setReview2] = useState<string>("");
  const [final, setFinal] = useState<string>("");
  const [internshipMarks, setInternshipMarks] = useState<string>("");
  const [caI, setCaI] = useState<string>("");
  const [caII, setCaII] = useState<string>("");
  const [midSem, setMidSem] = useState<string>("");
  const [endSem, setEndSem] = useState<string>("");
  const [totalMarks, setTotalMarks] = useState<number>(0);
  const [grade, setGrade] = useState<string>("");

  const isProject = subject === "Project 1";
  const isInternship = subject === "Industrial internship";

  useEffect(() => {
    const calculateTotal = () => {
      let total = 0;

      if (isProject) {
        total =
          (parseFloat(review1) || 0) +
          (parseFloat(review2) || 0) +
          (parseFloat(final) || 0);
      } else if (isInternship) {
        total = parseFloat(internshipMarks) || 0;
      } else {
        const marks = [caI, caII, midSem, endSem];
        total = marks.reduce((sum, mark) => sum + (parseFloat(mark) || 0), 0);
      }

      setTotalMarks(total);

      let newGrade;

      if (isProject) {
        newGrade = getGradeForMarks(total);
      } else if (isInternship) {
        newGrade = getGradeForTwoCredits(total);
      } else {
        // Regular subjects logic
        const endSemMarks = parseFloat(endSem) || 0;
        if (endSemMarks < 18 && creditValue > 2) {
          newGrade = "F";
        } else if (creditValue > 2) {
          const internalTotal =
            (parseFloat(caI) || 0) +
            (parseFloat(caII) || 0) +
            (parseFloat(midSem) || 0);
          if (internalTotal < 27) {
            newGrade = "F";
          } else {
            newGrade =
              creditValue === 2
                ? getGradeForTwoCredits(total)
                : getGradeForMarks(total);
          }
        } else {
          newGrade = getGradeForTwoCredits(total);
        }
      }

      if (newGrade !== grade) {
        setGrade(newGrade);
        onGradeUpdate(newGrade);
      }
    };

    calculateTotal();
  }, [
    caI,
    caII,
    midSem,
    endSem,
    review1,
    review2,
    final,
    internshipMarks,
    creditValue,
    grade,
    onGradeUpdate,
    isProject,
    isInternship,
  ]);

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>, max: number) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const validatedValue = validateInput(e.target.value, max);
      setter(validatedValue);
    };

  return (
    <section className="grid py-2 items-center grid-cols-8 gap-8 text-center border-b-2 border-zinc-900/30 rounded-md bg-zinc-200/30">
      <div className="flex items-center justify-center w-20">
        <h1 className="text-center text-xs font-semibold text-zinc-900 tracking-tighter">
          {subject}
        </h1>
      </div>
      <div>
        <h1 className="text-md text-center font-extrabold">{creditValue}</h1>
      </div>

      {isProject ? (
        // Project input fields
        <>
          <div>
            <Input
              placeholder="Review 1 (0/20)"
              type="number"
              step="0.5"
              min="0"
              max="20"
              value={review1}
              onChange={handleInputChange(setReview1, 20)}
            />
          </div>
          <div>
            <Input
              placeholder="Review 2 (0/30)"
              type="number"
              step="0.5"
              min="0"
              max="30"
              value={review2}
              onChange={handleInputChange(setReview2, 30)}
            />
          </div>
          <div>
            <Input
              placeholder="Final (0/100)"
              type="number"
              step="0.5"
              min="0"
              max="100"
              value={final}
              onChange={handleInputChange(setFinal, 100)}
            />
          </div>
          <div className="placeholder"></div>
        </>
      ) : isInternship ? (
        // Internship input field
        <>
          <div>
            <Input
              placeholder="0/100"
              type="number"
              step="0.5"
              min="0"
              max="100"
              value={internshipMarks}
              onChange={handleInputChange(setInternshipMarks, 100)}
            />
          </div>
          <div className="placeholder"></div>
          <div className="placeholder"></div>
          <div className="placeholder"></div>
        </>
      ) : creditValue === 2 ? (
        // 2-credit subject input fields
        <>
          <div>
            <Input
              placeholder="0/20"
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
              placeholder="0/20"
              type="number"
              step="0.5"
              min="0"
              max="20"
              value={caII}
              onChange={handleInputChange(setCaII, 20)}
            />
          </div>
          <div>
            <Input
              placeholder="0/60"
              type="number"
              step="0.5"
              min="0"
              max="60"
              value={midSem}
              onChange={handleInputChange(setMidSem, 60)}
            />
          </div>
          <div className="placeholder"></div>
        </>
      ) : (
        // Regular subject input fields
        <>
          <div>
            <Input
              placeholder="0/20"
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
              placeholder="0/20"
              type="number"
              step="0.5"
              min="0"
              max="20"
              value={caII}
              onChange={handleInputChange(setCaII, 20)}
            />
          </div>
          <div>
            <Input
              placeholder={creditValue === 2 ? "0/60" : "0/50"}
              type="number"
              step="0.5"
              min="0"
              max={creditValue === 2 ? 60 : 50}
              value={midSem}
              onChange={handleInputChange(
                setMidSem,
                creditValue === 2 ? 60 : 50
              )}
            />
          </div>
          {creditValue > 2 && (
            <div>
              <Input
                placeholder="0/60"
                type="number"
                step="0.5"
                min="0"
                max="60"
                value={endSem}
                onChange={handleInputChange(setEndSem, 60)}
              />
            </div>
          )}
        </>
      )}

      <div className="text-center select-none">
        <h1>
          {totalMarks} {isProject ? "/150" : "/100"}
        </h1>
      </div>
      <div
        className={`flex text-center items-center justify-center font-semibold select-none ${getGradeColor(
          grade
        )}`}
      >
        <div className="bg-white px-3 py-1 border border-zinc-900/20 rounded-md">
          <h1 className="font-extrabold">{grade}</h1>
        </div>
      </div>
    </section>
  );
}
