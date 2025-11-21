import Link from 'next/link';
import { getFriends } from '@/app/api-services/friendService';

interface Friend {
  id: number;
  name: string;
  email: string;  
}

const Friends = async () => {
  const friends: Friend[] = await getFriends();

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Friends List</h1>
        <Link
          href="/dashboard/friends/add"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Add Friend
        </Link>
      </div>

      {/* Empty State */}
      {friends.length === 0 && (
        <p className="text-gray-500 text-center py-4">No friends found.</p>
      )}

      {/* Friends List */}
      {friends.length > 0 && (
        <ul className="space-y-2">
          {friends.map(friend => (
            <li key={friend.id} className="p-2 border rounded shadow-sm">
              <p className="font-semibold">{friend.name}</p>
              <p className="text-gray-500">{friend.email}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Friends;
