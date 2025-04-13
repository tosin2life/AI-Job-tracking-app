# AI Job Application Tracker

A web app to help job seekers manage applications, get AI-powered resume feedback, and track progress.

---

## Features

- **Job Tracking**: Add, update, and delete job applications.
- **AI Resume Feedback**: Get suggestions to improve your resume.
- **Job Recommendations**: View jobs with match scores.
- **Authentication**: Secure user registration and login.

---

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Next.js, Prisma
- **Database**: SQLite (development), PostgreSQL/MySQL (production)
- **Authentication**: Password hashing with `bcrypt`

---

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/tosin2life/ai-job-app-tracker.git
   cd ai-job-app-tracker
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up the database:

   ```bash
   npx prisma migrate dev --name init
   ```

4. Add environment variables in `.env.local`:

   ```env
   SESSION_SECRET=your-session-secret
   JWT_SECRET=your-jwt-secret
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   DATABASE_URL="file:./dev.db"
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

---

## Usage

- **Resume Feedback**: Paste your resume and get suggestions.
- **Job Tracking**: Add and manage job applications.
- **Job Recommendations**: View and apply for recommended jobs.

---

## License

This project is licensed under the MIT License.
