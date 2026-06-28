const accents = {
  green:  { pill: "bg-emerald-500/8 border-emerald-500/15 text-emerald-400" },
  blue:   { pill: "bg-blue-500/8 border-blue-500/15 text-blue-400" },
  orange: { pill: "bg-amber-500/8 border-amber-500/15 text-amber-400" },
  purple: { pill: "bg-violet-500/8 border-violet-500/15 text-violet-400" },
};

export default function MetricCard({ title, value, icon, color = "blue" }) {
  const { pill } = accents[color] ?? accents.blue;

  return (
    <div className="flex flex-col gap-3 p-5">
      <div className={`self-start flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border ${pill}`}>
        <span className="text-[13px] leading-none">{icon}</span>
        <span>{title}</span>
      </div>
      <span className="text-xl font-semibold text-white leading-none">
        {value}
      </span>
    </div>
  );
}