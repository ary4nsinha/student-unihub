import React, { useEffect, useState } from "react";
import CalcInput from "./calcInput";
import { gradePointMapping } from "@/lib/utils";

interface Subject {
  name: string;
  creditValue: number;
}

interface SubjectGrade {
  creditValue: number;
  grade: string;
}

export default function SubjectList({
  course,
  semester,
}: {
  course: string | null;
  semester: number | null;
}) {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [subjectGrades, setSubjectGrades] = useState<SubjectGrade[]>([]);
  const [sgpa, setSgpa] = useState<number | null>(null);

  useEffect(() => {
    async function fetchSubjects() {
      if (course && semester) {
        setError(null);
        try {
          const response = await fetch(
            `/api/subjects?branch=${encodeURIComponent(
              course
            )}&semester=${semester}`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch subjects");
          }
          const fetchedSubjects: Subject[] = await response.json();

          console.log("Fetched subjects:", fetchedSubjects);

          if (!Array.isArray(fetchedSubjects) || fetchedSubjects.length === 0) {
            throw new Error("Invalid or empty subjects data");
          }

          // Sort the subjects by credit value in descending order
          const sortedSubjects = [...fetchedSubjects].sort(
            (a, b) => b.creditValue - a.creditValue
          );

          console.log("Sorted subjects:", sortedSubjects);

          setSubjects(sortedSubjects);
          setSubjectGrades(
            sortedSubjects.map((subject) => ({
              creditValue: subject.creditValue,
              grade: "",
            }))
          );
        } catch (err) {
          setError("Failed to fetch or process subjects");
          console.error(err);
        }
      }
    }

    fetchSubjects();
  }, [course, semester]);

  useEffect(() => {
    const calculateSGPA = () => {
      const totalGradePoints = subjectGrades.reduce(
        (total, { creditValue, grade }) => {
          const gradePoints = gradePointMapping[grade] || 0;
          return total + creditValue * gradePoints;
        },
        0
      );

      // Determine the divisor based on course and semester
      let divisor = 210; // Default divisor
      if (course === "B.Tech Biomed" && semester === 5) {
        divisor = 200;
      }
      if (course === "B.Tech CSE" && semester === 3) {
        divisor = 230;
      }
      if (course === "B.Tech AIDS" && semester === 3) {
        divisor = 230;
      }

      const sgpa = (totalGradePoints / divisor) * 10;
      setSgpa(sgpa);
    };

    calculateSGPA();
  }, [subjectGrades, course, semester]);

  const handleGradeUpdate = (index: number, grade: string) => {
    const updatedGrades = [...subjectGrades];
    updatedGrades[index] = { ...updatedGrades[index], grade };
    setSubjectGrades(updatedGrades);
  };

  if (error)
    return (
      <div className="text-center font-medium text-zinc-900/90">
        Error: {error}
      </div>
    );
  if (!course || !semester)
    return (
      <div className="text-center font-medium text-zinc-900/90">
        <h1 className="py-2 text-base">Please select a course and semester</h1>
      </div>
    );

  return (
    <section className="py-2 space-y-1 min-w-[800px]">
      {subjects.map((subject, index) => (
        <CalcInput
          key={index}
          subject={subject.name}
          creditValue={subject.creditValue}
          onGradeUpdate={(grade) => handleGradeUpdate(index, grade)}
        />
      ))}
      {sgpa !== null && (
        <div className="text-left sm:text-center font-medium text-zinc-900/90">
          <h1 className="py-2 text-base font-bold">SGPA: {sgpa.toFixed(2)}</h1>
          <p className="text-xs text-red-500">
            Disclaimer! The actual gpa might vary by 0.2 if there&apos;s a
            change in credit allocation
          </p>
        </div>
      )}
    </section>
  );
}
