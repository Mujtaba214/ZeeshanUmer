// components/case-studies/CaseStudyHeader.jsx
import { MapPin, Clock, Calendar, Building2 } from "lucide-react";

export const CaseStudyHeader = ({ data }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(30, 41, 59, 0.5)",
        borderRadius: "1rem",
        padding: "clamp(1.5rem, 4vw, 2.5rem)",
        marginBottom: "2rem",
        border: "1px solid rgba(255, 255, 255, 0.05)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div style={{ flex: 1 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
              marginBottom: "1rem",
            }}
          >
            <span
              style={{
                backgroundColor: "#22C55E",
                color: "#0F172A",
                padding: "0.25rem 0.75rem",
                borderRadius: "9999px",
                fontSize: "0.75rem",
                fontWeight: "bold",
              }}
            >
              Case Study
            </span>
            {data.tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                style={{
                  padding: "0.25rem 0.75rem",
                  fontSize: "0.75rem",
                  borderRadius: "9999px",
                  backgroundColor: "rgba(56, 189, 248, 0.1)",
                  color: "#38BDF8",
                  border: "1px solid rgba(56, 189, 248, 0.2)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          <h1
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
              fontWeight: "bold",
              color: "#F8FAFC",
              marginBottom: "0.5rem",
            }}
          >
            {data.company}
          </h1>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1.5rem",
              color: "#94A3B8",
              fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <MapPin size={16} color="#22C55E" /> {data.location}
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Clock size={16} color="#22C55E" /> {data.duration}
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Calendar size={16} color="#22C55E" /> {data.publishedDate}
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Building2 size={16} color="#22C55E" /> {data.industry}
            </span>
          </div>
        </div>

        {/* Results Summary */}
        <div
          className="results-summary"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1rem",
            padding: "1rem",
            backgroundColor: "rgba(11, 31, 58, 0.5)",
            borderRadius: "0.5rem",
            minWidth: "200px",
            flexShrink: 0,
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                color: "#22C55E",
                fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
                fontWeight: "bold",
              }}
            >
              {data.results.traffic || data.results.calls}
            </div>
            <div style={{ color: "#94A3B8", fontSize: "0.75rem" }}>
              {data.results.traffic ? "Traffic" : "Calls"}
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                color: "#22C55E",
                fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
                fontWeight: "bold",
              }}
            >
              {data.results.rankings || data.results.visibility}
            </div>
            <div style={{ color: "#94A3B8", fontSize: "0.75rem" }}>
              {data.results.rankings ? "Rankings" : "Visibility"}
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                color: "#22C55E",
                fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
                fontWeight: "bold",
              }}
            >
              {data.results.leads}
            </div>
            <div style={{ color: "#94A3B8", fontSize: "0.75rem" }}>Leads</div>
          </div>
        </div>
      </div>

      {/* Mobile Responsive Styles - Only modifies mobile layout */}
      <style jsx>{`
        @media (max-width: 768px) {
          /* Make results summary full width on mobile */
          .results-summary {
            width: 100%;
            min-width: unset !important;
            flex-shrink: 1 !important;
          }
        }

        @media (max-width: 480px) {
          /* Reduce padding on very small screens */
          div[style*="padding: clamp(1.5rem, 4vw, 2.5rem)"] {
            padding: 1rem !important;
          }

          /* Smaller gap between elements */
          div[style*="display: flex; flex-wrap: wrap; gap: 1.5rem"] {
            gap: 0.75rem !important;
          }

          /* Smaller tags */
          span[style*="font-size: 0.75rem"] {
            font-size: 0.65rem !important;
            padding: 0.2rem 0.5rem !important;
          }

          /* Adjust results grid gap and padding */
          .results-summary {
            gap: 0.5rem !important;
            padding: 0.75rem !important;
          }

          /* Smaller result numbers */
          .results-summary div[style*="font-weight: bold"] {
            font-size: 1rem !important;
          }

          /* Smaller result labels */
          .results-summary div[style*="font-size: 0.75rem"] {
            font-size: 0.6rem !important;
          }

          /* Smaller icons in info badges */
          svg[width="16"] {
            width: 14px !important;
            height: 14px !important;
          }

          /* Reduce heading size */
          h1 {
            font-size: 1.25rem !important;
          }
        }

        @media (max-width: 360px) {
          /* Results summary stays 3 columns but with less padding */
          .results-summary {
            gap: 0.25rem !important;
            padding: 0.5rem !important;
          }

          /* Even smaller text on very small screens */
          .results-summary div[style*="font-weight: bold"] {
            font-size: 0.8rem !important;
          }

          .results-summary div[style*="font-size: 0.75rem"] {
            font-size: 0.5rem !important;
          }
        }
      `}</style>
    </div>
  );
};