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
      padding: '6rem 1rem', 
      position: 'relative',
      backgroundColor: 'rgba(30, 41, 59, 0.3)'
    }}>
      <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
        <h2 style={{ 
          fontSize: '2.25rem', 
          fontWeight: 'bold', 
          marginBottom: '1rem', 
          textAlign: 'center' 
        }}>
          Let's Grow Your <span style={{ color: '#22C55E' }}>Organic Traffic</span>
        </h2>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '3rem',
          marginTop: '3rem'
        }}>
          {/* Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ 
                  padding: '0.75rem', 
                  borderRadius: '9999px', 
                  backgroundColor: 'rgba(34, 197, 94, 0.1)',
                  flexShrink: 0
                }}>
                  <Mail style={{ color: '#22C55E', height: '1.5rem', width: '1.5rem' }} />
                </div>
                <div>
                  <h4 style={{ color: '#F8FAFC', marginBottom: '0.25rem' }}>Email</h4>
                  <a href="mailto:zeeshanumer@email.com" style={{ color: '#E2E8F0', textDecoration: 'none' }}>
                    zeeshanumer@email.com
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ 
                  padding: '0.75rem', 
                  borderRadius: '9999px', 
                  backgroundColor: 'rgba(34, 197, 94, 0.1)',
                  flexShrink: 0
                }}>
                  <Phone style={{ color: '#22C55E', height: '1.5rem', width: '1.5rem' }} />
                </div>
                <div>
                  <h4 style={{ color: '#F8FAFC', marginBottom: '0.25rem' }}>Phone</h4>
                  <a href="tel:+1234567890" style={{ color: '#E2E8F0', textDecoration: 'none' }}>
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 style={{ color: '#F8FAFC', marginBottom: '1rem' }}>Connect With Me</h4>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#" style={{
                  padding: '0.75rem',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(34, 197, 94, 0.1)',
                  color: '#E2E8F0',
                  transition: 'all 0.3s',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(34, 197, 94, 0.2)';
                  e.target.style.color = '#22C55E';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'rgba(34, 197, 94, 0.1)';
                  e.target.style.color = '#E2E8F0';
                }}>
                  <Linkedin size={20} /> LinkedIn
                </a>
                <a href="#" style={{
                  padding: '0.75rem',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(34, 197, 94, 0.1)',
                  color: '#E2E8F0',
                  transition: 'all 0.3s',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(34, 197, 94, 0.2)';
                  e.target.style.color = '#22C55E';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'rgba(34, 197, 94, 0.1)';
                  e.target.style.color = '#E2E8F0';
                }}>
                  <MessageCircle size={20} /> WhatsApp
                </a>
                <a href="/Zeeshan-Umer-Resume.pdf" download style={{
                  padding: '0.75rem',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(34, 197, 94, 0.1)',
                  color: '#E2E8F0',
                  transition: 'all 0.3s',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(34, 197, 94, 0.2)';
                  e.target.style.color = '#22C55E';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'rgba(34, 197, 94, 0.1)';
                  e.target.style.color = '#E2E8F0';
                }}>
                  <Download size={20} /> Resume
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#F8FAFC', marginBottom: '1.5rem' }}>
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ color: '#E2E8F0', fontSize: '0.875rem', marginBottom: '0.5rem', display: 'block' }}>
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '0.375rem',
                    backgroundColor: 'rgba(11, 31, 58, 0.5)',
                    border: '1px solid rgba(56, 189, 248, 0.2)',
                    color: '#F8FAFC',
                    outline: 'none',
                    transition: 'all 0.3s',
                  }}
                  placeholder="Your Name"
                  onFocus={(e) => {
                    e.target.style.borderColor = '#22C55E';
                    e.target.style.boxShadow = '0 0 0 2px rgba(34, 197, 94, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(56, 189, 248, 0.2)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
              <div>
                <label style={{ color: '#E2E8F0', fontSize: '0.875rem', marginBottom: '0.5rem', display: 'block' }}>
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '0.375rem',
                    backgroundColor: 'rgba(11, 31, 58, 0.5)',
                    border: '1px solid rgba(56, 189, 248, 0.2)',
                    color: '#F8FAFC',
                    outline: 'none',
                    transition: 'all 0.3s',
                  }}
                  placeholder="Your Email"
                  onFocus={(e) => {
                    e.target.style.borderColor = '#22C55E';
                    e.target.style.boxShadow = '0 0 0 2px rgba(34, 197, 94, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(56, 189, 248, 0.2)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
              <div>
                <label style={{ color: '#E2E8F0', fontSize: '0.875rem', marginBottom: '0.5rem', display: 'block' }}>
                  Your Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '0.375rem',
                    backgroundColor: 'rgba(11, 31, 58, 0.5)',
                    border: '1px solid rgba(56, 189, 248, 0.2)',
                    color: '#F8FAFC',
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'all 0.3s',
                    fontFamily: 'inherit'
                  }}
                  placeholder="Tell me about your project..."
                  onFocus={(e) => {
                    e.target.style.borderColor = '#22C55E';
                    e.target.style.boxShadow = '0 0 0 2px rgba(34, 197, 94, 0.2)';
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
                  opacity: isSubmitting ? 0.7 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer'
                }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};