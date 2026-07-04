import { Award, TrendingUp, Users, Globe } from "lucide-react";

export const AboutSection = () => {
  return (
    <section 
      id="about" 
      style={{ 
        padding: '4rem 1rem', 
        position: 'relative',
        backgroundColor: 'rgba(30, 41, 59, 0.3)'
      }}
    >
      <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
        <h2 style={{ 
          fontSize: 'clamp(1.75rem, 5vw, 2.25rem)', 
          fontWeight: 'bold', 
          marginBottom: '0.5rem', 
          textAlign: 'center' 
        }}>
          About <span style={{ color: '#22C55E' }}>Me</span>
        </h2>
        <h3 style={{ 
          fontSize: 'clamp(1.125rem, 3vw, 1.5rem)', 
          textAlign: 'center', 
          color: '#E2E8F0',
          marginBottom: 'clamp(2rem, 4vw, 3rem)'
        }}>
          Helping Businesses Grow Through Search
        </h3>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr', 
          gap: '2rem',
          alignItems: 'start'
        }}>
          {/* Text Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <p style={{ 
              color: '#E2E8F0', 
              lineHeight: '1.75',
              fontSize: 'clamp(0.95rem, 2vw, 1rem)'
            }}>
              I am an SEO Specialist with over four years of experience helping businesses improve 
              their online visibility through technical SEO, content optimization, local SEO, and 
              authority-building strategies.
            </p>

            <p style={{ 
              color: '#E2E8F0', 
              lineHeight: '1.75',
              fontSize: 'clamp(0.95rem, 2vw, 1rem)'
            }}>
              I have worked with UK automotive companies, Irish eCommerce brands, driving schools, 
              home improvement companies, and local service businesses, delivering measurable growth 
              in rankings, organic traffic, leads, and revenue.
            </p>

            <p style={{ 
              color: '#E2E8F0', 
              lineHeight: '1.75',
              fontSize: 'clamp(0.95rem, 2vw, 1rem)'
            }}>
              I specialize in combining traditional SEO with modern AI search optimization, ensuring 
              websites perform across Google Search, Google AI Overviews, ChatGPT, Perplexity, Gemini, 
              and other AI-powered search platforms.
            </p>

            {/* Button Container */}
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column',
              gap: '0.75rem',
              paddingTop: '0.5rem',
              width: '100%'
            }}>
              <a 
                href="#contact" 
                className="btn-primary" 
                style={{ 
                  textAlign: 'center',
                  display: 'inline-block',
                  width: '100%',
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#22C55E',
                  color: '#0F172A',
                  fontWeight: '600',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                  fontSize: 'clamp(0.875rem, 2vw, 1rem)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#16A34A';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#22C55E';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Contact Me
              </a>
              <a
                href="/Zeeshan-Umer-Resume.pdf"
                download
                className="btn-secondary"
                style={{ 
                  textAlign: 'center',
                  display: 'inline-block',
                  width: '100%',
                  padding: '0.75rem 1.5rem',
                  backgroundColor: 'rgba(34, 197, 94, 0.1)',
                  color: '#22C55E',
                  fontWeight: '600',
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(34, 197, 94, 0.2)',
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                  fontSize: 'clamp(0.875rem, 2vw, 1rem)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(34, 197, 94, 0.2)';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'rgba(34, 197, 94, 0.1)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Stats Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(2, 1fr)', 
            gap: '1rem'
          }}>
            <div 
              className="card" 
              style={{ 
                padding: '1.25rem', 
                textAlign: 'center',
                backgroundColor: 'rgba(30, 41, 59, 0.5)',
                borderRadius: '0.75rem',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(34, 197, 94, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Award style={{ 
                color: '#22C55E', 
                height: 'clamp(2rem, 5vw, 2.5rem)', 
                width: 'clamp(2rem, 5vw, 2.5rem)', 
                margin: '0 auto 0.5rem' 
              }} />
              <h4 style={{ 
                fontWeight: '600', 
                color: '#F8FAFC',
                fontSize: 'clamp(1.125rem, 3vw, 1.25rem)'
              }}>
                4+ Years
              </h4>
              <p style={{ 
                color: '#94A3B8', 
                fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)'
              }}>
                Experience
              </p>
            </div>

            <div 
              className="card" 
              style={{ 
                padding: '1.25rem', 
                textAlign: 'center',
                backgroundColor: 'rgba(30, 41, 59, 0.5)',
                borderRadius: '0.75rem',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(34, 197, 94, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <TrendingUp style={{ 
                color: '#22C55E', 
                height: 'clamp(2rem, 5vw, 2.5rem)', 
                width: 'clamp(2rem, 5vw, 2.5rem)', 
                margin: '0 auto 0.5rem' 
              }} />
              <h4 style={{ 
                fontWeight: '600', 
                color: '#F8FAFC',
                fontSize: 'clamp(1.125rem, 3vw, 1.25rem)'
              }}>
                100+
              </h4>
              <p style={{ 
                color: '#94A3B8', 
                fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)'
              }}>
                Keywords Ranked
              </p>
            </div>

            <div 
              className="card" 
              style={{ 
                padding: '1.25rem', 
                textAlign: 'center',
                backgroundColor: 'rgba(30, 41, 59, 0.5)',
                borderRadius: '0.75rem',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(34, 197, 94, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Users style={{ 
                color: '#22C55E', 
                height: 'clamp(2rem, 5vw, 2.5rem)', 
                width: 'clamp(2rem, 5vw, 2.5rem)', 
                margin: '0 auto 0.5rem' 
              }} />
              <h4 style={{ 
                fontWeight: '600', 
                color: '#F8FAFC',
                fontSize: 'clamp(1.125rem, 3vw, 1.25rem)'
              }}>
                30+
              </h4>
              <p style={{ 
                color: '#94A3B8', 
                fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)'
              }}>
                UK Businesses
              </p>
            </div>

            <div 
              className="card" 
              style={{ 
                padding: '1.25rem', 
                textAlign: 'center',
                backgroundColor: 'rgba(30, 41, 59, 0.5)',
                borderRadius: '0.75rem',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(34, 197, 94, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Globe style={{ 
                color: '#22C55E', 
                height: 'clamp(2rem, 5vw, 2.5rem)', 
                width: 'clamp(2rem, 5vw, 2.5rem)', 
                margin: '0 auto 0.5rem' 
              }} />
              <h4 style={{ 
                fontWeight: '600', 
                color: '#F8FAFC',
                fontSize: 'clamp(1.125rem, 3vw, 1.25rem)'
              }}>
                International
              </h4>
              <p style={{ 
                color: '#94A3B8', 
                fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)'
              }}>
                SEO Experience
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Responsive Styles */}
      <style jsx>{`
        @media (max-width: 640px) {
          section {
            padding: 3rem 0.75rem;
          }
          
          .btn-primary, .btn-secondary {
            padding: 0.875rem 1.5rem;
            font-size: 0.95rem;
          }
        }

        @media (max-width: 480px) {
          section {
            padding: 2.5rem 0.5rem;
          }
          
          .card {
            padding: 1rem !important;
          }
        }

        @media (min-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }

        @media (min-width: 1024px) {
          .about-grid {
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
};