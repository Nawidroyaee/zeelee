const navbarItems = [
  { title: "Home", href: "#home" },
  { title: "Menu", href: "#menu" },
  { title: "Contact", href: "#contact" },
];

export default function NavbarItems() {
  return (
    <nav className="mx-auto hidden md:flex gap-2 font-sans items-center text-sm text-gray-500">
      {navbarItems.map((item, i) => (
        <a
          key={i}
          href={item.href}
          className="px-4 py-2 rounded-full hover:text-green-500 hover:font-semibold hover:bg-green-50 transition-all duration-200"
        >
          {item.title}
        </a>
      ))}
    </nav>
  );
}
