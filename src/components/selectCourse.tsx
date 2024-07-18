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

export function SelectCourse({
  onValueChange,
}: {
  onValueChange: (value: string) => void;
}) {
  return (
    <Select onValueChange={onValueChange}>
      <SelectTrigger className="w-[160px]">
        <SelectValue placeholder="Select your Course" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Branch</SelectLabel>
          <SelectItem value="B.Tech AIDS">B.Tech AI & DS</SelectItem>
          <SelectItem value="B.Tech CSE">B.Tech CSE</SelectItem>
          <SelectItem value="B.Tech Mechatronics">
            B.Tech Mechatronics
          </SelectItem>
          <SelectItem value="B.Tech Biomed">B.Tech Biomed</SelectItem>
          <SelectItem value="B.Tech Biotech">B.Tech Biotech</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
