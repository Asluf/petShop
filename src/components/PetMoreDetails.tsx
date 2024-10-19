import { RiMessage2Line } from "react-icons/ri";
import { Pet } from "../models/Pet";

interface PetMoreDetailsProps {
  pet: Pet;
}

const PetMoreDetails = ({ pet }: PetMoreDetailsProps) => {
  return (
    <section className="flex flex-col my-8 px-[15px] md:py-12 md:px-[100px] bg-white">
      <div className="w-full flex flex-col md:flex-row gap-6 md:px-8">
        <div
          className="w-full md:w-1/2 h-[300px] md:h-[700px] bg-red-100 bg-cover bg-center rounded-lg"
          style={{ backgroundImage: `url(${pet.image})` }}
        ></div>

        <div className="w-full md:w-1/2 py-8">
          <div className="text-gray-500 text-md">SKU #{pet.id}</div>
          <div className="text-[#003459] font-semibold text-2xl my-2">
            {pet.breed}
          </div>
          
          <div className="text-[#003459] font-semibold text-xl my-2">
            {pet.price}
          </div>
          <div className="flex gap-4 my-4">
            <button className="flex justify-center items-center bg-[#003459] hover:bg-transparent text-white hover:text-black border-2 border-gray-800 px-6 py-3 rounded-full text-sm transition duration-[400ms]">
              Contact us
            </button>
            <button className="flex justify-center items-center gap-4 border-2 hover:bg-[#003459] hover:text-white border-gray-800 px-6 py-3 rounded-full text-sm">
              <RiMessage2Line className="text-xl font-bold" />
              <span>Chat with Monito </span>
            </button>
          </div>
          <div className="flex flex-col gap-4 mb-6 px-2 text-gray-600">
            <div className="flex">
              <span className="w-1/2">SKU</span>
              <span> : #{pet.id}</span>
            </div>
            <hr />
            <div className="flex">
              <span className="w-1/2">Gender</span>
              <span> : {pet.gender}</span>
            </div>
            <hr />
            <div className="flex">
              <span className="w-1/2">Age</span>
              <span> : {pet.age}</span>
            </div>
            <hr />
            <div className="flex">
              <span className="w-1/2">Size</span>
              <span> : Small</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PetMoreDetails;
