import React from "react";
import Link from 'next/link';

interface Expense {
  id: number;
  name: string;
  amount: number;
  date: string;
  status: 'settled' | 'you owe' | 'you are owed';
}

const expenses: Expense[] = [
  { id: 1, name: "Groceries", amount: 120.5, date: "2024-07-20", status: 'you owe' },
  { id: 2, name: "Concert Tickets", amount: 250.0, date: "2024-07-18", status: 'you are owed' },
  { id: 3, name: "Dinner at Luigi's", amount: 75.75, date: "2024-07-15", status: 'settled' },
  { id: 4, name: "Movie Night", amount: 45.0, date: "2024-07-12", status: 'you owe' },
];

const Expenses: React.FC = () => {
  const getStatusClass = (status: Expense['status']) => {
    switch (status) {
      case 'you owe':
        return 'text-error';
      case 'you are owed':
        return 'text-success';
      default:
        return 'text-base-content/60';
    }
  };

  return (
    <div className="bg-base-200 p-4 space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-base-content">Expenses</h1>
        <Link href="/dashboard/expenses/add" className="btn btn-primary shadow-md">
          Add Expense
        </Link>
      </div>

      <div className="form-control mb-6">
        <input type="text" placeholder="Search expenses..." className="input input-bordered w-full" />
      </div>

      {expenses.length > 0 ? (
        <div className="space-y-4">
          {expenses.map((expense) => (
            <div
              key={expense.id}
              className="bg-base-100 p-4 rounded-2xl shadow-md flex justify-between items-center border-l-4 border-secondary transition-transform transform hover:scale-105"
            >
              <div>
                <h2 className="text-lg font-semibold text-base-content">{expense.name}</h2>
                <p className="text-base-content/60 text-sm">{expense.date}</p>
              </div>
              <div className="text-right">
                <p className={`font-bold text-xl ${getStatusClass(expense.status)}`}>
                  ${expense.amount.toFixed(2)}
                </p>
                <p className={`text-sm font-medium capitalize ${getStatusClass(expense.status)}`}>
                  {expense.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center p-8 bg-base-100 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold text-base-content">No Expenses Yet!</h2>
          <p className="text-base-content/70 mt-2">Once you add an expense, it will show up here.</p>
        </div>
      )}
    </div>
  );
};

export default Expenses;
