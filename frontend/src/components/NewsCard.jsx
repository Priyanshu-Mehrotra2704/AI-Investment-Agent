function NewsCard({ news }) {
  if (!news || news.length === 0) {
    return (
      <div>
        <h2>Latest News</h2>
        <p>No News Found.</p>
      </div>
    );
  }

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Latest News</h2>

      {news.map((article, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "15px",
            marginBottom: "20px",
          }}
        >
          <h3>{article.title}</h3>

          <p>{article.description}</p>

          <p>
            <strong>Source:</strong> {article.source}
          </p>

          <p>
            <strong>Published:</strong>{" "}
            {new Date(article.publishedAt).toLocaleString()}
          </p>

          <a
            href={article.url}
            target="_blank"
            rel="noreferrer"
          >
            Read Full Article →
          </a>
        </div>
      ))}
    </div>
  );
}

export default NewsCard;