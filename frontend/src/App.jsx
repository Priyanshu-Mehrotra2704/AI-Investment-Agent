import { motion } from "framer-motion";
import { useState } from "react";

import SearchBar from "./components/SearchBar";
import CompanyCard from "./components/CompanyCard";
import NewsCard from "./components/NewsCard";
import AnalysisCard from "./components/AnalysisCard";

import { analyzeCompany } from "./services/api";

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleAnalyze(company) {
    try {
      setLoading(true);
      setError("");
      setResult(null);

      const data = await analyzeCompany(company);

      setResult(data);
    } catch (err) {
      setError("Unable to analyze company. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen gradient">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h1 className="text-6xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
            AI Investment Research Agent
          </h1>

          <p className="mt-5 text-slate-400 text-lg">
            Get AI-powered investment insights in seconds.
          </p>
        </motion.div>

        {/* Search */}
        <SearchBar
          loading={loading}
          onAnalyze={handleAnalyze}
        />

        {/* Error */}
        {error && (
          <div className="mt-8 rounded-xl border border-red-500/40 bg-red-500/10 p-4 text-red-300">
            {error}
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="mt-20 flex flex-col items-center">

            <div className="w-16 h-16 rounded-full border-4 border-cyan-500 border-t-transparent animate-spin" />

            <p className="mt-6 text-slate-400">
              AI is researching the company...
            </p>

          </div>
        )}

        {/* Results */}
        {result && (
          <div className="space-y-10 mt-10">

            {/* ⭐ AI Recommendation FIRST */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <AnalysisCard analysis={result.analysis} />
            </motion.div>

            {/* Company Snapshot */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <CompanyCard company={result.companyData} />
            </motion.div>

            {/* Latest News */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <NewsCard news={result.newsData} />
            </motion.div>

          </div>
        )}
      </div>
    </div>
  );
}

export default App;