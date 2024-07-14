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