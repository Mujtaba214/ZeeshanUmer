import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { ServicesSection } from "../components/ServicesSection";
// import { StatsSection } from "../components/StatsSection";
// import { CaseStudiesSection } from "../components/CaseStudiesSection";
// import { TestimonialsSection } from "../components/TestimonialsSection";
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
      <ThemeToggle />
      <StarBackground />
      <Navbar />
      <main>
        <HeroSection />
        {/* <StatsSection /> */}
        <ServicesSection />
        {/* <CaseStudiesSection />
        <TestimonialsSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};