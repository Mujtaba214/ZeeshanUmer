// components/case-studies/HighlightsSection.jsx
import { Award } from "lucide-react";

export const HighlightsSection = ({ highlights }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(34, 197, 94, 0.05)",
        padding: "clamp(1.25rem, 3vw, 1.75rem)",
        borderRadius: "1rem",
        marginBottom: "2rem",
        border: "1px solid rgba(34, 197, 94, 0.1)",
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
        <Award size={20} color="#FBBF24" /> Portfolio Highlights
      </h3>
      <ul
        style={{
          color: "#E2E8F0",
          listStyle: "none",
          padding: 0,
          margin: 0,
        }}
      >
        {highlights.map((highlight, idx) => (
          <li
            key={idx}
            style={{
              padding: "0.5rem 0",
              borderBottom:
                idx < highlights.length - 1
                  ? "1px solid rgba(255,255,255,0.05)"
                  : "none",
              display: "flex",
              alignItems: "flex-start",
              gap: "0.5rem",
              fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
            }}
          >
            <span style={{ color: "#22C55E", marginTop: "0.125rem" }}>🚀</span>
            {highlight}
          </li>
        ))}
      </ul>
    </div>
  );
};