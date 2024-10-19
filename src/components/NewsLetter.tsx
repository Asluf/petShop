export const Newsletter = () => {
  return (
    <section className="bg-[#003459] mb-10 py-8 rounded-[20px] mt-8 text-gray-100 px-8 md:px-[60px]">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full gap-4">
        {/* Text Section */}
        <div className="w-full md:w-[40%] text-2xl font-semibold">
          Register Now So You Don’t Miss Our Programs
        </div>

        {/* Form Section */}
        <div className="w-full md:w-[60%] text-xl font-bold bg-white p-4 rounded-[10px] flex flex-col md:flex-row md:justify-between md:items-center w-full gap-4">
            <input
              type="email"
              placeholder="Enter your Email"
              className="px-4 py-2 rounded-lg border border-gray-300 w-full md:w-aut text-md text-blue-900"
            />
            <button className="bg-[#003459] text-white px-4 py-2 rounded-lg w-full md:w-[250px]">
              Subscribe Now
            </button>
        </div>
      </div>
    </section>
  );
};
