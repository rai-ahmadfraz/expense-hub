import Link from 'next/link';
import React from 'react';

async function getFriends() {
  return [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' },
  ];
}

const Friends = async () => {
  const friends = await getFriends();

  return (
    <div className="p-4">
      {/* Header with title and Add Friend button */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Friends List</h1>
        <Link href="/dashboard/friends/add"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Add Friend
        </Link>
      </div>

      {/* Friends list */}
      <ul className="space-y-2">
        {friends.map(friend => (
          <li key={friend.id} className="p-2 border rounded shadow-sm">
            <p className="font-semibold">{friend.name}</p>
            <p className="text-base-00">{friend.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Friends;
