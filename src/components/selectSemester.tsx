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

export function SelectSemester({
  onValueChange,
  value,
}: {
  onValueChange: (value: string) => void;
  value?: string;
}) {
  return (
    <Select onValueChange={onValueChange} value={value}>
      <SelectTrigger className="w-[140px]">
        <SelectValue placeholder="Select Semester" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Semester</SelectLabel>
          <SelectItem value="sem3">Semester III</SelectItem>
          <SelectItem value="sem5">Semester V</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}