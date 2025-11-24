'use client'
import React, { useState } from 'react'
import { searchUsers,addFriend } from '@/app/api-services/friendService'
import Link from 'next/link'

interface User {
  id: number
  name: string
  email: string
}

const SearchFriends = () => {
  const [results, setResults] = useState<User[]>([]);

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();

    if (!value) {
      setResults([]);
      return;
    }

    const list = await searchUsers(value);
    setResults(list);
  }

  const addUser = async (userId:number) => {
    addFriend(userId);
  }

  return (
    <div>
      <div className="flex justify-between items-center mt-2 mb-3">
        <h2 className="text-xl font-semibold">Search Users</h2>

        <Link href="/dashboard/friends" className="text-base-content/70 hover:text-base-content text-lg">Back</Link>
      </div>
      <input
        placeholder="Search users..."
        className="border border-base-300 px-3 py-2 rounded w-full mb-4 placeholder:text-base-content/60"
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
              <p className="text-base-content/70">{u.email}</p>
            </div>

            <button 
              className="px-3 py-1 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600"
              onClick={() => addUser(u.id)}
            >
              Add
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SearchFriends
