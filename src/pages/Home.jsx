import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { ServicesSection } from "../components/ServicesSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { ProjectsSection } from "../components/ProjectsSection";
import { IndustriesSection } from "../components/IndustriesSection";
import { LogosSlider } from "../components/LogosSlider";
import { SkillsSection } from "../components/SkillsSection";

export const Home = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#0B1F3A', 
      color: '#F8FAFC',
      overflowX: 'hidden'
    }}>
      <StarBackground />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <IndustriesSection />
        <ServicesSection />
        <SkillsSection />
        <LogosSlider />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};