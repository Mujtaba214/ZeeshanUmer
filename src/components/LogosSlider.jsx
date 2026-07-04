import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const tools = [
  { 
    name: "Google Analytics", 
    logo: "https://www.svgrepo.com/show/353804/google-analytics.svg",
    bg: "rgba(255, 255, 255, 0.05)"
  },
  { 
    name: "Google Search Console", 
    logo: "https://www.svgrepo.com/show/349501/google-search-console.svg",
    bg: "rgba(255, 255, 255, 0.05)"
  },
  { 
    name: "Ahrefs", 
    logo: "https://www.svgrepo.com/show/331368/ahrefs.svg",
    bg: "rgba(255, 255, 255, 0.05)"
  },
  { 
    name: "SEMrush", 
    logo: "https://www.svgrepo.com/show/331370/semrush.svg",
    bg: "rgba(255, 255, 255, 0.05)"
  },
  { 
    name: "Screaming Frog", 
    logo: "https://www.svgrepo.com/show/353380/screaming-frog.svg",
    bg: "rgba(255, 255, 255, 0.05)"
  },
  { 
    name: "ChatGPT", 
    logo: "https://www.svgrepo.com/show/487818/chatgpt.svg",
    bg: "rgba(255, 255, 255, 0.05)"
  },
  { 
    name: "Looker Studio", 
    logo: "https://www.svgrepo.com/show/353830/looker.svg",
    bg: "rgba(255, 255, 255, 0.05)"
  },
  { 
    name: "WordPress", 
    logo: "https://www.svgrepo.com/show/349462/wordpress.svg",
    bg: "rgba(255, 255, 255, 0.05)"
  },
];

