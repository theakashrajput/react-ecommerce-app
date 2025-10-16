const SizeWiseFilter = () => {
  return (
    <div className="w-full pt-3 border-b-[1px] border-[#a2a1ad]/40 pb-5">
      <div className="flex justify-between items-center mb-3">
        <h5 className="font-semibold text-xl py-3">Sizes</h5>
        <i className="ri-arrow-down-s-line"></i>
      </div>
      <div className="flex flex-wrap gap-3 items-center">
        {[
          "XX-Small",
          "X-Small",
          "Small",
          "Medium",
          "Large",
          "X-Large",
          "XX-Large",
          "3X-Large",
          "4X-Large",
        ].map((ele, idx) => (
          <button
            className="text-sm px-3 py-2 rounded-2xl tracking-wide bg-[#F0F0F0] text-black hover:text-white hover:bg-[black] active:text-white duration-150 ease-in cursor-pointer active:scale-95"
            key={idx}
          >
            {ele}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeWiseFilter;
