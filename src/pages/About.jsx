import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Navbar from "../components/Navbar/Navbar";
import Learning from "../components/Learning/Learning";
import Performances from "../components/Performances/Performances";
import Achievements from "../components/Achievements/Achievements";
import Footer from "../components/Footer/Footer";
import AboutPg from "../components/About/AboutPg";

export default function Home() {
  return (
    <>
      <Navbar/>
      <AboutPg/>
      <Footer/>
    </>
  );
}
