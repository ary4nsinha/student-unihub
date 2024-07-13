import React from "react";
import CalcInput from "./calcInput";
import CalcHeader from "./calcHeader";
import { subjects } from "@/lib/constants";

export default function SubjectList() {


  return (
    <section className="p-4 space-y-1">
      <CalcHeader />
      
       {subjects.map((subject, index) => (
        <CalcInput
          key={index}
          subject={subject.subject}
          creditValue={subject.creditValue}
        />
      ))}
    </section>
  );
}
