'use client'
import React, { useState } from 'react'
import { searchUsers } from '@/app/api-services/friendService'

interface User {
  id: number
  name: string
  email: string
}

const SearchUser = () => {
  const [results, setResults] = useState<User[]>([]);

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();

    if (!value) {
      setResults([]);   // Clear results when empty
      return;
    }

    const list = await searchUsers(value);
    setResults(list);
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2 mt-2">Search Users</h2>
      <input
        placeholder="Search users..."
        className="border px-3 py-2 rounded w-full mb-4"
        onChange={handleSearch}
      />

      <ul>
        {results.map((u) => (
          <li 
            key={u.id} 
            className="p-2 border-b flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{u.name}</p>
              <p className="text-gray-500">{u.email}</p>
            </div>

            <button 
              className="px-3 py-1 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Add
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SearchUser
