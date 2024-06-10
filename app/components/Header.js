import Link from "next/link";

export default function Header({ menu, companyInfo }) {
  menu = menu[0];
  return (
    <header className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      <div>
        <div className="text-2xl font-bold text-gray-800">
          {companyInfo.attributes.companyName} - {menu.attributes.websiteTitle}
        </div>
      </div>
      <nav className="space-x-4">
        {menu &&
          menu.attributes.items.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="text-gray-600 hover:text-gray-900"
            >
              {item.label}
            </Link>
          ))}
      </nav>
    </header>
  );
}
