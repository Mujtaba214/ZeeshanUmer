import { Link } from 'react-router-dom';
import { ExternalLink, TrendingUp, Users, Search, Phone, MapPin, Star, Clock } from "lucide-react";

const caseStudies = [
  {
    id: "antyres-uk",
    company: "Antyres UK",
    description: "Garage SEO and local service optimization",
    image: "/projects/antyres.jpg",
    tags: ["Garage SEO", "Local SEO", "Technical SEO", "Citation Building"],
    results: {
      traffic: "+280%",
      rankings: "+45%",
      leads: "+150%"
    },
    keywords: [
      "Brake Repair Maidstone",
      "Part Worn Tyres",
      "Car Service",
      "Tyre Fitting"
    ],
    url: "/case-studies/antyres-uk"
  },
  {
    id: "autoveto-mot",
    company: "Autoveto MOT",
    description: "Local SEO growth for MOT testing center",
    image: "/projects/autoveto-mot.jpg",
    tags: ["Local SEO", "GBP Optimization", "Review Management", "Geo Pages"],
    results: {
      calls: "+42%",
      visibility: "+180%",
      leads: "+200%"
    },
    keywords: [
      "MOT Test Near Me",
      "Class 4 MOT",
      "MOT Testing Center",
      "Car Service"
    ],
    url: "/case-studies/autoveto-mot"
  },
  {
    id: "dominion-driving-school",
    company: "Dominion Driving School",
    description: "Canada SEO growth for driving school",
    image: "/projects/dominion-driving.jpg",
    tags: ["Local SEO", "Content Marketing", "Social Media", "Review Strategy"],
    results: {
      traffic: "+320%",
      rankings: "+55%",
      leads: "+175%"
    },
    keywords: [
      "Driving School Vancouver",
      "Driving Lessons",
      "Behind the Wheel Training",
      "ICBC Approved"
    ],
    url: "/case-studies/dominion-driving-school"
  },
  {
    id: "em-bathrooms",
    company: "EM Bathrooms",
    description: "UK SEO growth for bathroom fitting services",
    image: "/projects/em-bathrooms.jpg",
    tags: ["Local SEO", "On-Page SEO", "Content Strategy", "Link Building"],
    results: {
      traffic: "+245%",
      rankings: "+60%",
      leads: "+190%"
    },
    keywords: [
      "Bathroom Fitters London",
      "Bathroom Renovation",
      "Wet Room Installation",
      "Bathroom Design"
    ],
    url: "/case-studies/em-bathrooms"
  },
  {
    id: "kent-mobile-tyre-services",
    company: "Kent Mobile Tyre Services",
    description: "Local SEO & organic growth for mobile tyre fitting",
    image: "/projects/kent-mobile-tyre.jpg",
    tags: ["Local SEO", "GBP Optimization", "Geo Pages", "Citation Building", "Reviews Strategy"],
    results: {
      calls: "+38%",
      visibility: "+210%",
      leads: "+160%"
    },
    keywords: [
      "Mobile Tyre Fitting Kent",
      "24/7 Tyre Service",
      "Emergency Tyre Repair",
      "Mobile Mechanic Kent"
    ],
    url: "/case-studies/kent-mobile-tyre-services"
  },
  {
    id: "mobile-tyre-service-london",
    company: "Mobile Tyre Service London",
    description: "Local SEO success with Google Business Profile optimization",
    image: "/projects/mobile-tyre-london.jpg",
    tags: ["Local SEO", "GBP Optimization", "Geo Pages", "Citation Building", "Reviews Strategy"],
    results: {
      calls: "+35.2%",
      visibility: "+200%",
      leads: "+150%"
    },
    keywords: [
      "Mobile Tyre Fitting London",
      "Same Day Tyre Service",
      "Emergency Tyre Repair",
      "24/7 Mobile Tyre Service"
    ],
    url: "/case-studies/mobile-tyre-service-london"
  }
];

