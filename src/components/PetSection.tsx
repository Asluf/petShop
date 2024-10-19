import { FaGreaterThan } from "react-icons/fa6";

const PetSection = ({ pets }: any) => {
  return (
    <section className="my-8 px-[15px] md:px-[100px]">
      <h3 className="text-md mb-2">Whats New?</h3>
      <div className="w-[100%] flex justify-between mb-2">
        <h3 className="text-2xl font-semibold">Take a Look at Some of Our Pets</h3>
        <button className="hidden md:flex flex justify-center items-center gap-4 border-2 hover:bg-[#003459] hover:text-white border-gray-800 px-6 py-3 rounded-full text-sm">
          <span>View More </span>
          <FaGreaterThan />
        </button>
      </div>

      {/* Tailwind CSS grid layout */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 my-6">
        {pets.map((pet: any) => (
          <div
            key={pet.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden p-2"
          >
            <img
              className="w-full h-64 md:h-[330px] object-cover"
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
              <p className="text-gray-700 font-bold pt-2 text-md">
                {pet.price}
              </p>
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

export default PetSection;
