import { motion } from "framer-motion";

export default function MetricCard({
  title,
  value,
  icon,
  color = "from-blue-500 to-cyan-500",
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
      }}
      className="
        relative
        overflow-hidden
        rounded-2xl
        glass
        p-6
        card-hover
      "
    >
      {/* Background Glow */}
      <div
        className={`
        absolute
        inset-0
        opacity-10
        bg-gradient-to-br
        ${color}
      `}
      />

      <div className="relative flex items-center justify-between">
        <div>
          <p className="text-slate-400 text-sm">
            {title}
          </p>

          <h2 className="text-3xl font-bold mt-3 text-white break-words">
            {value || "N/A"}
          </h2>
        </div>

        <div
          className={`
          h-14
          w-14
          rounded-xl
          bg-gradient-to-br
          ${color}
          flex
          items-center
          justify-center
          text-2xl
          shadow-lg
        `}
        >
          {icon}
        </div>
      </div>
    </motion.div>
  );
}