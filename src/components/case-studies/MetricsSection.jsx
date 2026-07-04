// components/case-studies/MetricsSection.jsx
import { TrendingUp } from "lucide-react";

export const MetricsSection = ({ metrics }) => {
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
        <TrendingUp size={20} color="#22C55E" /> Key Metrics
      </h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1rem",
        }}
      >
        {metrics.map((metric, idx) => (
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
                fontSize: "0.875rem",
                marginBottom: "0.5rem",
              }}
            >
              {metric.label}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "1rem",
                alignItems: "center",
              }}
            >
              <div>
                <div style={{ color: "#EF4444", fontSize: "0.7rem" }}>Before</div>
                <div
                  style={{
                    color: "#F8FAFC",
                    fontWeight: "bold",
                    fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
                  }}
                >
                  {metric.before}
                </div>
              </div>
              <div style={{ color: "#22C55E", fontSize: "1.25rem" }}>→</div>
              <div>
                <div style={{ color: "#22C55E", fontSize: "0.7rem" }}>After</div>
                <div
                  style={{
                    color: "#F8FAFC",
                    fontWeight: "bold",
                    fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
                  }}
                >
                  {metric.after}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};