import product1 from "../asset/product1.png";
import ProductPageCard from "./ProductPageCard";

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

  return (
    <div className="px-4 pb-20 md:flex gap-3 md:mt-3">
      <div className="hidden md:block w-[30%] h-[600px] border-[1px] border-[#a2a1ad]/40 rounded-xl p-3">
        <div className="flex justify-between items-center border-b-[1px] border-[#a2a1ad]/40 pb-3">
          <h5 className="font-semibold tracking-wide text-xl">Filter</h5>
          <i className="text-[#a2a1ad] ri-sound-module-line"></i>
        </div>
        <div className="py-3 border-b-[1px] border-[#a2a1ad]/40">
          {["T shirts", "Hoddies", "Shirts", "Shorts", "Jeans"].map(
            (ele, idx) => (
              <span
                className="block text-sm text-[#A2A1AD] ease-in duration-100 hover:bg-[#f3f3f3] rounded-4xl px-4 py-2"
                key={idx}
              >
                {ele}
              </span>
            )
          )}
        </div>
        <div>
          <div className="flex justify-between items-center">
            <h5 className="font-semibold text-xl py-3">Price</h5>
            <i className="ri-arrow-down-s-line"></i>
          </div>
          <div className="mt-3">
            <div className="w-full relative rounded-2xl py-0.5 bg-[#A2A1AD]/40">
              <div className="range-slider absolute top-0 left-14 w-20 rounded-2xl py-0.5 bg-[#000]">
                <div className="ranger-slider-price absolute top-5 left-0 text-sm font-semibold font-[Gilroy] -translate-x-[50%]">
                  $50
                </div>
                <div
                  className="ranger-slider-price absolute top-5 right-0 text-sm font-semibold font-[Gilroy]
               translate-x-[25%]"
                >
                  $80
                </div>
              </div>
            </div>
          </div>
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
          {cardData.map((ele, idx) => (
            <ProductPageCard data={ele} key={idx} />
          ))}
        </div>
        <hr className="text-[#a2a0a1]/40 w-full" />
        <div className="flex justify-between items-center pt-8 gap-3">
          <button className="border-[1px] border-[#a2a0a1] py-2 px-3 text-sm rounded-md">
            <i className="ri-arrow-left-line mr-1"></i>Previous
          </button>
          <div className="flex w-full items-center justify-center gap-2">
            <div className="border-[1px] border-[#a2a0a1] py-2 px-4 text-sm rounded-md">
              1
            </div>
            <div className="border-[1px] border-[#a2a0a1] py-2 px-4 text-sm rounded-md">
              2
            </div>
          </div>
          <button className="border-[1px] border-[#a2a0a1] py-2 px-3 text-sm rounded-md">
            Next<i className="ri-arrow-right-line ml-1"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPageCardSec;
