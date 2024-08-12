function InputField() {
  return (
    <section className="flex flex-col lg:flex-row gap-4 mt-8 bg-shorten-mobile md:bg-shorten-desktop bg-cover bg-center rounded-lg shadow-lg p-8">
      <input
        className="flex-1 p-4 text-lg rounded-lg border-2 border-gray bg-white focus:border-cyan focus:outline-none"
        placeholder="Shorten a link here ..."
        aria-label="Shorten a link"
      />
      <button className="capitalize text-white hover:opacity-85 bg-cyan hover:shadow-md  transition-all duration-300 font-bold py-4 px-8 rounded-lg">
        Shorten it!
      </button>
    </section>
  );
}

export default InputField;
