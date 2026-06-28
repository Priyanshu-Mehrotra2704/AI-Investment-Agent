import { motion } from "framer-motion";
import { FaChartLine, FaCoins, FaIndustry, FaBuilding } from "react-icons/fa";

function formatMarketCap(value) {
  if (!value) return "N/A";
  if (value >= 1_000_000_000_000) return `$${(value / 1_000_000_000_000).toFixed(2)}T`;
  if (value >= 1_000_000_000) return `$${(value / 1_000_000_000).toFixed(2)}B`;
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(2)}M`;
  return `$${value}`;
}

const metrics = (company) => [
  {
    label: "Current price",
    value: `$${company.currentPrice}`,
    icon: <FaCoins size={13} />,
    accent: "text-emerald-400",
    bg: "bg-emerald-500/8 border-emerald-500/15",
  },
  {
    label: "Market cap",
    value: formatMarketCap(company.marketCap),
    icon: <FaChartLine size={13} />,
    accent: "text-blue-400",
    bg: "bg-blue-500/8 border-blue-500/15",
  },
  {
    label: "P/E ratio",
    value: company.peRatio ?? "N/A",
    icon: <FaIndustry size={13} />,
    accent: "text-amber-400",
    bg: "bg-amber-500/8 border-amber-500/15",
  },
  {
    label: "Exchange",
    value: company.exchange || "NASDAQ",
    icon: <FaBuilding size={13} />,
    accent: "text-violet-400",
    bg: "bg-violet-500/8 border-violet-500/15",
  },
];

export default function CompanyCard({ company }) {
  if (!company) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="rounded-2xl border border-white/8 bg-slate-900 overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-6 p-6 border-b border-white/8">
        <div className="min-w-0">
          <p className="text-xs font-medium uppercase tracking-widest text-slate-500 mb-2">
            Market snapshot
          </p>

          <h2 className="text-2xl font-semibold text-white truncate">
            {company.companyName}
          </h2>

          <div className="mt-3 flex flex-wrap gap-2">
            <Pill label={company.symbol} color="blue" />
            {company.sector && <Pill label={company.sector} color="violet" />}
            {company.industry && <Pill label={company.industry} color="emerald" />}
          </div>
        </div>

        {/* Logo placeholder */}
        <div className="shrink-0 w-12 h-12 rounded-xl bg-slate-800 border border-white/8 flex items-center justify-center text-xl">
          🏢
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 xl:grid-cols-4 divide-x divide-y divide-white/8">
        {metrics(company).map(({ label, value, icon, accent, bg }) => (
          <div key={label} className="flex flex-col gap-3 p-5">
            <div className={`self-start flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border ${bg} ${accent}`}>
              {icon}
              <span>{label}</span>
            </div>
            <span className="text-xl font-semibold text-white leading-none">
              {value}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function Pill({ label, color }) {
  const styles = {
    blue: "bg-blue-500/8 border-blue-500/15 text-blue-400",
    violet: "bg-violet-500/8 border-violet-500/15 text-violet-400",
    emerald: "bg-emerald-500/8 border-emerald-500/15 text-emerald-400",
  };
  return (
    <span className={`text-xs px-3 py-1 rounded-full border ${styles[color]}`}>
      {label}
    </span>
  );
}