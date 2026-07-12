import { Link } from "react-router-dom";
import {
  ExternalLink,
  TrendingUp,
  Users,
  Search,
  Phone,
  MapPin,
  Star,
  Clock,
} from "lucide-react";
import poppyLaneThumb from "/projects/Poppylane Clothing/PoppyLaneClothingThumbnail.png";
import antyresThumb from "/Antyres Thumbnail.png";
import kmtsThumb from "/Kmt Services Thumbnail.png";
import mtsThumb from "/Mobile Tyre Services Thumbnail.png";
import embThumb from "/EMBathrooms Thumbnail.png";
import dmdsThumb from "/Dominion Driving School Thumbnail.png";
import avmThumb from "/Autoveto Mot Thumbnail.png";
import sstsThumb from "/Sussex Tyre Services Thumbnail.png";
import ttshThumb from "/projects/The Tyre Shop Harlo/GSC.png";
import mttcThumb from "/Mobile Tyres Team Crawley Thumbnail.png";

const caseStudies = [
  {
    id: "poppylane-clothing",
    company: "PoppyLane Clothing",
    description: "eCommerce SEO growth for Shopify fashion store",
    image: poppyLaneThumb,
    tags: ["eCommerce SEO", "Shopify SEO", "Fashion SEO", "Revenue Growth"],
    results: {
      traffic: "+240.6%",
      rankings: "+105%",
      leads: "+167%",
    },
    keywords: [
      "womens tops Ireland",
      "jeans Ireland",
      "coat",
      "Sligo clothes shops",
    ],
    url: "/case-studies/poppylane-clothing",
  },
  {
    id: "antyres-uk",
    company: "AN Tyres (UK)",
    description: "Garage SEO and local service optimization",
    image: antyresThumb,
    tags: ["Garage SEO", "Local SEO", "Technical SEO", "Citation Building"],
    results: {
      traffic: "+181%",
      rankings: "+153%",
      leads: "+32.9%",
    },
    keywords: [
      "Brake Repair Maidstone",
      "Full Car Service Maidstone",
      "Part Worn Tyres Maidstone",
      "Mobile Tyre Fitting Maidstone",
    ],
    url: "/case-studies/antyres-uk",
  },
  {
    id: "kent-mobile-tyre-services",
    company: "Kent Mobile Tyre Services",
    description: "Local SEO & organic growth for mobile tyre fitting",
    image: kmtsThumb,
    tags: [
      "Local SEO",
      "GBP Optimization",
      "Geo Pages",
      "Citation Building",
      "Reviews Strategy",
    ],
    results: {
      traffic: "+1,765%",
      rankings: "+93%",
      leads: "+429.2%",
    },
    keywords: [
      "Mobile Tyre Fitting Kent",
      "24/7 Tyre Service",
      "Emergency Tyre Repair",
      "Mobile Mechanic Kent",
    ],
    url: "/case-studies/kent-mobile-tyre-services",
  },
  {
    id: "mobile-tyre-service-london",
    company: "Mobile Tyre Service London",
    description: "Local SEO success with Google Business Profile optimization",
    image: mtsThumb,
    tags: [
      "Local SEO",
      "GBP Optimization",
      "Geo Pages",
      "Citation Building",
      "Reviews Strategy",
    ],
    results: {
      traffic: "+200%",
      rankings: "+150%",
      leads: "+35.2%",
    },
    keywords: [
      "Mobile Tyre Fitting London",
      "Same Day Tyre Service",
      "Emergency Tyre Repair",
      "24/7 Mobile Tyre Service",
    ],
    url: "/case-studies/mobile-tyre-service-london",
  },
  {
    id: "em-bathrooms",
    company: "EM Bathrooms",
    description: "UK SEO growth for bathroom fitting services",
    image: embThumb,
    tags: ["Local SEO", "On-Page SEO", "Content Strategy", "Link Building"],
    results: {
      traffic: "+186.2%",
      rankings: "+60%",
      leads: "+190%",
    },
    keywords: [
      "Bathroom Fitters London",
      "Bathroom Renovation",
      "Wet Room Installation",
      "Bathroom Design",
    ],
    url: "/case-studies/em-bathrooms",
  },
  {
    id: "dominion-driving-school",
    company: "Dominion Driving School",
    description: "Canada SEO growth for driving school",
    image: dmdsThumb,
    tags: ["Local SEO", "Content Marketing", "Social Media", "Review Strategy"],
    results: {
      traffic: "+281%",
      rankings: "+55%",
      leads: "+175%",
    },
    keywords: [
      "Driving School Vancouver",
      "Driving Lessons",
      "Behind the Wheel Training",
      "ICBC Approved School",
    ],
    url: "/case-studies/dominion-driving-school",
  },
  {
    id: "autoveto-mot",
    company: "Autoveto MOT",
    description: "Local SEO growth for MOT testing center",
    image: avmThumb,
    tags: ["Local SEO", "GBP Optimization", "Review Management", "Geo Pages"],
    results: {
      traffic: "+88.5%",
      rankings: "+48.3%",
      leads: "+60.2%",
    },
    keywords: [
      "MOT Test Near Me",
      "Class 4 MOT",
      "MOT Testing Center",
      "Car Service UK",
    ],
    url: "/case-studies/autoveto-mot",
  },
  {
    id: "sussex-tyre-services",
    company: "Sussex Tyre Services",
    description: "Local SEO growth for Worthing tyre services",
    image: sstsThumb,
    tags: ["Local SEO", "GBP Optimization", "Citation Building", "On-Page SEO"],
    results: {
      traffic: "+498%",
      rankings: "+235%",
      leads: "+172%",
    },
    keywords: [
      "Tyre fitting Worthing",
      "Tyres Worthing",
      "Puncture repair Worthing",
      "Mobile tyre fitting Worthing",
    ],
    url: "/case-studies/sussex-tyre-services",
  },
  {
    id: "the-tyre-shop-harlow",
    company: "The Tyre Shop Harlow",
    description: "Local SEO growth for Harlow tyre services",
    image: ttshThumb,
    tags: ["Local SEO", "Technical SEO", "Citation Building", "On-Page SEO"],
    results: {
      traffic: "+21.4%",
      rankings: "+26.5%",
      leads: "+105%",
    },
    keywords: [
      "Tyre fitting Harlow",
      "Tyre shop near me",
      "Tyres Harlow",
      "Mobile tyre fitting Harlow",
    ],
    url: "/case-studies/the-tyre-shop-harlow",
  },
  {
    id: "mobile-tyres-team-crawley",
    company: "Mobile Tyres Team Crawley",
    description: "Local SEO growth for mobile tyre services in Crawley",
    image: mttcThumb,
    tags: [
      "Local SEO",
      "GBP Optimization",
      "Service Pages",
      "Citation Building",
    ],
    results: {
      traffic: "+80.6%",
      rankings: "+242.3%",
      leads: "+344.8%",
    },
    keywords: [
      "Mobile tyre fitting Crawley",
      "Emergency mobile tyre Crawley",
      "Mobile tyre fitting Horley",
      "24/7 mobile tyre fitting Crawley",
    ],
    url: "/case-studies/mobile-tyres-team-crawley",
  },
];



