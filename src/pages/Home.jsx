import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { ServicesSection } from "../components/ServicesSection";
import { IndustriesSection } from "../components/IndustriesSection";
import { SkillsSection } from "../components/SkillsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#0B1F3A', 
      color: '#F8FAFC',
      overflowX: 'hidden'
    }}>
      {/* <ThemeToggle /> */}
      <StarBackground />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <IndustriesSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};