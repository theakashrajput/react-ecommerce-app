import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  const menuItems = ["Shop", "New Arrivals", "Register", "Login"];

  // Toggle menu open/close
  const handleMenuToggle = (e) => {
    e.stopPropagation();
    setMenuOpen((prev) => !prev);
  };

  // Close when clicking outside
  useEffect(() => {
    if (!menuOpen) return;
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // Format name for URL (replace spaces with hyphens)
  const formatPath = (name) => `/${name.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <>
      <nav className="w-full absolute top-0 left-0 bg-[#fff] text-[#000] flex justify-between items-center py-5 px-4 z-10 md:px-8 xl:px-16">
        <div className="flex items-center">
          <i
            onClick={handleMenuToggle}
            className="ri-menu-line text-xl font-semibold md:hidden cursor-pointer"
          ></i>

          <h2 className="text-2xl font-extrabold ml-3 md:ml-0 md:text-2xl lg:text-3xl font-[Inter]">
            <Link to="/">SHOP.CO</Link>
          </h2>

          <div className="hidden md:flex lg:gap-5 gap-3 items-center lg:text-base text-sm lg:ml-12 md:ml-8">
            {menuItems.map((item) => (
              <NavLink
                key={item}
                to={formatPath(item)}
                className={({ isActive }) =>
                  `nav-underline ${isActive ? "text-[#454545]" : "text-[#000]"}`
                }
              >
                <span className="nav-underline-text">{item}</span>
              </NavLink>
            ))}
          </div>
        </div>

        <div className="flex gap-5 lg:w-1/2 md:w-2/5 items-center justify-end">
          <i className="md:hidden ri-search-line text-2xl font-semibold"></i>
          <div className="hidden md:block bg-[#F0F0F0] w-[85%] px-3 py-2 rounded-4xl">
            <i className="ri-search-line lg:text-xl text-sm text-[#A3A3A3]"></i>
            <input
              type="text"
              className="inline-block w-[90%] lg:text-base outline-none lg:ml-3 ml-1 bg-transparent"
              placeholder="Search for products..."
            />
          </div>
          <i className="ri-shopping-cart-line text-xl font-semibold lg:text-2xl"></i>
          <i className="ri-user-3-line text-xl font-semibold lg:text-2xl"></i>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        ref={menuRef}
        className={`w-full bg-[#fff] flex flex-col gap-3 pt-2 pb-3 px-1 absolute left-0 duration-500 ease-out ${
          menuOpen ? "top-16" : "-top-48"
        }`}
      >
        <hr className="w-[95%] mx-auto text-[#dbdbdb]" />
        {menuItems.map((item) => (
          <NavLink
            key={item}
            to={formatPath(item)}
            className="text-lg active:bg-[#f3f3f3] rounded-4xl px-4 py-2"
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default Nav;
