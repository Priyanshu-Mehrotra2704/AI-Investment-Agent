const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { GoogleGenerativeAI} = require("@google/generative-ai");
const getCompanyData = require('./services/yahooFinanceService');
const getCompanyNews = require('./services/newsService');
const analyzeInvestment = require('./agents/investmentAgent');

const app = express();

app.use(cors());
app.use(express.json());
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.get("/", (req, res) => {
  res.send("Investment Agent Backend Running");
});

app.post("/analyze", async (req, res) => {
  try {
    const { company } = req.body;

    const companyData = await getCompanyData(company);
    const newsData = await getCompanyNews(company);
    const analysis = await analyzeInvestment(companyData, newsData);

    res.json({
      companyData,
      newsData,
      analysis
    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});

app.get("/test-gemini", async (req, res) => {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash"
    });

    const result = await model.generateContent(
      "Tell me about NVIDIA in 50 words."
    );

    const response = result.response.text();

    res.json({
      success: true,
      data: response
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});
    

const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;