export const LogosSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(6);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);
  const containerRef = useRef(null);

  // Calculate items per view based on screen width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerView(2);
      } else if (width < 768) {
        setItemsPerView(3);
      } else if (width < 1024) {
        setItemsPerView(4);
      } else {
        setItemsPerView(6);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Create infinite loop array (duplicate items for seamless sliding)
  const getInfiniteTools = () => {
    const duplicated = [...tools, ...tools, ...tools];
    return duplicated;
  };

  const infiniteTools = getInfiniteTools();
  const totalItems = infiniteTools.length;
  const maxIndex = totalItems - itemsPerView;

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 3000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, currentIndex, itemsPerView]);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const next = prev + 1;
      if (next >= maxIndex) {
        setTimeout(() => {
          setCurrentIndex(0);
        }, 500);
        return next;
      }
      return next;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const next = prev - 1;
      if (next < 0) {
        setTimeout(() => {
          setCurrentIndex(maxIndex - itemsPerView);
        }, 500);
        return maxIndex - itemsPerView;
      }
      return next;
    });
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Pause auto-play when interacting
  const handleInteraction = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <div style={{ 
      padding: '1rem 0',
      position: 'relative'
    }}>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '1rem',
        position: 'relative'
      }}>
        {/* Left Arrow */}
        <button
          onClick={() => { prevSlide(); handleInteraction(); }}
          style={{
            position: 'absolute',
            left: '-16px',
            zIndex: 10,
            padding: '0.75rem',
            borderRadius: '9999px',
            backgroundColor: 'rgba(30, 41, 59, 0.9)',
            border: '1px solid rgba(56, 189, 248, 0.2)',
            color: '#F8FAFC',
            cursor: 'pointer',
            transition: 'all 0.3s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'rgba(34, 197, 94, 0.2)';
            e.target.style.borderColor = '#22C55E';
            e.target.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'rgba(30, 41, 59, 0.9)';
            e.target.style.borderColor = 'rgba(56, 189, 248, 0.2)';
            e.target.style.transform = 'scale(1)';
          }}
        >
          <ChevronLeft size={20} />
        </button>

        {/* Slider Container */}
        <div 
          ref={containerRef}
          style={{
            overflow: 'hidden',
            width: '100%',
            margin: '0 2rem'
          }}
        >
          <div
            style={{
              display: 'flex',
              transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              gap: '1rem'
            }}
          >
            {infiniteTools.map((tool, index) => (
              <div
                key={`${tool.name}-${index}`}
                style={{
                  minWidth: `calc(${100 / itemsPerView}% - 0.5rem)`,
                  padding: '0.25rem'
                }}
              >
                <div style={{
                  padding: '1.5rem 0.75rem',
                  textAlign: 'center',
                  transition: 'all 0.4s ease',
                  height: '140px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(30, 41, 59, 0.5)',
                  border: '1px solid rgba(56, 189, 248, 0.08)',
                  borderRadius: '0.75rem',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = 'rgba(34, 197, 94, 0.3)';
                  e.target.style.boxShadow = '0 0 30px rgba(34, 197, 94, 0.08)';
                  e.target.style.transform = 'translateY(-4px) scale(1.02)';
                  e.target.style.backgroundColor = 'rgba(30, 41, 59, 0.8)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = 'rgba(56, 189, 248, 0.08)';
                  e.target.style.boxShadow = 'none';
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.backgroundColor = 'rgba(30, 41, 59, 0.5)';
                }}
                >
                  <div style={{ 
                    width: '65px',
                    height: '65px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '0.75rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    borderRadius: '12px',
                    padding: '10px'
                  }}>
                    <img 
                      src={tool.logo} 
                      alt={tool.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        filter: 'brightness(0) invert(1)'
                      }}
                      onError={(e) => {
                        // Fallback if image fails to load - show first letter
                        e.target.style.display = 'none';
                        const parent = e.target.parentElement;
                        parent.innerHTML = `<span style="font-size: 28px; font-weight: bold; color: #22C55E;">${tool.name.charAt(0)}</span>`;
                      }}
                    />
                  </div>
                  <h4 style={{ 
                    color: '#E2E8F0', 
                    fontSize: '0.7rem',
                    fontWeight: '500',
                    textAlign: 'center',
                    lineHeight: '1.2',
                    letterSpacing: '0.3px'
                  }}>
                    {tool.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => { nextSlide(); handleInteraction(); }}
          style={{
            position: 'absolute',
            right: '-16px',
            zIndex: 10,
            padding: '0.75rem',
            borderRadius: '9999px',
            backgroundColor: 'rgba(30, 41, 59, 0.9)',
            border: '1px solid rgba(56, 189, 248, 0.2)',
            color: '#F8FAFC',
            cursor: 'pointer',
            transition: 'all 0.3s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'rgba(34, 197, 94, 0.2)';
            e.target.style.borderColor = '#22C55E';
            e.target.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'rgba(30, 41, 59, 0.9)';
            e.target.style.borderColor = 'rgba(56, 189, 248, 0.2)';
            e.target.style.transform = 'scale(1)';
          }}
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Dots Indicator */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '0.5rem',
        marginTop: '1.5rem'
      }}>
        {Array.from({ length: tools.length }).map((_, index) => {
          const dotIndex = Math.floor(currentIndex % tools.length);
          return (
            <button
              key={index}
              onClick={() => { 
                goToSlide(index * Math.floor(itemsPerView / 2) || index); 
                handleInteraction(); 
              }}
              style={{
                width: dotIndex === index ? '2rem' : '0.5rem',
                height: '0.5rem',
                borderRadius: '9999px',
                border: 'none',
                backgroundColor: dotIndex === index ? '#22C55E' : 'rgba(56, 189, 248, 0.15)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            />
          );
        })}
      </div>

      {/* Auto-play indicator */}
      <div style={{
        textAlign: 'center',
        marginTop: '0.5rem',
        color: 'rgba(226, 232, 240, 0.3)',
        fontSize: '0.7rem',
        letterSpacing: '0.5px'
      }}>
        {isAutoPlaying ? '✦ Auto-scrolling' : '⏸ Paused'}
      </div>
    </div>
  );
};