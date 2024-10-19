import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import Header from "../components/Header";
import BannerSection3 from "../components/BannerSection3";
import "../assets/css/Homepage.css";
import { Pet } from "../models/Pet";
import CategoryPets from "../components/CategoryPets";

const Category = () => {
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    fetchPets();
  }, []);

  const fetchPets = async () => {
    try {
      const res = await fetch(
        "https://monitor-backend-rust.vercel.app/api/pets"
      );
      const data = await res.json();
      setPets(data);
    } catch (error) {
      console.error("Error fetching pets:", error);
    }
  };

  return (
    <div className="bg-[#FDFDFD]">
      <main className="w-[100vw]">
        <Header />
        <BannerSection3 />
        <CategoryPets allPets={pets} />        
        <Footer />
      </main>
    </div>
  );
};

export default Category;
