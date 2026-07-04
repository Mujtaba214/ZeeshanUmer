// components/case-studies/CTASection.jsx
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export const CTASection = () => {
  return (
    <div
      style={{
        backgroundColor: "rgba(34, 197, 94, 0.1)",
        padding: "clamp(1.5rem, 4vw, 2.5rem)",
        borderRadius: "1rem",
        textAlign: "center",
        border: "1px solid rgba(34, 197, 94, 0.2)",
      }}
    >
      <h3
        style={{
          color: "#F8FAFC",
          marginBottom: "0.5rem",
          fontSize: "clamp(1.25rem, 3vw, 1.5rem)",
        }}
      >
        Ready to Achieve Similar Results?
      </h3>
      <p
        style={{
          color: "#94A3B8",
          marginBottom: "1.5rem",
          maxWidth: "600px",
          marginLeft: "auto",
          marginRight: "auto",
          fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)",
        }}
      >
        Let's discuss how I can help your business grow through strategic SEO
        and digital marketing.
      </p>
      <Link
        to="/#contact"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: "0.75rem 2rem",
          backgroundColor: "#22C55E",
          color: "#0F172A",
          fontWeight: "600",
          borderRadius: "0.5rem",
          textDecoration: "none",
          transition: "all 0.3s",
          fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#16A34A";
          e.currentTarget.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#22C55E";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        Get Started <ChevronRight size={18} />
      </Link>
    </div>
  );
};