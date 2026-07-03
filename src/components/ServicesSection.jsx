import { 
  Search, 
  MapPin, 
  ShoppingCart, 
  Bot, 
  Link, 
  BarChart 
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Technical SEO",
    items: ["Complete SEO audits", "Core Web Vitals", "Schema", "Indexing", "Crawl Budget", "Site Speed", "Internal Linking"]
  },
  {
    icon: MapPin,
    title: "Local SEO",
    items: ["Google Business Profile", "Local Citations", "NAP Consistency", "Google Maps Ranking", "Location Pages", "Review Strategy"]
  },
  {
    icon: ShoppingCart,
    title: "eCommerce SEO",
    items: ["Shopify SEO", "WooCommerce SEO", "Category Pages", "Product Pages", "Collections", "Revenue Growth"]
  },
  {
    icon: Bot,
    title: "AI SEO",
    items: ["Answer Engine Optimization", "Generative Engine Optimization", "Entity SEO", "AI Overviews", "LLM Optimization", "ChatGPT Visibility"]
  },
  {
    icon: Link,
    title: "Link Building",
    items: ["Guest Posting", "Niche Edits", "HARO", "Digital PR", "Authority Building", "High DR Backlinks"]
  },
  {
    icon: BarChart,
    title: "SEO Reporting",
    items: ["GA4", "Google Search Console", "Ahrefs", "SEMrush", "Screaming Frog", "Looker Studio"]
  }
];

export const ServicesSection = () => {
  return (
    <section 
      id="services" 
      style={{ 
        padding: '6rem 1rem', 
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
        <h2 style={{ 
          fontSize: '2.25rem', 
          fontWeight: 'bold', 
          marginBottom: '1rem', 
          textAlign: 'center' 
        }}>
          What I <span style={{ color: '#22C55E' }}>Do</span>
        </h2>
        <p style={{ 
          textAlign: 'center', 
          color: '#E2E8F0', 
          maxWidth: '42rem', 
          margin: '0 auto 3rem' 
        }}>
          Comprehensive SEO services designed to drive organic growth and maximize your online visibility
        </p>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
          gap: '1.5rem' 
        }}>
          {services.map((service, index) => (
            <div key={index} className="card" style={{ padding: '1.5rem', transition: 'all 0.3s' }}>
              <div style={{ 
                padding: '0.75rem', 
                borderRadius: '9999px', 
                backgroundColor: 'rgba(34, 197, 94, 0.1)',
                display: 'inline-block',
                marginBottom: '1rem'
              }}>
                <service.icon style={{ color: '#22C55E', height: '1.5rem', width: '1.5rem' }} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#F8FAFC', marginBottom: '0.75rem' }}>
                {service.title}
              </h3>
              <ul style={{ color: '#E2E8F0', listStyle: 'none', padding: 0 }}>
                {service.items.map((item, idx) => (
                  <li key={idx} style={{ 
                    padding: '0.25rem 0', 
                    display: 'flex', 
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.9rem'
                  }}>
                    <span style={{ color: '#22C55E' }}>▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};