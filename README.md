# 🚀 AI Investment Research Agent

> An AI-powered investment research assistant that analyzes publicly listed companies using real-time financial data and recent news, then generates an intelligent investment recommendation with detailed reasoning.

Built for the **InsideIIM × Altuni AI Labs AI Product Intern Assignment**.

---

# 📖 Overview

The AI Investment Research Agent is an end-to-end AI application that assists users in evaluating publicly traded companies before making investment decisions.

Given a company name, the application:

* Retrieves real-time financial information
* Fetches the latest market news
* Uses an LLM (Google Gemini) via LangChain.js to analyze the collected information
* Generates a structured investment report
* Displays the results in a modern interactive dashboard

Rather than only showing financial metrics, the application combines structured financial data with recent news to simulate the workflow of an AI investment analyst.

---

# ✨ Features

* 🤖 AI-powered investment recommendation (INVEST / PASS)
* 📈 Live financial data
* 📰 Latest market news
* 🧠 LLM-based reasoning using Google Gemini
* 📊 Investment score
* 🎯 Confidence score
* ✅ Strengths & Opportunities
* ⚠️ Risks & Concerns
* 📋 Expandable AI reasoning
* 🎨 Modern responsive UI
* ⚡ Smooth animations using Framer Motion

---

# 🛠 Tech Stack

## Frontend

* React.js
* Tailwind CSS
* Framer Motion
* Axios
* React Icons

## Backend

* Node.js
* Express.js
* LangChain.js
* Google Gemini API
* Yahoo Finance
* GNews API

---

# 🏗 Architecture

```text
                User
                  │
                  ▼
         React Frontend
                  │
                  ▼
         Express Backend
                  │
        ┌─────────┴─────────┐
        ▼                   ▼
 Yahoo Finance API      GNews API
        │                   │
        └─────────┬─────────┘
                  ▼
            LangChain.js
                  │
                  ▼
        Google Gemini LLM
                  │
                  ▼
      Structured Investment Report
                  │
                  ▼
         Interactive React UI
```

---

# ⚙️ Project Structure

```text
AI-Investment-Agent
│
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── SearchBar.jsx
│   │   │   ├── AnalysisCard.jsx
│   │   │   ├── CompanyCard.jsx
│   │   │   ├── MetricCard.jsx
│   │   │   └── NewsCard.jsx
│   │   │
│   │   ├── services
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   └── package.json
│
├── backend
│   ├── services
│   │   ├── yahooFinanceService.js
│   │   ├── newsService.js
│   │   ├── geminiService.js
│   │   └── investmentAnalyzer.js
│   │
│   ├── tools
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

# 🚀 Installation

## 1. Clone Repository

```bash
git clone https://github.com/Priyanshu-Mehrotra2704/AI-Investment-Agent.git
```

---

## 2. Backend Setup

```bash
cd backend

npm install
```

Create a `.env` file:

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY

GNEWS_API_KEY=YOUR_GNEWS_API_KEY
```

Run backend

```bash
npm start
```

---

## 3. Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

# 🔄 Workflow

1. User enters a company name.
2. Backend retrieves financial information using Yahoo Finance.
3. Backend fetches the latest market news using GNews.
4. LangChain combines financial data and news into a structured prompt.
5. Google Gemini evaluates:

   * Financial health
   * Market sentiment
   * Growth opportunities
   * Investment risks
6. Gemini returns structured JSON containing:

   * Decision
   * Investment Score
   * Confidence
   * Summary
   * Strengths
   * Risks
   * Detailed reasoning
7. React displays the information through an interactive AI dashboard.

---

# 📸 Example Output

Input

```text
NVIDIA
```

Output

```text
Decision:
INVEST

Investment Score:
88/100

Confidence:
91%

Summary:
NVIDIA continues to dominate AI infrastructure with strong financial performance and positive industry momentum.

Strengths
• AI market leadership
• Strong revenue growth
• Positive news sentiment

Risks
• Premium valuation
• Increasing competition
```

---

# 💡 Design Decisions

* Used LangChain.js to orchestrate the AI workflow.
* Combined structured financial data with unstructured news for richer analysis.
* Forced Gemini to return structured JSON for consistent frontend rendering.
* Designed the UI around the AI recommendation rather than raw financial data.
* Built reusable React components for maintainability and scalability.
* Added animations and responsive design to improve user experience.

---

# ⚖️ Trade-offs

Given the assignment timeline, the following were intentionally excluded:

* Historical stock charts
* Technical indicators (RSI, MACD, Bollinger Bands)
* Multi-company comparison
* Portfolio management
* Authentication
* Real-time streaming responses
* Database persistence

The focus was on building a complete AI-powered investment research workflow with a polished user experience.

---

# 🚀 Future Improvements

* Stock price charts
* Historical trend analysis
* Multi-company comparison
* Portfolio tracking
* Watchlist functionality
* PDF report export
* AI streaming responses
* News sentiment visualization
* Company logo integration
* Multiple LLM support
* Voice search
* Dark/Light theme

---

# 🔑 Environment Variables

```env
GEMINI_API_KEY=

GNEWS_API_KEY=
```

---

# 🌐 APIs Used

* Google Gemini API
* Yahoo Finance
* GNews API

---

# 🤖 AI Usage

AI was used extensively throughout the development process for:

* System design
* LangChain workflow planning
* Prompt engineering
* React component development
* UI/UX brainstorming
* Debugging
* Code optimization
* Documentation

The application itself also uses AI (Google Gemini) to generate the final investment recommendation.

---

# 📄 LLM Development Log

The project was developed using AI-assisted programming. Conversations with the LLM were used for architecture planning, debugging, prompt refinement, UI design, and implementation.

The complete development chat transcript can be provided as part of the submission if required.

---

# 👨‍💻 Author

**Priyanshu Mehrotra**

AI Product Intern Assignment

InsideIIM × Altuni AI Labs
