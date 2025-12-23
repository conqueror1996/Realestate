import { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import StatsSection from './components/StatsSection';
import ProjectShowcase from './components/ProjectShowcase';
import JourneySection from './components/JourneySection';
import BrochureSection from './components/BrochureSection';

import FounderSection from './components/FounderSection';
import BlogsSection from './components/BlogsSection';

import ConnectSection from './components/ConnectSection';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import EnquiryModal from './components/EnquiryModal';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ProjectsPage from './pages/ProjectsPage';
import AboutUsPage from './pages/AboutUsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import SEO from './components/SEO';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const WebsiteLayout = () => (
    <div className="font-sans antialiased text-text-gray bg-white">
      <SEO
        title="Home"
        description="Future Group - South India's Largest & Most Trusted Real Estate Developer. We build legacies with excellence. Premium villa plots and land investments in Mumbai."
      />
      <TopBar />
      <Navbar onOpenEnquiry={() => setIsModalOpen(true)} />
      <main>
        <HeroCarousel />
        <StatsSection />
        <ProjectShowcase />
        <JourneySection />
        <BrochureSection />
        <FounderSection />
        <BlogsSection />
        <ConnectSection onOpenEnquiry={() => setIsModalOpen(true)} />
      </main>
      <Footer />
      <FloatingButtons onOpenEnquiry={() => setIsModalOpen(true)} />
      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );

  return (
    <Routes>
      <Route path="/" element={<WebsiteLayout />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/:city" element={<ProjectsPage />} />
      <Route path="/project/:id" element={<ProjectDetailPage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/admin" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
