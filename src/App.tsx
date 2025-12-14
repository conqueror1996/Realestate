import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import ProjectShowcase from './components/ProjectShowcase';
import GallerySection from './components/GallerySection';

import FounderSection from './components/FounderSection';
import BlogsSection from './components/BlogsSection';

import ConnectSection from './components/ConnectSection';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

function App() {
  return (
    <div className="font-sans antialiased text-text-gray bg-white">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <StatsSection />
        <ProjectShowcase />
        <GallerySection />

        <FounderSection />
        <BlogsSection />

        <ConnectSection />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
