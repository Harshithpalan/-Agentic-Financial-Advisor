import OpenAI from 'openai';
import { Anthropic } from '@anthropic-ai/sdk';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../../.env') });

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function getFinancialAdvice(query: string, transactions: any[], model: 'openai' | 'anthropic' = 'openai') {
    const context = `
    User Transactions:
    ${JSON.stringify(transactions, null, 2)}
    
    User Query: ${query}
    
    You are a professional financial advisor. Analyze the transactions and answer the user query with specific, actionable advice. 
    Keep it concise and focus on savings and low-risk investments if asked.
  `;

    if (model === 'openai') {
        const response = await openai.chat.completions.create({
            model: 'gpt-4o',
            messages: [{ role: 'user', content: context }],
        });
        return response.choices[0].message.content;
    } else {
        const response = await anthropic.messages.create({
            model: 'claude-3-5-sonnet-20240620',
            max_tokens: 1024,
            messages: [{ role: 'user', content: context }],
        });

        const contentBar = response.content[0];
        if (contentBar.type === 'text') {
            return contentBar.text;

        }
        return "The advisor provided a non-text response.";
    }
}
