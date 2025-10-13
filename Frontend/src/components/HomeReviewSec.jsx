import { useRef } from "react";
import "../index.css";

const HomeReviewSec = () => {
  const scrollRef = useRef(null);

  const handleScrollButtonRight = () => {
    if (scrollRef.current && scrollRef.current.firstElementChild) {
      const card = scrollRef.current.firstElementChild;
      scrollRef.current.scrollBy({
        left: card.offsetWidth + 12,
        behavior: "smooth",
      });
    }
  };

  const handleScrollButtonLeft = () => {
    if (scrollRef.current && scrollRef.current.firstElementChild) {
      const card = scrollRef.current.firstElementChild;
      scrollRef.current.scrollBy({
        left: -(card.offsetWidth + 12),
        behavior: "smooth",
      });
    }
  };

  let commentData = [
    {
      reviewerName: "Akash",
      reviewerRating: 4,
      reviewerComment:
        "I'm blown away by the quality ad style of the clothes I received from Shop.co. From casual wear to elegant dresses, every pieces I've bought has exceeded my expectations.",
    },
    {
      reviewerName: "Pavan",
      reviewerRating: 3.5,
      reviewerComment:
        "I'm blown away by the quality ad style of the clothes I received from Shop.co. From casual wear to elegant dresses, every pieces I've bought has exceeded my expectations.",
    },
    {
      reviewerName: "Dharmesh",
      reviewerRating: 3.5,
      reviewerComment:
        "I'm blown away by the quality ad style of the clothes I received from Shop.co. From casual wear to elegant dresses, every pieces I've bought has exceeded my expectations.",
    },
    {
      reviewerName: "Sharthak",
      reviewerRating: 4,
      reviewerComment:
        "I'm blown away by the quality ad style of the clothes I received from Shop.co. From casual wear to elegant dresses, every pieces I've bought has exceeded my expectations.",
    },
    {
      reviewerName: "Harsh Vandana Sharma",
      reviewerRating: 5,
      reviewerComment:
        "I'm blown away by the quality ad style of the clothes I received from Shop.co. From casual wear to elegant dresses, every pieces I've bought has exceeded my expectations.",
    },
  ];

  return (
    <section className="w-[90%] py-10 px-5 mx-auto">
      <div className="w-full flex justify-between items-end">
        <h2 className="w-[70%] uppercase text-[2rem] sm:text-[2.5rem] font-[Gilroy] font-extrabold leading-none text-left tracking-tight">
          Our happy custmoers
        </h2>
        <div className="w-[30%] flex justify-end gap-3">
          <button
            className="text-base sm:text-xl px-[1.8vw] py-[1vw] sm:px-2 sm:py-1 rounded-full border-[1px] active:scale-95 font-semibold"
            onClick={handleScrollButtonLeft}
          >
            <i className="ri-arrow-left-line"></i>
          </button>
          <button
            className="text-base sm:text-xl px-[1.8vw] py-[1vw] sm:px-2 sm:py-1 rounded-full border-[1px] active:scale-95 font-semibold"
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
        {commentData.map((ele, idx) => {
          const wholeStar = Math.floor(ele.reviewerRating);
          const halfStar = ele.reviewerRating % 1 === 0.5 ? 1 : 0;
          return (
            <div
              key={idx}
              className="min-w-[300px] border-2 border-[#F4F4F4] rounded-2xl px-5 py-4 snap-start"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="review-sec-rationg flex gap-2">
                {Array.from({ length: wholeStar }).map((_, idx) => (
                  <svg
                    className="lg:text-lg"
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

                {/* Half Star */}
                {Array.from({ length: halfStar }).map((_, idx) => (
                  <svg
                    key={idx}
                    className="lg:text-lg"
                    stroke="currentColor"
                    fill="#ffc734"
                    viewBox="0 0 536 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z"></path>
                  </svg>
                ))}
              </div>
              <div className="review-title">
                <h5 className="mt-2 font-semibold font-[Gilroy]">
                  {ele.reviewerName}
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
                {ele.reviewerComment}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HomeReviewSec;
