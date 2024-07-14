"use server"

import prisma from "@/lib/db"

export async function getSubjects(branch: string, semester: number) {
  try {
    console.log(`Fetching subjects for ${branch}, semester ${semester}...`);
    const subjects = await prisma.subject.findMany({
      where: {
        branch: { name: branch },
        semester: { number: semester },
      },
      select: {
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