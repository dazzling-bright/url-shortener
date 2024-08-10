import Link from "next/link";

function NavBar({ className }) {
  const navListItems = [
    { name: "features", href: "/features" },
    { name: "pricing", href: "/pricing" },
    { name: "resources", href: "/resources" },
  ];
  return (
    <ul className={`grid grid-cols-3 ${className}`}>
      {navListItems.map((listItem, index) => {
        return (
          <li key={index} className="capitalize md:mx-3 lg:mx-8 8text-center">
            <Link href={listItem.href}>{listItem.name}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default NavBar;
