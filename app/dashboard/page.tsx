"use server";
import React from "react";
import { getExpenseDashboardSummary } from "@/app/api-services/expenseService";
interface Summary {
  netBalance: number;
  overallStatus: string;
}

interface UserBalance {
  userId: number;
  userName: string;
  userEmail: string;
  balance: number;
  status: string;
}

interface ExpenseSummaryResponse {
  summary: Summary;
  users: UserBalance[];
}


const Dashboard: React.FC = async () => {

  const expenseSummary: ExpenseSummaryResponse = await getExpenseDashboardSummary();

  const { summary, users } = expenseSummary;
  return (
  <div className="min-h-screen bg-base-200 p-4 space-y-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* Summary Section */}
      <div className="bg-base-100 p-5 rounded-2xl shadow-lg flex justify-between items-center border-l-4 border-blue-500">
        <div>
          <h1 className="text-xl font-bold text-base-content mb-1">Summary</h1>
          <p className="text-base-content/70 text-sm">{summary.overallStatus}</p>
        </div>

        <div className="text-right">
          <p className="text-sm text-base-content/70">Net Balance</p>
          <p
            className={`text-lg font-semibold ${
              summary.netBalance < 0 ? "text-red-600" : "text-green-500"
            }`}
          >
            ${Math.abs(summary.netBalance)}
          </p>
        </div>
      </div>

      {/* Users List */}
      <div className="space-y-4">
        <h1 className="text-2xl font-bold mb-4">Users</h1>

        {users.map((user) => {
          const amountColor = user.balance < 0 ? "text-red-500" : "text-green-600";

          return (
            <div
              key={user.userId}
              className="p-4 rounded-2xl shadow-md flex justify-between items-center border-l-4 border-blue-500"
            >
              <div>
                    <h2 className="text-lg font-semibold">{user.userName}</h2>
                    <p className="text-base-content/70 text-sm">{user.userEmail}</p>
              </div>

              <div className="text-right">
                <p className={`font-bold text-lg ${amountColor}`}>
                  ${Math.abs(user.balance)}
                </p>
                <p className="text-base-content/60 text-xs">{user.status == 'owes you' ? 'have to give you':'you have to give' }</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
