import { useState } from "react";
import product1 from "../asset/product1.png";
import CategoryWiseFilter from "./CategoryWiseFilter";
import ClothesWiseFilter from "./ClothesWiseFilter";
import ProductPageCard from "./ProductPageCard";
import RangeSliderFilter from "./RangeSliderFilter";
import SizeWiseFilter from "./SizeWiseFilter";

const ProductPageCardSec = () => {
  const cardData = [
    {
      image: product1,
      productTitle: "Product 1",
      productRating: 5,
      productPrice: 120,
    },
    {
      image: product1,
      productTitle: "Product 2",
      productRating: 4.5,
      productPrice: 120,
    },
    {
      image: product1,
      productTitle: "Product 3",
      productRating: 3.5,
      productPrice: 120,
    },
    {
      image: product1,
      productTitle: "Product 4",
      productRating: 2,
      productPrice: 120,
    },
    {
      image: product1,
      productTitle: "Product 4",
      productRating: 2,
      productPrice: 120,
    },
    {
      image: product1,
      productTitle: "Product 4",
      productRating: 2,
      productPrice: 120,
    },
    {
      image: product1,
      productTitle: "Product 4",
      productRating: 2,
      productPrice: 120,
    },
    {
      image: product1,
      productTitle: "Product 4",
      productRating: 2,
      productPrice: 120,
    },
    {
      image: product1,
      productTitle: "Product 4",
      productRating: 2,
      productPrice: 120,
    },
    {
      image: product1,
      productTitle: "Product 4",
      productRating: 2,
      productPrice: 120,
    },
    {
      image: product1,
      productTitle: "Product 4",
      productRating: 2,
      productPrice: 120,
    },
    {
      image: product1,
      productTitle: "Product 4",
      productRating: 2,
      productPrice: 120,
    },
    {
      image: product1,
      productTitle: "Product 4",
      productRating: 2,
      productPrice: 120,
    },
    {
      image: product1,
      productTitle: "Product 4",
      productRating: 2,
      productPrice: 120,
    },
    {
      image: product1,
      productTitle: "Product 4",
      productRating: 2,
      productPrice: 120,
    },
    {
      image: product1,
      productTitle: "Product 4",
      productRating: 2,
      productPrice: 120,
    },
    {
      image: product1,
      productTitle: "Product 4",
      productRating: 2,
      productPrice: 120,
    },
    {
      image: product1,
      productTitle: "Product 4",
      productRating: 2,
      productPrice: 120,
    },
    {
      image: product1,
      productTitle: "Product 4",
      productRating: 2,
      productPrice: 120,
    },
    {
      image: product1,
      productTitle: "Product 4",
      productRating: 2,
      productPrice: 120,
    },
    {
      image: product1,
      productTitle: "Product 4",
      productRating: 2,
      productPrice: 120,
    },
    {
      image: product1,
      productTitle: "Product 4",
      productRating: 2,
      productPrice: 120,
    },
    {
      image: product1,
      productTitle: "Product 4",
      productRating: 2,
      productPrice: 120,
    },
    {
      image: product1,
      productTitle: "Product 4",
      productRating: 2,
      productPrice: 120,
    },
    {
      image: product1,
      productTitle: "Product 4",
      productRating: 2,
      productPrice: 120,
    },
  ];

  const [page, setPage] = useState(1);
  const perPage = 12;

  const startIndex = (page - 1) * 12;
  const visibleProducts = cardData.slice(startIndex, startIndex + perPage);

  const handleNext = () => {
    if (startIndex + perPage < cardData.length) setPage(page + 1);
  };

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <div className="px-4 pb-20 md:flex gap-3 md:mt-3">
      {/* Fliter which only show on tablet and laptop screens */}
      <div className="hidden md:block w-[30%] border-[1px] border-[#a2a1ad]/40 rounded-xl p-3">
        <div className="flex justify-between items-center border-b-[1px] border-[#a2a1ad]/40 pb-3">
          <h5 className="font-semibold tracking-wide text-xl">Filter</h5>
          <i className="text-[#a2a1ad] ri-sound-module-line"></i>
        </div>
        {/* Clothes Wise Filter */}
        <ClothesWiseFilter />
        {/* Slider Range Wise Price Filter */}
        <RangeSliderFilter />
        {/* Size wise filter */}
        <SizeWiseFilter />
        {/* Category wise filter */}
        <CategoryWiseFilter />
        {/* Apply filter button */}
        <div className="w-full flex justify-center">
          <button className="bg-black text-white w-[90%] mt-5 py-4 text-lg rounded-4xl cursor-pointer hover:bg-[#1a1a1a] duration-150 ease-in active:scale-95 border-none">
            Apply Now
          </button>
        </div>
      </div>
      <div className="md:w-[70%]">
        {/* Dynamic Name based by category */}
        <div className="md:flex justify-between items-center">
          <h3 className="text-2xl mt-2 md:mt-0 font-semibold font-[Inter]">
            Products
          </h3>
          <div className="flex justify-between items-center mt-1">
            {/* Showing all products */}
            <h5 className="text-xs tracking-wide text-[#A2A0A1]">
              Showing 1-10 of 30 Products
            </h5>
            <button className="md:hidden bg-[#F0F0F0] rounded-full px-2 py-1">
              <i className="ri-sound-module-line"></i>
            </button>
            {/* Create filter here */}
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 pt-3 pb-5">
          {visibleProducts.map((ele, idx) => (
            <ProductPageCard data={ele} key={idx} />
          ))}
        </div>
        <hr className="text-[#a2a0a1]/40 w-full" />
        <div className="flex justify-between items-center pt-8 gap-3">
          <button
            onClick={handlePrev}
            disabled={page === 1}
            className="border-[1px] border-[#a2a0a1] py-2 px-3 text-sm rounded-md"
          >
            <i className="ri-arrow-left-line mr-1"></i>Previous
          </button>
          {/* <div className="flex w-full items-center justify-center gap-2">
            <div className="border-[1px] border-[#a2a0a1] py-2 px-4 text-sm rounded-md">
              1
            </div>
            <div className="border-[1px] border-[#a2a0a1] py-2 px-4 text-sm rounded-md">
              2
            </div>
          </div> */}
          <span className="text-sm">
            Page {page} of {Math.ceil(cardData.length / perPage)}
          </span>
          <button
            onClick={handleNext}
            disabled={startIndex + perPage >= cardData.length}
            className="border-[1px] border-[#a2a0a1] py-2 px-3 text-sm rounded-md"
          >
            Next<i className="ri-arrow-right-line ml-1"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPageCardSec;
