import { useState } from "react";
import { motion } from "framer-motion";
import { FiSearch, FiArrowRight, FiLoader } from "react-icons/fi";

const SUGGESTIONS = ["NVIDIA", "Apple", "Microsoft", "Tesla", "Amazon"];

export default function SearchBar({ onAnalyze, loading }) {
  const [company, setCompany] = useState("");

  function handleSubmit() {
    if (!company.trim() || loading) return;
    onAnalyze(company);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="rounded-2xl border border-white/8 bg-slate-900 overflow-hidden"
    >
      {/* Header */}
      <div className="px-6 pt-6 pb-5 border-b border-white/8">
        <p className="text-xs font-medium uppercase tracking-widest text-slate-500 mb-1">
          AI analyst
        </p>
        <h2 className="text-lg font-semibold text-white">Research a company</h2>
        <p className="mt-1 text-sm text-slate-500">
          Analyses financials, news, and investment potential.
        </p>
      </div>

      {/* Search row */}
      <div className="flex flex-col lg:flex-row gap-3 p-6 border-b border-white/8">
        <div className="relative flex-1">
          <FiSearch
            size={15}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none"
          />
          <input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            placeholder="Ticker or company name — e.g. AAPL"
            className="
              w-full rounded-xl bg-slate-800 border border-white/8
              py-3 pl-10 pr-4 text-sm text-white placeholder:text-slate-600
              outline-none transition-all
              focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/15
            "
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading || !company.trim()}
          className="
            flex items-center justify-center gap-2
            rounded-xl px-6 py-3
            bg-blue-600 hover:bg-blue-500
            disabled:opacity-40 disabled:cursor-not-allowed
            text-sm font-medium text-white
            transition-colors
          "
        >
          {loading ? (
            <>
              <FiLoader size={14} className="animate-spin" />
              Analysing…
            </>
          ) : (
            <>
              Analyse
              <FiArrowRight size={14} />
            </>
          )}
        </button>
      </div>

      {/* Suggestions */}
      <div className="px-6 py-4 flex flex-wrap items-center gap-2">
        <span className="text-xs text-slate-600 mr-1">Try:</span>
        {SUGGESTIONS.map((item) => (
          <button
            key={item}
            onClick={() => setCompany(item)}
            className="
              text-xs px-3 py-1.5 rounded-full
              border border-white/8 bg-slate-800
              text-slate-400 hover:text-white hover:border-white/20
              transition-colors
            "
          >
            {item}
          </button>
        ))}
      </div>
    </motion.div>
  );
}