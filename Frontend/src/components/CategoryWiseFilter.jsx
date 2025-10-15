import React from "react";

const CategoryWiseFilter = () => {
  return (
    <div className="w-full pt-3 pb-5">
      <div className="flex justify-between items-center">
        <h5 className="font-semibold text-xl py-3">Dress Style</h5>
        <i className="ri-arrow-down-s-line"></i>
      </div>
      <div>
        {["Casual", "Formal", "Party", "Gym"].map((ele, idx) => (
          <span
            className="block text-sm text-[#707070] ease-in duration-100 hover:bg-[#f3f3f3] rounded-4xl px-4 py-2"
            key={idx}
          >
            {ele}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CategoryWiseFilter;
