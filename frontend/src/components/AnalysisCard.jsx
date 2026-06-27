function AnalysisCard({ analysis }) {

  if (!analysis) return null;

  return (
    <div
      style={{
        marginTop: "30px",
        border: "2px solid green",
        borderRadius: "10px",
        padding: "20px",
      }}
    >
      <h2>AI Investment Recommendation</h2>

      <h1>{analysis.decision}</h1>

      <p>
        <strong>Investment Score:</strong>{" "}
        {analysis.score}/100
      </p>

      <p>
        <strong>Confidence:</strong>{" "}
        {analysis.confidence}%
      </p>

      <p>
        <strong>Summary:</strong>{" "}
        {analysis.summary}
      </p>

      <h3>Positives</h3>

      <ul>
        {analysis.positives.map((item, index) => (
          <li key={index}>✅ {item}</li>
        ))}
      </ul>

      <h3>Risks</h3>

      <ul>
        {analysis.risks.map((item, index) => (
          <li key={index}>⚠ {item}</li>
        ))}
      </ul>

      <h3>Reasoning</h3>

      <ol>
        {analysis.reasoning.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
}

export default AnalysisCard;