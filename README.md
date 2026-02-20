# 🤖 Agentic Financial Advisor

Agentic Financial Advisor is a cutting-edge wealth intelligence platform designed to provide autonomous fiscal synthesis and deep reasoning for personal finance. Leveraging the power of LLMs (OpenAI and Anthropic), it analyzes transaction data to offer actionable, professional-grade financial advice.

[![Tech Stack](https://img.shields.io/badge/Stack-React%20%7C%20Next.js%20%7C%20Node.js%20%7C%20PostgreSQL-blue)](https://github.com/your-repo)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## ✨ Key Features

- **🧠 Deep Fiscal Synthesis**: Advanced reasoning engine that decodes complex financial behaviors into wealth strategies.
- **🚀 Multi-Model IQ**: Support for both OpenAI (GPT-4o) and Anthropic (Claude 3.5 Sonnet) for diverse financial perspectives.
- **🔒 Sovereign Privacy**: Built with security-first principles, integrating Clerk for robust authentication and next-gen privacy protocols.
- **📊 Real-time Analytics**: Dynamic visualization of portfolio performance, spending patterns, and goal tracking using Recharts.
- **🤖 Autonomous Logic**: Self-evolving guards and automated recommendations tailored to your economic momentum.
- **🎨 Premium UI/UX**: A state-of-the-art interface built with Framer Motion, featuring glassmorphism and smooth micro-animations.

## 🏗️ Architecture

The project is structured as a full-stack monorepo:

- **`server/`**: Node.js & Express backend. Uses Drizzle ORM for PostgreSQL interaction and integrates AI service providers.
- **`src/`**: Vite-powered React frontend for the main dashboard and analytics.
- **`clerk-nextjs/`**: Next.js 16 implementation featuring integrated Clerk authentication and server-side rendering.

## 🛠️ Tech Stack

### Backend
- **Framework**: Express.js
- **Database**: PostgreSQL (via Drizzle ORM)
- **AI**: OpenAI SDK, Anthropic SDK
- **Environment**: Dotenv for secure configuration

### Frontend (Vite & Next.js)
- **Library**: React 19, Next.js 16
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Icons**: Lucide React
- **Auth**: Clerk

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- PostgreSQL instance
- API Keys for OpenAI/Anthropic and Clerk

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/Agentic-Financial-Advisor.git
   cd Agentic-Financial-Advisor
   ```

2. **Setup Server**:
   ```bash
   cd server
   npm install
   # Create a .env file in the root with DATABASE_URL, OPENAI_API_KEY, etc.
   npm run dev
   ```

3. **Setup Frontend (Vite)**:
   ```bash
   cd ..
   npm install
   npm run dev
   ```

4. **Setup Frontend (Next.js)**:
   ```bash
   cd clerk-nextjs
   npm install
   npm run dev
   ```

## 📊 Database Schema

- `transactions`: Stores ledger entries (merchants, amounts, categories).
- `users`: User profiles managed via Clerk IDs.
- `recommendations`: History of AI-generated financial advice and models used.
- `budgets`: Category-specific spending limits and tracking.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
