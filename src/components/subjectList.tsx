"use client";
import React, { useEffect, useState } from "react";
import CalcInput from "./calcInput";

interface Subject {
  name: string;
  creditValue: number;
}

interface SubjectGrade {
  creditValue: number;
  grade: string;
}

interface SubjectListProps {
  course: string | null;
  semester: number | null;
}

export default function SubjectList({ course, semester }: SubjectListProps) {
  const [subjects, setSubjects] = useState<Subject[]>([]);

  const [error, setError] = useState<string | null>(null);
  const [subjectGrades, setSubjectGrades] = useState<SubjectGrade[]>([]);

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
        } finally {
        }
      }
    }

    fetchSubjects();
  }, [course, semester]);

  const handleGradeUpdate = (index: number, grade: string) => {
    const updatedGrades = [...subjectGrades];
    updatedGrades[index] = { ...updatedGrades[index], grade };
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
    <section className=" py-2 space-y-1 min-w-[800px]">
      {subjects.map((subject, index) => (
        <CalcInput
          key={index}
          subject={subject.name}
          creditValue={subject.creditValue}
          onGradeUpdate={(grade) => handleGradeUpdate(index, grade)}
        />
      ))}
    </section> 
  );
}
