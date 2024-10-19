import knowledge1 from "../assets/images/knowledge1.png";
import knowledge2 from "../assets/images/knowledge2.png";
import knowledge3 from "../assets/images/knowledge3.png";
import { FaGreaterThan } from "react-icons/fa6";

export const KnowledgeSection = () => {
  const allKnowledge = [
    { id: 1, question: "What is a Pomeranian? How to Identify Pomeranian Dogs", answer:"The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.", image: knowledge1 },
    { id: 2, question: "Dog Diet You Need To Know", answer:"Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance.", image: knowledge2 },
    { id: 3, question: "Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively", answer:"Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog.", image: knowledge3 },

  ];

  return (
    <section className="flex flex-col my-8 px-[15px] md:px-[100px] mt-12">
      <h3 className="text-md mb-2">You already know?</h3>
      <div className="w-[100%] flex justify-between mb-2">
        <h3 className="text-2xl font-semibold">Useful Pet Knowledge</h3>
        <button className="hidden md:flex flex justify-center items-center gap-4 border-2 hover:bg-[#003459] hover:text-white border-gray-800 px-6 py-3 rounded-full text-sm">
          <span>View More</span>
          <FaGreaterThan />
        </button>
      </div>

      {/* Tailwind CSS grid layout */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3 my-6">
        {allKnowledge.map((knowledge) => (
          <KnowledgeCard key={knowledge.id} knowledge={knowledge} />
        ))}
      </div>

      {/* for mobile screen */}
      <button className="md:hidden w-[100%] flex justify-center items-center gap-4 border-2 hover:bg-[#003459] hover:text-white border-gray-800 px-6 py-3 rounded-full text-sm">
        <span>View More</span>
        <FaGreaterThan />
      </button>
    </section>
  );
};

const KnowledgeCard = ({ knowledge }:any) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden p-2">
    <img
      className="h-[350px] w-[100%] object-cover rounded-lg"
      src={knowledge.image}
      alt={knowledge.question}
    />
    <div className="p-4 text-sm md:text-md">
      <button className="bg-[#00A7E7] flex justify-center items-center text-white text-[12px] px-3 py-1 rounded-full my-2 w-[150px]"> Pet knowledge</button>
      <h4 className="font-bold text-[17px] py-3">{knowledge.question}</h4>
      <p className="text-gray-700 pt-2">{knowledge.answer}</p>
    </div>
  </div>
);
