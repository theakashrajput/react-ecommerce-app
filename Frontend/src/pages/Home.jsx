import CategoryCardSec from "../components/Home/CategoryCardSec";
import Footer from "../components/common/Footer";
import HeroSection from "../components/Home/HeroSection";
import HomeReviewSec from "../components/Home/HomeReviewSec";
import NewArrivals from "../components/Home/NewArrivals";
import Scroller from "../components/Home/Scroller";
import TopSelling from "../components/Home/TopSelling";

const Home = () => {
  return (
    <div className="h-screen w-full bg-[#fff] text-[#000] pt-18">
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
