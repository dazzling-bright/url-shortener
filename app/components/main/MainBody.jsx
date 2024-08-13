"use client";

import { useState } from "react";
import InputField from "./InputField";
import OutputField from "./Output";
import Services from "./Services";

function MainBody() {
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
    <main className="bg-grayish-violet pb-2 mt-40">
      <InputField
        inputValue={inputValue}
        error={error}
        setInputValue={setInputValue}
        shortenedUrl={shortenedUrl}
        handleSubmit={handleSubmit}
        setError={setError}
      />
      <OutputField shortenedUrl={shortenedUrl} />
      <Services />
    </main>
  );
}

export default MainBody;
