"use server";
import React from "react";

interface Summary {
  netBalance: number;
  overallStatus: string;
}

interface User {
  userId: number;
  userName: string;
  userEmail: string;
  balance: number;
  status: string;
}

const summary: Summary = {
  netBalance: -35,
  overallStatus: "you owe more than you lent",
};

const users: User[] = [
  {
    userId: 5,
    userName: "John Doe",
    userEmail: "john@example.com",
    balance: 50,
    status: "you owe",
  },
  {
    userId: 7,
    userName: "Rai Ahmad",
    userEmail: "rai@example.com",
    balance: -85,
    status: "you are owed",
  },
];

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-base-200 p-4 space-y-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* Summary Section */}
      <div className="bg-base-100 p-5 rounded-2xl shadow-lg flex justify-between items-center border-l-4 border-primary">
        <div>
          <h1 className="text-xl font-bold text-base-content mb-1">Summary</h1>
          <p className="text-base-content/80 text-sm">{summary.overallStatus}</p>
        </div>

        <div className="text-right">
          <p className="text-sm text-base-content/60">Net Balance</p>
          <p
            className={`text-lg font-semibold ${
              summary.netBalance < 0 ? "text-error" : "text-success"
            }`}
          >
            ${summary.netBalance}
          </p>
        </div>
      </div>

      {/* Users List */}
      <div className="space-y-4">
  <h1 className="text-2xl font-bold mb-4">Users</h1>

        {users.map((user) => {
          const amountColor = user.balance < 0 ? "text-green-600" : "text-red-500";

          return (
            <div
              key={user.userId}
              className="bg-base-100 p-4 rounded-2xl shadow-md flex justify-between items-center border-l-4 border-primary"
            >
              <div>
                <h2 className="text-lg font-semibold">{user.userName}</h2>
                <p className="text-base-content/60 text-sm">{user.userEmail}</p>
              </div>

              <div className="text-right">
                <p className={`font-bold text-lg ${amountColor}`}>
                  ${Math.abs(user.balance)}
                </p>
                <p className="text-base-content/60 text-xs">{user.status}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
