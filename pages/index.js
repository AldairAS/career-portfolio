import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import NavBar from "./components/NavBar";
const inter = Inter({ subsets: ["latin"] });
import ImagenPortfolio from "../public/img/fotoportafolio.png";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      {/* Sección para la presentación principal */}
      <section className="flex flex-row max-w-[1170px]" id="profile">
        <div className="basis-1/3 flex flex-col items-center justify-center py-40">
          <Image
            src={ImagenPortfolio}
            alt="fotografía del creador del protafolio"
            width={334}
            height={275}
            className="rounded-2xl"
          />
        </div>
        <div className="basis-2/3 flex justify-center flex-col">
          <div className="p-12 w-[600px] text-lg text-[#393646] animate-[bounce_3s_ease-in-out_infinite]">
            <p className="text-2xl">
              Hola! soy <span className="font-semibold">Aldair Alvites</span>.
            </p>
            <p>
              Bienvenidos a mi portafolio de
              <span className="font-semibold">
                {" "}
                desarrollo de aplicaciones web{" "}
              </span>
              donde compartiré el contenido del curso universitario del mismo
              nombre.
            </p>
            <p>
              El contenido se organiza en base a las 16 semanas acádemicas del
              curso
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col w-full bg-[#393646] text-lg font-semibold text-[#F4EEE0]">
        <div className="w-full flex flex-row justify-center items-center p-10">
          <div className="flex flex-col p-4 w-[450px]">
            <p className="text-3xl font-extrabold text-center  p-4 m-2">
              Primeras 8 semanas
            </p>
          </div>
          <div className=" flex flex-col p-4 w-[430px]" id="content">
            <Link
              href={"/semana01"}
              className=" bg-[#6D5D6E] py-4 px-4 m-2 rounded-2xl rounded-tr-none text-center hover:text-[#7b697c] hover:bg-[#F4EEE0] transition duration-500 transform hover:-translate-y-4 shadow-2xl "
            >
              Semana 01
            </Link>
            <Link
              href={"/semana02"}
              className=" bg-[#6D5D6E] py-4 px-4 m-2 rounded-2xl rounded-tr-none text-center hover:text-[#7b697c] hover:bg-[#F4EEE0] transition duration-500 transform hover:-translate-y-4 shadow-2xl "
            >
              Semana 02
            </Link>
            <Link
              href={"#"}
              className=" bg-[#6D5D6E] py-4 px-4 m-2 rounded-2xl rounded-tr-none text-center hover:text-[#7b697c] hover:bg-[#F4EEE0] transition duration-500 transform hover:-translate-y-4 shadow-2xl "
            >
              Semana 03
            </Link>
            <Link
              href={"#"}
              className=" bg-[#6D5D6E] py-4 px-4 m-2 rounded-2xl rounded-tr-none text-center hover:text-[#7b697c] hover:bg-[#F4EEE0] transition duration-500 transform hover:-translate-y-4 shadow-2xl "
            >
              Semana 04
            </Link>
            <Link
              href={"#"}
              className=" bg-[#6D5D6E] py-4 px-4 m-2 rounded-2xl rounded-tr-none text-center hover:text-[#7b697c] hover:bg-[#F4EEE0] transition duration-500 transform hover:-translate-y-4 shadow-2xl "
            >
              Semana 05
            </Link>
            <Link
              href={"#"}
              className=" bg-[#6D5D6E] py-4 px-4 m-2 rounded-2xl rounded-tr-none text-center hover:text-[#7b697c] hover:bg-[#F4EEE0] transition duration-500 transform hover:-translate-y-4 shadow-2xl "
            >
              Semana 06
            </Link>
            <Link
              href={"#"}
              className=" bg-[#6D5D6E] py-4 px-4 m-2 rounded-2xl rounded-tr-none text-center hover:text-[#7b697c] hover:bg-[#F4EEE0] transition duration-500 transform hover:-translate-y-4 shadow-2xl "
            >
              Semana 07
            </Link>
            <Link
              href={"#"}
              className=" bg-[#6D5D6E] py-4 px-4 m-2 rounded-2xl rounded-tr-none text-center hover:text-[#7b697c] hover:bg-[#F4EEE0] transition duration-500 transform hover:-translate-y-4 shadow-2xl "
            >
              Semana 08
            </Link>
          </div>
        </div>
        <div className="w-full flex flex-row justify-center items-center p-10">
          <div className="flex flex-col p-4 w-[430px]">
            <Link
              href={"#"}
              className=" bg-[#6D5D6E] py-4 px-4 m-2 rounded-2xl rounded-tr-none text-center hover:text-[#7b697c] hover:bg-[#F4EEE0] transition duration-500 transform hover:-translate-y-4 shadow-2xl "
            >
              Semana 09
            </Link>
            <Link
              href={"#"}
              className=" bg-[#6D5D6E] py-4 px-4 m-2 rounded-2xl rounded-tr-none text-center hover:text-[#7b697c] hover:bg-[#F4EEE0] transition duration-500 transform hover:-translate-y-4 shadow-2xl "
            >
              Semana 10
            </Link>
            <Link
              href={"#"}
              className=" bg-[#6D5D6E] py-4 px-4 m-2 rounded-2xl rounded-tr-none text-center hover:text-[#7b697c] hover:bg-[#F4EEE0] transition duration-500 transform hover:-translate-y-4 shadow-2xl "
            >
              Semana 11
            </Link>
            <Link
              href={"#"}
              className=" bg-[#6D5D6E] py-4 px-4 m-2 rounded-2xl rounded-tr-none text-center hover:text-[#7b697c] hover:bg-[#F4EEE0] transition duration-500 transform hover:-translate-y-4 shadow-2xl "
            >
              Semana 12
            </Link>
            <Link
              href={"#"}
              className=" bg-[#6D5D6E] py-4 px-4 m-2 rounded-2xl rounded-tr-none text-center hover:text-[#7b697c] hover:bg-[#F4EEE0] transition duration-500 transform hover:-translate-y-4 shadow-2xl "
            >
              Semana 13
            </Link>
            <Link
              href={"#"}
              className=" bg-[#6D5D6E] py-4 px-4 m-2 rounded-2xl rounded-tr-none text-center hover:text-[#7b697c] hover:bg-[#F4EEE0] transition duration-500 transform hover:-translate-y-4 shadow-2xl "
            >
              Semana 14
            </Link>
            <Link
              href={"#"}
              className=" bg-[#6D5D6E] py-4 px-4 m-2 rounded-2xl rounded-tr-none text-center hover:text-[#7b697c] hover:bg-[#F4EEE0] transition duration-500 transform hover:-translate-y-4 shadow-2xl "
            >
              Semana 15
            </Link>
            <Link
              href={"#"}
              className=" bg-[#6D5D6E] py-4 px-4 m-2 rounded-2xl rounded-tr-none text-center hover:text-[#7b697c] hover:bg-[#F4EEE0] transition duration-500 transform hover:-translate-y-4 shadow-2xl "
            >
              Semana 16
            </Link>
          </div>
          <div className="flex flex-col">
            <p className="text-3xl font-extrabold text-center p-4 m-2">
              Últimas 8 semanas
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
