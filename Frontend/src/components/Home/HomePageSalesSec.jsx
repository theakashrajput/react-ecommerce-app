import { useNavigate } from "react-router-dom";
import CardSec from "./CardSec";

const HomePageSalesSec = (props) => {

  const navigation = useNavigate();


  return (
    <>
      <h2 className="uppercase text-center text-[2.5rem] lg:text-[3rem] font-[Gilroy] font-extrabold py-7 mt-5 leading-none tracking-tight">
        {props.pageTitle}
      </h2>

      <div className="w-full overflow-x-auto scrollbar-container whitespace-nowrap scroll-smooth px-4 py-2">
        <CardSec />
      </div>
      <button 
      onClick={()=>navigation("/products")}
      className="w-[95%] lg:max-w-xs bg-transparent text-[#000] rounded-3xl py-3 text-base mt-5 lg:mt-8 border-[1px] border-[#A2A0A1] cursor-pointer active:scale-95">
        View All
      </button>
    </>
  );
};

export default HomePageSalesSec;
