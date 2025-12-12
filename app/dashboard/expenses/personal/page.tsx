import React from "react";
import { getPersonalExpenseHistory } from "@/app/api-services/expenseService";
import Link from "next/link";

interface PersonalExpense {
  id: number;
  name: string;
  totalAmount: string;
  is_personal: boolean;
  type: 'in' | 'out';
  createdAt: string;
  updatedAt: string;
}

const Expenses: React.FC = async () => {
  const expenseHistory = await getPersonalExpenseHistory();
  
  // Handle different possible response structures
  let expenses: PersonalExpense[] = [];
  
  if (Array.isArray(expenseHistory)) {
    expenses = expenseHistory;
  } else if (expenseHistory && Array.isArray(expenseHistory.expenses)) {
    expenses = expenseHistory.expenses;
  } else if (expenseHistory) {
    // If it's an object that might contain the array directly
    expenses = Object.values(expenseHistory).find(Array.isArray) || [];
  }

  // Calculate total summary
  const totalExpenses = expenses.reduce((sum, expense) => {
    const amount = parseFloat(expense.totalAmount);
    return expense.type === 'out' ? sum + amount : sum - amount;
  }, 0);

  const totalIncome = expenses
    .filter(expense => expense.type === 'in')
    .reduce((sum, expense) => sum + parseFloat(expense.totalAmount), 0);

  const totalSpending = expenses
    .filter(expense => expense.type === 'out')
    .reduce((sum, expense) => sum + parseFloat(expense.totalAmount), 0);

  return (
    <div className="min-h-screen bg-base-200 p-4 sm:p-6 space-y-4 sm:space-y-6 mb-20">
        <div className="flex justify-between items-center px-2 sm:px-0">
            <h1 className="text-xl sm:text-2xl font-bold">
            Expenses History
            </h1>
            <Link 
            href="/dashboard/expenses" 
            className="btn btn-outline btn-sm sm:btn-md text-primary hover:text-white hover:bg-primary border-primary"
            >
            Back
            </Link>
        </div>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-base-100 rounded-xl p-4 shadow-sm border border-base-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-base-content/70">Total Balance</p>
              <p className={`text-2xl font-bold ${totalExpenses >= 0 ? 'text-success' : 'text-error'}`}>
                ${totalExpenses.toFixed(2)}
              </p>
            </div>
            <div className="text-2xl">💰</div>
          </div>
        </div>
        
        <div className="bg-base-100 rounded-xl p-4 shadow-sm border border-base-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-base-content/70">Total Income</p>
              <p className="text-2xl font-bold text-success">
                ${totalIncome.toFixed(2)}
              </p>
            </div>
            <div className="text-2xl">📈</div>
          </div>
        </div>
        
        <div className="bg-base-100 rounded-xl p-4 shadow-sm border border-base-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-base-content/70">Total Spending</p>
              <p className="text-2xl font-bold text-error">
                ${totalSpending.toFixed(2)}
              </p>
            </div>
            <div className="text-2xl">📉</div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <span className="text-sm text-base-content/70">
          Showing {expenses.length} transaction{expenses.length !== 1 ? 's' : ''}
        </span>
      </div>

      {expenses.length > 0 ? (
        <div className="space-y-4 sm:space-y-6">
          {expenses.map((expense: PersonalExpense) => (
            <div 
              key={expense.id} 
              className="bg-base-100 rounded-xl sm:rounded-2xl shadow-sm sm:shadow-md overflow-hidden border border-base-300 hover:shadow-md transition-shadow duration-200"
            >
              {/* Expense Header */}
              <div className="p-3 sm:p-4 border-b border-base-300">
                <div className="flex justify-between items-start gap-4">
                  {/* Left side with arrow and name */}
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    {/* Arrow indicator */}
                    <div className={`rounded-full p-2 flex-shrink-0 ${
                      expense.type === 'in' 
                        ? 'bg-success/20 text-success' 
                        : 'bg-error/20 text-error'
                    }`}>
                      {expense.type === 'in' ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                        </svg>
                      )}
                    </div>
                    
                    <div className="min-w-0 flex-1">
                      <h2 className="text-lg sm:text-xl font-bold line-clamp-1 mb-1">
                        {expense.name}
                      </h2>
                      
                      <div className="flex items-center gap-2 text-sm text-base-content/70">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {new Date(expense.createdAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right side with amount */}
                  <div className={`text-right flex-shrink-0`}>
                    <p className={`text-xl sm:text-2xl font-bold ${
                      expense.type === 'in' ? 'text-success' : 'text-error'
                    }`}>
                      {expense.type === 'in' ? '+' : '-'}${parseFloat(expense.totalAmount).toFixed(2)}
                    </p>
                    <p className="text-xs text-base-content/60 mt-1">
                      {expense.type === 'in' ? 'Income' : 'Expense'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="p-3 sm:p-4 bg-base-200/50">
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-base-content/70">Transaction ID:</span>
                    <span className="font-mono text-xs bg-base-300 px-2 py-1 rounded">
                      #{expense.id.toString().padStart(4, '0')}
                    </span>
                  </div>
                  <div className={`text-xs font-medium px-2 py-1 rounded ${
                    expense.type === 'in' 
                      ? 'bg-success/20 text-success' 
                      : 'bg-error/20 text-error'
                  }`}>
                    {expense.type === 'in' ? 'Money In' : 'Money Out'}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 sm:py-12 bg-base-100 rounded-xl sm:rounded-2xl shadow-sm">
          <div className="max-w-md mx-auto px-4">
            <div className="text-4xl sm:text-5xl mb-4">📊</div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">No Transactions Yet</h3>
            <p className="text-base-content/70 text-sm sm:text-base mb-6">
              Start adding personal expenses or income to see them listed here
            </p>
            <div className="space-y-3">
              <button className="btn btn-success w-full">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                Add Income
              </button>
              <button className="btn btn-error w-full">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                </svg>
                Add Expense
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Expenses;