// components/case-studies/BeforeAfterSection.jsx (Responsive version)
import { TrendingUp, ArrowDown, ArrowRight } from "lucide-react";

export const BeforeAfterSection = ({ images }) => {
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
        <TrendingUp size={20} color="#22C55E" /> Before & After Comparison
      </h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
          alignItems: "center",
        }}
      >
        {/* Before Image */}
        <div
          style={{
            backgroundColor: "rgba(11, 31, 58, 0.5)",
            borderRadius: "0.5rem",
            overflow: "hidden",
            border: "1px solid rgba(239, 68, 68, 0.2)",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0.75rem",
              left: "0.75rem",
              backgroundColor: "#EF4444",
              color: "#F8FAFC",
              padding: "0.25rem 0.75rem",
              borderRadius: "9999px",
              fontSize: "0.7rem",
              fontWeight: "bold",
              zIndex: 5,
            }}
          >
            BEFORE
          </div>
          <div
            style={{
              width: "100%",
              height: "250px",
              backgroundColor: "rgba(239, 68, 68, 0.05)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {images.before ? (
              <img
                src={images.before}
                alt="Before"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  padding: "0.5rem",
                }}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.querySelector(".fallback").style.display = "flex";
                }}
              />
            ) : null}
            <div
              className="fallback"
              style={{
                display: images.before ? "none" : "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                color: "#94A3B8",
                padding: "1rem",
              }}
            >
              <span style={{ fontSize: "2rem" }}>📊</span>
              <span style={{ fontSize: "0.875rem" }}>Before Image</span>
            </div>
          </div>
          <div
            style={{
              padding: "0.75rem 1rem",
              backgroundColor: "rgba(239, 68, 68, 0.05)",
              borderTop: "1px solid rgba(239, 68, 68, 0.1)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* <span style={{ color: "#94A3B8", fontSize: "0.75rem" }}>
              {images.before?.split("/").pop() || "No image"}
            </span> */}
            <span style={{ color: "#EF4444", fontSize: "0.75rem", fontWeight: "600" }}>
              Before
            </span>
          </div>
        </div>

        {/* Arrow Indicator - Shows right arrow on desktop, down arrow on mobile */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#22C55E",
          }}
        >
          <span className="desktop-arrow">
            <ArrowRight size={32} />
          </span>
          <span className="mobile-arrow">
            <ArrowDown size={32} />
          </span>
        </div>

        {/* After Image */}
        <div
          style={{
            backgroundColor: "rgba(11, 31, 58, 0.5)",
            borderRadius: "0.5rem",
            overflow: "hidden",
            border: "1px solid rgba(34, 197, 94, 0.2)",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0.75rem",
              left: "0.75rem",
              backgroundColor: "#22C55E",
              color: "#0F172A",
              padding: "0.25rem 0.75rem",
              borderRadius: "9999px",
              fontSize: "0.7rem",
              fontWeight: "bold",
              zIndex: 5,
            }}
          >
            AFTER
          </div>
          <div
            style={{
              width: "100%",
              height: "250px",
              backgroundColor: "rgba(34, 197, 94, 0.05)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {images.after ? (
              <img
                src={images.after}
                alt="After"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  padding: "0.5rem",
                }}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.querySelector(".fallback").style.display = "flex";
                }}
              />
            ) : null}
            <div
              className="fallback"
              style={{
                display: images.after ? "none" : "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                color: "#94A3B8",
                padding: "1rem",
              }}
            >
              <span style={{ fontSize: "2rem" }}>📈</span>
              <span style={{ fontSize: "0.875rem" }}>After Image</span>
            </div>
          </div>
          <div
            style={{
              padding: "0.75rem 1rem",
              backgroundColor: "rgba(34, 197, 94, 0.05)",
              borderTop: "1px solid rgba(34, 197, 94, 0.1)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* <span style={{ color: "#94A3B8", fontSize: "0.75rem" }}>
              {images.after?.split("/").pop() || "No image"}
            </span> */}
            <span style={{ color: "#22C55E", fontSize: "0.75rem", fontWeight: "600" }}>
              After
            </span>
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        .desktop-arrow {
          display: block;
        }
        .mobile-arrow {
          display: none;
        }

        @media (max-width: 768px) {
          .desktop-arrow {
            display: none;
          }
          .mobile-arrow {
            display: block;
          }
        }

        @media (max-width: 640px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};