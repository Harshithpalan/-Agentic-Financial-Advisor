import { useState, useEffect } from 'react';

export interface Transaction {
    id: number;
    merchant: string;
    amount: number;
    category: string;
    date: string;
    type: 'expense' | 'income';
}

export function useTransactions() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3001/api/transactions')
            .then(res => res.json())
            .then(data => {
                setTransactions(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching transactions:', err);
                setLoading(false);
            });
    }, []);

    return { transactions, loading };
}
