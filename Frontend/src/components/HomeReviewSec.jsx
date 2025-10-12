import { useRef } from "react";
import "../index.css";

const HomeReviewSec = () => {
  const scrollRef = useRef(null);

  const handleScrollButtonRight = () => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector("div.w-full");
      if (card) {
        scrollRef.current.scrollBy({
          left: card.offsetWidth + 12,
          behavior: "smooth",
        });
      }
    }
  };

  const handleScrollButtonLeft = () => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector("div.w-full");
      if (card) {
        scrollRef.current.scrollBy({
          left: -(card.offsetWidth + 12),
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section className="w-full py-10 px-5">
      <div className="w-full flex justify-between items-end">
        <h2 className="w-2/3 uppercase text-[2.5rem] font-[Gilroy] font-extrabold leading-none text-left tracking-tight">
          Our happy custmoers
        </h2>
        <div className="w-1/4 flex justify-end gap-3">
          <button
            className="text-xl px-2 py-1 rounded-full border-[1px] active:scale-95 font-semibold"
            onClick={handleScrollButtonLeft}
          >
            <i className="ri-arrow-left-line"></i>
          </button>
          <button
            className="text-xl px-2 py-1 rounded-full border-[1px] active:scale-95 font-semibold"
            onClick={handleScrollButtonRight}
          >
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="w-full flex gap-3 mt-8 overflow-x-auto scrollbar-container whitespace-nowrap scroll-smooth scroll-snap-x"
      >
        <div
          className="w-full shrink-0 border-2 border-[#F4F4F4] rounded-2xl px-5 py-4 scroll-snap-child"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="review-sec-rationg flex gap-2">
            {Array.from({ length: 5 }).map((_, idx) => (
              <svg
                key={idx}
                stroke="currentColor"
                fill="#ffc734"
                viewBox="0 0 576 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
              </svg>
            ))}
          </div>
          <div className="review-title">
            <h5 className="mt-2 font-semibold font-[Gilroy]">
              Sarah M.
              <span className="ml-2">
                <svg
                  className="inline-block w-4"
                  viewBox="0 0 18 18"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier"></g>
                  <g id="SVGRepo_tracerCarrier"></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fill="#10ab30"
                      d="M9 0a9 9 0 1 0 9 9 9 9 0 0 0-9-9zm4.49 6.924l-5.02 5.51a.983.983 0 0 1-1.442 0l-2.48-2.482a.983.983 0 0 1 .008-1.417 1.027 1.027 0 0 1 1.4.02L7.712 10.3l4.3-4.73a1.018 1.018 0 0 1 1.4-.075 1.006 1.006 0 0 1 .078 1.43z"
                    ></path>{" "}
                  </g>
                </svg>
              </span>
            </h5>
          </div>
          <p className="mt-2 text-xs text-[#ADADAD] text-wrap">
            "I'm blown away by the quality ad style of the clothes I received
            from Shop.co. From casual wear to elegant dresses, every pieces I've
            bought has exceeded my expectations."
          </p>
        </div>
        <div
          className="w-full shrink-0 border-2 border-[#F4F4F4] rounded-2xl px-5 py-4 scroll-snap-child"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="review-sec-rationg flex gap-2">
            {Array.from({ length: 5 }).map((_, idx) => (
              <svg
                key={idx}
                stroke="currentColor"
                fill="#ffc734"
                viewBox="0 0 576 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
              </svg>
            ))}
          </div>
          <div className="review-title">
            <h5 className="mt-2 font-semibold font-[Gilroy]">
              Sarah M.
              <span className="ml-2">
                <svg
                  className="inline-block w-4"
                  viewBox="0 0 18 18"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier"></g>
                  <g id="SVGRepo_tracerCarrier"></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fill="#10ab30"
                      d="M9 0a9 9 0 1 0 9 9 9 9 0 0 0-9-9zm4.49 6.924l-5.02 5.51a.983.983 0 0 1-1.442 0l-2.48-2.482a.983.983 0 0 1 .008-1.417 1.027 1.027 0 0 1 1.4.02L7.712 10.3l4.3-4.73a1.018 1.018 0 0 1 1.4-.075 1.006 1.006 0 0 1 .078 1.43z"
                    ></path>{" "}
                  </g>
                </svg>
              </span>
            </h5>
          </div>
          <p className="mt-2 text-xs text-[#ADADAD] text-wrap">
            "I'm blown away by the quality ad style of the clothes I received
            from Shop.co. From casual wear to elegant dresses, every pieces I've
            bought has exceeded my expectations."
          </p>
        </div>
        <div
          className="w-full shrink-0 border-2 border-[#F4F4F4] rounded-2xl px-5 py-4 scroll-snap-child"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="review-sec-rationg flex gap-2">
            {Array.from({ length: 5 }).map((_, idx) => (
              <svg
                key={idx}
                stroke="currentColor"
                fill="#ffc734"
                viewBox="0 0 576 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
              </svg>
            ))}
          </div>
          <div className="review-title">
            <h5 className="mt-2 font-semibold font-[Gilroy]">
              Sarah M.
              <span className="ml-2">
                <svg
                  className="inline-block w-4"
                  viewBox="0 0 18 18"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier"></g>
                  <g id="SVGRepo_tracerCarrier"></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fill="#10ab30"
                      d="M9 0a9 9 0 1 0 9 9 9 9 0 0 0-9-9zm4.49 6.924l-5.02 5.51a.983.983 0 0 1-1.442 0l-2.48-2.482a.983.983 0 0 1 .008-1.417 1.027 1.027 0 0 1 1.4.02L7.712 10.3l4.3-4.73a1.018 1.018 0 0 1 1.4-.075 1.006 1.006 0 0 1 .078 1.43z"
                    ></path>{" "}
                  </g>
                </svg>
              </span>
            </h5>
          </div>
          <p className="mt-2 text-xs text-[#ADADAD] text-wrap">
            "I'm blown away by the quality ad style of the clothes I received
            from Shop.co. From casual wear to elegant dresses, every pieces I've
            bought has exceeded my expectations."
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeReviewSec;