export const IndustriesSection = () => {
  return (
    <section
      id="industries"
      style={{
        padding: "6rem 1rem",
        position: "relative",
        backgroundColor: "rgba(30, 41, 59, 0.3)",
      }}
    >
      <div style={{ maxWidth: "84rem", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "clamp(1.75rem, 5vw, 2.25rem)",
            fontWeight: "bold",
            marginBottom: "1rem",
            textAlign: "center",
          }}
        >
          Featured <span style={{ color: "#22C55E" }}>Case Studies</span>
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "#E2E8F0",
            maxWidth: "42rem",
            margin: "0 auto 3rem",
            fontSize: "clamp(0.95rem, 2vw, 1.125rem)",
          }}
        >
          Real results delivered for real businesses across multiple industries
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "2rem",
          }}
        >
          {caseStudies.map((study, index) => (
            <Link
              key={index}
              to={study.url}
              style={{
                textDecoration: "none",
                display: "block",
                height: "100%",
              }}
            >
              <div
                className="card"
                style={{
                  overflow: "hidden",
                  padding: 0,
                  transition: "all 0.3s",
                  backgroundColor: "rgba(30, 41, 59, 0.5)",
                  borderRadius: "1rem",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 30px rgba(34, 197, 94, 0.1)";
                  e.currentTarget.style.borderColor = "rgba(34, 197, 94, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.05)";
                }}
              >
                <div
                  style={{
                    height: "12rem",
                    backgroundColor: "rgba(34, 197, 94, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "3rem",
                    position: "relative",
                    backgroundImage: `url(${study.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {!study.image && (
                    <span style={{ opacity: 0.3 }}>
                      {study.company.split(" ")[0]}
                    </span>
                  )}
                  <div
                    style={{
                      position: "absolute",
                      top: "1rem",
                      right: "1rem",
                      padding: "0.25rem 1rem",
                      backgroundColor: "#22C55E",
                      color: "#0F172A",
                      borderRadius: "9999px",
                      fontSize: "0.75rem",
                      fontWeight: "bold",
                    }}
                  >
                    LIVE
                  </div>
                </div>
                <div
                  style={{
                    padding: "1.5rem",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "clamp(1.125rem, 2vw, 1.25rem)",
                      fontWeight: "600",
                      color: "#F8FAFC",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {study.company}
                  </h3>
                  <p
                    style={{
                      color: "#22C55E",
                      marginBottom: "1rem",
                      fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
                    }}
                  >
                    {study.description}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                      marginBottom: "1rem",
                    }}
                  >
                    {study.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        style={{
                          padding: "0.25rem 0.5rem",
                          fontSize: "0.7rem",
                          borderRadius: "9999px",
                          backgroundColor: "rgba(11, 31, 58, 0.5)",
                          color: "#38BDF8",
                          border: "1px solid rgba(56, 189, 248, 0.2)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(3, 1fr)",
                      gap: "0.75rem",
                      marginBottom: "1rem",
                      padding: "0.75rem",
                      backgroundColor: "rgba(11, 31, 58, 0.3)",
                      borderRadius: "0.5rem",
                    }}
                  >
                    <div style={{ textAlign: "center" }}>
                      <div
                        style={{
                          color: "#22C55E",
                          fontWeight: "bold",
                          fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
                        }}
                      >
                        {study.results.calls || study.results.traffic}
                      </div>
                      <div style={{ color: "#94A3B8", fontSize: "0.65rem" }}>
                        {study.results.calls ? "Calls" : "Traffic"}
                      </div>
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <div
                        style={{
                          color: "#22C55E",
                          fontWeight: "bold",
                          fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
                        }}
                      >
                        {study.results.visibility || study.results.rankings}
                      </div>
                      <div style={{ color: "#94A3B8", fontSize: "0.65rem" }}>
                        {study.results.visibility ? "Visibility" : "Rankings"}
                      </div>
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <div
                        style={{
                          color: "#22C55E",
                          fontWeight: "bold",
                          fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
                        }}
                      >
                        {study.results.leads}
                      </div>
                      <div style={{ color: "#94A3B8", fontSize: "0.65rem" }}>
                        Leads
                      </div>
                    </div>
                  </div>

                  {study.keywords && (
                    <div style={{ marginBottom: "1rem" }}>
                      <p
                        style={{
                          color: "#94A3B8",
                          fontSize: "0.8rem",
                          marginBottom: "0.25rem",
                        }}
                      >
                        Keywords Ranked:
                      </p>
                      {study.keywords.slice(0, 3).map((keyword, idx) => (
                        <div
                          key={idx}
                          style={{
                            padding: "0.125rem 0",
                            color: "#E2E8F0",
                            fontSize: "0.8rem",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                          }}
                        >
                          <span style={{ color: "#22C55E" }}>✓</span>
                          {keyword}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Optional: Keep the link text but make it non-interactive since the whole card is clickable */}
                  <div
                    style={{
                      color: "#22C55E",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      marginTop: "auto",
                      fontWeight: "500",
                      fontSize: "clamp(0.875rem, 1.5vw, 0.95rem)",
                      pointerEvents: "none", // Prevents double-click issues
                    }}
                  >
                    Read Full Case Study <ExternalLink size={16} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Responsive Styles */}
      <style jsx>{`
        @media (max-width: 640px) {
          section {
            padding: 3rem 0.75rem;
          }

          .card {
            min-height: auto;
          }
        }

        @media (max-width: 480px) {
          section {
            padding: 2.5rem 0.5rem;
          }
        }

        @media (min-width: 768px) and (max-width: 1024px) {
          .card-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (min-width: 1024px) {
          .card-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
};
