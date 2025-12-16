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

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      // setIsModalOpen(true); // Temporarily disabled for testing
    }, 500000);

    return () => clearTimeout(timer);
  }, []);

  const WebsiteLayout = () => (
    <div className="font-sans antialiased text-text-gray bg-white">
      <TopBar />
      <Navbar />
      <main>
        <HeroCarousel />
        <StatsSection />
        <ProjectShowcase />
        <JourneySection />
        <BrochureSection />
        <FounderSection />
        <BlogsSection />
        <ConnectSection />
      </main>
      <Footer />
      <FloatingButtons onOpenEnquiry={() => setIsModalOpen(true)} />
      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );

  return (
    <Routes>
      <Route path="/" element={<WebsiteLayout />} />
      <Route path="/admin" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
