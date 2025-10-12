import CategoryCardSec from "../components/CategoryCardSec";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import HomeReviewSec from "../components/HomeReviewSec";
import NewArrivals from "../components/NewArrivals";
import Scroller from "../components/Scroller";
import TopSelling from "../components/TopSelling";

const Home = () => {
  return (
    <div className="h-screen w-full bg-[#fff] text-[#000] pt-20">
      <HeroSection />
      <Scroller />
      <NewArrivals />
      <TopSelling />
      <CategoryCardSec />
      <HomeReviewSec />
      <Footer />
    </div>
  );
};

export default Home;
