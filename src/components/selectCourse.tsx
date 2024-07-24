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
  value,
}: {
  onValueChange: (value: string) => void;
  value?: string;
}) {
  return (
    <Select onValueChange={onValueChange} value={value}>
      <SelectTrigger className="w-[160px]">
        <SelectValue placeholder="Select your Course" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Branch</SelectLabel>
          <SelectItem value="B.Tech AIDS">B.Tech AI & DS</SelectItem>
          <SelectItem value="B.Tech CSE">B.Tech CSE</SelectItem>
          <SelectItem value="B.Tech CSE-SE">B.Tech CSE-SE</SelectItem>
          <SelectItem value="B.Tech CSE-CS">B.Tech CSE-CS</SelectItem>
          <SelectItem value="B.Tech Biomedical">B.Tech Biomed</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}