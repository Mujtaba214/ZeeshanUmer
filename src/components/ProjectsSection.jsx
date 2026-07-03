import { useState } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 2,
    title: "Hotels Management System",
    description: "A full-featured system to manage restaurant orders, inventory, staff, and billing seamlessly.",
    image: "/projects/RestaurantManagementSystem.png",
    tags: ["React", "MUI", "Firebase", "Dashboards"],
    category: "Frontend",
    demoUrl: "https://hotel-management-system-mujtaba.vercel.app/",
    githubUrl: "https://github.com/Mujtaba214/Hotel-M-S",
  },
  {
    id: 1,
    title: "Virtual Build Tools Landing Page",
    description: "Showcasing next-gen virtual tools that streamline your development workflow with speed, flexibility, and power",
    image: "/projects/LandingPage.png",
    tags: ["React", "TailwindCSS", "Lucide-React", "UI/UX"],
    category: "Frontend",
    demoUrl: "https://virtual-build-tools-landing.vercel.app/",
    githubUrl: "https://github.com/Mujtaba214/React-page-01",
  },
  {
    id: 3,
    title: "Learning Management System",
    description: "An interactive platform for managing courses, tracking student progress, and delivering online education efficiently.",
    image: "/projects/LearningManagementSystem.png",
    tags: ["React", "MUI", "Firebase", "Dashboards"],
    category: "Frontend",
    demoUrl: "https://lms-mujtaba.vercel.app/login",
    githubUrl: "https://github.com/Mujtaba214/LMS",
  },
  {
    id: 4,
    title: "SecureVision Dashboard",
    description: "emphasizes visibility into security.",
    image: "/projects/SD.png",
    tags: ["ReactJS", "NodeJS", "TailwindCSS", "ExpressJS", "PostgreSQL"],
    category: "Fullstack",
    demoUrl: "https://securitydashboardinfo.netlify.app/signin",
    githubUrl: "https://github.com/Mujtaba214/Security-Dashboard-Frontend",
  },
  {
    id: 5,
    title: "AI Note Summarizer",
    description: "An AI-powered web app that condenses lengthy notes or paragraphs into concise summaries using natural language processing.",
    image: "/projects/AI Notes.png",
    tags: ["React", "Express", "Node.js", "PostgreSQL", "AI API", "CORS"],
    category: "Fullstack",
    demoUrl: "https://ai-paragraph-summarizer.netlify.app/",
    githubUrl: "https://github.com/Mujtaba214/AI-Text-Summarizer-Frontend",
  },
  {
    id: 6,
    title: "Restaurant Website",
    description: "An interactive platform for managing courses, tracking student progress, and delivering online education efficiently.",
    image: "/projects/rw.png",
    tags: ["Frontend", "Bootstrap", "HTML", "CSS", "TailwindCSS"],
    category: "Frontend",
    demoUrl: "https://mujtaba214.github.io/restaurant-web/",
    githubUrl: "https://github.com/Mujtaba214/Restaurant",
  },
  {
    id: 7,
    title: "Brilliant Media",
    description: "Brilliant Media helps entrepreneurs become thought leaders. It's time to write your business-building bestseller.",
    image: "/projects/dm.png",
    tags: ["ReactJS", "Contentful", "TailwindCSS", "CMS"],
    category: "CMS",
    demoUrl: "https://www.brilliantmedia.co/",
  },
  {
    id: 8,
    title: "Autos Insight",
    description: "Autos Insight, a global leader in providing vehicle history reports, is committed to enhancing road safety and promoting transparency in the worldwide used car market.",
    image: "/projects/ainsight.png",
    tags: ["ReactJS", "Contentful", "TailwindCSS", "CMS"],
    category: "CMS",
    demoUrl: "https://autos-insight.com/",
  },
  {
    id: 9,
    title: "Mursheed Protections",
    description: "Mursheed Protection, Inc., Southern California's premier full service private security company.",
    image: "/projects/mp.png",
    tags: ["ReactJS", "Contentful", "TailwindCSS", "CMS"],
    category: "CMS",
    demoUrl: "https://mursheedprotection.us/",
  },
  {
    id: 10,
    title: "Rivet Leathers",
    description: "Rivet Leathers – Crafted to Endure, Styled to Impress.",
    image: "/projects/rl.png",
    tags: ["ReactJS", "Contentful", "TailwindCSS", "CMS"],
    category: "CMS",
    demoUrl: "https://rivetleathers.com/",
  },
];

const categories = ["All", "Frontend", "Backend", "Fullstack", "CMS"];

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "All") return true;
    if (Array.isArray(project.category)) {
      return project.category.includes(activeCategory);
    }
    return project.category === activeCategory;
  });

  return (
    <section id="projects" style={{ padding: '6rem 1rem', position: 'relative' }}>
      <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
        <h2 style={{ 
          fontSize: '2.25rem', 
          fontWeight: 'bold', 
          marginBottom: '3rem', 
          textAlign: 'center' 
        }}>
          My <span style={{ color: '#22C55E' }}>Projects</span>
        </h2>

        {/* Filter Buttons */}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          gap: '1rem', 
          marginBottom: '3rem' 
        }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              style={{
                padding: '0.5rem 1.25rem',
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s',
                backgroundColor: activeCategory === category ? '#22C55E' : 'rgba(30, 41, 59, 0.5)',
                color: activeCategory === category ? '#F8FAFC' : '#E2E8F0',
                boxShadow: activeCategory === category ? '0 10px 15px -3px rgba(34, 197, 94, 0.2)' : 'none'
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== category) {
                  e.target.style.backgroundColor = 'rgba(30, 41, 59, 0.8)';
                  e.target.style.color = '#F8FAFC';
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== category) {
                  e.target.style.backgroundColor = 'rgba(30, 41, 59, 0.5)';
                  e.target.style.color = '#E2E8F0';
                }
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
          gap: '2rem' 
        }}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="card"
              style={{
                overflow: 'hidden',
                padding: 0,
                transition: 'all 0.3s',
              }}
            >
              <div style={{ height: '12rem', overflow: 'hidden' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s',
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      style={{
                        padding: '0.25rem 0.5rem',
                        fontSize: '0.75rem',
                        fontWeight: '500',
                        borderRadius: '9999px',
                        backgroundColor: 'rgba(11, 31, 58, 0.5)',
                        color: '#38BDF8',
                        border: '1px solid rgba(56, 189, 248, 0.2)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.25rem', color: '#F8FAFC' }}>
                  {project.title}
                </h3>
                <p style={{ color: '#E2E8F0', fontSize: '0.875rem', marginBottom: '1rem' }}>
                  {project.description}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#E2E8F0', transition: 'color 0.3s' }}
                      onMouseEnter={(e) => e.target.style.color = '#22C55E'}
                      onMouseLeave={(e) => e.target.style.color = '#E2E8F0'}
                    >
                      <ExternalLink size={20} />
                    </a>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#E2E8F0', transition: 'color 0.3s' }}
                        onMouseEnter={(e) => e.target.style.color = '#22C55E'}
                        onMouseLeave={(e) => e.target.style.color = '#E2E8F0'}
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a
            className="btn-primary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Mujtaba214"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};