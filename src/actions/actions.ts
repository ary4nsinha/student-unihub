"use server"

import prisma from "@/lib/db"

export async function getSubjects(branchName: string, semesterNumber: number) {
  try {
    console.log(`Fetching subjects for ${branchName}, semester ${semesterNumber}...`);
    
    const subjects = await prisma.subject.findMany({
      where: {
        branch: { name: branchName },
        semester: semesterNumber,
      },
      select: {
        id: true,
        name: true,
        creditValue: true,
      },
    });

    console.log('Fetched subjects:', subjects);
    return subjects;
  } catch (error) {
    console.error('Error fetching subjects:', error);
    throw error;
  }
}