import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import NavBar from "./components/NavBar";
const inter = Inter({ subsets: ["latin"] });
import ImagenPortfolio from "../public/img/fotoportafolio.png";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: false, // La animación solo se activa una vez
    threshold: 0.6, // Porcentaje de visibilidad para activar la animación
  });
  const [ref2, inView2] = useInView({
    triggerOnce: false, // La animación solo se activa una vez
    threshold: 0.6, // Porcentaje de visibilidad para activar la animación
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <main className="flex flex-col items-center justify-between">
      {/* Sección para la presentación principal */}

      <section
        className="flex flex-col items-center justify-between w-full bg-gradient-to-r  from-[#7fa5c2] via-[#a9c0ce] to-[#DDE6ED] min-h-screen"
        id="profile"
      >
        <div className=" flex flex-row max-w-[1170px] my-4">
          {" "}
          <div className="basis-1/3 flex flex-col items-center justify-center py-36">
            <Image
              src={ImagenPortfolio}
              alt="fotografía del creador del protafolio"
              width={334}
              height={275}
              className="rounded-2xl"
            />
          </div>
          <div className="basis-2/3 flex justify-center flex-col">
            <div className="p-12 w-[600px] text-lg text-[#526D82] animate-[bounce_6s_ease-in-out_infinite]">
              <p className="text-6xl font-medium">
                Hola! soy{" "}
                <span className="font-extrabold text-[#27374D]">
                  Aldair Alvites
                </span>
                .
              </p>
              <br/>
              <p className="font-medium">
                Bienvenidos a mi portafolio de
                <span className="font-semibold">
                  {" "}
                  desarrollo de aplicaciones web{" "}
                </span>
                donde compartiré el contenido del curso universitario del mismo
                nombre.
              </p>
              <p className="font-medium">
                El contenido se organiza en base a las 16 semanas acádemicas del
                curso
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col w-full bg-[#27374D] text-lg font-semibold text-[#DDE6ED]">
        <div className="w-full flex flex-row justify-center items-center p-10">
          <div className="flex flex-col p-4 w-[450px]">
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={variants}
              transition={{ duration: 0.8 }}
            >
              <p className="text-6xl font-extrabold text-center  p-4 m-2">
                PRIMERA MITAD
              </p>
            </motion.div>
          </div>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.8 }}
          >
            <div className=" flex flex-col p-4 w-[430px]" id="content">
              <Link
                href={"/semana01"}
                className=" bg-[#526D82] py-4 px-4 m-2 rounded-2xl rounded-tr-none text-center hover:text-[#526D82] hover:bg-[#DDE6ED] transition duration-500 transform hover:-translate-y-4 shadow-2xl "
              >
                Semana 01
              </Link>
              <Link
                href={"/semana02"}
                className=" bg-[#526D82] py-4 px-4 m-2 rounded-2xl rounded-tr-none text-center hover:text-[#526D82] hover:bg-[#DDE6ED] transition duration-500 transform hover:-translate-y-4 shadow-2xl "
              >
                Semana 02
              </Link>
              <Link
                href={"/semana03"}
                className=" bg-[#526D82] py-4 px-4 m-2 rounded-2xl rounded-tr-none text-center hover:text-[#526D82] hover:bg-[#DDE6ED] transition duration-500 transform hover:-translate-y-4 shadow-2xl "
              >
                Semana 03
              </Link>
              <Link
                href={"#"}
                className=" bg-[#526D82] py-4 px-4 m-2 rounded-2xl rounded-tr-none text-center hover:text-[#526D82] hover:bg-[#DDE6ED] transition duration-500 transform hover:-translate-y-4 shadow-2xl "
              >
                Semana 04
              </Link>
              <Link
                href={"#"}
                className=" bg-[#526D82] py-4 px-4 m-2 rounded-2xl rounded-tr-none text-center hover:text-[#526D82] hover:bg-[#DDE6ED] transition duration-500 transform hover:-translate-y-4 shadow-2xl "
              >
                Semana 05
              </Link>
              <Link
                href={"#"}
                className=" bg-[#526D82] py-4 px-4 m-2 rounded-2xl rounded-tr-none text-center hover:text-[#526D82] hover:bg-[#DDE6ED] transition duration-500 transform hover:-translate-y-4 shadow-2xl "
              >
                Semana 06
              </Link>
              <Link
                href={"#"}
                className=" bg-[#526D82] py-4 px-4 m-2 rounded-2xl rounded-tr-none text-center hover:text-[#526D82] hover:bg-[#DDE6ED] transition duration-500 transform hover:-translate-y-4 shadow-2xl "
              >
                Semana 07
              </Link>
              <Link
                href={"#"}
                className=" bg-[#526D82] py-4 px-4 m-2 rounded-2xl rounded-tr-none text-center hover:text-[#526D82] hover:bg-[#DDE6ED] transition duration-500 transform hover:-translate-y-4 shadow-2xl "
              >
                Semana 08
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="w-full flex flex-row justify-center items-center p-10">
          <motion.div
            ref={ref2}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col p-4 w-[430px]">
              <Link
                href={"#"}
                className=" bg-[#526D82] py-4 px-4 m-2 rounded-2xl rounded-tr-none text-center hover:text-[#526D82] hover:bg-[#DDE6ED] transition duration-500 transform hover:-translate-y-4 shadow-2xl "
              >
                Semana 09
              </Link>
              <Link
                href={"#"}
                className=" bg-[#526D82] py-4 px-4 m-2 rounded-2xl rounded-tr-none text-center hover:text-[#526D82] hover:bg-[#DDE6ED] transition duration-500 transform hover:-translate-y-4 shadow-2xl "
              >
                Semana 10
              </Link>
              <Link
                href={"#"}
                className=" bg-[#526D82] py-4 px-4 m-2 rounded-2xl rounded-tr-none text-center hover:text-[#526D82] hover:bg-[#DDE6ED] transition duration-500 transform hover:-translate-y-4 shadow-2xl "
              >
                Semana 11
              </Link>
              <Link
                href={"#"}
                className=" bg-[#526D82] py-4 px-4 m-2 rounded-2xl rounded-tr-none text-center hover:text-[#526D82] hover:bg-[#DDE6ED] transition duration-500 transform hover:-translate-y-4 shadow-2xl "
              >
                Semana 12
              </Link>
              <Link
                href={"#"}
                className=" bg-[#526D82] py-4 px-4 m-2 rounded-2xl rounded-tr-none text-center hover:text-[#526D82] hover:bg-[#DDE6ED] transition duration-500 transform hover:-translate-y-4 shadow-2xl "
              >
                Semana 13
              </Link>
              <Link
                href={"#"}
                className=" bg-[#526D82] py-4 px-4 m-2 rounded-2xl rounded-tr-none text-center hover:text-[#526D82] hover:bg-[#DDE6ED] transition duration-500 transform hover:-translate-y-4 shadow-2xl "
              >
                Semana 14
              </Link>
              <Link
                href={"#"}
                className=" bg-[#526D82] py-4 px-4 m-2 rounded-2xl rounded-tr-none text-center hover:text-[#526D82] hover:bg-[#DDE6ED] transition duration-500 transform hover:-translate-y-4 shadow-2xl "
              >
                Semana 15
              </Link>
              <Link
                href={"#"}
                className=" bg-[#526D82] py-4 px-4 m-2 rounded-2xl rounded-tr-none text-center hover:text-[#526D82] hover:bg-[#DDE6ED] transition duration-500 transform hover:-translate-y-4 shadow-2xl "
              >
                Semana 16
              </Link>
            </div>
          </motion.div>

          <div className="flex flex-col p-4 w-[450px]">
            <motion.div
              ref={ref2}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
              variants={variants}
              transition={{ duration: 0.8 }}
            >
              <p className="text-6xl font-extrabold text-center  p-4 m-2">
                SEGUNDA MITAD
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