export const IndustriesSection = () => {
  return (
    <section 
      id="industries" 
      style={{ 
        padding: '6rem 1rem', 
        position: 'relative',
        backgroundColor: 'rgba(30, 41, 59, 0.3)'
      }}
    >
      <div style={{ maxWidth: '84rem', margin: '0 auto' }}>
        <h2 style={{ 
          fontSize: 'clamp(1.75rem, 5vw, 2.25rem)', 
          fontWeight: 'bold', 
          marginBottom: '1rem', 
          textAlign: 'center' 
        }}>
          Featured <span style={{ color: '#22C55E' }}>Case Studies</span>
        </h2>
        <p style={{ 
          textAlign: 'center', 
          color: '#E2E8F0', 
          maxWidth: '42rem', 
          margin: '0 auto 3rem',
          fontSize: 'clamp(0.95rem, 2vw, 1.125rem)'
        }}>
          Real results delivered for real businesses across multiple industries
        </p>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
          gap: '2rem' 
        }}>
          {caseStudies.map((study, index) => (
            <div key={index} className="card" style={{ 
              overflow: 'hidden',
              padding: 0,
              transition: 'all 0.3s',
              backgroundColor: 'rgba(30, 41, 59, 0.5)',
              borderRadius: '1rem',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(34, 197, 94, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
            }}
            >
              <div style={{ 
                height: '12rem', 
                backgroundColor: 'rgba(34, 197, 94, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem',
                position: 'relative',
                backgroundImage: `url(${study.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}>
                {!study.image && (
                  <span style={{ opacity: 0.3 }}>{study.company.split(' ')[0]}</span>
                )}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  padding: '0.25rem 1rem',
                  backgroundColor: '#22C55E',
                  color: '#0F172A',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: 'bold'
                }}>
                  LIVE
                </div>
              </div>
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ 
                  fontSize: 'clamp(1.125rem, 2vw, 1.25rem)', 
                  fontWeight: '600', 
                  color: '#F8FAFC', 
                  marginBottom: '0.5rem' 
                }}>
                  {study.company}
                </h3>
                <p style={{ color: '#22C55E', marginBottom: '1rem', fontSize: 'clamp(0.9rem, 1.5vw, 1rem)' }}>
                  {study.description}
                </p>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                  {study.tags.map((tag, idx) => (
                    <span key={idx} style={{
                      padding: '0.25rem 0.5rem',
                      fontSize: '0.7rem',
                      borderRadius: '9999px',
                      backgroundColor: 'rgba(11, 31, 58, 0.5)',
                      color: '#38BDF8',
                      border: '1px solid rgba(56, 189, 248, 0.2)'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(3, 1fr)', 
                  gap: '0.75rem',
                  marginBottom: '1rem',
                  padding: '0.75rem',
                  backgroundColor: 'rgba(11, 31, 58, 0.3)',
                  borderRadius: '0.5rem'
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ color: '#22C55E', fontWeight: 'bold', fontSize: 'clamp(0.9rem, 1.5vw, 1rem)' }}>
                      {study.results.calls || study.results.traffic}
                    </div>
                    <div style={{ color: '#94A3B8', fontSize: '0.65rem' }}>
                      {study.results.calls ? 'Calls' : 'Traffic'}
                    </div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ color: '#22C55E', fontWeight: 'bold', fontSize: 'clamp(0.9rem, 1.5vw, 1rem)' }}>
                      {study.results.visibility || study.results.rankings}
                    </div>
                    <div style={{ color: '#94A3B8', fontSize: '0.65rem' }}>
                      {study.results.visibility ? 'Visibility' : 'Rankings'}
                    </div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ color: '#22C55E', fontWeight: 'bold', fontSize: 'clamp(0.9rem, 1.5vw, 1rem)' }}>
                      {study.results.leads}
                    </div>
                    <div style={{ color: '#94A3B8', fontSize: '0.65rem' }}>Leads</div>
                  </div>
                </div>

                {study.keywords && (
                  <div style={{ marginBottom: '1rem' }}>
                    <p style={{ color: '#94A3B8', fontSize: '0.8rem', marginBottom: '0.25rem' }}>
                      Keywords Ranked:
                    </p>
                    {study.keywords.slice(0, 3).map((keyword, idx) => (
                      <div key={idx} style={{ 
                        padding: '0.125rem 0',
                        color: '#E2E8F0',
                        fontSize: '0.8rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <span style={{ color: '#22C55E' }}>✓</span>
                        {keyword}
                      </div>
                    ))}
                  </div>
                )}

                <Link 
                  to={study.url} 
                  style={{ 
                    color: '#22C55E',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.3s',
                    marginTop: 'auto',
                    fontWeight: '500',
                    fontSize: 'clamp(0.875rem, 1.5vw, 0.95rem)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#38BDF8';
                    e.target.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#22C55E';
                    e.target.style.transform = 'translateX(0)';
                  }}
                >
                  Read Full Case Study <ExternalLink size={16} />
                </Link>
              </div>
            </div>
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