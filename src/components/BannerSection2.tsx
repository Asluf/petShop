import bannerImage2 from "../assets/images/bannerImage2.png";
import { FaRegCirclePlay } from "react-icons/fa6";
import Vector from "../assets/images/Vector.png"

const BannerSection2 = () => {
  return (
    <section className="hidden md:flex my-8 mx-0 md:mx-[100px] rounded-xl overflow-hidden">
      {/* Banner container */}
      <div className="flex flex-col md:flex-row items-stretch justify-between bg-[#FFB775] rounded-xl w-full">
        {/* Left: Text Section */}
        <div className="relative w-full md:w-1/2 text-center md:text-left space-y-6 py-[50px] px-[20px] md:px-[100px] flex-grow flex flex-col justify-center">
          <div className="relative z-[2] flex items-center gap-4">
            <h2 className="text-3xl md:text-5xl font-bold text-[#003459]">
              Adoption
            </h2>
            <img src={Vector} alt="Vector" />
          </div>
          <h3 className="relative z-[2] text-xl md:text-3xl font-semibold text-[#003459]">
            We Need Help. So Do They
          </h3>
          <div className="relative z-[2]">
            <p className="text-sm md:text-lg text-gray-700">
              Adopt a pet and give it a home.
            </p>
            <p className="text-sm md:text-lg text-gray-700">
              It will love you back unconditionally.
            </p>
          </div>
          <div className="relative z-[2] flex gap-4 justify-center md:justify-start">
            <button className="flex justify-center items-center gap-2 bg-transparent hover:bg-[#003459] hover:text-white border-2 border-gray-800 px-6 py-3 rounded-full text-sm transition duration-[400ms]">
              View Intro
              <FaRegCirclePlay className="text-lg" />
            </button>
            <button className="flex justify-center items-center bg-[#003459] hover:bg-transparent text-white hover:text-black border-2 border-gray-800 px-6 py-3 rounded-full text-sm transition duration-[400ms]">
              Explore Now
            </button>
          </div>
          <div className="z-[0] hidden md:flex absolute bottom-[0px] left-[-120px] w-24 h-24 md:w-full md:h-[150%] rounded-[90px] bg-[#FCEED5] transition-transform duration-500 ease-in-out rotate-[-22deg]"></div>
        </div>

        {/* Right: Image Section */}
        <div className="w-full md:w-1/2">
          <div className="w-full h-full">
            <img
              src={bannerImage2}
              alt="Woman holding pet"
              className="object-cover w-full h-full md:h-auto rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection2;
