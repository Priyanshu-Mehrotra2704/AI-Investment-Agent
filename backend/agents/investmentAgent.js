const { ChatGoogleGenerativeAI } = require("@langchain/google-genai");
const { ChatPromptTemplate } = require("@langchain/core/prompts");

const model = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash",
  apiKey: process.env.GEMINI_API_KEY,
  temperature: 0.3,
});

async function analyzeInvestment(companyData, newsData) {
  const prompt = ChatPromptTemplate.fromTemplate(`
You are a professional investment research analyst.

Your task is to analyze the company using the financial data and recent news.

Financial Data:
{financialData}

Recent News:
{newsData}

Return ONLY valid JSON in this format:

{{
  "decision": "INVEST",
  "score": 88,
  "confidence": 92,
  "confidenceReason": "Multiple positive financial indicators and consistent positive news support a high-confidence recommendation.",
  "summary": "...",
  "positives": [],
  "risks": [],
  "reasoning": []
}}
`);

  const formattedPrompt = await prompt.format({
    financialData: JSON.stringify(companyData, null, 2),
    newsData: JSON.stringify(newsData, null, 2),
  });

  const response = await model.invoke(formattedPrompt);

  let text = response.content;

  text = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(text);
}

module.exports = analyzeInvestment;