import Image from "next/image";

function Services() {
  const services = [
    {
      header: "Brand Recognition",
      body: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instill confidence in your content.",
      icon: "/icon-brand-recognition.svg",
    },
    {
      header: "Detailed Records",
      body: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
      icon: "/icon-detailed-records.svg",
    },
    {
      header: "Fully Customizable",
      body: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
      icon: "icon-fully-customizable.svg",
    },
  ];

  return (
    <article className="my-8 ">
      <section className="text-center">
        <h2 className="text-very-dark-violet my-2 font-bold text-2xl">
          Advanced Statistics
        </h2>
        <p className="text-very-dark-violet opacity-95 leading-10">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </section>

      <section className="grid lg:grid-cols-3 lg:h-[250px] gap-8 my-16 lg:mb-32">
        {services.map(({ header, body, icon }, index) => {
          // To Determine how the article element should be translated based on the index
          const translateYClass =
            index === 1
              ? "lg:translate-y-[15%]"
              : index === 2
              ? "lg:translate-y-[30%]"
              : "";

          return (
            <article
              key={index}
              className={`bg-white rounded-2xl  grid gap-2 mx-auto w-5/6 sm:w-1/2 lg:w-full shadow-lg my-2 px-6 pb-6 ${translateYClass}`}
            >
              {/** The translate value of 30px is not arbitrary, it is so that it is exactly half of the setheight of the image itself (the set image height is 60px) */}
              <figure className="flex justify-center -translate-y-[30px] lg:justify-start ">
                <Image
                  src={icon}
                  className="row-start-1 row-end-2 bg-very-dark-violet rounded-2xl p-3"
                  width={60}
                  height={60}
                  alt=""
                />
             
              </figure>
              <h2 className="font-bold text-xl text-very-dark-violet">
                {header}
              </h2>
              <p className="text-slate-900">{body}</p>
            </article>
          );
        })}
      </section>
    </article>
  );
}

export default Services;
