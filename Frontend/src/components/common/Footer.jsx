import { useForm } from "react-hook-form";
import FooterPaymentLogos from "../../asset/Footer Payment Methods Logos.png";

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
    <section className="relative w-full mt-40 pt-52 md:pt-30 pb-20 xl:pb-16 px-5 bg-[#F0F0F0]">
      <div
        id="email-lead-cont"
        className="bg-black w-[90%] rounded-2xl absolute left-[50%] top-[0%] -translate-1/2 py-8 px-5 flex flex-col md:flex-row md:gap-3 md:justify-between md:items-start"
      >
        <h4 className="font-[Inter] md:w-[50%] uppercase text-4xl 2xl:text-5xl 2xl:leading-14 font-extrabold text-[#fff]">
          stay upto date about our latest offers
        </h4>
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="w-full md:w-[50%] lg:w-[40%] flex flex-col md:items-end gap-3 mt-7 md:mt-0"
        >
          <div className="bg-white md:w-full xl:w-[70%] rounded-3xl flex justify-between items-end py-3 px-4">
            <label htmlFor="subscribeEmail">
              <i className="ri-mail-line text-[#A2A0A1]"></i>
            </label>
            <input
              id="subscribeEmail"
              className="text-[#A2A0A1] text-sm w-[90%] outline-none"
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
          </div>
          {errors.subscribeEmail && (
            <span className="w-full xl:w-[70%] text-left pl-3 text-xs text-red-400 tracking-wide leading-none">
              {errors.subscribeEmail.message}
            </span>
          )}
          <button
            type="submit"
            className="md:w-full xl:w-[70%] tracking-wide py-4 text-sm rounded-3xl bg-[#fff] active:scale-95"
          >
            Subscribe to Newsletter
          </button>
        </form>
      </div>
      <div id="footer-main-cont" className="md:w-[90%] mx-auto">
        <h2 className="font-[Inter] text-3xl xl:text-4xl font-extrabold">SHOP.CO</h2>
        <p className="text-[#A2A0A1] text-sm xl:text-base mt-3">
          We have clothes that suits your style and which you're proud to wear.
          From women to men.
        </p>
        <div className="footer-icons flex gap-3 my-5 xl:my-8">
          <span className="border-[1px] rounded-full px-1.5 py-0.5 bg-[#fff]">
            <i className="ri-twitter-fill text-lg xl:text-2xl"></i>
          </span>
          <span className="border-[1px] rounded-full px-1.5 py-0.5 bg-[#fff]">
            <i className="ri-facebook-fill text-lg xl:text-2xl"></i>
          </span>
          <span className="border-[1px] rounded-full px-1.5 py-0.5 bg-[#fff]">
            <i className="ri-instagram-line text-lg xl:text-2xl"></i>
          </span>
          <span className="border-[1px] rounded-full px-1.5 py-0.5 bg-[#fff]">
            <i className="ri-github-fill text-lg xl:text-2xl"></i>
          </span>
        </div>
        <div className="footer-links grid grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="footer-links-category-title text-lg xl:text-xl tracking-wider uppercase mb-2 xl:mb-4">
              COMPANY
            </div>
            <ul className="flex flex-col gap-2">
              {["About", "Features", "Works", "Career"].map((ele, idx) => (
                <li key={idx} className="text-sm text-[#848484]">
                  {ele}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="footer-links-category-title text-lg xl:text-xl tracking-wider uppercase mb-2 xl:mb-4">
              Help
            </div>
            <ul className="flex flex-col gap-2">
              {[
                "Customer Support",
                "Delivery Details",
                "Terms & Conditions",
                "Privacy Policy",
              ].map((ele, idx) => (
                <li key={idx} className="text-sm text-[#848484]">
                  {ele}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="footer-links-category-title text-lg xl:text-xl tracking-wider uppercase mb-2 xl:mb-4">
              Faq
            </div>
            <ul className="flex flex-col gap-2">
              {["Account", "Manage Deliveries", "Orders", "Payment"].map(
                (ele, idx) => (
                  <li key={idx} className="text-sm text-[#848484]">
                    {ele}
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <div className="footer-links-category-title text-lg xl:text-xl tracking-wider uppercase mb-2 xl:mb-4">
              Resources
            </div>
            <ul className="flex flex-col gap-2">
              {[
                "Free eBook",
                "Features",
                "How to - Blog",
                "Youtube Playlist",
              ].map((ele, idx) => (
                <li key={idx} className="text-sm text-[#848484]">
                  {ele}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr className="w-full h-0.5 mb-5 text-[#A2A0A1] opacity-50" />
        <div className="copyright flex flex-col lg:flex-row lg:justify-between items-center gap-4">
          <h6 className="text-[#848484] text-xs md:text-sm text-center">
            Shop.co © 2025, All design right to
            <span className="lg:ml-1 inline-block">hamzanaeem778@gmail.com</span>
          </h6>
          <div className="w-[70%] md:w-[60%] lg:w-[30%] 2xl:w-[22%] md:mt-5 lg:mt-2">
            <img
              src={FooterPaymentLogos}
              alt="Payment logos image"
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
