import BannerImage3 from "../assets/images/bannerImage3.png";
import { FaRegCirclePlay } from "react-icons/fa6";

const BannerSection3 = () => {
  return (
    <section className="relative my-8 mx-[15px] md:mx-[100px] rounded-lg overflow-hidden">
      {/* Banner container */}
      <div className="flex flex-col-reverse md:flex-row items-stretch justify-between bg-[#FCEED5] rounded-xl">
        {/* Left: Image Section */}
        <div className="w-full md:w-1/2">
          <div className="w-full h-full">
            <img
              src={BannerImage3}
              alt="Woman holding pet"
              className="object-cover w-full h-full rounded-md relative z-[5]"
            />
          </div>
        </div>

        {/* Right: Text Section */}
        <div className="relative w-full md:w-1/2 text-center md:text-left space-y-6 py-[50px] px-[20px] md:px-[100px] bg-transparent flex-grow flex flex-col justify-center text-white">
          <h2 className="relative z-[5] text-3xl md:text-5xl font-bold text-center md:text-right">
            One More Friend
          </h2>
          <h3 className="relative z-[5] text-xl md:text-3xl font-semibold text-center md:text-right">
            Thousands More Fun!
          </h3>
          <p className="relative z-[5] text-sm md:text-lg text-gray-100 text-center md:text-right">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>
          <div className="relative z-[5] flex justify-center md:justify-end gap-4">
            <button className="flex justify-center items-center gap-2 bg-transparent hover:bg-[#003459] hover:text-white border-2 border-gray-800 px-6 py-3 rounded-full text-sm transition duration-[400ms]">
              View Intro
              <FaRegCirclePlay className="text-lg" />
            </button>
            <button className="flex justify-center items-center bg-[#003459] hover:bg-transparent text-white hover:text-black border-2 border-gray-800 px-6 py-3 rounded-full text-sm transition duration-[400ms]">
              Explore Now
            </button>
          </div>
          {/* small device */}
          <div className="flex md:hidden absolute top-[-100px] left-[-50px] w-[500px] h-[450px] rounded-[70px] bg-[#003459] transition-transform duration-500 ease-in-out rotate-[15deg]"></div>
          {/* large device */}
          <div className="hidden md:flex absolute bottom-[-180px] left-[0px] w-24 h-24 md:w-[800px] md:h-[800px] rounded-[70px] bg-[#003459] transition-transform duration-500 ease-in-out rotate-[50deg]"></div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection3;
