import Image from "next/image";

function Hero() {
  return (
    <section
      id="main-content"
      className="grid place-items-center lg:grid-cols-2 gap-8 lg:gap-24"
      tabIndex="-1" 
      // tabIndex = -1, this ensures this section  can be focused using the skip link in the navigation menu 
      aria-label="Main content" 
    >
      {/* Announcement for screen readers */}
      <span role="alert" className="sr-only" aria-live="assertive">
        You have now reached the main content.
      </span>
      {/** hero text content */}
      <div className="grid gap-4 text-center sm:text-left">
        <h1 className="text-6xl tracking-wide leading-tight">
          More than just shorter links
        </h1>
        <p className="text-grayish-violet font-bold">
          Build your brand recognition and get detailed insights on how your
          links are performing
        </p>
        <button className="bg-cyan mx-auto sm:mx-0 font-bold capitalize w-fit text-white py-3 px-8 rounded-3xl hover:opacity-75 transition-all duration-300">
          get started
        </button>
      </div>
      {/** hero image  */}
      <figure className="row-start-1 lg:col-start-2">
        <Image
          src="/illustration-working.svg"
          alt="an icon showing a person using a computer"
          width={500}
          height={500}
        />
      </figure>
    </section>
  );
}

export default Hero;
