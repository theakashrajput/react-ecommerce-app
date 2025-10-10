import React from "react";
import myImage from "../asset/hero.jpg";
import starPng from "../asset/star.png";

const HeroSection = () => {
  return (
    <section className="bg-[#F2F0F1] pt-10 px-3">
      <div>
        <h2 className="text-[2.5rem] uppercase tracking-tight leading-none font-extrabold">
          Find Clothes that matches your style
        </h2>
        <p className="mt-4 text-xs text-[#A2A0A1] tracking-wide">
          Browse through our diverse range of meticulousely crafted garments,
          designed to bring out your individually and cater to your sense of
          style.
        </p>
        <button className="w-full bg-[#000] text-[#C7C7C7] rounded-3xl py-3 text-base mt-7 active:scale-95">
          Shop Now
        </button>
        <div className="w-full grid mt-7 px-5 gap-3 grid-cols-2 place-items-center">
          {[
            { number: "200", text: "International Brands" },
            { number: "2,000", text: "High-Quality products" },
            { number: "30,000", text: "Happy Customers" },
          ].map((ele, idx) => (
            <div
              key={idx}
              className={`${
                idx === 2
                  ? " col-span-2 flex flex-col items justify-center"
                  : ""
              } ${idx === 1 ? "border-l-1 pl-3 border-[#cbcbcb]" : ""}`}
            >
              <div className="text-xl font-[Gilroy] font-semibold">
                {ele.number}+
              </div>
              <div className="text-xs text-[#A2A0A1]">{ele.text}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-5 relative">
        <img src={myImage} alt="Hero Image" />
        <img
          src={starPng}
          alt="Star"
          className="absolute w-14 right-3 top-7 aspect-square"
        />
        <img
          src={starPng}
          alt="Star"
          className="absolute w-8 left-5 top-25 aspect-square"
        />
      </div>
    </section>
  );
};

export default HeroSection;
