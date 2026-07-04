// components/case-studies/ImageCarousel.jsx
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const ImageCarousel = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Fix image paths by removing double slashes
  const fixImagePath = (path) => {
    if (!path) return "";
    // Remove double slashes and ensure proper path
    return path.replace(/\/\//g, "/");
  };

  const allImages = [
    { src: fixImagePath(images.before), label: "Before" },
    { src: fixImagePath(images.after), label: "After" },
    ...images.gallery.map((img) => ({ 
      src: fixImagePath(img), 
      label: "Gallery" 
    })),
  ];

  useEffect(() => {
    let interval;
    if (isAutoPlaying && allImages.length > 1) {
      interval = setInterval(() => {
        setSelectedImage((prev) => (prev + 1) % allImages.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, allImages.length]);

  const nextImage = () => {
    setIsAutoPlaying(false);
    setSelectedImage((prev) => (prev + 1) % allImages.length);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const prevImage = () => {
    setIsAutoPlaying(false);
    setSelectedImage((prev) => (prev - 1 + allImages.length) % allImages.length);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToImage = (index) => {
    setIsAutoPlaying(false);
    setSelectedImage(index);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <div
      style={{
        backgroundColor: "rgba(30, 41, 59, 0.5)",
        borderRadius: "1rem",
        padding: "1.5rem",
        border: "1px solid rgba(255, 255, 255, 0.05)",
        marginBottom: "2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <h3
          style={{
            color: "#F8FAFC",
            fontSize: "clamp(1.125rem, 2vw, 1.25rem)",
          }}
        >
          Project Gallery
        </h3>
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <span style={{ color: "#94A3B8", fontSize: "0.8rem" }}>
            {selectedImage + 1} / {allImages.length}
          </span>
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            style={{
              background: "none",
              border: "none",
              color: "#94A3B8",
              cursor: "pointer",
              padding: "0.25rem 0.5rem",
              borderRadius: "0.25rem",
              transition: "all 0.3s",
              fontSize: "0.8rem",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(34, 197, 94, 0.1)";
              e.currentTarget.style.color = "#22C55E";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#94A3B8";
            }}
          >
            {isAutoPlaying ? "⏸" : "▶"}
          </button>
        </div>
      </div>

      {/* Main Image */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "400px",
          backgroundColor: "rgba(11, 31, 58, 0.5)",
          borderRadius: "0.5rem",
          overflow: "hidden",
          marginBottom: "1rem",
        }}
      >
        {allImages[selectedImage]?.src ? (
          <img
            src={allImages[selectedImage].src}
            alt={allImages[selectedImage].label || "Project image"}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              transition: "opacity 0.5s ease",
            }}
            onError={(e) => {
              // If image fails to load, show placeholder
              e.target.style.display = "none";
              e.target.parentElement.querySelector(".fallback").style.display = "flex";
            }}
          />
        ) : null}
        
        {/* Fallback placeholder */}
        <div
          className="fallback"
          style={{
            width: "100%",
            height: "100%",
            display: allImages[selectedImage]?.src ? "none" : "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#94A3B8",
            fontSize: "1.125rem",
            background:
              "linear-gradient(135deg, rgba(34, 197, 94, 0.05), rgba(56, 189, 248, 0.05))",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <span style={{ fontSize: "3rem" }}>🖼️</span>
          <span>Image Placeholder</span>
          <span style={{ fontSize: "0.75rem", color: "#64748B" }}>
            {allImages[selectedImage]?.src?.split("/").pop() || "No image"}
          </span>
          {allImages[selectedImage]?.label && (
            <span
              style={{
                fontSize: "0.7rem",
                color: "#22C55E",
                backgroundColor: "rgba(34, 197, 94, 0.1)",
                padding: "0.25rem 0.75rem",
                borderRadius: "9999px",
                marginTop: "0.25rem",
              }}
            >
              {allImages[selectedImage].label}
            </span>
          )}
        </div>

        {/* Navigation Arrows */}
        {allImages.length > 1 && (
          <>
            <button
              onClick={prevImage}
              style={{
                position: "absolute",
                left: "1rem",
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(0, 0, 0, 0.5)",
                border: "none",
                color: "#F8FAFC",
                cursor: "pointer",
                padding: "0.75rem",
                borderRadius: "9999px",
                transition: "all 0.3s",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 10,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(34, 197, 94, 0.7)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
              }}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              style={{
                position: "absolute",
                right: "1rem",
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(0, 0, 0, 0.5)",
                border: "none",
                color: "#F8FAFC",
                cursor: "pointer",
                padding: "0.75rem",
                borderRadius: "9999px",
                transition: "all 0.3s",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 10,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(34, 197, 94, 0.7)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
              }}
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>

      {/* Progress Indicators */}
      {allImages.length > 1 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.5rem",
            marginBottom: "1rem",
          }}
        >
          {allImages.map((_, idx) => (
            <div
              key={idx}
              onClick={() => goToImage(idx)}
              style={{
                width: selectedImage === idx ? "2rem" : "0.75rem",
                height: "0.5rem",
                borderRadius: "9999px",
                backgroundColor:
                  selectedImage === idx ? "#22C55E" : "rgba(255,255,255,0.2)",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                if (selectedImage !== idx) {
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.4)";
                }
              }}
              onMouseLeave={(e) => {
                if (selectedImage !== idx) {
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)";
                }
              }}
            />
          ))}
        </div>
      )}

      {/* Thumbnails */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
          gap: "0.75rem",
        }}
      >
        {allImages.map((img, idx) => (
          <div
            key={idx}
            onClick={() => goToImage(idx)}
            style={{
              height: "80px",
              backgroundColor: "rgba(11, 31, 58, 0.5)",
              borderRadius: "0.375rem",
              cursor: "pointer",
              border:
                selectedImage === idx
                  ? "2px solid #22C55E"
                  : "1px solid rgba(255, 255, 255, 0.05)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#94A3B8",
              fontSize: "0.65rem",
              transition: "all 0.3s",
              padding: "0.25rem",
              textAlign: "center",
              flexDirection: "column",
              gap: "0.25rem",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(34, 197, 94, 0.5)";
            }}
            onMouseLeave={(e) => {
              if (selectedImage !== idx) {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.05)";
              }
            }}
          >
            {img.src ? (
              <img
                src={img.src}
                alt={img.label}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.querySelector(".thumb-fallback").style.display = "flex";
                }}
              />
            ) : null}
            <div
              className="thumb-fallback"
              style={{
                display: img.src ? "none" : "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <span>📷</span>
              <span style={{ fontSize: "0.55rem", wordBreak: "break-all" }}>
                {img.src?.split("/").pop()?.slice(0, 12) || "No image"}...
              </span>
            </div>
            {img.label && (
              <span
                style={{
                  position: "absolute",
                  top: "2px",
                  right: "2px",
                  fontSize: "0.5rem",
                  color: "#22C55E",
                  backgroundColor: "rgba(34, 197, 94, 0.1)",
                  padding: "0.1rem 0.3rem",
                  borderRadius: "9999px",
                  zIndex: 5,
                }}
              >
                {img.label === "Before" ? "📉" : img.label === "After" ? "📈" : ""}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};