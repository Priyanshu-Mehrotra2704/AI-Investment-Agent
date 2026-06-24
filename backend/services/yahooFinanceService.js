const YahooFinance = require("yahoo-finance2").default;

const yahooFinance = new YahooFinance();

const getCompanyData = async (company) => {
  try {
    const result = await yahooFinance.search(company);

    if (!result.quotes || result.quotes.length === 0) {
      throw new Error("Company not found");
    }

    const symbol = result.quotes[0].symbol;

    const quote = await yahooFinance.quoteSummary(symbol, {
      modules: [
        "price",
        "summaryProfile",
        "defaultKeyStatistics",
        "financialData",
      ],
    });

    return {
      companyName: quote.price?.longName || company,
      symbol,
      currentPrice: quote.price?.regularMarketPrice,
      marketCap: quote.price?.marketCap,
      sector: quote.summaryProfile?.sector,
      industry: quote.summaryProfile?.industry,
      peRatio: quote.defaultKeyStatistics?.forwardPE,
    };
  } catch (error) {
    throw error;
  }
};

module.exports = getCompanyData;