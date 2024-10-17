import { useEffect, useState } from "react";
import { FaGreaterThan } from "react-icons/fa6";
import BannerImage from "../assets/images/bannerImage.png";

const Homepage = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetchPets();
  }, []);

  const fetchPets = async () => {
    try {
      const res = await fetch(
        "https://monitor-backend-rust.vercel.app/api/pets"
      );
      const data = await res.json();
      console.log(data);
      setPets(data);
    } catch (error) {
      console.error("Error fetching pets:", error);
    }
  };

  return (
    <div className="bg-gray-100">
      <Header />
      <main className="w-[100vw]">
        <HeroSection />
        <PetsSection pets={pets} />
        <BannerSection />
        <KnowledgeSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

// Header Component
const Header = () => (
  <header className="bg-white p-4 flex justify-between items-center shadow-md px-[15px] md:px-[100px]">
    <h1 className="text-3xl font-bold">Monito</h1>
    <nav className="space-x-4">
      <a href="#" className="hover:underline">
        Home
      </a>
      <a href="#" className="hover:underline">
        Category
      </a>
      <a href="#" className="hover:underline">
        About
      </a>
      <a href="#" className="hover:underline">
        Contact
      </a>
    </nav>
  </header>
);

// Hero Section
const HeroSection = () => (
  <section
    className="text-center py-12 px-[15px] md:px-[100px]"
    style={{
      background:
        "linear-gradient(102.87deg, #FCEED5 6.43%, #FCEED5 78.33%, #FFE7BA 104.24%)",
    }}
  >
    <h2 className="text-4xl font-bold mb-4">
      One More Friend, Thousands More Fun!
    </h2>
    <p className="text-lg mb-6">
      Having a pet means you have more joy, more smiles. A happy person who will
      always be at your side.
    </p>
    <div className="space-x-4">
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
        View Intro
      </button>
      <button className="bg-gray-300 px-4 py-2 rounded-md">Explore Now</button>
    </div>
  </section>
);

// Pets slider
// const PetsSection = ({ pets }: any) => (
//   <section className="my-8">
//     <h3 className="text-2xl font-bold mb-4">Take a Look at Some of Our Pets</h3>
//     <Swiper
//       spaceBetween={10}
//       slidesPerView={1}
//       breakpoints={{
//         640: { slidesPerView: 2 },
//         768: { slidesPerView: 3 },
//         1024: { slidesPerView: 4 },
//       }}
//     >
//       {pets.map((pet: any) => (
//         <SwiperSlide key={pet.id}>
//           <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//             <img
//               className="w-full h-56 object-cover"
//               src={pet.image}
//               alt={pet.name}
//             />
//             <div className="p-4">
//               <h4 className="text-lg font-bold">{pet.name}</h4>
//               <p className="text-gray-500">{pet.age} years old</p>
//               <p className="text-gray-700 font-semibold">{pet.price} VND</p>
//             </div>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   </section>
// );

const PetsSection = ({ pets }: any) => (
  <section className="my-8 px-[15px] md:px-[100px]">
    <h3 className="text-md mb-2">Whats New?</h3>
    <div className="w-[100%] flex justify-between mb-2">
      <h3 className="text-xl font-bold">Take a Look at Some of Our Pets</h3>
      <button className="hidden md:flex flex justify-center items-center gap-4 border hover:bg-gray-200 border-gray-800 px-6 py-3 rounded-full text-sm">
        <span>View More </span>
        <FaGreaterThan />
      </button>
    </div>

    {/* Tailwind CSS grid layout */}
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 my-6">
      {pets.map((pet: any) => (
        <div
          key={pet.id}
          className="bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <img
            className="w-full h-56 object-cover"
            src={pet.image}
            alt={pet.name}
          />
          <div className="p-4 text-sm md:text-md ">
            <h4 className="font-bold">
              {pet.id} - {pet.breed}
            </h4>
            <div className="flex flex-col gap-y-1 md:flex-row md:gap-3 py-[2px]">
              <p className="text-gray-500">Gene: {pet.gender}</p>
              <p className="text-gray-500">Age:{pet.age}</p>
            </div>
            <p className="text-gray-700 font-bold pt-2 text-md">{pet.price}</p>
          </div>
        </div>
      ))}
    </div>
    {/* for mobile screen */}
    <button className="md:hidden w-[100%] flex justify-center items-center gap-4 border hover:bg-gray-200 border-gray-800 px-6 py-3 rounded-full text-sm">
      <span>View More </span>
      <FaGreaterThan />
    </button>
  </section>
);

const BannerSection = () => (
  <section className="relative my-8 mx-[15px] md:mx-[100px] rounded-lg overflow-hidden">
    {/* Banner container */}
    <div className="flex flex-col-reverse md:flex-row items-center justify-between bg-[#FCEED5] rounded-md">
      {/* Left: Image Section */}
      <div className="w-full md:w-1/2 relative bg-red-100 h-[100%]">
        <img
          src={BannerImage}
          alt="Woman holding pet"
          className="object-cover w-full h-full md:h-auto rounded-md"
        />
      </div>

      {/* Right: Text Section */}
      <div className="w-full md:w-1/2 p-4 text-center md:text-left space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-[#003459]">
          One More Friend
        </h2>
        <h3 className="text-xl md:text-3xl font-semibold text-[#003459]">
          Thousands More Fun!
        </h3>
        <p className="text-sm md:text-lg text-gray-700">
          Having a pet means you have more joy, a new friend, a happy person who
          will always be with you to have fun. We have 200+ different pets that
          can meet your needs!
        </p>
        <div className="flex justify-center md:justify-start gap-4">
          <button className="bg-white text-[#003459] py-2 px-4 rounded-md font-semibold hover:bg-gray-100 transition">
            View Intro
          </button>
          <button className="bg-[#003459] text-white py-2 px-4 rounded-md font-semibold hover:bg-[#00283b] transition">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  </section>
);

// Knowledge Section
const KnowledgeSection = () => (
  <section className="bg-blue-100 p-6 rounded-lg mt-8">
    <h3 className="text-2xl font-bold mb-4">Useful Pet Knowledge</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <KnowledgeCard
        title="What is a Pomeranian?"
        description="Learn about Pomeranian characteristics and how to take care of them."
      />
      <KnowledgeCard
        title="Dog Diet You Need to Know"
        description="A comprehensive guide to choosing the best diet for your dog."
      />
      <KnowledgeCard
        title="Prevent Furniture Destruction"
        description="Tips on how to prevent your dog from destroying your furniture."
      />
    </div>
  </section>
);

const KnowledgeCard = ({ title, description }: any) => (
  <div className="bg-white shadow-lg p-4 rounded-lg">
    <h4 className="text-lg font-bold mb-2">{title}</h4>
    <p>{description}</p>
  </div>
);

// Newsletter Section
const Newsletter = () => (
  <section className="bg-gray-200 py-8 text-center rounded-lg mt-8">
    <h3 className="text-xl font-bold mb-4">
      Register Now So You Don’t Miss Our Programs
    </h3>
    <form className="inline-flex">
      <input
        type="email"
        placeholder="Enter your Email"
        className="px-4 py-2 rounded-l-lg border border-gray-300"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg">
        Subscribe Now
      </button>
    </form>
  </section>
);

// Footer Component
const Footer = () => (
  <footer className="bg-white p-4 text-center shadow-md mt-12">
    <p>© 2023 Monito, All rights reserved.</p>
    <nav className="space-x-4 mt-2">
      <a href="#" className="hover:underline">
        Terms of Service
      </a>
      <a href="#" className="hover:underline">
        Privacy Policy
      </a>
    </nav>
  </footer>
);

export default Homepage;
