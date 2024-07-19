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
          setSubjects(fetchedSubjects);
          setSubjectGrades(
            fetchedSubjects.map((subject) => ({
              creditValue: subject.creditValue,
              grade: "",
            }))
          );
        } catch (err) {
          setError("Failed to fetch subjects");
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

      // Log total grade points for debugging
      {/* console.log("Total Grade Points:", totalGradePoints);*/}

      const sgpa = (totalGradePoints / 210) * 10; // Adjust if needed
      setSgpa(sgpa);
    };

    calculateSGPA();
  }, [subjectGrades]);

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
        <div className="text-center font-medium text-zinc-900/90">
          <h1 className="py-2 text-base">SGPA: {sgpa.toFixed(2)}</h1>
        </div>
      )}
    </section>
  );
}
