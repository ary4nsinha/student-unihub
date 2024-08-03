import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Define the mapping of courses to semesters
const courseSemesters: { [key: string]: string[] } = {
  "B.Tech AIDS": ["sem3", "sem5"],
  "B.Tech CSE": ["sem3"],
  "B.Tech CSE-SE": ["sem5"],
  "B.Tech CSE-CS": [ "sem5"],
  "B.Tech Biomedical": ["sem3", "sem5"],
};

export function SelectSemester({
  onValueChange,
  value,
  selectedCourse,
}: {
  onValueChange: (value: string) => void;
  value?: string;
  selectedCourse: string | null;
}) {
  const availableSemesters = selectedCourse ? courseSemesters[selectedCourse] : [];

  return (
    <Select onValueChange={onValueChange} value={value}>
      <SelectTrigger className="w-[140px]">
        <SelectValue placeholder="Select Semester" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Semester</SelectLabel>
          {availableSemesters.map((sem) => (
            <SelectItem key={sem} value={sem}>
              Semester {sem.replace("sem", "")}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}