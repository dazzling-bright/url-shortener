import Image from "next/image";
import Link from "next/link";

function Footer() {
  const footerLinks = [
    {
      header: "features",
      link1: "Link Shortening",
      link2: "Branded Links",
      link3: "  Analytics",
    },
    {
      header: "resources",
      link1: "Blog",
      link2: "developers",
      link3: "support",
    },
    {
      header: "Company",
      link1: "about",
      link2: "our team",
      link3: "careers",
      link4: "contact",
    },
  ];

  const socialLinks = [
    "/icon-facebook.svg",
    "/icon-facebook.svg",
    "/icon-facebook.svg",
    "/icon-facebook.svg",
  ];
  return (
    <footer className="bg-very-dark-blue text-white py-8">
      <section className="grid text-center lg:text-left gap-8 lg:grid-cols-5 py-8">
        <figure className="flex justify-center self-start pt-2">
          <Image
            src="/logo.svg"
            alt="The website logo"
            width={80}
            height={80}
            style={{ filter: "invert(1)" }}
          />
        </figure>
        {footerLinks.map(({ header, link1, link2, link3, link4 }, index) => (
          <div key={index} className="capitalize pt-1">
            <h2 className="font-bold mb-4">{header}</h2>
            <ul>
              <li className="my-2">
                <Link href={link1}>{link1}</Link>
              </li>
              <li className="my-2">
                <Link href={link2}>{link2}</Link>
              </li>
              <li className="my-2">
                <Link href={link3}>{link3}</Link>
              </li>
            </ul>
            {link4 && <Link href={`/${link4}`}>{link4}</Link>}
          </div>
        ))}
        <figure className="flex justify-center self-start pt-2">
          <Image
            src="/logo.svg"
            alt="The website logo"
            width={80}
            height={80}
            style={{ filter: "invert(1)" }}
          />
        </figure>
      </section>
    </footer>
  );
}

export default Footer;
