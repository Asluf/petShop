export const Newsletter = () => {
  return (
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
};
