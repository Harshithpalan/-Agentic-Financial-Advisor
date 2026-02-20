import { pgTable, serial, text, numeric, timestamp } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

export const transactions = pgTable('transactions', {
    id: serial('id').primaryKey(),
    merchant: text('merchant').notNull(),
    amount: numeric('amount', { precision: 12, scale: 2 }).notNull(),
    category: text('category').notNull(),
    date: timestamp('date').defaultNow().notNull(),
    type: text('type', { enum: ['expense', 'income'] }).notNull(),
});

export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    clerkId: text('clerk_id').notNull().unique(),
    email: text('email').notNull().unique(),
    createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
});

export const userStats = pgTable('user_stats', {
    id: serial('id').primaryKey(),
    totalBalance: numeric('total_balance', { precision: 12, scale: 2 }).default('0'),
    monthlyIncome: numeric('monthly_income', { precision: 12, scale: 2 }).default('0'),
    monthlyExpenses: numeric('monthly_expenses', { precision: 12, scale: 2 }).default('0'),
    savingsRate: numeric('savings_rate', { precision: 5, scale: 2 }).default('0'),
});

export const budgets = pgTable('budgets', {
    id: serial('id').primaryKey(),
    category: text('category').notNull(),
    limit: numeric('limit', { precision: 12, scale: 2 }).notNull(),
    spent: numeric('spent', { precision: 12, scale: 2 }).default('0'),
});

export const recommendations = pgTable('recommendations', {
    id: serial('id').primaryKey(),
    query: text('query').notNull(),
    advice: text('advice').notNull(),
    modelUsed: text('model_used').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
});
