import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer style={{
      padding: '2rem 1rem',
      backgroundColor: '#0B1F3A',
      borderTop: '1px solid rgba(56, 189, 248, 0.1)',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
        <p style={{ color: '#E2E8F0', marginBottom: '0.5rem' }}>
          © 2026 Zeeshan Umer — SEO Specialist 
        </p>
        <a
          href="#hero"
          style={{
            display: 'inline-flex',
            padding: '0.5rem',
            borderRadius: '9999px',
            backgroundColor: 'rgba(34, 197, 94, 0.1)',
            color: '#22C55E',
            transition: 'background-color 0.3s',
            marginTop: '0.5rem'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(34, 197, 94, 0.2)'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(34, 197, 94, 0.1)'}
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};