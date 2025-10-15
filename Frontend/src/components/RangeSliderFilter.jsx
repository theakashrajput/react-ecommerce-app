import { useRef, useState } from "react";

export default function PriceRange() {
  const trackRef = useRef(null);
  const [min, setMin] = useState(50);
  const [max, setMax] = useState(200);
  const range = { min: 0, max: 300 };

  const handleDrag = (thumb, e) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const x = Math.min(Math.max(e.clientX - rect.left, 0), rect.width);
    const value = Math.round((x / rect.width) * range.max);

    if (thumb === "min" && value < max) setMin(value);
    if (thumb === "max" && value > min) setMax(value);
  };

  const handleMouseDown = (thumb) => {
    const move = (e) => handleDrag(thumb, e);
    const up = () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
  };

  return (
    <div className="w-full border-b-[1px] border-[#a2a1ad]/40 pt-3 pb-15">
      <div className="flex justify-between items-center mb-3">
        <h5 className="font-semibold text-xl py-3">Price</h5>
        <i className="ri-arrow-down-s-line"></i>
      </div>

      <div ref={trackRef} className="relative h-2 bg-gray-300 rounded-md w-[90%] mx-auto">
        {/* filled track */}
        <div
          className="absolute h-2 bg-black rounded-md"
          style={{
            left: `${(min / range.max) * 100}%`,
            width: `${((max - min) / range.max) * 100}%`,
          }}
        ></div>

        {/* min thumb */}
        <div
          className="absolute w-5 h-5 bg-black rounded-full -top-1.5 cursor-grab"
          style={{ left: `calc(${(min / range.max) * 100}% - 10px)` }}
          onMouseDown={() => handleMouseDown("min")}
        >
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white text-black px-2 py-1 text-sm font-medium">
            ${min}
          </span>
        </div>

        {/* max thumb */}
        <div
          className="absolute w-5 h-5 bg-black rounded-full -top-1.5 cursor-grab"
          style={{ left: `calc(${(max / range.max) * 100}% - 10px)` }}
          onMouseDown={() => handleMouseDown("max")}
        >
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white text-black px-2 py-1 text-sm font-medium">
            ${max}
          </span>
        </div>
      </div>
    </div>
  );
}
