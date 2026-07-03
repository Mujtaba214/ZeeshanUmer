import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      style={{
        position: 'fixed',
        top: '2rem',
        right: '1.25rem',
        zIndex: 50,
        padding: '0.5rem',
        borderRadius: '9999px',
        backgroundColor: 'rgba(30, 41, 59, 0.5)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(56, 189, 248, 0.2)',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(30, 41, 59, 0.8)'}
      onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(30, 41, 59, 0.5)'}
    >
      {isDarkMode ? (
        <Sun style={{ height: '1.25rem', width: '1.25rem', color: '#38BDF8' }} />
      ) : (
        <Moon style={{ height: '1.25rem', width: '1.25rem', color: '#22C55E' }} />
      )}
    </button>
  );
};