import { ArrowDown, Download } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1rem',
        marginTop: '2rem',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, #0B1F3A 0%, #0B1F3A 50%, rgba(30, 41, 59, 0.5) 100%)',
          pointerEvents: 'none',
        }}
      />
      
      <div style={{ 
        maxWidth: '56rem', 
        margin: '0 auto', 
        textAlign: 'center', 
        zIndex: 10,
        padding: '0 1rem'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h1 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            paddingTop: '3.5rem',
            letterSpacing: '-0.025em'
          }}>
            <span className="opacity-0 animate-fade-in" style={{ color: '#F8FAFC' }}>Hi, I'm</span>
            <span className="opacity-0 animate-fade-in-delay-1" style={{ color: '#22C55E', marginLeft: '0.5rem' }}>
              Zeeshan
            </span>
            <span className="text-gradient opacity-0 animate-fade-in-delay-2" style={{ marginLeft: '0.5rem' }}>
              Umer
            </span>
          </h1>

          <h2 style={{ 
            fontSize: '1.5rem', 
            color: '#38BDF8',
            opacity: 0,
            animation: 'fadeIn 1s ease-out 0.6s forwards'
          }}>
            SEO Specialist | Technical SEO | Local SEO | eCommerce SEO | AI SEO (AEO & GEO)
          </h2>

          <p style={{ 
            fontSize: '1.125rem', 
            color: '#E2E8F0', 
            maxWidth: '42rem', 
            margin: '0 auto', 
            opacity: 0, 
            animation: 'fadeIn 1s ease-out 0.9s forwards', 
            lineHeight: '1.75',
            padding: '0 1rem'
          }}>
            I help businesses increase organic traffic, dominate Google rankings, generate qualified leads, 
            and grow revenue through data-driven SEO strategies. Specialized in Technical SEO, Local SEO, 
            eCommerce SEO, AI Search Optimization (AEO & GEO), Google Business Profile Optimization, 
            and High Authority Link Building.
          </p>

          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '2rem', 
            justifyContent: 'center',
            padding: '1rem 0',
            opacity: 0,
            animation: 'fadeIn 1s ease-out 1.1s forwards'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#22C55E' }}>4+</div>
              <div style={{ color: '#E2E8F0', fontSize: '0.875rem' }}>Years Experience</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#22C55E' }}>100+</div>
              <div style={{ color: '#E2E8F0', fontSize: '0.875rem' }}>Keywords Ranked</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#22C55E' }}>30+</div>
              <div style={{ color: '#E2E8F0', fontSize: '0.875rem' }}>UK Businesses Optimized</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#22C55E' }}>🌍</div>
              <div style={{ color: '#E2E8F0', fontSize: '0.875rem' }}>International SEO</div>
            </div>
          </div>

          <div style={{ 
            paddingTop: '1rem', 
            opacity: 0, 
            animation: 'fadeIn 1s ease-out 1.2s forwards', 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '1rem', 
            justifyContent: 'center' 
          }}>
            <a href="#industries" className="btn-primary">
              View Case Studies
            </a>
            <a href="/Zeeshan-Umer-Resume.pdf" download className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Download Resume <Download size={16} />
            </a>
          </div>
        </div>
      </div>

      <div style={{ 
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
      </div>
    </section>
  );
};