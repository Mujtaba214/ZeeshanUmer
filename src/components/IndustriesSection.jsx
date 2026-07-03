import { ExternalLink, TrendingUp, Users, Search } from "lucide-react";

const caseStudies = [
  {
    company: "PoppyLane Clothing (Ireland)",
    description: "Increase Revenue from €3,000/month → €14,000/month",
    image: "/projects/poppylane.jpg",
    tags: ["Home Page Optimization", "Category SEO", "Internal Linking", "Technical SEO", "Authority Link Building"],
    results: {
      revenue: "+367%",
      traffic: "+280%",
      rankings: "+45%"
    },
    url: "#"
  },
  {
    company: "Mobile Tyre Services London",
    description: "Local SEO success with Google Business Profile optimization",
    image: "/projects/mobile-tyre.jpg",
    tags: ["Local SEO", "GBP Optimization", "Geo Pages", "Citation Building", "Reviews Strategy"],
    results: {
      calls: "+35.2%",
      visibility: "+200%",
      leads: "+150%"
    },
    url: "#"
  },
  {
    company: "KMT Services",
    description: "Ranking for competitive mobile tyre fitting keywords",
    image: "/projects/kmt.jpg",
    tags: ["Keyword Research", "On-Page SEO", "Local SEO"],
    keywords: [
      "Mobile Tyre Fitting Maidstone",
      "Same Day Tyre Fitting",
      "24/7 Mobile Tyre Service",
      "Premium Tyre Fitting",
      "Emergency Tyre Services"
    ],
    url: "#"
  },
  {
    company: "Antyres UK",
    description: "Garage SEO and local service optimization",
    image: "/projects/antyres.jpg",
    tags: ["Garage SEO", "Local SEO", "Technical SEO"],
    keywords: [
      "Brake Repair Maidstone",
      "Part Worn Tyres",
      "Car Service",
      "Tyre Fitting"
    ],
    url: "#"
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
      <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
        <h2 style={{ 
          fontSize: '2.25rem', 
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
          margin: '0 auto 3rem' 
        }}>
          Real results delivered for real businesses across multiple industries
        </p>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
          gap: '2rem' 
        }}>
          {caseStudies.map((study, index) => (
            <div key={index} className="card" style={{ 
              overflow: 'hidden',
              padding: 0,
              transition: 'all 0.3s'
            }}>
              <div style={{ 
                height: '12rem', 
                backgroundColor: 'rgba(34, 197, 94, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem'
              }}>
                {study.company.split(' ')[0]}
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#F8FAFC', marginBottom: '0.5rem' }}>
                  {study.company}
                </h3>
                <p style={{ color: '#22C55E', marginBottom: '1rem' }}>
                  {study.description}
                </p>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                  {study.tags.map((tag, idx) => (
                    <span key={idx} style={{
                      padding: '0.25rem 0.5rem',
                      fontSize: '0.75rem',
                      borderRadius: '9999px',
                      backgroundColor: 'rgba(11, 31, 58, 0.5)',
                      color: '#38BDF8',
                      border: '1px solid rgba(56, 189, 248, 0.2)'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {study.results && (
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(3, 1fr)', 
                    gap: '1rem',
                    marginBottom: '1rem',
                    padding: '1rem',
                    backgroundColor: 'rgba(11, 31, 58, 0.3)',
                    borderRadius: '0.5rem'
                  }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ color: '#22C55E', fontWeight: 'bold' }}>{study.results.revenue || study.results.calls}</div>
                      <div style={{ color: '#E2E8F0', fontSize: '0.75rem' }}>{study.results.revenue ? 'Revenue' : 'Calls'}</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ color: '#22C55E', fontWeight: 'bold' }}>{study.results.traffic || study.results.visibility}</div>
                      <div style={{ color: '#E2E8F0', fontSize: '0.75rem' }}>{study.results.traffic ? 'Traffic' : 'Visibility'}</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ color: '#22C55E', fontWeight: 'bold' }}>{study.results.rankings || study.results.leads}</div>
                      <div style={{ color: '#E2E8F0', fontSize: '0.75rem' }}>{study.results.rankings ? 'Rankings' : 'Leads'}</div>
                    </div>
                  </div>
                )}

                {study.keywords && (
                  <div style={{ marginBottom: '1rem' }}>
                    <p style={{ color: '#E2E8F0', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Keywords Ranked:</p>
                    {study.keywords.map((keyword, idx) => (
                      <div key={idx} style={{ 
                        padding: '0.25rem 0',
                        color: '#F8FAFC',
                        fontSize: '0.875rem',
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

                <a href={study.url} style={{ 
                  color: '#22C55E',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'color 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.color = '#38BDF8'}
                onMouseLeave={(e) => e.target.style.color = '#22C55E'}
                >
                  Read Full Case Study <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};