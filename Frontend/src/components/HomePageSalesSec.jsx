import CardSec from "./CardSec";

const HomePageSalesSec = (props) => {
  return (
    <>
      <h2 className="uppercase text-center text-[2.5rem] font-[Gilroy] font-extrabold py-7 mt-5 leading-none tracking-tight">
        {props.pageTitle}
      </h2>

      <div className="w-full overflow-x-auto scrollbar-container whitespace-nowrap scroll-smooth px-4 py-2">
        <CardSec />
      </div>
      <button className="w-[95%] bg-transparent text-[#000] rounded-3xl py-3 text-base mt-5 border-[1px] border-[#A2A0A1] cursor-pointer active:scale-95">
        View All
      </button>
      <hr className="text-[#A2A0A1] mt-5 w-[95%]" />
    </>
  );
};

export default HomePageSalesSec;
