const { tool } = require("@langchain/core/tools");
const getCompanyNews = require("../services/newsService");

const newsTool = tool(
  async ({ company }) => {
    return JSON.stringify(await getCompanyNews(company));
  },
  {
    name: "news_tool",
    description: "Fetches recent company news.",
    schema: {
      type: "object",
      properties: {
        company: {
          type: "string",
        },
      },
      required: ["company"],
    },
  }
);

module.exports = newsTool;