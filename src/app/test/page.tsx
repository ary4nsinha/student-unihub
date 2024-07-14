"use client"
import React, { useState } from 'react';
import { getSubjects } from '@/actions/actions';// Adjust the import path as needed

interface Subject {
  name: string;
  creditValue: number;
}

const SubjectFetcher: React.FC = () => {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [branch, setBranch] = useState('');
  const [semester, setSemester] = useState('');

  const handleFetchSubjects = async () => {
    if (!branch || !semester) {
      setError('Please enter both branch and semester');
      return;
    }

    setIsLoading(true);
    setError(null);
    try {
      const fetchedSubjects = await getSubjects(branch, parseInt(semester, 10));
      setSubjects(fetchedSubjects);
    } catch (err) {
      console.error('Error in handleFetchSubjects:', err);
      setError('Failed to fetch subjects');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={branch}
        onChange={(e) => setBranch(e.target.value)}
        placeholder="Enter branch (e.g. BTech AIDS)"
      />
      <input
        type="number"
        value={semester}
        onChange={(e) => setSemester(e.target.value)}
        placeholder="Enter semester (1-8)"
      />
      <button onClick={handleFetchSubjects} disabled={isLoading}>
        {isLoading ? 'Fetching...' : 'Fetch Subjects'}
      </button>
      
      {error && <p>Error: {error}</p>}
      
      {subjects.length > 0 && (
        <ul>
          {subjects.map((subject, index) => (
            <li key={index}>
              {subject.name} - Credits: {subject.creditValue}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SubjectFetcher;