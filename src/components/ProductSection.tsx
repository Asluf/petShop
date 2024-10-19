import GiftBox from "../assets/images/gift-box.png";
import { FaGreaterThan } from "react-icons/fa6";

const ProductSection = ({ products }: any) => {
  return (
    <section className="hidden md:flex flex-col my-8 px-[15px] md:px-[100px] mt-12">
      <h3 className="text-md mb-2">
        Hard to choose right product for your path?
      </h3>
      <div className="w-[100%] flex justify-between mb-2">
        <h3 className="text-2xl font-semibold">Our Products</h3>
        <button className="hidden md:flex flex justify-center items-center gap-4 border-2 hover:bg-[#003459] hover:text-white border-gray-800 px-6 py-3 rounded-full text-sm">
          <span>View More </span>
          <FaGreaterThan />
        </button>
      </div>

      {/* Tailwind CSS grid layout */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 my-6">
        {products.map((product: any) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden p-2"
          >
            <img
              className="h-[350px] w-[100%] object-cover rounded-lg"
              src={product.image}
              alt={product.name}
            />
            <div className="p-4 text-sm md:text-md ">
              <h4 className="font-bold text-[17px]">{product.name}</h4>
              <div className="flex flex-col gap-y-1 md:flex-row md:gap-3 py-[2px]">
                <p className="text-gray-500">Product: {product.product}</p>
                <p className="text-gray-500">Size:{product.size}</p>
              </div>
              <p className="text-gray-700 font-bold pt-2 text-lg">
                {product.price}
              </p>
              <div className="w-[100%] p-2 flex gap-2 bg-[#fceed5] mt-2 rounded-lg">
                <div className="px-2">
                  <img src={GiftBox} className="h-[20px]" />
                </div>
                <div className="px-2 font-semibold">{product.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* for mobile screen */}
      <button className="md:hidden w-[100%] flex justify-center items-center gap-4 border-2 hover:bg-[#003459] hover:text-white border-gray-800 px-6 py-3 rounded-full text-sm">
        <span>View More </span>
        <FaGreaterThan />
      </button>
    </section>
  );
};

export default ProductSection;
