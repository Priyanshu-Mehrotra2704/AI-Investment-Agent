import { motion } from "framer-motion";
import { FiExternalLink, FiClock } from "react-icons/fi";

function timeAgo(date) {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);
  const hours = Math.floor(seconds / 3600);
  const days = Math.floor(hours / 24);
  if (days > 0) return `${days}d ago`;
  if (hours > 0) return `${hours}h ago`;
  return "Just now";
}

export default function NewsCard({ news }) {
  if (!news || news.length === 0) return null;

  const articles = news.slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="rounded-2xl border border-white/8 bg-slate-900 overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-white/8">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-slate-500 mb-1">
            Market headlines
          </p>
          <h2 className="text-lg font-semibold text-white">Latest news</h2>
        </div>
        <span className="text-xs text-slate-500 border border-white/8 rounded-full px-3 py-1">
          {news.length} articles
        </span>
      </div>

      {/* Articles */}
      <div className="divide-y divide-white/8">
        {articles.map((article, i) => (
          <a
            key={i}
            href={article.url}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col gap-2 px-6 py-5 hover:bg-white/4 transition-colors"
          >
            {/* Meta row */}
            <div className="flex items-center gap-3">
              <span className="text-xs px-2.5 py-1 rounded-full border bg-blue-500/8 border-blue-500/15 text-blue-400">
                {article.source}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-slate-500">
                <FiClock size={11} />
                {timeAgo(article.publishedAt)}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-sm font-medium text-white leading-snug line-clamp-2 group-hover:text-slate-200 transition-colors">
              {article.title}
            </h3>

            {/* Description */}
            {article.description && (
              <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                {article.description}
              </p>
            )}

            {/* Read link */}
            <span className="mt-1 inline-flex items-center gap-1 text-xs text-slate-500 group-hover:text-blue-400 transition-colors">
              Read original
              <FiExternalLink size={11} />
            </span>
          </a>
        ))}
      </div>
    </motion.div>
  );
}