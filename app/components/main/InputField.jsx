"use client";

function InputField({
  inputValue,
  handleSubmit,
  error,
  setInputValue,
  setError,
}) {
  return (
    <form
      className="flex flex-col -translate-y-[100px] lg:flex-row gap-4 mt-8 bg-shorten-mobile justify-center lg:items-center lg:bg-shorten-desktop bg-cover bg-center rounded-lg shadow-lg p-8 h-[200px] "
      onSubmit={handleSubmit}
    >
      <p className="flex-1">
        <input
          className={`${
            error ? "border-red" : "border-gray"
          } block w-full p-4 text-lg rounded-lg border-2 border-gray bg-white focus:border-cyan focus:outline-none h-[60px]`}
          placeholder="Shorten a link here ..."
          aria-label="Shorten a link"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onMouseDown={() => setError(false)}
        />
        {error && <p className="text-red italic mt-1">{error}</p>}
      </p>
      <button
        type="submit"
        className="capitalize text-white hover:opacity-80 bg-cyan  hover:shadow-md lg:self-center transition-all duration-300 font-bold py-4 px-8 rounded-lg h-[60px]"
      >
        Shorten it!
      </button>
    </form>
  );
}

export default InputField;
