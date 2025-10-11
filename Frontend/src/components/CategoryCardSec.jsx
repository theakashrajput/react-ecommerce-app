import FormalImg from "../asset/Formal.avif";
import CasualImg from "../asset/Casual.jpg";
import GymImg from "../asset/Gym.png";
import PartyImg from "../asset/Party.webp";

const CategoryCardSec = () => {
  const categoryCardData = [
    { img: CasualImg, category: "Casual" },
    { img: FormalImg, category: "Formal" },
    { img: PartyImg, category: "Party" },
    { img: GymImg, category: "Gym" },
  ];

  return (
    <div className="px-5 pt-10 pb-5">
      <div className="w-full bg-[#F0F0F0] px-3 pt-10 pb-6 rounded-2xl">
        <h2 className="uppercase text-center text-[2.5rem] font-[Gilroy] font-extrabold leading-none tracking-tight">
          Browse by dress style
        </h2>
        <div
          id="home-category-card-sec-grid-cont"
          className="grid grid-cols-1 px-3 gap-5 pt-5"
        >
          {categoryCardData.map((ele, idx) => (
            <div 
            key={idx}
            className="relative w-full aspect-3/2 rounded-2xl overflow-hidden bg-white shadow">
              <h5 className=" absolute bottom-3 right-4  leading-none text-xl ">
                {ele.category}
              </h5>
              <img
                src={ele.img}
                alt={`${ele.category} Cloth`}
                className="w-full h-64 sm:h-72 md:h-80 object-cover object-bottom"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryCardSec;
