import { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

function OutputField({ shortenedUrl, inputValue }) {
  const [copySuccess, setCopySuccess] = useState("");

  useEffect(() => {
    if (copySuccess) {
      const timer = setTimeout(() => {
        setCopySuccess("");
      }, 2000);

      // Cleanup function to clear the timer if the component is unmounted
      return () => clearTimeout(timer);
    }
  }, [copySuccess]);

  return (
    <section className="shadow-md flex bg-white items-center rounded-lg font-bold flex-col md:flex-row gap-2 justify-between mb-16 py-2 pl-6 px-3">
      <p className="font-bold text-very-dark-violet border-b border-gray md:border-transparent py-2 md:py-0 w-full">
        {inputValue}
      </p>
      {shortenedUrl && (
        <div className="text-very-dark-violet w-full flex flex-col md:flex-row md:*:w-auto md:justify-end gap-2 md:p-2 *:w-full justify-between items-center">
          <p className="font-bold text-cyan">
            <a href={shortenedUrl}>{shortenedUrl}</a>
          </p>
          <CopyToClipboard
            text={shortenedUrl}
            onCopy={() => setCopySuccess("Copied!")}
          >
            <button
              className={` ${
                copySuccess ? "bg-dark-violet hover:opacity-100" : ""
              } md:ml-4 bg-cyan capitalize text-white px-6 py-2 rounded hover:opacity-85 transition-all duration-300`}
            >
              {copySuccess ? "Copied!" : "Copy"}
            </button>
          </CopyToClipboard>
        </div>
      )}
    </section>
  );
}

export default OutputField;
