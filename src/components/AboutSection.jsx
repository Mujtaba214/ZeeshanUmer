import { Award, TrendingUp, Users, Globe } from "lucide-react";

export const AboutSection = () => {
  return (
    <section 
      id="about" 
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
          About <span style={{ color: '#22C55E' }}>Me</span>
        </h2>
        <h3 style={{ 
          fontSize: '1.5rem', 
          textAlign: 'center', 
          color: '#E2E8F0',
          marginBottom: '3rem'
        }}>
          Helping Businesses Grow Through Search
        </h3>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '3rem',
          alignItems: 'start'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p style={{ color: '#E2E8F0', lineHeight: '1.75' }}>
              I am an SEO Specialist with over four years of experience helping businesses improve 
              their online visibility through technical SEO, content optimization, local SEO, and 
              authority-building strategies.
            </p>

            <p style={{ color: '#E2E8F0', lineHeight: '1.75' }}>
              I have worked with UK automotive companies, Irish eCommerce brands, driving schools, 
              home improvement companies, and local service businesses, delivering measurable growth 
              in rankings, organic traffic, leads, and revenue.
            </p>

            <p style={{ color: '#E2E8F0', lineHeight: '1.75' }}>
              I specialize in combining traditional SEO with modern AI search optimization, ensuring 
              websites perform across Google Search, Google AI Overviews, ChatGPT, Perplexity, Gemini, 
              and other AI-powered search platforms.
            </p>

            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1rem',
              paddingTop: '1rem'
            }}>
              <a href="#contact" className="btn-primary" style={{ textAlign: 'center' }}>
                Contact Me
              </a>
              <a
                href="/Zeeshan-Umer-Resume.pdf"
                download
                className="btn-secondary"
                style={{ textAlign: 'center' }}
              >
                Download CV
              </a>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
              <Award style={{ color: '#22C55E', height: '2.5rem', width: '2.5rem', margin: '0 auto 0.75rem' }} />
              <h4 style={{ fontWeight: '600', color: '#F8FAFC' }}>4+ Years</h4>
              <p style={{ color: '#E2E8F0', fontSize: '0.875rem' }}>Experience</p>
            </div>
            <div className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
              <TrendingUp style={{ color: '#22C55E', height: '2.5rem', width: '2.5rem', margin: '0 auto 0.75rem' }} />
              <h4 style={{ fontWeight: '600', color: '#F8FAFC' }}>100+</h4>
              <p style={{ color: '#E2E8F0', fontSize: '0.875rem' }}>Keywords Ranked</p>
            </div>
            <div className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
              <Users style={{ color: '#22C55E', height: '2.5rem', width: '2.5rem', margin: '0 auto 0.75rem' }} />
              <h4 style={{ fontWeight: '600', color: '#F8FAFC' }}>30+</h4>
              <p style={{ color: '#E2E8F0', fontSize: '0.875rem' }}>UK Businesses</p>
            </div>
            <div className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
              <Globe style={{ color: '#22C55E', height: '2.5rem', width: '2.5rem', margin: '0 auto 0.75rem' }} />
              <h4 style={{ fontWeight: '600', color: '#F8FAFC' }}>International</h4>
              <p style={{ color: '#E2E8F0', fontSize: '0.875rem' }}>SEO Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};