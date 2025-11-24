import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
  totalExpense: number;
}

const users: User[] = [
  { id: 1, name: "Alice", email: "alice@example.com", totalExpense: 120.5 },
  { id: 2, name: "Bob", email: "bob@example.com", totalExpense: 250.0 },
  { id: 3, name: "Charlie", email: "charlie@example.com", totalExpense: 75.75 },
];

const Expenses: React.FC = () => {

  return (
  <div className="min-h-screen bg-base-200 p-4 space-y-6">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold mb-4">Expenses History</h1>
        {users.map((user) => (
          <div key={user.id} className="bg-base-100 p-4 rounded-2xl shadow-md flex justify-between items-center border-l-4 border-blue-500">
            <div>
              <h2 className="text-lg font-semibold">{user.name}</h2>
              <p className="text-base-content/70 text-sm">{user.email}</p>
            </div>
            <div className="text-right">
              <p className="text-blue-500 font-bold text-lg">${user.totalExpense.toFixed(2)}</p>
              <p className="text-base-content/60 text-xs">Owe</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expenses;
