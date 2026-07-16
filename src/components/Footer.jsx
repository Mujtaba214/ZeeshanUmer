import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <footer style={{
      padding: 'clamp(1.5rem, 3vw, 2.5rem) clamp(0.75rem, 2vw, 1rem)',
      backgroundColor: '#0B1F3A',
      borderTop: '1px solid rgba(56, 189, 248, 0.1)',
    }}>
      <div style={{ 
        maxWidth: '64rem', 
        margin: '0 auto',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        gap: 'clamp(1.5rem, 3vw, 2.5rem)',
      }}>
        {/* Left Side - Text */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: isMobile ? 'center' : 'flex-start',
          textAlign: isMobile ? 'center' : 'left',
          gap: '0.75rem',
        }}>
          <p style={{ 
            color: '#E2E8F0', 
            margin: 0,
            fontSize: 'clamp(0.85rem, 1.5vw, 1rem)',
            fontWeight: '500',
          }}>
            © 2026 Zeeshan Umer
          </p>
          
          <p style={{
            color: '#94A3B8',
            margin: 0,
            fontSize: 'clamp(0.7rem, 1.2vw, 0.85rem)',
          }}>
            SEO Specialist — Local & eCommerce SEO
          </p>

          <a
            href="#hero"
            aria-label="Back to top"
            style={{
              display: 'inline-flex',
              padding: '0.4rem 1rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(34, 197, 94, 0.1)',
              color: '#22C55E',
              transition: 'all 0.3s',
              textDecoration: 'none',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: 'clamp(0.7rem, 1.2vw, 0.8rem)',
              fontWeight: '500',
              marginTop: '0.25rem',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(34, 197, 94, 0.2)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(34, 197, 94, 0.1)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <ArrowUp size={16} />
            Back to Top
          </a>
        </div>

        {/* Right Side - Map */}
        <div style={{
          flex: 1,
          width: '100%',
          maxWidth: isMobile ? '100%' : '480px',
          borderRadius: '0.75rem',
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
          border: '1px solid rgba(56, 189, 248, 0.1)',
        }}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7050398.57309783!2d68.9966984!3d30.36295725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x156be5ebd0da8d%3A0xd7eb5e4d8106ffa1!2sZeeshan%20Umer%20-%20SEO%20Consultant%20-%20LOCAL%20%26%20Ecommerce%20SEO!5e0!3m2!1sen!2s!4v1784210494879!5m2!1sen!2s" 
            width="100%" 
            height={isMobile ? "180" : "200"} 
            style={{
              border: 0,
              display: 'block',
            }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="strict-origin-when-cross-origin"
            title="Zeeshan Umer - SEO Consultant Location Map"
          />
        </div>
      </div>
    </footer>
  );
};