// components/case-studies/TestimonialSection.jsx
import { Star } from "lucide-react";

export const Testimonial = ({ testimonial, testimonialAuthor }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(34, 197, 94, 0.05)",
        padding: "clamp(1.5rem, 3vw, 2rem)",
        borderRadius: "1rem",
        border: "1px solid rgba(34, 197, 94, 0.1)",
        marginBottom: "2rem",
      }}
    >
      <div style={{ display: "flex", gap: "0.25rem", marginBottom: "0.75rem" }}>
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={20} color="#FBBF24" fill="#FBBF24" />
        ))}
      </div>
      <p
        style={{
          color: "#F8FAFC",
          fontSize: "clamp(1rem, 2vw, 1.125rem)",
          fontStyle: "italic",
          lineHeight: "1.7",
        }}
      >
        "{testimonial}"
      </p>
      <div
        style={{
          marginTop: "0.75rem",
          color: "#22C55E",
          fontWeight: "bold",
        }}
      >
        — {testimonialAuthor}
      </div>
    </div>
  );
};