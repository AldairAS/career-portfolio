import React from "react";
import Link from "next/link";
export const NavBar = () => {
  return (
    <nav className="flex bg-[#27374D] items-center justify-between h-16 text-[#DDE6ED]">
      <div className="max-w-screen-lg flex items-center">
        <Link
          className=" rounded-xl p-2 px-10 font-bold text-2xl hover:text-[#526D82] hover:bg-[#DDE6ED] transition duration-500 m-1"
          href={"#"}
        >
          PortafolioDW
        </Link>

        <Link
          className="rounded-xl p-2 px-10 hover:text-[#526D82] hover:bg-[#DDE6ED] transition duration-500 m-1"
          href={"/#profile"}
        >
          Sobre mi
        </Link>

        <Link
          className="rounded-xl p-2 px-10 hover:text-[#526D82] hover:bg-[#DDE6ED] transition duration-500 m-1"
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
