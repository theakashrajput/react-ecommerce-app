import { Link } from "react-router-dom";

const BreadCrumbs = ({ items }) => {
  return (
    <div
      aria-label="breadcrumb"
      className="w-full text-sm md:text-base py-2 px-4 md:py-1 md:px-4"
    >
      <ol className="breadcrumb-list flex list-none">
        {items.map((ele, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="breadcrumb-item flex items-center">
              {!isLast ? (
                <Link to={ele.path} className="text-[#333] nav-underline">
                  <span className="nav-underline-text">{ele.label}</span>
                </Link>
              ) : (
                <span aria-current="page" className="text-[#333]">
                  {ele.label}
                </span>
              )}
              {!isLast && (
                <span className="separator mx-2 text-[#6c757d]">{">"}</span>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default BreadCrumbs;
