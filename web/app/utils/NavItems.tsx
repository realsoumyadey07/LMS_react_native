import Link from "next/link";
import React from "react";

export const navItemData = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Courses",
    url: "/courses",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Policy",
    url: "/policy",
  },
  {
    name: "FAQ",
    url: "/faq",
  },
];

type Props = {
  activeItem: number;
  isMobile: boolean;
};

const NavItems: React.FC<Props> = ({activeItem, isMobile}) => {
  return (
    <>
      <div className="hidden 800px:flex">
        {
          navItemData && navItemData.map((item, index)=> (
            <Link key={index} href={`${item.url}`}>
              <span className={activeItem===index? "dark:text-[#37a39a] text-[crimson]" : "dark:text-white text-black"}>
              {item.name}
              </span>
            </Link>
          ))
        }
      </div>
    </>
  )
};

export default NavItems;
