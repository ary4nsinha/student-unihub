import { NextResponse } from 'next/server';
import { getSubjects } from '@/actions/actions';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const branch = searchParams.get('branch');
  const semester = searchParams.get('semester');

  if (!branch || !semester) {
    return NextResponse.json({ error: 'Missing branch or semester' }, { status: 400 });
  }

  try {
    const subjects = await getSubjects(branch, parseInt(semester, 10));
    return NextResponse.json(subjects);
  } catch (error) {
    console.error('Error fetching subjects:', error);
    return NextResponse.json({ error: 'Failed to fetch subjects' }, { status: 500 });
  }
}