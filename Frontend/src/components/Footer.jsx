import { useForm } from "react-hook-form";
import FooterPaymentLogos from "../asset/Footer Payment Methods Logos.png";

const Footer = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (e) => {
    console.log(e);
    reset();
  };

  return (
    <section className="relative w-full h-[500px] mt-40 pt-52 pb-20 px-5 bg-[#F0F0F0]">
      <div
        id="email-lead-cont"
        className="bg-black w-[90%] rounded-2xl absolute top-[-30%] py-8 px-5"
      >
        <h4 className="font-[Inter] uppercase text-4xl font-extrabold text-[#fff]">
          stay upto date about our latest offers
        </h4>
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="w-full flex flex-col gap-3 mt-7"
        >
          <div className="bg-white rounded-3xl flex justify-between items-end py-3 px-4">
            <label htmlFor="subscribeEmail">
              <i className="ri-mail-line text-[#A2A0A1]"></i>
            </label>
            <input
              id="subscribeEmail"
              className=" text-[#A2A0A1] text-sm w-[90%] outline-none"
              placeholder="Enter your email address"
              {...register("subscribeEmail", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
              type="email"
            />
            {errors.email && (
              <span className="pl-3 text-xs text-red-400 tracking-wide leading-none">
                {errors.email.message}
              </span>
            )}
          </div>
          <button className="traking-wide py-4 text-sm rounded-3xl bg-[#fff] ">
            Subscribe to Newsletter
          </button>
        </form>
      </div>
      <div id="footer-main-cont">
        <h2 className="font-[Inter] text-3xl font-extrabold">SHOP.CO</h2>
        <p className="text-[#A2A0A1] text-sm my-3">
          We have clothes that suits your style and which you're proud to wear.
          From women to men.
        </p>
        <div className="footer-icons flex gap-3">
          <span className="border-[1px] rounded-full px-1.5 py-0.5 bg-[#fff]">
            <i className="ri-twitter-fill text-lg"></i>
          </span>
          <span className="border-[1px] rounded-full px-1.5 py-0.5 bg-[#fff]">
            <i className="ri-facebook-fill text-lg"></i>
          </span>
          <span className="border-[1px] rounded-full px-1.5 py-0.5 bg-[#fff]">
            <i className="ri-instagram-line text-lg"></i>
          </span>
          <span className="border-[1px] rounded-full px-1.5 py-0.5 bg-[#fff]">
            <i className="ri-github-fill text-lg"></i>
          </span>
        </div>
        <div className="footer-links grid grid-cols-2">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
        <hr />
        <div className="copyright">
          <h6>Shop.co ©️ 2025, All right to hamzanaeem778@gmail.com</h6>
          <div>
            <img src={FooterPaymentLogos} alt="Payment logos image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
