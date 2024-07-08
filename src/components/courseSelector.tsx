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

export function SelectCourse() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select your Course" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Course</SelectLabel>
          <SelectItem value="ai">B.Tech AI & DS</SelectItem>
          <SelectItem value="cse">B.Tech CSE</SelectItem>
          <SelectItem value="biotech">B.Tech Biotech</SelectItem>
          <SelectItem value="biomed">B.Tech Biomed</SelectItem>
          <SelectItem value="mechatronics">B.Tech Mechatronics</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
