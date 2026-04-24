# SmartMediBook
AI-powered hospital booking system allowing patients to book/cancel appointments using natural language. Features AI chatbot, doctor dashboard, and smart scheduling.

---

## 📌 Abstract

SmartMediBook is an AI-powered hospital appointment booking system that streamlines patient scheduling through intelligent slot management and condition-based prioritization. Users can book appointments via chatbot using text or voice, and the system uses AI to optimize time slots based on doctor availability and average consultation delays. It can also prioritize emergency or chronic cases using NLP. Automated WhatsApp/SMS/Email reminders are sent via a bot with rescheduling options. The system is built using React.js, Node.js (Express), and MongoDB, with AI/NLP models in Python (FastAPI), and deployed on platforms like Render and Vercel.

---

## ✨ Features

**AI Chatbot:** Natural language booking like "Book appointment with Dr. Smith tomorrow at 2pm for chest pain", smart cancellation, direct routing for 200ms response time, and voice input support coming soon.

**Doctor Dashboard:** View scheduled appointments, cancel appointments with reason, send patient notifications, and set availability slots.

**Patient Portal:** Book appointments naturally, view upcoming appointments, cancel appointments instantly, and view appointment history with refund tracking.

**AI-Powered Features:** Priority scoring where emergency cases get priority (chest pain = 100, fever = 55), specialization recommendation ("chest pain" → Cardiology, "tremors" → Neurology), double booking prevention, and session memory that remembers conversation context.

**Priority-Based Handling:** Chest pain and severe bleeding get 100 priority (Emergency), palpitations and asthma get 75 (Urgent), fever and dizziness get 60 (Urgent), regular checkup gets 20 (Routine).

---

## 🛠️ Tech Stack

Frontend uses React, Tailwind CSS, DaisyUI, and Vite. Backend uses Node.js, Express.js, JWT, and bcrypt. AI Server uses Python, FastAPI, and OpenAI API. Database uses MongoDB Atlas with Mongoose. Realtime features use Socket.io. Deployment is done on Render and Vercel.

---

## 🚀 Quick Setup Guide

**Prerequisites:** Node.js v18 or higher, Python 3.11 or higher, MongoDB local or Atlas account, and OpenAI API key.

**Step 1 - Clone the Repository:**

git clone https://github.com/Nadankar/Smartmedibook.git

cd Smartmedibook

**Step 2 - Backend Setup:**

cd backend

npm install

cp .env.example .env

Update .env with your MongoDB URI and JWT secret

npm run dev

Backend runs on http://localhost:3000

**Step 3 - AI Server Setup:**

cd AI

python -m venv venv

Windows: venv\Scripts\activate

Mac/Linux: source venv/bin/activate

pip install -r requirements.txt

cp .env.example .env

Add your OPENAI_API_KEY to .env

python main.py

AI Server runs on http://localhost:8000

**Step 4 - Frontend Setup:**

cd frontend

npm install

cp .env.example .env

Add VITE_API_URL and VITE_AI_URL

npm run dev

Frontend runs on http://localhost:5173

**Step 5 - Access the Application:**

Frontend: http://localhost:5173

Backend API: http://localhost:3000

AI Server: http://localhost:8000

API Documentation: http://localhost:8000/docs

---

## 💡 Example Usage

**Patient Booking:**

User says: "Book appointment with Dr. Riya Sharma on April 20th at 2pm for chest pain"

AI responds: "Your appointment with Dr. Riya Sharma has been successfully booked for 2026-04-20 at 14:00."

**Patient Cancellation:**

User says: "Cancel my appointment with Dr. Riya Sharma"

AI responds: "Your appointment has been cancelled successfully."

**Doctor Cancellation:**

Doctor says: "Cancel Myra Fernandes's appointment"

AI asks: "Please provide cancellation reason"

Doctor says: "Doctor unavailable"

AI responds: "The appointment has been cancelled and the patient has been notified."

---

## 📈 Performance Metrics

Appointment Booking takes 1.5-2 seconds using OpenAI with tools. Cancellation takes less than 200ms using direct routing with no OpenAI call. Show Appointments takes 0.5-1 second using standard processing.

---

## 🔒 Environment Variables

**Backend .env:**

PORT=3000

MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/hospital

JWT_SECRET=your_jwt_secret_key

**AI Server .env:**

OPENAI_API_KEY=sk-proj-your-actual-key-here

BACKEND_API_URL=http://localhost:3000/api

AI_PORT=8000

**Frontend .env:**

VITE_API_URL=http://localhost:3000/api

VITE_AI_URL=http://localhost:8000

---

## 🚀 Deployment Steps

**1. Deploy MongoDB Atlas:** Create account at MongoDB Atlas, create cluster, and get connection string.

**2. Deploy Backend on Render:** Push code to GitHub, create new Web Service on Render, connect repository, add environment variables, and deploy.

**3. Deploy AI Server on Render:** Create new Web Service, set build command to "pip install -r requirements.txt", set start command to "uvicorn main:app --host 0.0.0.0 --port $PORT", add OPENAI_API_KEY and BACKEND_API_URL, and deploy.

**4. Deploy Frontend on Vercel:** Connect GitHub repository, set build command to "npm run build", set output directory to "dist", and deploy.

---

## 👥 Project Team

**Project Guide** : Prof. Dr. Varsha Shah

**Shaikh Haniya Asad** : Team Leader

**Naik Salima Irshad** 

**Nadankar Sakshi Tanaji** 

**Shaikh Iqra Bano** 

---

## 📚 Subject Details

Class: BE (ECS) Div A - 2025-2026

Subject: Major Project 

---


## 📖 References

OpenAI API Documentation - https://platform.openai.com/docs

FastAPI Documentation - https://fastapi.tiangolo.com

React Documentation - https://reactjs.org

MongoDB Atlas Documentation - https://docs.atlas.mongodb.com

Render Deployment Guide - https://render.com/docs
