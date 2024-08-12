"use client";

import { useState } from "react";

function InputField() {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");

  const validateUrl = (url) => {
    const urlPattern = new RegExp(
      "^(https?:\\/\\/)?" + // validate protocol
        "((([a-zA-Z\\d]([a-zA-Z\\d-]*[a-zA-Z\\d])*)\\.)+[a-zA-Z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-zA-Z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-zA-Z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-zA-Z\\d_]*)?$", // fragment locator
      "i"
    );
    return urlPattern.test(url);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateUrl(inputValue)) {
      setError("Please enter a valid URL");
      setShortenedUrl(""); // Clear any previous shortened URL
    } else {
      setError("");
      try {
        const response = await fetch(
          `/api?url=${encodeURIComponent(inputValue)}`
        );
        const text = await response.text();
        console.log(text); // Log the response text for debugging
        setShortenedUrl(text);
      } catch (error) {
        console.error("Error fetching URL:", error);
        setError("An error occurred while shortening the URL.");
      }
    }
  };

  return (
    <form
      className="flex flex-col lg:flex-row gap-4 mt-8 bg-shorten-mobile md:bg-shorten-desktop bg-cover bg-center rounded-lg shadow-lg p-8"
      onSubmit={handleSubmit}
    >
      <p className="flex-1">
        <input
          className={`${
            error ? "border-red" : "border-gray"
          } block w-full p-4 text-lg rounded-lg border-2 border-gray bg-white focus:border-cyan focus:outline-none`}
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
        className="capitalize text-white hover:opacity-85 bg-cyan hover:shadow-md transition-all duration-300 font-bold py-4 px-8 rounded-lg"
      >
        Shorten it!
      </button>
      {shortenedUrl && (
        <p className="text-green-500 mt-4">
          Shortened URL: <a href={shortenedUrl}>{shortenedUrl}</a>
        </p>
      )}
    </form>
  );
}

export default InputField;
