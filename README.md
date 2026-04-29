# Charity Draw App

A modern, purpose-driven web application where users can participate in periodic number draws while supporting their favorite charities. Built with Next.js and Supabase.

## 🚀 Tech Stack

- **Frontend:** Next.js (App Router), React, Tailwind CSS, Lucide Icons
- **Backend & Database:** Supabase (PostgreSQL, Authentication, Row Level Security)
- **Deployment:** Vercel

## ✨ Core Features

### 👤 User Flow
- **Authentication:** Secure signup and login powered by Supabase Auth.
- **Golf Score Entry:** Users can log up to 5 Golf Scores (Stableford format, 1-45) with an associated date. Only one score entry per date is permitted. The system uses rolling logic—entering a 6th score automatically replaces the oldest one.
- **Charity Selection & Allocation:** Users choose a charity and set their donation percentage (minimum 10%, with the ability to increase).
- **Subscriptions:** Full Monthly and Yearly subscription lifecycle handling via Stripe integration (renewals, cancellations).
- **Winner Verification:** Users must upload proof (e.g., a screenshot of their scores) via the dashboard to claim winnings.
- **Personal Dashboard:** A modern, "Anti-Golf" themed UI (clean, charitable-impact led, no traditional golf motifs) with subtle animations to view current scores, active subscription status, selected charity, and recent winnings.

### 🛡️ Admin Flow
- **Secure Access:** Dedicated `/admin` route hardcoded for the `admin@test.com` account.
- **User Management:** View all registered users and their current mock subscription status.
- **Simulation Mode:** Pre-analysis mode to preview draw results before officially publishing them.
- **Draw Execution & Prize Pool:** Draw generation calculates matches based on the prize pool logic (40% for 5-match, 35% for 4-match, 25% for 3-match). If no 5-match winners exist, the jackpot rolls over to the next month.
- **Winner Verification:** Admins can approve or reject winner proof submissions.
- **Charity Management:** Full CRUD (Create, Read, Update, Delete) capabilities for the curated charity list.

## 🛠️ Setup & Local Development

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd software
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env.local` file in the root of the project and add your Supabase credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 4. Database Setup
1. Create a new project in [Supabase](https://supabase.com/).
2. Navigate to the **SQL Editor** in the Supabase Dashboard.
3. Copy the contents of the `database_schema.sql` file located in the root of this repository.
4. Paste the SQL code into the editor and click **Run**. This will create all necessary tables, Row Level Security (RLS) policies, database triggers, and insert dummy charity data.
5. Configure a Storage Bucket named `winner-proofs` for user image uploads.

### 5. Run the Application
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🧪 Testing the Application

### Testing as a User
1. Sign up for a new account.
2. Navigate to your **Dashboard**.
3. Add 5 Golf Scores (between 1-45) with dates. Ensure you cannot add two scores on the same date. Try adding a 6th to see the oldest score drop off.
4. Select a charity from the list and set your donation percentage (min 10%).
5. (Mock) Win a draw and test the Image Upload for score verification.

### Testing as an Admin
1. Create a new account with the exact email: **`admin@test.com`** (Password can be anything).
   *(Note: You may need to disable "Confirm email" in Supabase Auth settings to bypass rate limits during testing).*
2. Navigate to `http://localhost:3000/admin`.
3. Use **Simulation Mode** to preview a draw.
4. Click the **"Publish Draw"** button to finalize.
5. Verify uploaded proofs from winners in the **Verification** tab.

## 🌐 Deployment
This application is designed to be easily deployed on Vercel. Simply import your GitHub repository into Vercel and ensure you add the `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` to the Vercel Environment Variables before building.
