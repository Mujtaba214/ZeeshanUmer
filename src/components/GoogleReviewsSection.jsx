import { useEffect } from 'react';

export const GoogleReviewsSection = () => {
  useEffect(() => {
    // Check if script already exists
    const scriptExists = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]');
    
    if (!scriptExists) {
      const script = document.createElement('script');
      script.src = 'https://elfsightcdn.com/platform.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <>
      {/* Add custom styles for Elfsight widget */}
      <style>{`
        /* Make widget title white */
        .WidgetTitle__Header-sc-80558b97-2.eEAvqJ {
          color: gray !important;
        }
        
        /* Additional styling for better dark theme integration */
        .elfsight-app-f5417ff7-ea2b-4a06-a88e-384f0e4610ae {
          color: #F8FAFC !important;
        }
        
        .elfsight-app-f5417ff7-ea2b-4a06-a88e-384f0e4610ae .review-text {
          color: #E2E8F0 !important;
        }
        
        .elfsight-app-f5417ff7-ea2b-4a06-a88e-384f0e4610ae .reviewer-name {
          color: #F8FAFC !important;
        }
        
        .elfsight-app-f5417ff7-ea2b-4a06-a88e-384f0e4610ae .review-date {
          color: #94A3B8 !important;
        }
        
        /* Stars color */
        .elfsight-app-f5417ff7-ea2b-4a06-a88e-384f0e4610ae .star-filled {
          color: #22C55E !important;
        }
        
        /* Card backgrounds */
        .elfsight-app-f5417ff7-ea2b-4a06-a88e-384f0e4610ae .review-card {
          background-color: rgba(30, 41, 59, 0.5) !important;
          border: 1px solid rgba(56, 189, 248, 0.1) !important;
        }
        
        /* Button styling */
        .elfsight-app-f5417ff7-ea2b-4a06-a88e-384f0e4610ae .btn {
          background-color: #22C55E !important;
          color: #F8FAFC !important;
        }
        
        .elfsight-app-f5417ff7-ea2b-4a06-a88e-384f0e4610ae .btn:hover {
          background-color: #16A34A !important;
        }
      `}</style>

      <section 
        id="reviews" 
        style={{ 
          padding: '6rem 1rem', 
          position: 'relative',
          backgroundColor: 'rgba(30, 41, 59, 0.3)'
        }}
      >
        <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ 
              fontSize: '0.875rem', 
              color: '#22C55E',
              fontWeight: '500',
              letterSpacing: '0.05em',
              marginBottom: '0.5rem'
            }}>
              Google Reviews
            </h2>
            <h3 style={{ 
              fontSize: '2.25rem', 
              fontWeight: 'bold',
              color: '#F8FAFC'
            }}>
              What Clients Say on <span style={{ color: '#22C55E' }}>Google</span>
            </h3>
            <p style={{ 
              color: '#E2E8F0', 
              maxWidth: '42rem', 
              margin: '0.5rem auto 0',
              fontSize: '1.125rem'
            }}>
              Real reviews from real clients who've experienced the results
            </p>
          </div>

          {/* Elfsight Widget Container */}
          <div style={{
            backgroundColor: 'rgba(30, 41, 59, 0.5)',
            borderRadius: '1rem',
            padding: '1.5rem',
            border: '1px solid rgba(56, 189, 248, 0.1)',
            minHeight: '400px'
          }}>
            <div 
              className="elfsight-app-f5417ff7-ea2b-4a06-a88e-384f0e4610ae" 
              data-elfsight-app-lazy
              style={{ 
                width: '100%',
                minHeight: '400px'
              }}
            />
          </div>

          {/* Direct Link to Google Reviews */}
          <div style={{ 
            textAlign: 'center', 
            marginTop: '2rem' 
          }}>
            <a 
              href="https://g.page/r/CaH_BoFNXuvXEAE/review" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-widget"
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.5rem'
              }}
            >
              ⭐ Write a Review on Google
            </a>
          </div>
        </div>
      </section>
    </>
  );
};