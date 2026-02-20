import { db } from './index';
import { transactions, userStats } from './schema';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../../.env') });

async function seed() {
    console.log('🌱 Seeding database...');

    try {
        // Clean existing data (optional)
        // await db.delete(transactions);
        // await db.delete(userStats);

        await db.insert(transactions).values([
            { merchant: 'Apple Store', amount: '-1299.00', category: 'Technology', type: 'expense' },
            { merchant: 'Whole Foods', amount: '-145.20', category: 'Groceries', type: 'expense' },
            { merchant: 'Salary', amount: '8500.00', category: 'Income', type: 'income' },
            { merchant: 'Netflix', amount: '-19.99', category: 'Entertainment', type: 'expense' },
            { merchant: 'Starbucks', amount: '-6.50', category: 'Dining', type: 'expense' },
            { merchant: 'Shell Gas', amount: '-65.00', category: 'Transport', type: 'expense' },
        ]);

        await db.insert(userStats).values([
            {
                totalBalance: '45250.80',
                monthlyIncome: '8500.00',
                monthlyExpenses: '2450.69',
                savingsRate: '71.20'
            }
        ]);

        console.log('✅ Database seeded successfully!');
        process.exit(0);
    } catch (error) {
        console.error('❌ Error seeding database:', error);
        process.exit(1);
    }
}

seed();
