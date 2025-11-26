import Link from 'next/link';
import { getFriends } from '@/app/api-services/friendService';

const FriendsPage = async () => {
  const friends = await getFriends();

  return (
    <div className="max-w-7xl mx-auto p-4 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-base-content">Your Friends</h1>
        <Link href="/dashboard/friends/add" className="btn btn-primary shadow-md">
          Add Friend
        </Link>
      </div>

      {/* Friends Grid */}
      {friends.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {friends.map((friend) => (
            <div key={friend.id} className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="card-body flex-row items-center space-x-4">
                <div className="avatar placeholder">
                  <div className="bg-primary text-primary-content rounded-full w-12">
                    <span className="text-xl font-semibold">{friend.name.charAt(0)}</span>
                  </div>
                </div>
                <div>
                  <h2 className="card-title text-lg">{friend.name}</h2>
                  <p className="text-base-content/70 text-sm">{friend.email}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center p-10 border-2 border-dashed border-base-300 rounded-2xl mt-10">
          <h2 className="text-2xl font-semibold mb-3 text-base-content">No Friends Yet</h2>
          <p className="text-base-content/70 mb-6">It looks a bit empty here. Let's add some friends!</p>
          <Link href="/dashboard/friends/add" className="btn btn-primary btn-wide">
            Add Your First Friend
          </Link>
        </div>
      )}
    </div>
  );
};

export default FriendsPage;
