import { useState } from "react";
import axios from "axios";

function App() {
  const [company, setCompany] = useState("");
  const [result, setResult] = useState(null);

  const analyzeCompany = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/analyze",
        {
          company,
        }
      );

      setResult(res.data);
    } catch (err) {
      console.log(err);
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

      <button onClick={analyzeCompany}>
        Analyze
      </button>

      {result && (
        <div>
          <h2>Result</h2>
          <p>Company: {result.company}</p>
          <p>Decision: {result.decision}</p>
        </div>
      )}
    </div>
  );
}

export default App;