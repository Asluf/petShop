import seller1 from "../assets/images/seller1.png";
import seller2 from "../assets/images/seller2.png";
import seller3 from "../assets/images/seller3.png";
import seller4 from "../assets/images/seller4.png";
import seller5 from "../assets/images/seller5.png";
import seller6 from "../assets/images/seller6.png";
import seller7 from "../assets/images/seller7.png";
import { FaGreaterThan } from "react-icons/fa6";

const SellersSection = () => {
  const sellers = [
    { id: 1, name: "Seller 1", image: seller1 },
    { id: 2, name: "Seller 2", image: seller2 },
    { id: 3, name: "Seller 3", image: seller3 },
    { id: 4, name: "Seller 4", image: seller4 },
    { id: 5, name: "Seller 5", image: seller5 },
    { id: 6, name: "Seller 6", image: seller6 },
    { id: 7, name: "Seller 7", image: seller7 },
  ];

  return (
    <section className="hidden md:flex flex-col my-8 px-[15px] py-12 md:px-[100px] mt-12 bg-white">
      <div className="w-[100%] flex justify-between mb-2">
        <h3 className="text-md mb-2">
          Proud to be part of
          <span className="text-2xl font-bold ml-2">Pet Sellers</span>
        </h3>
        <button className="hidden md:flex flex justify-center items-center gap-4 border-2 hover:bg-[#003459] hover:text-white border-gray-800 px-6 py-3 rounded-full text-sm">
          <span>View all our sellers </span>
          <FaGreaterThan />
        </button>
      </div>

      {/* Tailwind CSS grid layout */}
      <div className="grid grid-cols-4 gap-4 md:grid-cols-7 lg:grid-cols-7 my-6">
        {sellers.map((seller: any) => (
          <div
            key={seller.id}
            className="overflow-hidden p-2"
          >
            <img
              className="h-[100px]  rounded-lg"
              src={seller.image}
              alt={seller.name}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SellersSection;
