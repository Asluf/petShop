import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Pet } from "../models/Pet";
import { Customer } from "../models/Customer";
import Header from "../components/Header";
import PetMoreDetails from "../components/PetMoreDetails";
import { Footer } from "../components/Footer";
import PetSection from "../components/PetSection";

const PetDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [pets, setPets] = useState<Pet[]>([]);

  const pet: Pet = location.state?.pet;

  useEffect(() => {
    if (!pet) {
      navigate("/category");
    }
    fetchCustomer();
    fetchPets();
  }, [pet, navigate]);

  if (!pet) return null;

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

  const fetchCustomer = async () => {
    try {
      const res = await fetch(
        "https://monitor-backend-rust.vercel.app/api/customers"
      );
      const data = await res.json();
      setCustomers(data);
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  };

  return (
    <div className="bg-[#FDFDFD]">
      <main className="w-[100vw]">
        <Header />
        <PetMoreDetails pet={pet} />
        <PetSection pets={pets} from="Detail Page" />
        <Footer />
      </main>
    </div>
  );
};

export default PetDetail;
