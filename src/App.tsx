import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import WorkAndProjects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';

// Project Pages
import Branding from './pages/projects/Branding';
import UIUX from './pages/projects/UIUX';
import PosterDesign from './pages/projects/PosterDesign';
import ConceptArt from './pages/projects/ConceptArt';
import Photography from './pages/projects/Photography';
import Infographics from './pages/projects/Infographics';
import LogoDesign from './pages/projects/LogoDesign';
import Packaging from './pages/projects/Packaging';

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="min-h-screen">
      {isHomePage && <Header />}
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <WorkAndProjects />
            <Services />
            <Contact />
          </>
        } />

        {/* Project Routes */}
        <Route path="/projects/branding" element={<Branding />} />
        <Route path="/projects/uiux" element={<UIUX />} />
        <Route path="/projects/poster" element={<PosterDesign />} />
        <Route path="/projects/concept-art" element={<ConceptArt />} />
        <Route path="/projects/photography" element={<Photography />} />
        <Route path="/projects/infographics" element={<Infographics />} />
        <Route path="/projects/logo-design" element={<LogoDesign />} />
        <Route path="/projects/packaging" element={<Packaging />} />
      </Routes>
      {isHomePage && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
