import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiChevronDown,
  FiChevronUp,
  FiCheckCircle,
  FiAlertTriangle,
  FiTrendingUp,
  FiX,
} from "react-icons/fi";

export default function AnalysisCard({ analysis }) {
  const [open, setOpen] = useState(false);

  if (!analysis) return null;

  const score = Number(analysis.score || 0);
  const confidence = Number(analysis.confidence || 0);
  const isInvest = analysis.decision?.toUpperCase() === "INVEST";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="rounded-2xl border border-white/8 bg-slate-900 overflow-hidden"
    >
      {/* Verdict accent bar */}
      <div
        className={`h-[3px] w-full ${
          isInvest
            ? "bg-gradient-to-r from-emerald-500 to-green-400"
            : "bg-gradient-to-r from-red-500 to-orange-400"
        }`}
      />

      {/* Header */}
      <div className="flex flex-col lg:flex-row gap-8 p-6 border-b border-white/8">
        {/* Left: verdict + summary */}
        <div className="flex-1 min-w-0">
          {/* Badge */}
          <span
            className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full border ${
              isInvest
                ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                : "bg-red-500/10 border-red-500/20 text-red-400"
            }`}
          >
            {isInvest ? (
              <FiCheckCircle size={11} />
            ) : (
              <FiX size={11} />
            )}
            {analysis.decision}
          </span>

          <h2 className="mt-3 text-2xl font-semibold text-white leading-snug">
            {analysis.title ?? "AI analyst report"}
          </h2>

          <p className="mt-2 text-sm text-slate-400 leading-relaxed">
            {analysis.summary}
          </p>
        </div>

        {/* Right: score + confidence */}
        <div className="flex flex-col gap-5 lg:min-w-[200px]">
          <Meter
            label="Investment score"
            value={score}
            display={`${score} / 100`}
            colorClass="bg-blue-500"
          />
          <Meter
            label="Confidence"
            value={confidence}
            display={`${confidence}%`}
            colorClass="bg-emerald-500"
          />
        </div>
      </div>

      {/* Positives + Risks */}
      <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/8">
        <TagsColumn
          heading="Why AI likes it"
          icon={<FiCheckCircle size={13} className="text-emerald-400" />}
          items={analysis.positives}
          variant="positive"
        />
        <TagsColumn
          heading="Risks"
          icon={<FiAlertTriangle size={13} className="text-amber-400" />}
          items={analysis.risks}
          variant="risk"
        />
      </div>

      {/* Reasoning accordion */}
      <div className="border-t border-white/8">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between px-6 py-4 text-sm text-slate-400 hover:text-slate-200 hover:bg-white/4 transition-colors"
        >
          <span>{open ? "Hide reasoning" : "View detailed reasoning"}</span>
          {open ? <FiChevronUp size={15} /> : <FiChevronDown size={15} />}
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="reasoning"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 space-y-0 divide-y divide-white/8">
                {analysis.reasoning.map((step, i) => (
                  <div key={i} className="flex gap-4 py-4">
                    <div className="mt-0.5 w-6 h-6 rounded-full border border-white/10 bg-slate-800 flex items-center justify-center text-[11px] font-medium text-slate-500 shrink-0">
                      {i + 1}
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

/* ── Sub-components ──────────────────────────────────────────────── */

function Meter({ label, value, display, colorClass }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-xs text-slate-500">{label}</span>
        <span className="text-xs font-medium text-slate-300">{display}</span>
      </div>
      <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className={`h-full rounded-full ${colorClass}`}
        />
      </div>
    </div>
  );
}

function TagsColumn({ heading, icon, items = [], variant }) {
  const tagClass =
    variant === "positive"
      ? "bg-emerald-500/8 border-emerald-500/15 text-emerald-400"
      : "bg-amber-500/8 border-amber-500/15 text-amber-400";

  return (
    <div className="p-6">
      <h3 className="flex items-center gap-2 text-xs font-medium text-slate-500 uppercase tracking-widest mb-4">
        {icon}
        {heading}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item, i) => (
          <span
            key={i}
            className={`inline-flex items-center text-xs px-3 py-1.5 rounded-full border ${tagClass}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}