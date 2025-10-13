import FormalImg from "../asset/Formal.jpg";
import CasualImg from "../asset/Casual.jpg";
import GymImg from "../asset/Gym.jpg";
import PartyImg from "../asset/Party.jpg";

const CategoryCardSec = () => {
  const categoryCardData = [
    { img: CasualImg, category: "Casual" },
    { img: FormalImg, category: "Formal" },
    { img: PartyImg, category: "Party" },
    { img: GymImg, category: "Gym" },
  ];

  return (
    <section className="px-5 pt-10 pb-5 mx-auto sm:max-w-[90%]">
      <div className="w-full bg-[#F0F0F0] px-3 pt-10 lg:pt-12 xl:pt-15 pb-6 rounded-2xl">
        <h2 className="uppercase text-center text-[2.5rem] font-[Gilroy] font-extrabold leading-none tracking-tight">
          Browse by dress style
        </h2>
        <div
          id="home-category-card-sec-grid-cont"
          className="grid grid-cols-1 px-3 gap-3 lg:gap-0 pt-5 lg:pt-8 lg:grid-cols-3"
        >
          {categoryCardData.map((ele, idx) => (
            <div
              key={idx}
              className={`w-full aspect-[3/2] rounded-2xl overflow-hidden outline-none
    ${idx === 0 ? "lg:col-span-2 lg:aspect-[4/2]" : ""}
    ${idx === 1 ? "lg:col-span-1 h-full" : ""}
    ${idx === 2 ? "lg:col-span-1 h-full" : ""}
    ${idx === 3 ? "lg:col-span-2 lg:aspect-[4/2]" : ""}
    cursor-pointer
    `}
            >
              <div className="relative w-full h-full">
                <h5 className="absolute z-10 top-4 left-5 sm:top-8 sm:left-10 lg:top-6 lg:left-8 leading-none text-sm sm:text-xl xl:text-2xl xl:top-[2vw] xl:left-[3vw]">
                  {ele.category}
                </h5>
                <img
                  src={ele.img}
                  alt={`${ele.category} Cloth`}
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-300 ease-in-out scale-95 hover:scale-100"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCardSec;
