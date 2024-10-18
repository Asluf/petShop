import Header from "./Header";
import HeroGirl from "../assets/images/heroGirl.png";
import { FaRegCirclePlay } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(102.87deg, #FCEED5 6.43%, #FCEED5 78.33%, #FFE7BA 104.24%)",
      }}
    >
      <Header />
      <section className="text-center px-[15px] md:px-[100px] overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between rounded-xl">
          {/* Left: Image Section */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6 py-[50px] px-[20px] md:px-[100px]">
            <h2 className="text-3xl md:text-5xl font-bold text-[#003459]">
              One More Friend
            </h2>
            <h3 className="text-xl md:text-3xl font-semibold text-[#003459]">
              Thousands More Fun!
            </h3>
            <p className="text-sm md:text-lg text-gray-700">
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
            </p>
            <div className="flex justify-center ustify-start gap-4">
              <button className="flex justify-center items-center gap-2 bg-transparent hover:bg-[#003459] hover:text-white border-2 border-gray-800 px-6 py-3 rounded-full text-sm transition duration-[400ms]">
                View Intro
                <FaRegCirclePlay className="text-lg" />
              </button>
              <button className="flex justify-center items-center bg-[#003459] hover:bg-transparent text-white hover:text-black border-2 border-gray-800 px-6 py-3 rounded-full text-sm transition duration-[400ms]">
                Explore Now
              </button>
            </div>
          </div>

          {/* Right: Text Section */}
          <div className="w-full md:w-1/2 h-[100%]">
            <div className="w-full h-full relative">
              <img
                src={HeroGirl}
                alt="Woman holding pet"
                className="object-cover w-full h-full md:h-auto rounded-md relative z-[5]"
              />
              <div className="hidden md:flex absolute top-[90px] left-[5px] w-24 h-24 md:w-[20px] md:h-[20px] rounded-[5px] bg-[#F7DBA7] transition-transform duration-500 ease-in-out rotate-[40deg]"></div>
              <div className="hidden md:flex absolute top-[100px] left-[0px] w-24 h-24 md:w-[20px] md:h-[20px] rounded-[5px] bg-[#003459] transition-transform duration-500 ease-in-out rotate-[10deg]"></div>

              <div className="z-[1] hidden md:flex absolute bottom-[-250px] left-[0px] w-24 h-24 md:w-[650px] md:h-[650px] rounded-[70px] bg-[#003459] transition-transform duration-500 ease-in-out rotate-[10deg]"></div>
              <div className="z-[2] hidden md:flex absolute bottom-[-250px] left-[0px] w-24 h-24 md:w-[650px] md:h-[650px] rounded-[70px] bg-[#F7DBA7] transition-transform duration-500 ease-in-out rotate-[35deg]"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
