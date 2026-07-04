// components/case-studies/ChallengeSolution.jsx
import { Target, CheckCircle } from "lucide-react";

export const ChallengeSolution = ({ challenge, solution }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
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
            marginBottom: "0.75rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "clamp(1rem, 2vw, 1.125rem)",
          }}
        >
          <Target size={20} color="#EF4444" /> Challenge
        </h3>
        <p
          style={{
            color: "#E2E8F0",
            lineHeight: "1.7",
            fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
          }}
        >
          {challenge}
        </p>
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
            marginBottom: "0.75rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "clamp(1rem, 2vw, 1.125rem)",
          }}
        >
          <CheckCircle size={20} color="#22C55E" /> Solution
        </h3>
        <p
          style={{
            color: "#E2E8F0",
            lineHeight: "1.7",
            fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
          }}
        >
          {solution}
        </p>
      </div>
    </div>
  );
};