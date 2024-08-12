import Link from "next/link";

function NavBar({ className }) {
  const navListItems = [
    { name: "features", href: "/features" },
    { name: "pricing", href: "/pricing" },
    { name: "resources", href: "/resources" },
  ];
  return (
    <ul
      className={`grid gap-4 place-items-center lg:gap-0  lg:grid-cols-3 ${className}`}
    >
      {navListItems.map((listItem, index) => {
        return (
          <li
            key={index}
            className="capitalize lg:mx-8 hover:text-very-dark-violet transition-all duration-300"
          >
            <Link href={listItem.href}>{listItem.name}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default NavBar;
