// "use client";

// import { Suspense, useState } from "react";
// import InputField from "./InputField";
// import OutputField from "./Output";
// import Services from "./Services";

// function MainBody() {
//   const [inputValue, setInputValue] = useState("");
//   const [error, setError] = useState("");
//   const [shortenedUrl, setShortenedUrl] = useState("");

//   const validateUrl = (url) => {
//     const urlPattern = new RegExp(
//       "^(https?:\\/\\/)?" + // validate protocol
//         "((([a-zA-Z\\d]([a-zA-Z\\d-]*[a-zA-Z\\d])*)\\.)+[a-zA-Z]{2,}|" + // domain name
//         "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
//         "(\\:\\d+)?(\\/[-a-zA-Z\\d%_.~+]*)*" + // port and path
//         "(\\?[;&a-zA-Z\\d%_.~+=-]*)?" + // query string
//         "(\\#[-a-zA-Z\\d_]*)?$", // fragment locator
//       "i"
//     );
//     return urlPattern.test(url);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateUrl(inputValue)) {
//       setError("Please enter a valid URL");
//       setShortenedUrl(""); // Clear any previous shortened URL
//     } else {
//       setError("");
//       try {
//         const response = await fetch(
//           `/api?url=${encodeURIComponent(inputValue)}`
//         );
//         const shortUrlObject = await response.json();

//         setShortenedUrl(shortUrlObject.short_url || "URL not found");
//       } catch (error) {
//         console.error("Error fetching URL:", error);
//         setError("An error occurred while shortening the URL.");
//       }
//     }
//   };
//   return (
//     <main className="bg-grayish-violet pb-2 mt-40">
//       <InputField
//         inputValue={inputValue}
//         error={error}
//         setInputValue={setInputValue}
//         shortenedUrl={shortenedUrl}
//         handleSubmit={handleSubmit}
//         setError={setError}
//       />
//       <Suspense
//         fallback={
//           <p>
//             If taking longer than expected, your internet connection might be
//             bad
//           </p>
//         }
//       >
//         {shortenedUrl && (
//           <OutputField shortenedUrl={shortenedUrl} inputValue={inputValue} />
//         )}
//       </Suspense>

//       <Services />
//     </main>
//   );
// }

// export default MainBody;

"use client";

import { useState } from "react";
import InputField from "./InputField";
import OutputField from "./Output";
import Services from "./Services";

function MainBody() {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [loading, setLoading] = useState(false);

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
      setLoading(false);
    } else {
      setError("");
      setLoading(true); // Start loading
      try {
        const response = await fetch(
          `/api?url=${encodeURIComponent(inputValue)}`
        );
        const shortUrlObject = await response.json();

        setShortenedUrl(shortUrlObject.short_url || "URL not found");
      } catch (error) {
        console.error("Error fetching URL:", error);
        setError("An error occurred while shortening the URL.");
      } finally {
        setLoading(false); // Stop loading
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

      {loading ? (
        <aside className="bg-gray md:text-center py-4 px-2">
          <p className=" font-bold">
            If taking longer than expected and you are not seeing an error on
            the screen
          </p>
          <ol className="my-2 ">
            <li className="list-decimal list-inside">
              Be patient, your internet connection might be poor
            </li>
            <li className="list-decimal list-inside">
              The URL shortening server might be undergoing maintenance
            </li>
          </ol>
        </aside>
      ) : (
        shortenedUrl && (
          <OutputField shortenedUrl={shortenedUrl} inputValue={inputValue} />
        )
      )}

      <Services />
    </main>
  );
}

export default MainBody;
