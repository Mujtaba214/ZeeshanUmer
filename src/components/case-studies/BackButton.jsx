// components/case-studies/BackButton.jsx
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const BackButton = () => {
  return (
    <Link
      to="/#industries"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        color: "#22C55E",
        textDecoration: "none",
        marginBottom: "2rem",
        fontSize: "0.875rem",
        transition: "color 0.3s",
      }}
      onMouseEnter={(e) => (e.target.style.color = "#38BDF8")}
      onMouseLeave={(e) => (e.target.style.color = "#22C55E")}
    >
      <ArrowLeft size={16} /> Back to Case Studies
    </Link>
  );
};