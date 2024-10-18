export const KnowledgeSection = () => {
  return (
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
};

const KnowledgeCard = ({ title, description }: any) => (
  <div className="bg-white shadow-lg p-4 rounded-lg">
    <h4 className="text-lg font-bold mb-2">{title}</h4>
    <p>{description}</p>
  </div>
);
