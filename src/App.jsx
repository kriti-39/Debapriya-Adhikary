import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import SpotifyButton from "./components/SpotifyButton/SpotifyButton";
import PerformancesPage from "./pages/PerformancesPage";
import LearningPage from "./pages/LearningPage";
import DevaSamanPage from "./pages/DevaSamanPage";
import GirijaPage from "./pages/GirijaPage";
import GalleryPage from "./pages/GalleryPage";
import AchievementsPage from "./pages/AchievementsPage"
import ContactPage from "./pages/Contact";


function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/performances" element={<PerformancesPage />} />
        <Route path="/learning" element={<LearningPage />} />
        <Route path="/devasaman" element={<DevaSamanPage/>} />
        <Route path="/girija" element={<GirijaPage/>} />
        <Route path="/gallery" element={<GalleryPage/>} />
        <Route path="/achievements" element={<AchievementsPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>

      <SpotifyButton/>
    </Router>
  );
}

export default App;
