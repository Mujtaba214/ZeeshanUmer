// components/case-studies/ToolsSection.jsx
import { Zap } from "lucide-react";

export const ToolsSection = ({ tools }) => {
  if (!tools) return null;

  return (
    <div
      style={{
        backgroundColor: "rgba(30, 41, 59, 0.5)",
        padding: "clamp(1.25rem, 3vw, 1.75rem)",
        borderRadius: "1rem",
        marginBottom: "2rem",
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
        <Zap size={20} color="#22C55E" /> Tools Used
      </h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
        {tools.map((tool, idx) => (
          <span
            key={idx}
            style={{
              padding: "0.375rem 0.75rem",
              backgroundColor: "rgba(56, 189, 248, 0.1)",
              border: "1px solid rgba(56, 189, 248, 0.2)",
              borderRadius: "9999px",
              fontSize: "clamp(0.75rem, 1.5vw, 0.85rem)",
              color: "#38BDF8",
            }}
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
};