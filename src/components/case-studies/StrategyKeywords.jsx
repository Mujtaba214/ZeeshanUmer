// components/case-studies/StrategyKeywords.jsx
import { Search, Sparkles, CheckCircle } from "lucide-react";

export const StrategyKeywords = ({ strategy, keywordsRanked, results }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "1.5rem",
        marginBottom: "2rem",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(30, 41, 59, 0.5)",
          padding: "clamp(1.25rem, 3vw, 1.75rem)",
          borderRadius: "1rem",
          border: "1px solid rgba(255, 255, 255, 0.05)",
        }}
      >
        <h3
          style={{
            color: "#F8FAFC",
            marginBottom: "1rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "clamp(1rem, 2vw, 1.125rem)",
          }}
        >
          <Search size={20} color="#22C55E" /> Strategy Implemented
        </h3>
        <ul
          style={{
            color: "#E2E8F0",
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}
        >
          {strategy.map((item, idx) => (
            <li
              key={idx}
              style={{
                padding: "0.5rem 0",
                borderBottom:
                  idx < strategy.length - 1
                    ? "1px solid rgba(255,255,255,0.05)"
                    : "none",
                display: "flex",
                alignItems: "flex-start",
                gap: "0.5rem",
                fontSize: "clamp(0.8rem, 1.5vw, 0.9rem)",
              }}
            >
              <CheckCircle
                size={16}
                color="#22C55E"
                style={{ marginTop: "0.125rem", flexShrink: 0 }}
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div
        style={{
          backgroundColor: "rgba(30, 41, 59, 0.5)",
          padding: "clamp(1.25rem, 3vw, 1.75rem)",
          borderRadius: "1rem",
          border: "1px solid rgba(255, 255, 255, 0.05)",
        }}
      >
        <h3
          style={{
            color: "#F8FAFC",
            marginBottom: "1rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "clamp(1rem, 2vw, 1.125rem)",
          }}
        >
          <Sparkles size={20} color="#22C55E" /> Keywords Ranked
        </h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {keywordsRanked.map((keyword, idx) => (
            <span
              key={idx}
              style={{
                padding: "0.375rem 0.75rem",
                backgroundColor: "rgba(34, 197, 94, 0.1)",
                border: "1px solid rgba(34, 197, 94, 0.2)",
                borderRadius: "9999px",
                fontSize: "clamp(0.7rem, 1.5vw, 0.8rem)",
                color: "#E2E8F0",
              }}
            >
              {keyword}
            </span>
          ))}
        </div>
        <div
          style={{
            marginTop: "1rem",
            color: "#22C55E",
            fontSize: "0.875rem",
          }}
        >
          <strong>{results.keywords}</strong>
        </div>
      </div>
    </div>
  );
};