
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Achievements from "../components/Achievements/Achievements";

export default function AchievementsPage() {
  return (
    <>
      <Navbar/>
      <div className="pt-16 bg-[#1c1c1c]"></div>
      <Achievements/>
      <Footer/>
    </>
  );
}
