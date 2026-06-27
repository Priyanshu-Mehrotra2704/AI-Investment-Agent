const { tool } = require("@langchain/core/tools");
const getCompanyData = require("../services/yahooFinanceService");

const financeTool = tool(
  async ({ company }) => {
    return JSON.stringify(await getCompanyData(company));
  },
  {
    name: "finance_tool",
    description: "Fetches company financial information.",
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

module.exports = financeTool;