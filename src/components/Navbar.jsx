import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Industries", href: "#industries" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 40,
        transition: 'all 0.3s ease',
        padding: isScrolled ? '12px 0' : '20px 0',
        backgroundColor: isScrolled ? 'rgba(11, 31, 58, 0.85)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(56, 189, 248, 0.15)' : 'none',
        boxShadow: isScrolled ? '0 4px 20px rgba(11, 31, 58, 0.4)' : 'none'
      }}
    >
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        zIndex: 45
      }}>
        <a 
          href="#hero" 
          style={{ 
            fontSize: '1.25rem', 
            fontWeight: 'bold', 
            display: 'flex', 
            alignItems: 'center',
            textDecoration: 'none'
          }}
        >
          <span style={{ 
            textShadow: '0 0 20px rgba(34, 197, 94, 0.3)', 
            color: '#F8FAFC' 
          }}>Zeeshan</span>
          <span style={{ color: '#22C55E', marginLeft: '4px' }}>Umer</span>
        </a>

        {/* Desktop Navigation */}
        <div 
          className="desktop-nav" 
          style={{ 
            display: 'flex',
            gap: '2rem',
            alignItems: 'center'
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              style={{
                color: 'rgba(248, 250, 252, 0.8)',
                textDecoration: 'none',
                transition: 'color 0.3s',
                fontSize: '0.95rem'
              }}
              onMouseEnter={(e) => e.target.style.color = '#22C55E'}
              onMouseLeave={(e) => e.target.style.color = 'rgba(248, 250, 252, 0.8)'}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button - Always visible on mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="mobile-menu-btn"
          style={{ 
            color: '#F8FAFC', 
            zIndex: 50, 
            background: 'none', 
            border: 'none', 
            cursor: 'pointer',
            padding: '0.5rem',
            display: 'block', // Always display, but hidden on desktop via CSS
          }}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div
            className="mobile-menu"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(11, 31, 58, 0.98)',
              backdropFilter: 'blur(12px)',
              zIndex: 40,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2rem',
              padding: '2rem'
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                style={{
                  color: 'rgba(248, 250, 252, 0.8)',
                  fontSize: 'clamp(1.25rem, 5vw, 1.5rem)',
                  textDecoration: 'none',
                  transition: 'color 0.3s',
                  padding: '0.5rem',
                }}
                onClick={() => setIsMenuOpen(false)}
                onMouseEnter={(e) => e.target.style.color = '#22C55E'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(248, 250, 252, 0.8)'}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* CSS Styles for responsive behavior */}
      <style jsx>{`
        /* Hide mobile menu button on desktop */
        @media (min-width: 768px) {
          .mobile-menu-btn {
            display: none !important;
          }
        }

        /* Hide desktop nav on mobile */
        @media (max-width: 767px) {
          .desktop-nav {
            display: none !important;
          }
        }

        /* Ensure menu button is visible on mobile */
        @media (max-width: 767px) {
          .mobile-menu-btn {
            display: block !important;
          }
        }

        /* Prevent body scroll when menu is open */
        body.no-scroll {
          overflow: hidden;
        }
      `}</style>
    </nav>
  );
};