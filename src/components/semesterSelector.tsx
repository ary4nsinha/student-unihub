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

export function SelectSemester({ onValueChange }: { onValueChange: (value: string) => void }) {
  return (
    <Select onValueChange={onValueChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Semester" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Semester</SelectLabel>
          <SelectItem value="sem1">Semester I</SelectItem>
          <SelectItem value="sem2">Semester II</SelectItem>
          <SelectItem value="sem3">Semester III</SelectItem>
          <SelectItem value="sem4">Semester IV</SelectItem>
          <SelectItem value="sem5">Semester V</SelectItem>
          <SelectItem value="sem6">Semester VI</SelectItem>
          <SelectItem value="sem7">Semester VII</SelectItem>
          <SelectItem value="sem8">Semester VIII</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}