export interface Transaction {
    id: string;
    date: string;
    merchant: string;
    amount: number;
    category: string;
    type: 'expense' | 'income';
}

export const MOCK_TRANSACTIONS: Transaction[] = [
    { id: '1', date: '2024-03-20', merchant: 'Apple Store', amount: -1299.00, category: 'Technology', type: 'expense' },
    { id: '2', date: '2024-03-19', merchant: 'Whole Foods', amount: -145.20, category: 'Groceries', type: 'expense' },
    { id: '3', date: '2024-03-18', merchant: 'Salary', amount: 8500.00, category: 'Income', type: 'income' },
    { id: '4', date: '2024-03-17', merchant: 'Netflix', amount: -19.99, category: 'Entertainment', type: 'expense' },
    { id: '5', date: '2024-03-15', merchant: 'Starbucks', amount: -6.50, category: 'Dining', type: 'expense' },
    { id: '6', date: '2024-03-14', merchant: 'Shell Gas', amount: -65.00, category: 'Transport', type: 'expense' },
];

export const MOCK_STATS = {
    totalBalance: 45250.80,
    monthlyIncome: 8500.00,
    monthlyExpenses: 2450.69,
    savingsRate: 71.2
};
