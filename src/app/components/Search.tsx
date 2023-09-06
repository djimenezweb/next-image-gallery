'use client';

import { useRouter } from 'next/navigation';
import { useState, FormEvent } from 'react';

export default function Search() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/results/${search}`);
    setSearch('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center md:justify-between">
      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search..."
        className="bg-white p-2 w-[260px] sm:w-80 text-xl rounded-xl text-black"
      />
    </form>
  );
}
