import React from "react";
import Link from "next/link";
export const NavBar = () => {
  return (
    <nav className="flex bg-[#6D5D6E] items-center justify-between h-20 text-[#F4EEE0]">
      <div className="max-w-screen-lg flex items-center">
        <Link
          className=" rounded-xl p-2 px-10 font-bold text-2xl hover:text-[#7b697c] hover:bg-[#F4EEE0] transition duration-500 m-4"
          href={"#"}
        >
          Portafolio
        </Link>

        <Link
          className="rounded-xl p-2 px-10 hover:text-[#7b697c] hover:bg-[#F4EEE0] transition duration-500"
          href={"/#profile"}
        >
          Sobre mi
        </Link>

        <Link
          className="rounded-xl p-2 px-10 hover:text-[#7b697c] hover:bg-[#F4EEE0] transition duration-500"
          href={"/#content"}
        >
          Contenido
        </Link>
      </div>
      <div>
        <Link className="rounded-xl p-2 px-10 font-medium" href={"#"}>
          Aldair Alvites
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
