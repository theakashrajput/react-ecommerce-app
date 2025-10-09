import React, { useState } from "react";

const Nav = () => {
  const [menuPostion, setMenuPostion] = useState(true);
  const [menuOption, setMenuOption] = useState([
    "Shop",
    "New Arrivals",
    "Register",
    "LogIn",
  ]);

  const handleMenuToggle = () => {
    setMenuPostion((menuPostion) => !menuPostion);
  };

  return (
    <>
      <div className="w-full absolute top-0 left-0 bg-[#fff] text-[#000] flex justify-between items-center py-5 px-4 z-10">
        <div className="flex items-center">
          <i
            onClick={handleMenuToggle}
            className="ri-menu-line text-xl leading-none font-semibold"
          ></i>
          <h2 className="text-2xl text-[#000] font-extrabold font-[Inter] leading-none ml-3">
            SHOP.CO
          </h2>
        </div>
        <div>
          <i className="ri-search-line text-xl font-semibold"></i>
          <i className="ri-shopping-cart-line text-xl ml-3 font-semibold"></i>
          <i className="ri-user-3-line text-xl ml-3 font-semibold"></i>
        </div>
      </div>
      <div
        className={`w-full bg-[#fff] flex flex-col gap-3 pt-2 pb-3 px-1 absolute left-0 duration-600 ${
          menuPostion ? "top-16" : `-top-${(menuOption.length - 1) * 12}`
        } ease-out`}
      >
        <hr className="w-[95%] mx-auto text-[#dbdbdb]" />
        {menuOption.map((ele, idx) => (
          <div
            key={idx}
            className="text-lg active:bg-[#f3f3f3] rounded-4xl px-4 py-2 leading-none"
          >
            {ele}
          </div>
        ))}
      </div>
    </>
  );
};

export default Nav;
