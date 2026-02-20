import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { db } from './db';
import { transactions, recommendations, users } from './db/schema';
import { getFinancialAdvice } from './services/aiService';
import { eq } from 'drizzle-orm';

dotenv.config({ path: path.join(__dirname, '../.env') });

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// --- Core API ---

app.get('/api/transactions', async (req: Request, res: Response) => {
    try {
        const allTransactions = await db.select().from(transactions);
        res.json(allTransactions);
    } catch (error: any) {
        console.error('DB Error:', error);
        res.status(500).json({ error: error.message });
    }
});

app.post('/api/transactions', async (req: Request, res: Response) => {
    const { merchant, amount, category, type } = req.body;
    try {
        if (!merchant || !amount || !category || !type) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const [newTransaction] = await db.insert(transactions).values({
            merchant,
            amount: amount.toString(),
            category,
            type,
        }).returning();

        res.status(201).json(newTransaction);
    } catch (error: any) {
        console.error('Create Transaction Error:', error);
        res.status(500).json({ error: error.message });
    }
});

app.post('/api/users/sync', async (req: Request, res: Response) => {
    const { clerkId, email } = req.body;
    try {
        if (!clerkId || !email) {
            return res.status(400).json({ error: 'Missing clerkId or email' });
        }

        // Upsert user
        const existing = await db.select().from(users).where(eq(users.clerkId, clerkId)).limit(1);

        if (existing.length === 0) {
            const [newUser] = await db.insert(users).values({
                clerkId,
                email,
            }).returning();
            return res.status(201).json(newUser);
        }

        res.json(existing[0]);
    } catch (error: any) {
        console.error('User Sync Error:', error);
        res.status(500).json({ error: error.message });
    }
});

app.post('/api/advisor', async (req: Request, res: Response) => {
    const { query, model = 'openai' } = req.body;
    try {
        const allTransactions = await db.select().from(transactions);
        const advice = await getFinancialAdvice(query, allTransactions, model);

        // Persist recommendation
        await db.insert(recommendations).values({
            query,
            advice: advice || 'No response',
            modelUsed: model,
        });

        res.json({ advice });
    } catch (error: any) {
        console.error('AI Service Error:', error);
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
