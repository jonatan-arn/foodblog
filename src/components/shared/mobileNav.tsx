import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface mobilenavbarProps {
  open: boolean;
}

export default function mobileNavbar({ open }: mobilenavbarProps) {
  let Links = [
    { name: "home", link: "/" },
    { name: "recipes", link: "/recipes" },
    { name: "about", link: "/" },
    { name: "blog", link: "/" },
    { name: "contact", link: "/" },
  ];
  const [t, i18n] = useTranslation("global");
  return (
    <div
      className={`mobileNav fixed top-0 left-0 w-full md:hidden ${
        open ? "navbar-open " : "navbar-close "
      }`}
    >
      <ul
        className={` opacity-1 fixed left-0 top-0 bottom-0 ml-[25%] w-3/4 ease-in  h-full
        `}
        style={{ backgroundColor: "#1a1a1a" }}
      >
        {Links.map((link) => (
          <li
            key={link.name}
            className=" flex h-20 w-full items-center justify-center border-b-2 border-gray-700 "
          >
            <Link
              to={link.link}
              className="  text-sm font-bold leading-3  text-white duration-500 hover:text-gray-400 "
            >
              {t("navbar." + link.name)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
