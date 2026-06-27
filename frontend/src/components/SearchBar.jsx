import { useState } from "react";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";

export default function SearchBar({ onAnalyze, loading }) {
  const [company, setCompany] = useState("");

  const handleSubmit = () => {
    if (!company.trim()) return;
    onAnalyze(company);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="glass rounded-3xl p-8 mb-10"
    >
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center">
            <HiSparkles className="text-3xl text-cyan-400" />
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white">
          AI Company Research
        </h2>

        <p className="text-slate-400 mt-2">
          Enter any publicly listed company
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <FiSearch
            className="absolute left-4 top-1/2
                       -translate-y-1/2
                       text-slate-400
                       text-xl"
          />

          <input
            type="text"
            placeholder="Apple, NVIDIA, Tesla..."
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" && handleSubmit()
            }
            className="
            w-full
            bg-slate-900/70
            border
            border-slate-700
            rounded-xl
            pl-12
            pr-4
            py-4
            text-white
            outline-none
            transition
            duration-300
            focus:border-blue-500
            focus:ring-4
            focus:ring-blue-500/20
            "
          />
        </div>

        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          disabled={loading}
          onClick={handleSubmit}
          className="
          px-8
          rounded-xl
          bg-gradient-to-r
          from-blue-600
          via-cyan-500
          to-blue-600
          font-semibold
          text-white
          shadow-lg
          shadow-blue-500/30
          transition-all
          disabled:opacity-60
          "
        >
          {loading ? "Analyzing..." : "Analyze"}
        </motion.button>
      </div>
    </motion.div>
  );
}