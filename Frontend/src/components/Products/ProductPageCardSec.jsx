import { useState, useEffect } from "react";
import product1 from "../../asset/product1.png";
import CategoryWiseFilter from "../filters/CategoryWiseFilter";
import ClothesWiseFilter from "../filters/ClothesWiseFilter";
import RangeSliderFilter from "../filters/RangeSliderFilter";
import SizeWiseFilter from "../filters/SizeWiseFilter";
import ProductGrid from "./ProductGrid";
import Pagination from "../common/Pagination";

const ProductPageCardSec = () => {
  // const cardData = [
  //   {
  //     image: product1,
  //     productTitle: "Product 1",
  //     productRating: 5,
  //     productPrice: 120,
  //   },
  //   {
  //     image: product1,
  //     productTitle: "Product 2",
  //     productRating: 4.5,
  //     productPrice: 120,
  //   },
  //   {
  //     image: product1,
  //     productTitle: "Product 3",
  //     productRating: 3.5,
  //     productPrice: 120,
  //   },
  //   {
  //     image: product1,
  //     productTitle: "Product 4",
  //     productRating: 2,
  //     productPrice: 120,
  //   },
  //   {
  //     image: product1,
  //     productTitle: "Product 4",
  //     productRating: 2,
  //     productPrice: 120,
  //   },
  //   {
  //     image: product1,
  //     productTitle: "Product 4",
  //     productRating: 2,
  //     productPrice: 120,
  //   },
  //   {
  //     image: product1,
  //     productTitle: "Product 4",
  //     productRating: 2,
  //     productPrice: 120,
  //   },
  //   {
  //     image: product1,
  //     productTitle: "Product 4",
  //     productRating: 2,
  //     productPrice: 120,
  //   },
  //   {
  //     image: product1,
  //     productTitle: "Product 4",
  //     productRating: 2,
  //     productPrice: 120,
  //   },
  //   {
  //     image: product1,
  //     productTitle: "Product 4",
  //     productRating: 2,
  //     productPrice: 120,
  //   },
  //   {
  //     image: product1,
  //     productTitle: "Product 4",
  //     productRating: 2,
  //     productPrice: 120,
  //   },
  //   {
  //     image: product1,
  //     productTitle: "Product 4",
  //     productRating: 2,
  //     productPrice: 120,
  //   },
  //   {
  //     image: product1,
  //     productTitle: "Product 4",
  //     productRating: 2,
  //     productPrice: 120,
  //   },
  //   {
  //     image: product1,
  //     productTitle: "Product 4",
  //     productRating: 2,
  //     productPrice: 120,
  //   },
  //   {
  //     image: product1,
  //     productTitle: "Product 4",
  //     productRating: 2,
  //     productPrice: 120,
  //   },
  //   {
  //     image: product1,
  //     productTitle: "Product 4",
  //     productRating: 2,
  //     productPrice: 120,
  //   },
  //   {
  //     image: product1,
  //     productTitle: "Product 4",
  //     productRating: 2,
  //     productPrice: 120,
  //   },
  //   {
  //     image: product1,
  //     productTitle: "Product 4",
  //     productRating: 2,
  //     productPrice: 120,
  //   },
  //   {
  //     image: product1,
  //     productTitle: "Product 4",
  //     productRating: 2,
  //     productPrice: 120,
  //   },
  //   {
  //     image: product1,
  //     productTitle: "Product 4",
  //     productRating: 2,
  //     productPrice: 120,
  //   },
  //   {
  //     image: product1,
  //     productTitle: "Product 4",
  //     productRating: 2,
  //     productPrice: 120,
  //   },
  //   {
  //     image: product1,
  //     productTitle: "Product 4",
  //     productRating: 2,
  //     productPrice: 120,
  //   },
  //   {
  //     image: product1,
  //     productTitle: "Product 4",
  //     productRating: 2,
  //     productPrice: 120,
  //   },
  //   {
  //     image: product1,
  //     productTitle: "Product 4",
  //     productRating: 2,
  //     productPrice: 120,
  //   },
  //   {
  //     image: product1,
  //     productTitle: "Product 4",
  //     productRating: 2,
  //     productPrice: 120,
  //   },
  //   {
  //     image: product1,
  //     productTitle: "Product 4",
  //     productRating: 2,
  //     productPrice: 120,
  //   },
  //   {
  //     image: product1,
  //     productTitle: "Product 4",
  //     productRating: 2,
  //     productPrice: 120,
  //   },
  //   {
  //     image: product1,
  //     productTitle: "Product 4",
  //     productRating: 2,
  //     productPrice: 120,
  //   },
  // ];

  // Pagination Logic

  let cardData = Array(110).fill({
  image: product1,
  productTitle: "Product 1",
  productRating: 4,
  productPrice: 120,
});

  const [page, setPage] = useState(1);
  const perPage = 12;

  const startIndex = (page - 1) * perPage;
  const endIndex = Math.min(startIndex + perPage, cardData.length);
  const visibleProducts = cardData.slice(startIndex, endIndex);
  const totalPages = Math.ceil(cardData.length / perPage);

  // const handleNext = () => {
  // if (startIndex + perPage < cardData.length) setPage(page + 1);
  // };

  // const handlePrev = () => {
  // if (page > 1) setPage(page - 1);
  // };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
    <section className="px-4 pb-20 md:flex gap-3 md:mt-3">
      {/* Fliter which only show on tablet and laptop screens */}
      <div className="hidden md:block w-[30%] lg:w-[25%] border-[1px] border-[#a2a1ad]/40 rounded-xl p-3">
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
      <div className="md:w-[70%] lg:w-[75%]">
        {/* Dynamic Name based by category */}
        <div className="md:flex justify-between items-center">
          <h3 className="text-2xl mt-2 md:mt-0 font-semibold font-[Inter]">
            Products
          </h3>
          <div className="flex justify-between items-center mt-1">
            {/* Showing all products */}
            <h5 className="text-xs tracking-wide text-[#A2A0A1]">
              {`Showing ${startIndex + 1}-${endIndex} of ${
                cardData.length
              } Products`}
            </h5>
            <button className="md:hidden bg-[#F0F0F0] rounded-full px-2 py-1">
              <i className="ri-sound-module-line"></i>
            </button>
            {/* Create filter here */}
          </div>
        </div>
        <ProductGrid visibleProducts={visibleProducts} />
        <hr className="text-[#a2a0a1]/40 w-full" />
        <Pagination
          totalPages={totalPages}
          currentPage={page}
          onPageChange={setPage}
        />
      </div>
    </section>
  );
};

export default ProductPageCardSec;
