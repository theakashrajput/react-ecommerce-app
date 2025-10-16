import React from "react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages = [];

    // Always show first page
    if (currentPage > 3) {
      pages.push(1);
      if (currentPage > 4) pages.push("...");
    }

    // Pages around current
    for (
      let i = Math.max(1, currentPage - 1);
      i <= Math.min(totalPages, currentPage + 1);
      i++
    ) {
      pages.push(i);
    }

    // Always show last page
    if (currentPage < totalPages - 2) {
      if (currentPage < totalPages - 3) pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  };

  const pages = getPageNumbers();

  return (
    <div className="flex justify-center md:justify-between items-center pt-8 gap-3">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`
          hidden md:block ${
          currentPage === 1 ? "invisible" : "visible"
        } border-[1px] border-[#a2a0a1] py-2 px-3 text-sm rounded-md cursor-pointer hover:text-white hover:bg-black ease-in duration-200 active:scale-95`}
      >
        <i className="ri-arrow-left-line mr-1"></i>Previous
      </button>
      {/* Page numbers */}
      <div className="flex gap-2">
      {pages.map((p, i) =>
        p === "..." ? (
          <span key={i} className="px-2 text-gray-400">
            ...
          </span>
        ) : (
          <button
            key={i}
            onClick={() => onPageChange(p)}
            className={`px-3 py-1 rounded-md cursor-pointer ${
              p === currentPage ? "bg-[#F0F0F0] text-black" : "bg-white text-[#908b8b]"
            }`}
          >
            {p}
          </button>
        )
      )}
      </div>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`
          hidden md:block
          ${
          currentPage == totalPages ? "invisible" : "visible"
        } border-[1px] border-[#a2a0a1] py-2 px-3 text-sm rounded-md cursor-pointer hover:text-white hover:bg-black ease-in duration-200 active:scale-95`}
      >
        Next<i className="ri-arrow-right-line ml-1"></i>
      </button>
    </div>
  );
};

export default Pagination;

// <div className="flex justify-center items-center pt-8 gap-3">
//     {pages.map((page, idx)=><button
//     onClick={()=>onPageChange(page)}
//     key={idx}
//     className={`px-3 py-1 rounded-sm border cursor-pointer ${
//         page === currentPage ? "bg-blue-600 text-white" : "bg-white"
//       }`}
//     >{page}</button>)}
// </div>
