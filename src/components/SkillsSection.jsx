import { useState } from "react";

const skills = [
  { name: "Technical SEO", rating: 5, category: "SEO" },
  { name: "On-Page SEO", rating: 5, category: "SEO" },
  { name: "Off-Page SEO", rating: 5, category: "SEO" },
  { name: "Local SEO", rating: 5, category: "SEO" },
  { name: "eCommerce SEO", rating: 5, category: "SEO" },
  { name: "AI SEO", rating: 5, category: "SEO" },
  { name: "WordPress SEO", rating: 5, category: "CMS" },
  { name: "Shopify SEO", rating: 5, category: "CMS" },
  { name: "WooCommerce SEO", rating: 5, category: "CMS" },
  { name: "Google Business Profile", rating: 5, category: "Tools" },
  { name: "Google Analytics 4", rating: 5, category: "Tools" },
  { name: "Search Console", rating: 5, category: "Tools" },
  { name: "Ahrefs", rating: 5, category: "Tools" },
  { name: "SEMrush", rating: 5, category: "Tools" },
  { name: "Screaming Frog", rating: 5, category: "Tools" },
  { name: "Looker Studio", rating: 5, category: "Tools" },
];

const tools = [
  { name: "Google Analytics", icon: "📊" },
  { name: "Google Search Console", icon: "🔍" },
  { name: "Ahrefs", icon: "🔗" },
  { name: "SEMrush", icon: "📈" },
  { name: "Screaming Frog", icon: "🐸" },
  { name: "Bright Local", icon: "📍" },
  { name: "Looker Studio", icon: "📊" },
  { name: "Google Business Profile", icon: "🏪" },
  { name: "ChatGPT", icon: "🤖" },
  { name: "Perplexity", icon: "🔎" },
  { name: "Gemini", icon: "🧠" },
  { name: "Claude", icon: "💬" },
  { name: "SurferSEO", icon: "🌊" },
  { name: "RankMath", icon: "📐" },
  { name: "Yoast SEO", icon: "🌾" },
  { name: "WordPress", icon: "📝" },
  { name: "Shopify", icon: "🛍️" },
  { name: "WooCommerce", icon: "🛒" },
];

const processSteps = [
  "Discovery",
  "Website Audit",
  "Keyword Research",
  "Competitor Analysis",
  "SEO Strategy",
  "Technical SEO",
  "On Page Optimization",
  "Content Strategy",
  "Authority Building",
  "Reporting & Growth"
];

const whyHire = [
  "4+ Years Experience",
  "International SEO",
  "30+ UK Businesses",
  "eCommerce SEO Expert",
  "Local SEO Expert",
  "AI SEO (AEO + GEO)",
  "Technical SEO",
  "Revenue-Focused SEO",
  "Proven Rankings",
  "White Hat SEO"
];

export const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <span key={i} style={{ color: i < rating ? '#22C55E' : '#1E293B', fontSize: '1.25rem' }}>★</span>
    ));
  };

  return (
    <section id="skills" style={{ padding: '6rem 1rem', position: 'relative' }}>
      <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
        <h2 style={{ 
          fontSize: '2.25rem', 
          fontWeight: 'bold', 
          marginBottom: '1rem', 
          textAlign: 'center' 
        }}>
          SEO <span style={{ color: '#22C55E' }}>Skills</span>
        </h2>

        {/* Tab Navigation */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '1rem', 
          marginBottom: '3rem',
          flexWrap: 'wrap'
        }}>
          {['skills', 'tools', 'process', 'why'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '0.5rem 1.5rem',
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s',
                backgroundColor: activeTab === tab ? '#22C55E' : 'rgba(30, 41, 59, 0.5)',
                color: activeTab === tab ? '#F8FAFC' : '#E2E8F0',
                boxShadow: activeTab === tab ? '0 10px 15px -3px rgba(34, 197, 94, 0.2)' : 'none',
                textTransform: 'capitalize'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== tab) {
                  e.target.style.backgroundColor = 'rgba(30, 41, 59, 0.8)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== tab) {
                  e.target.style.backgroundColor = 'rgba(30, 41, 59, 0.5)';
                }
              }}
            >
              {tab === 'skills' ? 'SEO Skills' : 
               tab === 'tools' ? 'SEO Tools' : 
               tab === 'process' ? 'SEO Process' : 'Why Hire Me?'}
            </button>
          ))}
        </div>

        {/* Skills Tab */}
        {activeTab === 'skills' && (
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
            gap: '1.5rem' 
          }}>
            {skills.map((skill, index) => (
              <div key={index} className="card" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: '#F8FAFC', marginBottom: '0.5rem' }}>{skill.name}</h3>
                <div>{renderStars(skill.rating)}</div>
              </div>
            ))}
          </div>
        )}

        {/* Tools Tab */}
        {activeTab === 'tools' && (
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', 
            gap: '1.5rem' 
          }}>
            {tools.map((tool, index) => (
              <div key={index} className="card" style={{ 
                padding: '1.5rem', 
                textAlign: 'center',
                transition: 'all 0.3s'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{tool.icon}</div>
                <h4 style={{ color: '#F8FAFC', fontSize: '0.9rem' }}>{tool.name}</h4>
              </div>
            ))}
          </div>
        )}

        {/* Process Tab */}
        {activeTab === 'process' && (
          <div style={{ 
            maxWidth: '48rem', 
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '1rem'
          }}>
            {processSteps.map((step, index) => (
              <div key={index} style={{ 
                display: 'flex', 
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem',
                backgroundColor: 'rgba(30, 41, 59, 0.5)',
                borderRadius: '0.5rem',
                border: '1px solid rgba(56, 189, 248, 0.1)'
              }}>
                <span style={{ 
                  backgroundColor: '#22C55E',
                  color: '#F8FAFC',
                  borderRadius: '9999px',
                  padding: '0.25rem 0.5rem',
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                  minWidth: '24px',
                  textAlign: 'center'
                }}>
                  {index + 1}
                </span>
                <span style={{ color: '#E2E8F0', fontSize: '0.9rem' }}>{step}</span>
              </div>
            ))}
          </div>
        )}

        {/* Why Hire Me Tab */}
        {activeTab === 'why' && (
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
            gap: '1.5rem' 
          }}>
            {whyHire.map((item, index) => (
              <div key={index} className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                <div style={{ 
                  fontSize: '2rem', 
                  marginBottom: '0.5rem',
                  color: '#22C55E'
                }}>✓</div>
                <h4 style={{ color: '#F8FAFC' }}>{item}</h4>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};