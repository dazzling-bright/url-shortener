function OutputField({ shortenedUrl }) {
  return (
    <section className="">
      {shortenedUrl && (
        <p className="text-green-500 mt-4">
          Shortened URL: <a href={shortenedUrl}>{shortenedUrl}</a>
        </p>
      )}
    </section>
  );
}

export default OutputField;
