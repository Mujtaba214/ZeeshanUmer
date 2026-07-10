import { ArrowDown, Download } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "4rem 1rem",
        marginTop: "2rem",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, #0B1F3A 0%, #0B1F3A 50%, rgba(30, 41, 59, 0.3) 100%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          zIndex: 10,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }}
      >
        {/* Left Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            textAlign: "left",
          }}
        >
          <h1
            style={{
              fontSize: "3.5rem",
              fontWeight: "bold",
              letterSpacing: "-0.025em",
              lineHeight: "1.1",
            }}
          >
            <span
              className="opacity-0 animate-fade-in"
              style={{ color: "#F8FAFC" }}
            >
              Hi, I'm
            </span>
            <span
              className="opacity-0 animate-fade-in-delay-1"
              style={{ color: "#22C55E", marginLeft: "0.5rem" }}
            >
              Zeeshan
            </span>
            <span
              className="text-gradient opacity-0 animate-fade-in-delay-2"
              style={{ marginLeft: "0.5rem" }}
            >
              Umer
            </span>
          </h1>

          <h2
            style={{
              fontSize: "1.5rem",
              color: "#38BDF8",
              opacity: 0,
              animation: "fadeIn 1s ease-out 0.6s forwards",
            }}
          >
            SEO Specialist | Technical SEO | Local SEO | eCommerce SEO | AI SEO
            (AEO & GEO)
          </h2>

          <p
            style={{
              fontSize: "1.125rem",
              color: "#E2E8F0",
              opacity: 0,
              animation: "fadeIn 1s ease-out 0.9s forwards",
              lineHeight: "1.75",
            }}
          >
            I help businesses increase organic traffic, dominate Google
            rankings, generate qualified leads, and grow revenue through
            data-driven SEO strategies. Specialized in Technical SEO, Local SEO,
            eCommerce SEO, AI Search Optimization (AEO & GEO), Google Business
            Profile Optimization, and High Authority Link Building.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "2rem",
              padding: "1rem 0",
              opacity: 0,
              animation: "fadeIn 1s ease-out 1.1s forwards",
            }}
          >
            <div style={{ textAlign: "left" }}>
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "#22C55E",
                }}
              >
                4+
              </div>
              <div style={{ color: "#E2E8F0", fontSize: "0.875rem" }}>
                Years Experience
              </div>
            </div>
            <div style={{ textAlign: "left" }}>
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "#22C55E",
                }}
              >
                100+
              </div>
              <div style={{ color: "#E2E8F0", fontSize: "0.875rem" }}>
                Keywords Ranked
              </div>
            </div>
            <div style={{ textAlign: "left" }}>
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "#22C55E",
                }}
              >
                30+
              </div>
              <div style={{ color: "#E2E8F0", fontSize: "0.875rem" }}>
                UK Businesses Optimized
              </div>
            </div>
          </div>

          <div
            style={{
              paddingTop: "1rem",
              opacity: 0,
              animation: "fadeIn 1s ease-out 1.2s forwards",
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <a href="#industries" className="btn-primary">
              View My Work
            </a>
            <a
              href="/Zeeshan-Umer-Resume.pdf"
              download
              className="btn-secondary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right Content - Graph Image */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <div
            style={{
              width: "100%",
              maxWidth: "500px",
              backgroundColor: "rgba(30, 41, 59, 0.5)",
              borderRadius: "1rem",
              padding: "1.5rem",
              border: "1px solid rgba(56, 189, 248, 0.1)",
              position: "relative",
            }}
          > */}
            {/* Image Container */}
            <div
              style={{
                width: "100%",
                height: "400px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                borderRadius: "0.5rem",
              }}
            >
              <img
                src="/public/seo-consultant-zeeshan.png" // ← Replace with your image path
                alt="Organic Growth Chart"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain", // or 'contain' based on your preference
                }}
              />
            {/* </div> */}

            {/* Stats Overlay (Optional - keep or remove) */}
            <div
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                backgroundColor: "rgba(11, 31, 58, 0.85)",
                padding: "0.75rem 1rem",
                borderRadius: "0.5rem",
                border: "1px solid rgba(56, 189, 248, 0.2)",
                textAlign: "center",
              }}
            >
              {/* <div
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "#22C55E",
                }}
              >
                +120%
              </div>
              <div style={{ color: "#E2E8F0", fontSize: "0.75rem" }}>
                Organic Growth
              </div> */}
            </div>

            {/* Image Label */}
            {/* <div
              style={{
                textAlign: "center",
                color: "#E2E8F0",
                fontSize: "0.75rem",
                marginTop: "0.5rem",
                opacity: 0.6,
              }}
            >
              Organic Traffic Growth Trend
            </div> */}
          </div>
        </div>
      </div>

      {/* <div style={{ 
        position: 'absolute', 
        bottom: '2rem', 
        left: '50%', 
        transform: 'translateX(-50%)', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        animation: 'bounce 2s infinite' 
      }}>
        <span style={{ fontSize: '0.875rem', color: '#E2E8F0', marginBottom: '0.5rem' }}>Scroll</span>
        <ArrowDown style={{ color: '#22C55E', height: '1.25rem', width: '1.25rem' }} />
      </div> */}
    </section>
  );
};
