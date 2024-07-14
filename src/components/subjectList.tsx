'use client'

import React, { useEffect, useState } from "react";
import CalcInput from "./calcInput";
import CalcHeader from "./calcHeader";
import { getSubjects } from "@/actions/actions"; // Adjust the import path as needed

interface Subject {
  name: string;
  creditValue: number;
}

interface SubjectListProps {
  course: string | null;
  semester: number | null;
}

export default function SubjectList({ course, semester }: SubjectListProps) {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSubjects() {
      if (course && semester) {
        setLoading(true);
        setError(null);
        try {
          const fetchedSubjects = await getSubjects(course, semester);
          setSubjects(fetchedSubjects);
        } catch (err) {
          setError('Failed to fetch subjects');
          console.error(err);
        } finally {
          setLoading(false);
        }
      }
    }

    fetchSubjects();
  }, [course, semester]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!course || !semester) return <div className="text-center font-medium p-2">Please select a course and semester</div>;

  return (
    <section className="p-4 space-y-1">
      <CalcHeader />
      {subjects.map((subject, index) => (
        <CalcInput
          key={index}
          subject={subject.name}
          creditValue={subject.creditValue}
        />
      ))}
    </section>
  );
}