import { useState } from "react";
import axios from "axios";

function App() {
  const [company, setCompany] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeCompany = async () => {
    if (!company.trim()) return;

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/analyze",
        {
          company,
        }
      );

      console.log(res.data);

      setResult(res.data);
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "40px", maxWidth: "1000px", margin: "auto" }}>
      <h1>AI Investment Research Agent</h1>

      <input
        type="text"
        placeholder="Enter company name"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          marginRight: "10px",
        }}
      />

      <button
        onClick={analyzeCompany}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Analyze
      </button>

      {loading && (
        <h2 style={{ marginTop: "20px" }}>
          Analyzing...
        </h2>
      )}

      {result && (
        <>
          <hr />

          <h2>{result.companyData.companyName}</h2>

          <p>
            <strong>Symbol:</strong>{" "}
            {result.companyData.symbol}
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
            <p>No News Found.</p>
          ) : (
            result.newsData.map((article, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid gray",
                  padding: "15px",
                  marginBottom: "20px",
                  borderRadius: "10px",
                }}
              >
                <h3>{article.title}</h3>

                <p>{article.description}</p>

                <p>
                  <strong>Source:</strong>{" "}
                  {article.source}
                </p>

                <p>
                  <strong>Published:</strong>{" "}
                  {new Date(
                    article.publishedAt
                  ).toLocaleString()}
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

          <hr />

          {result.analysis && (
            <>
              <h2>AI Investment Recommendation</h2>

              <div
                style={{
                  border: "2px solid green",
                  padding: "20px",
                  borderRadius: "10px",
                }}
              >
                <h2>{result.analysis.decision}</h2>

                <p>
                  <strong>Investment Score:</strong>{" "}
                  {result.analysis.score}/100
                </p>

                <p>
                  <strong>Confidence:</strong>{" "}
                  {result.analysis.confidence}%
                </p>

                <p>
                  <strong>Summary:</strong>{" "}
                  {result.analysis.summary}
                </p>

                <h3>Positives</h3>

                <ul>
                  {result.analysis.positives.map(
                    (item, index) => (
                      <li key={index}>{item}</li>
                    )
                  )}
                </ul>

                <h3>Risks</h3>

                <ul>
                  {result.analysis.risks.map(
                    (item, index) => (
                      <li key={index}>{item}</li>
                    )
                  )}
                </ul>

                <h3>Reasoning</h3>

                <ol>
                  {result.analysis.reasoning.map(
                    (step, index) => (
                      <li key={index}>{step}</li>
                    )
                  )}
                </ol>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;