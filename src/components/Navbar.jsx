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

  return (
    <nav
      style={{
        position: 'fixed',
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
        alignItems: 'center'
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

        <div className="desktop-nav" style={{ 
          gap: '2rem',
          alignItems: 'center'
        }}>
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

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md-hidden"
          style={{ 
            color: '#F8FAFC', 
            zIndex: 50, 
            background: 'none', 
            border: 'none', 
            cursor: 'pointer',
            display: 'none'
          }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

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
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                style={{
                  color: 'rgba(248, 250, 252, 0.8)',
                  fontSize: '1.25rem',
                  textDecoration: 'none',
                  transition: 'color 0.3s',
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
    </nav>
  );
};