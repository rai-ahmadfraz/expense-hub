export default interface ExpenseSummary {
  summary: {
    netBalance: number;
    overallStatus: string;
  };
  expenses: Expense[];
}

interface Expense {
  expenseId: number;
  title: string;
  totalAmount: number;
  paidBy: User;
  owes: {
    userId: number;
    name: string;
    amount: number;
  };
  members: ExpenseMember[];
  createdAt: string; // ISO date string
  status: "owes you" | "you owe";
}

interface User {
  userId: number;
  name: string;
}

interface ExpenseMember {
  userId: number;
  name: string;
  amount: number;
}