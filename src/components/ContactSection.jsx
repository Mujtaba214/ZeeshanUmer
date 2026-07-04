import { 
  Mail, 
  Phone, 
  Linkedin, 
  MessageCircle, 
  Download,
  Send 
} from "lucide-react";
import { useState } from "react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add your form submission logic here
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <section id="contact" style={{ 
      padding: 'clamp(3rem, 8vw, 6rem) clamp(0.75rem, 3vw, 1rem)', 
      position: 'relative',
      backgroundColor: 'rgba(30, 41, 59, 0.3)'
    }}>
      <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
        <h2 style={{ 
          fontSize: 'clamp(1.75rem, 5vw, 2.25rem)', 
          fontWeight: 'bold', 
          marginBottom: '0.5rem', 
          textAlign: 'center' 
        }}>
          Let's Grow Your <span style={{ color: '#22C55E' }}>Organic Traffic</span>
        </h2>
        <p style={{
          textAlign: 'center',
          color: '#94A3B8',
          fontSize: 'clamp(0.95rem, 2vw, 1.125rem)',
          marginBottom: 'clamp(2rem, 4vw, 3rem)',
          maxWidth: '42rem',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          Ready to take your SEO to the next level? Let's connect and discuss how I can help your business grow.
        </p>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr', 
          gap: 'clamp(1.5rem, 4vw, 3rem)',
          marginTop: '0'
        }}>
          {/* Contact Info - Now on top for mobile */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 'clamp(1.5rem, 3vw, 2rem)',
            order: window.innerWidth < 768 ? 0 : 0
          }}>
            {/* Contact Details */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem'
            }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.75rem',
                padding: '1rem',
                backgroundColor: 'rgba(30, 41, 59, 0.5)',
                borderRadius: '0.75rem',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.3)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <div style={{ 
                  padding: '0.75rem', 
                  borderRadius: '9999px', 
                  backgroundColor: 'rgba(34, 197, 94, 0.1)',
                  flexShrink: 0
                }}>
                  <Mail style={{ color: '#22C55E', height: '1.25rem', width: '1.25rem' }} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <h4 style={{ 
                    color: '#F8FAFC', 
                    marginBottom: '0.125rem',
                    fontSize: 'clamp(0.875rem, 2vw, 1rem)'
                  }}>
                    Email
                  </h4>
                  <a 
                    href="mailto:zeeshanumer@email.com" 
                    style={{ 
                      color: '#94A3B8', 
                      textDecoration: 'none',
                      fontSize: 'clamp(0.8rem, 1.5vw, 0.95rem)',
                      display: 'block',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    zeeshanumer@email.com
                  </a>
                </div>
              </div>

              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.75rem',
                padding: '1rem',
                backgroundColor: 'rgba(30, 41, 59, 0.5)',
                borderRadius: '0.75rem',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.3)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <div style={{ 
                  padding: '0.75rem', 
                  borderRadius: '9999px', 
                  backgroundColor: 'rgba(34, 197, 94, 0.1)',
                  flexShrink: 0
                }}>
                  <Phone style={{ color: '#22C55E', height: '1.25rem', width: '1.25rem' }} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <h4 style={{ 
                    color: '#F8FAFC', 
                    marginBottom: '0.125rem',
                    fontSize: 'clamp(0.875rem, 2vw, 1rem)'
                  }}>
                    Phone
                  </h4>
                  <a 
                    href="tel:+1234567890" 
                    style={{ 
                      color: '#94A3B8', 
                      textDecoration: 'none',
                      fontSize: 'clamp(0.8rem, 1.5vw, 0.95rem)',
                      display: 'block'
                    }}
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 style={{ 
                color: '#F8FAFC', 
                marginBottom: '0.75rem',
                fontSize: 'clamp(0.95rem, 2vw, 1.125rem)'
              }}>
                Connect With Me
              </h4>
              <div style={{ 
                display: 'flex', 
                gap: '0.75rem', 
                flexWrap: 'wrap'
              }}>
                <a 
                  href="#" 
                  style={{
                    padding: '0.625rem 1rem',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(34, 197, 94, 0.1)',
                    color: '#E2E8F0',
                    transition: 'all 0.3s',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    textDecoration: 'none',
                    fontSize: 'clamp(0.8rem, 1.5vw, 0.95rem)',
                    flex: window.innerWidth < 400 ? '1 1 100%' : '0 1 auto',
                    justifyContent: 'center'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(34, 197, 94, 0.2)';
                    e.currentTarget.style.color = '#22C55E';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(34, 197, 94, 0.1)';
                    e.currentTarget.style.color = '#E2E8F0';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}>
                    <Linkedin size={18} /> LinkedIn
                </a>
                <a 
                  href="#" 
                  style={{
                    padding: '0.625rem 1rem',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(34, 197, 94, 0.1)',
                    color: '#E2E8F0',
                    transition: 'all 0.3s',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    textDecoration: 'none',
                    fontSize: 'clamp(0.8rem, 1.5vw, 0.95rem)',
                    flex: window.innerWidth < 400 ? '1 1 100%' : '0 1 auto',
                    justifyContent: 'center'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(34, 197, 94, 0.2)';
                    e.currentTarget.style.color = '#22C55E';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(34, 197, 94, 0.1)';
                    e.currentTarget.style.color = '#E2E8F0';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}>
                    <MessageCircle size={18} /> WhatsApp
                </a>
                <a 
                  href="/Zeeshan-Umer-Resume.pdf" 
                  download 
                  style={{
                    padding: '0.625rem 1rem',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(34, 197, 94, 0.1)',
                    color: '#E2E8F0',
                    transition: 'all 0.3s',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    textDecoration: 'none',
                    fontSize: 'clamp(0.8rem, 1.5vw, 0.95rem)',
                    flex: window.innerWidth < 400 ? '1 1 100%' : '0 1 auto',
                    justifyContent: 'center'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(34, 197, 94, 0.2)';
                    e.currentTarget.style.color = '#22C55E';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(34, 197, 94, 0.1)';
                    e.currentTarget.style.color = '#E2E8F0';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}>
                    <Download size={18} /> Resume
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card" style={{ 
            padding: 'clamp(1.5rem, 4vw, 2.5rem)',
            backgroundColor: 'rgba(30, 41, 59, 0.5)',
            borderRadius: '1rem',
            border: '1px solid rgba(255, 255, 255, 0.05)'
          }}>
            <h3 style={{ 
              fontSize: 'clamp(1.125rem, 3vw, 1.25rem)', 
              fontWeight: '600', 
              color: '#F8FAFC', 
              marginBottom: 'clamp(1rem, 3vw, 1.5rem)' 
            }}>
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={{ 
                  color: '#E2E8F0', 
                  fontSize: 'clamp(0.8rem, 1.5vw, 0.875rem)', 
                  marginBottom: '0.375rem', 
                  display: 'block',
                  fontWeight: '500'
                }}>
                  Your Name <span style={{ color: '#EF4444' }}>*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  style={{
                    width: '100%',
                    padding: 'clamp(0.625rem, 1.5vw, 0.75rem) clamp(0.75rem, 2vw, 1rem)',
                    borderRadius: '0.5rem',
                    backgroundColor: 'rgba(11, 31, 58, 0.5)',
                    border: '1px solid rgba(56, 189, 248, 0.2)',
                    color: '#F8FAFC',
                    outline: 'none',
                    transition: 'all 0.3s',
                    fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
                    WebkitAppearance: 'none'
                  }}
                  placeholder="Your Name"
                  onFocus={(e) => {
                    e.target.style.borderColor = '#22C55E';
                    e.target.style.boxShadow = '0 0 0 3px rgba(34, 197, 94, 0.15)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(56, 189, 248, 0.2)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
              <div>
                <label style={{ 
                  color: '#E2E8F0', 
                  fontSize: 'clamp(0.8rem, 1.5vw, 0.875rem)', 
                  marginBottom: '0.375rem', 
                  display: 'block',
                  fontWeight: '500'
                }}>
                  Your Email <span style={{ color: '#EF4444' }}>*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  style={{
                    width: '100%',
                    padding: 'clamp(0.625rem, 1.5vw, 0.75rem) clamp(0.75rem, 2vw, 1rem)',
                    borderRadius: '0.5rem',
                    backgroundColor: 'rgba(11, 31, 58, 0.5)',
                    border: '1px solid rgba(56, 189, 248, 0.2)',
                    color: '#F8FAFC',
                    outline: 'none',
                    transition: 'all 0.3s',
                    fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
                    WebkitAppearance: 'none'
                  }}
                  placeholder="Your Email"
                  onFocus={(e) => {
                    e.target.style.borderColor = '#22C55E';
                    e.target.style.boxShadow = '0 0 0 3px rgba(34, 197, 94, 0.15)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(56, 189, 248, 0.2)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
              <div>
                <label style={{ 
                  color: '#E2E8F0', 
                  fontSize: 'clamp(0.8rem, 1.5vw, 0.875rem)', 
                  marginBottom: '0.375rem', 
                  display: 'block',
                  fontWeight: '500'
                }}>
                  Your Message <span style={{ color: '#EF4444' }}>*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  style={{
                    width: '100%',
                    padding: 'clamp(0.625rem, 1.5vw, 0.75rem) clamp(0.75rem, 2vw, 1rem)',
                    borderRadius: '0.5rem',
                    backgroundColor: 'rgba(11, 31, 58, 0.5)',
                    border: '1px solid rgba(56, 189, 248, 0.2)',
                    color: '#F8FAFC',
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'all 0.3s',
                    fontFamily: 'inherit',
                    fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
                    minHeight: '120px'
                  }}
                  placeholder="Tell me about your project..."
                  onFocus={(e) => {
                    e.target.style.borderColor = '#22C55E';
                    e.target.style.boxShadow = '0 0 0 3px rgba(34, 197, 94, 0.15)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(56, 189, 248, 0.2)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
              <button
                type="submit"
                className="btn-primary"
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: 'clamp(0.75rem, 2vw, 1rem)',
                  backgroundColor: '#22C55E',
                  color: '#0F172A',
                  fontWeight: '600',
                  borderRadius: '0.5rem',
                  border: 'none',
                  fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  opacity: isSubmitting ? 0.7 : 1,
                  transition: 'all 0.3s',
                  marginTop: '0.5rem'
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.backgroundColor = '#16A34A';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.backgroundColor = '#22C55E';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }
                }}
              >
                {isSubmitting ? (
                  <>
                    <span style={{ 
                      display: 'inline-block',
                      animation: 'spin 1s linear infinite'
                    }}>⟳</span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Add spinning animation for loading state */}
      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @media (max-width: 640px) {
          .contact-section {
            padding: 2.5rem 0.75rem;
          }
          
          .contact-info-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (min-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }

        @media (min-width: 1024px) {
          .contact-grid {
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
};