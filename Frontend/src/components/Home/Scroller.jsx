import partner1 from "../../asset/partner1.png";
import partner2 from "../../asset/partner2.png";
import partner3 from "../../asset/partner3.png";
import partner4 from "../../asset/partner4.png";
import partner5 from "../../asset/partner5.png";

const Scroller = () => {
  return (
    <section className="w-full bg-black py-8 px-6">
      <div className="home-page-logo-sec grid grid-cols-3 gap-y-8 md:gap-y-12 place-items-center">
        <img
          src={partner1}
          alt="Versace"
          className="w-28 sm:w-32 aspect-2/0.5"
        />
        <img
          src={partner2}
          alt="Zara"
          className="w-18 sm:w-24 lg:w-20 aspect-2/0.5"
        />
        <img src={partner3} alt="Gucci" className="w-28 sm:w-32 aspect-2/0.5" />

        <div className="col-span-3 lg:col-span-1 flex justify-center items-center gap-10 lg:gap-[8vw]">
          <img
            src={partner4}
            alt="Prada"
            className="w-28 sm:w-32 aspect-2/0.5"
          />
          <img
            src={partner5}
            alt="Calvin Klein"
            className="w-28 sm:w-32 aspect-2/0.5"
          />
        </div>
      </div>
    </section>
  );
};

export default Scroller;
