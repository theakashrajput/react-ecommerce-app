import { useNavigate } from "react-router-dom";
import myImage from "../../asset/hero.jpg";
import starPng from "../../asset/star.png";

const HeroSection = () => {
  const navigation = useNavigate();

  return (
    <section className="bg-[#F2F0F1] pt-10 px-3 flex flex-col lg:flex-row md:px-10 xl:gap-20 lg:justify-between">
      <div className="lg:w-[50%] md:pt-10 lg:pt-5 px-5 flex flex-col items-center lg:items-start">
        <h2 className="hero-text text-[2.5rem] md:text-[3.5rem] lg:text-[3.35rem] xl:text-[4rem] uppercase tracking-tight lg:tracking-normal leading-none font-extrabold">
          Find Clothes that matches your style
        </h2>
        <p className="mt-4 md:mt-6 text-xs md:text-sm lg:text-xs xl:pr-14 text-[#A2A0A1] tracking-wide">
          Browse through our diverse range of meticulousely crafted garments,
          designed to bring out your individually and cater to your sense of
          style.
        </p>
        <button 
        onClick={()=>navigation('/products')}
        className="w-full md:max-w-lg lg:max-w-[50%] cursor-pointer xl:max-w-[40%] bg-[#000] text-[#C7C7C7] rounded-4xl py-3 md:text-lg mt-7 md:mt-10 xl:mt-8 active:scale-95">
          Shop Now
        </button>
        <div className="w-full grid mt-7 md:mt-15 lg:mt-10 px-5 gap-3 lg:gap-0 grid-cols-2 lg:grid-cols-3 xl:items-center lg:items-baseline place-items-center">
          {[
            { number: "200", text: "International Brands" },
            { number: "2,000", text: "High-Quality products" },
            { number: "30,000", text: "Happy Customers" },
          ].map((ele, idx) => (
            <div
              key={idx}
              className={`${
                idx === 2
                  ? "lg:w-full col-span-2 lg:col-span-1 md:mt-3 lg:mt-0 lg:pl-5 lg:pr-5 flex flex-col justify-center lg:border-l-1 lg:border-[#cbcbcb]"
                  : ""
              } 
            ${
              idx === 1
                ? "w-full border-l-1 pl-3 md:pl-20 lg:pl-5 lg:mr-5 xl:mr-0 border-[#cbcbcb] flex flex-col justify-center"
                : ""
            }
            ${idx === 0 ? "lg:pr-5" : ""}
            `}
            >
              <div className="text-xl md:text-2xl lg:text-xl font-[Gilroy] font-semibold">
                {ele.number}+
              </div>
              <div className="text-xs md:text-sm lg:text-xs xl:text-xs text-[#A2A0A1]">
                {ele.text}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-5 md:pt-15 lg:pt-0 relative lg:w-1/2 xl:w-[40%]">
        <img
          src={myImage}
          alt="Hero Image"
          className="w-full max-w-[500px] h-auto aspect-square object-cover mx-auto lg:mx-0"
        />
        <img
          src={starPng}
          alt="Star"
          className="absolute w-14 md:w-20 lg:w-18 right-3 md:right-12 lg:right-4 top-10 md:top-20 lg:top-10 aspect-square"
        />
        <img
          src={starPng}
          alt="Star"
          className="absolute w-8 md:w-15 lg:w-12 left-5 md:left-20 lg:left-8 top-25 md:top-52 lg:top-40 aspect-square"
        />
      </div>
    </section>
  );
};

export default HeroSection;
