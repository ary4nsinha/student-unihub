import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const getGradeForTwoCredits = (total: number): string => {
  if (total <= 100) {
    switch (true) {
      case total >= 90:
        return "A+";
      case total >= 80:
        return "A";
      case total >= 70:
        return "B+";
      case total >= 60:
        return "B";
      case total >= 50:
        return "C+";
      case total >= 40:
        return "D";
      case total >= 30:
        return "E";
      default:
        return "F";
    }
  }
  return "Invalid marks";
};

export const getGradeForMarks = (total: number): string => {
  if (total <= 150) {
    switch (true) {
      case total >= 135:
        return "A+";
      case total >= 120:
        return "A";
      case total >= 105:
        return "B+";
      case total >= 90:
        return "B";
      case total >= 75:
        return "C+";
      case total >= 60:
        return "D";
      case total >= 45:
        return "E";
      default:
        return "F";
    }
  }
  return "Invalid marks";
};

export const getGradeColor = (grade: string) => {
  switch (grade) {
    case "A+":
      return "text-green-600"
    case "A":
      return "text-green-500";
    case "B+":
      return " text-green-400"
    case "B":
      return "text-yellow-500";
    case "C+":
      return "text-yellow-400";
    case "D":
      return "text-orange-600";
    case "E":
    case "F":
      return "text-red-600";
    default:
      return "text-gray-600";
  }
};

export const validateInput = (value: string, max: number): string => {
  let numValue = parseFloat(value);
  if (isNaN(numValue)) return "";
  if (numValue > max) return max.toString();
  if (numValue % 0.5 !== 0) return Math.floor(numValue * 2) / 2 + "";
  return numValue.toString();
};

export const gradePointMapping: { [key: string]: number } = {
  'A+': 10,
  'A': 9,
  'B+': 8,
  'B': 7,
  'C+': 6,
  'C': 5,
  'D': 4,
  'F': 0, // Assuming 'F' or other unlisted grades should be 0
};
