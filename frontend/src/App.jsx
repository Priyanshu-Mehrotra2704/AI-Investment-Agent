import { useState } from "react";
import axios from "axios";

function App() {
  const [company, setCompany] = useState("");
  const [result, setResult] = useState(null);

  const analyzeCompany = async () => {
    try {
      const res = await axios.post("http://localhost:5000/analyze", {
        company,
      });

      setResult(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>AI Investment Research Agent</h1>

      <input
        type="text"
        placeholder="Enter company name"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <button onClick={analyzeCompany}>Analyze</button>

      {result && (
        <div style={{ marginTop: "30px" }}>
          <h2>{result.companyData.companyName}</h2>

          <p>
            <strong>Symbol:</strong> {result.companyData.symbol}
          </p>

          <p>
            <strong>Current Price:</strong>{" "}
            {result.companyData.currentPrice}
          </p>

          <p>
            <strong>Market Cap:</strong>{" "}
            {result.companyData.marketCap}
          </p>

          <p>
            <strong>Sector:</strong>{" "}
            {result.companyData.sector}
          </p>

          <p>
            <strong>Industry:</strong>{" "}
            {result.companyData.industry}
          </p>

          <p>
            <strong>PE Ratio:</strong>{" "}
            {result.companyData.peRatio}
          </p>

          <hr />

          <h2>Latest News</h2>

          {result.newsData.length === 0 ? (
            <p>No news found.</p>
          ) : (
            result.newsData.map((article, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "20px",
                  border: "1px solid #ccc",
                  padding: "10px",
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
                  Read Full Article
                </a>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default App;