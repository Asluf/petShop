import { Pet } from "../models/Pet";
import { useEffect, useState } from "react";
import { BiFilterAlt } from "react-icons/bi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

interface CategoryPetsProps {
  allPets: Pet[];
}

const CategoryPets = ({ allPets }: CategoryPetsProps) => {
  const navigate = useNavigate();

  const [showFilterPopup, setShowFilterPopup] = useState(false);
  const [filteredPets, setFilteredPets] = useState<Pet[]>([]);
  const [selectedGender, setSelectedGender] = useState<string>("all");

  const filterPets = (gender: string) => {
    setSelectedGender(gender);
    if (gender === "all") {
      setFilteredPets(allPets);
    } else {
      const filtered = allPets.filter((pet) => pet.gender === gender);
      setFilteredPets(filtered);
    }
  };

  useEffect(() => {
    filterPets(selectedGender);
  }, [allPets, selectedGender]);

  const handleCardClick = (pet: Pet) => {
    navigate(`/pets/${pet.id}`, { state: { pet } });
  };

  return (
    <section className="my-8 px-[15px] md:px-[100px]">
      {showFilterPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          {/* Popup Content */}
          <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-6 z-[100] relative">
            <button
              className="absolute top-4 right-4 text-gray-500"
              onClick={() => setShowFilterPopup(false)}
            >
              <IoMdCloseCircleOutline className="text-3xl" />{" "}
              {/* Close Button */}
            </button>
            <h2 className="text-xl font-bold mb-4">Filter Options</h2>
            <hr />
            {/* Filter Content */}
            <div className="flex flex-col gap-4 mb-6">
              <h3 className="text-lg font-semibold py-2">Gender</h3>
              <div>
                <input
                  type="radio"
                  id="all"
                  name="gender"
                  value="all"
                  checked={selectedGender === "all"}
                  onChange={() => filterPets("all")}
                  className="mr-2"
                />
                <label htmlFor="all" className="text-gray-700">
                  All
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="Male"
                  checked={selectedGender === "Male"}
                  onChange={() => filterPets("Male")}
                  className="mr-2"
                />
                <label htmlFor="male" className="text-gray-700">
                  Male
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="Female"
                  checked={selectedGender === "Female"}
                  onChange={() => filterPets("Female")}
                  className="mr-2"
                />
                <label htmlFor="female" className="text-gray-700">
                  Female
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-4 mb-6">
              <h3 className="text-lg font-semibold py-2">Color</h3>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="color-red"
                  name="color"
                  value="Red"
                  className="mr-2 h-4 w-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor="color-red"
                  className="text-gray-700 flex items-center gap-2"
                >
                  <span className="w-4 h-4 rounded-full bg-[#FF564F]"></span>
                  <span>Red</span>
                </label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="color-apricot"
                  name="color"
                  value="Apricot"
                  className="mr-2 h-4 w-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor="color-apricot"
                  className="text-gray-700 flex items-center gap-2"
                >
                  <span className="w-4 h-4 rounded-full bg-[#F5CBA7]"></span>
                  <span>Apricot</span>
                </label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="color-black"
                  name="color"
                  value="Black"
                  className="mr-2 h-4 w-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor="color-black"
                  className="text-gray-700 flex items-center gap-2"
                >
                  <span className="w-4 h-4 rounded-full bg-black"></span>
                  <span>Black</span>
                </label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="color-black-white"
                  name="color"
                  value="Black & White"
                  className="mr-2 h-4 w-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor="color-black-white"
                  className="text-gray-700 flex items-center gap-2"
                >
                  <span className="w-4 h-4 rounded-full bg-gradient-to-r from-black to-white"></span>
                  <span>Black & White</span>
                </label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="color-silver"
                  name="color"
                  value="Silver"
                  className="mr-2 h-4 w-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor="color-silver"
                  className="text-gray-700 flex items-center gap-2"
                >
                  <span className="w-4 h-4 rounded-full bg-gray-400"></span>
                  <span>Silver</span>
                </label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="color-tan"
                  name="color"
                  value="Tan"
                  className="mr-2 h-4 w-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor="color-tan"
                  className="text-gray-700 flex items-center gap-2"
                >
                  <span className="w-4 h-4 rounded-full bg-[#D2B48C]"></span>
                  <span>Tan</span>
                </label>
              </div>
            </div>
            <hr />
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row w-[100%]">
        {/* Filter for desktop div */}
        <div className="w-[100%] px-2 md:w-1/4 hidden md:flex md:flex-col">
          <h3 className="text-2xl font-semibold py-4">Filter</h3>
          <hr />
          <div className="flex flex-col gap-4 mb-6">
            <h3 className="text-lg font-semibold py-2">Gender</h3>
            <div>
              <input
                type="radio"
                id="all"
                name="gender"
                value="all"
                checked={selectedGender === "all"}
                onChange={() => filterPets("all")}
                className="mr-2"
              />
              <label htmlFor="all" className="text-gray-700">
                All
              </label>
            </div>

            <div>
              <input
                type="radio"
                id="male"
                name="gender"
                value="Male"
                checked={selectedGender === "Male"}
                onChange={() => filterPets("Male")}
                className="mr-2"
              />
              <label htmlFor="male" className="text-gray-700">
                Male
              </label>
            </div>

            <div>
              <input
                type="radio"
                id="female"
                name="gender"
                value="Female"
                checked={selectedGender === "Female"}
                onChange={() => filterPets("Female")}
                className="mr-2"
              />
              <label htmlFor="female" className="text-gray-700">
                Female
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-4 mb-6">
            <h3 className="text-lg font-semibold py-2">Color</h3>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="color-red"
                name="color"
                value="Red"
                className="mr-2 h-4 w-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor="color-red"
                className="text-gray-700 flex items-center gap-2"
              >
                <span className="w-4 h-4 rounded-full bg-[#FF564F]"></span>
                <span>Red</span>
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="color-apricot"
                name="color"
                value="Apricot"
                className="mr-2 h-4 w-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor="color-apricot"
                className="text-gray-700 flex items-center gap-2"
              >
                <span className="w-4 h-4 rounded-full bg-[#F5CBA7]"></span>
                <span>Apricot</span>
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="color-black"
                name="color"
                value="Black"
                className="mr-2 h-4 w-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor="color-black"
                className="text-gray-700 flex items-center gap-2"
              >
                <span className="w-4 h-4 rounded-full bg-black"></span>
                <span>Black</span>
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="color-black-white"
                name="color"
                value="Black & White"
                className="mr-2 h-4 w-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor="color-black-white"
                className="text-gray-700 flex items-center gap-2"
              >
                <span className="w-4 h-4 rounded-full bg-gradient-to-r from-black to-white"></span>
                <span>Black & White</span>
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="color-silver"
                name="color"
                value="Silver"
                className="mr-2 h-4 w-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor="color-silver"
                className="text-gray-700 flex items-center gap-2"
              >
                <span className="w-4 h-4 rounded-full bg-gray-400"></span>
                <span>Silver</span>
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="color-tan"
                name="color"
                value="Tan"
                className="mr-2 h-4 w-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor="color-tan"
                className="text-gray-700 flex items-center gap-2"
              >
                <span className="w-4 h-4 rounded-full bg-[#D2B48C]"></span>
                <span>Tan</span>
              </label>
            </div>
          </div>
          <hr />
        </div>
        {/* Filter for mobile screen */}
        <button
          className="flex justify-end items-center gap-2 md:hidden px-2"
          onClick={() => setShowFilterPopup(true)}
        >
          <BiFilterAlt className="text-2xl" />
          <h3 className="text-2xl font-semibold py-4">Filter</h3>
        </button>

        {/* Pet Card div */}
        <div className="w-[100%] md:w-3/4">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3 my-6">
            {filteredPets.map((pet: Pet) => (
              <div
                key={pet.id}
                onClick={() => handleCardClick(pet)}
                className="bg-white shadow-lg rounded-lg overflow-hidden p-2"
              >
                <img
                  className="w-full h-64 md:h-[330px] object-cover"
                  src={pet.image}
                  alt={pet.breed}
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
        </div>
      </div>
    </section>
  );
};

export default CategoryPets;
