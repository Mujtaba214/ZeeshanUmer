// components/case-studies/ResultsSection.jsx
import { BarChart3 } from "lucide-react";

export const ResultsSection = ({ detailedResults }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(30, 41, 59, 0.5)",
        padding: "clamp(1.5rem, 3vw, 2rem)",
        borderRadius: "1rem",
        marginBottom: "2rem",
        border: "1px solid rgba(255, 255, 255, 0.05)",
      }}
    >
      <h3
        style={{
          color: "#F8FAFC",
          marginBottom: "1.5rem",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
          fontSize: "clamp(1.125rem, 2vw, 1.25rem)",
        }}
      >
        <BarChart3 size={20} color="#22C55E" /> Detailed Results
      </h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1rem",
        }}
      >
        {Object.entries(detailedResults).map(([key, value], idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: "rgba(11, 31, 58, 0.5)",
              padding: "1rem",
              borderRadius: "0.5rem",
              textAlign: "center",
            }}
          >
            <div
              style={{
                color: "#94A3B8",
                fontSize: "0.7rem",
                textTransform: "capitalize",
                marginBottom: "0.25rem",
              }}
            >
              {key.replace(/([A-Z])/g, " $1").trim()}
            </div>
            <div
              style={{
                color: "#22C55E",
                fontWeight: "bold",
                fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
              }}
            >
              {value}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};