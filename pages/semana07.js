import React from "react";
import Image from "next/image";
import Ejer01 from "../public/img/ReactApp.png";
import Ejer02 from "../public/img/ViteApp.png";
import Ejer03 from "../public/img/RemixApp.png";
import Ejer04 from "../public/img/nextApp.png";
import Remix from "../public/img/remix.jpeg"
import Next from "../public/img/Nextjs-logo.png"
import Reto from "../public/img/retojsc.png";
import react from "../public/img/react.png"
import vite from "../public/img/vite.png"
import Contenido1 from "../public/img/framework.webp";
import fetch from "../public/img/fetch.png";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
export const Semana07 = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // La animación solo se activa una vez
    threshold: 0.2, // Porcentaje de visibilidad para activar la animación
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true, // La animación solo se activa una vez
    threshold: 0.2, // Porcentaje de visibilidad para activar la animación
  });
  const [ref3, inView3] = useInView({
    triggerOnce: false, // La animación solo se activa una vez
    threshold: 0.2, // Porcentaje de visibilidad para activar la animación
  });
  const [ref4, inView4] = useInView({
    triggerOnce: false, // La animación solo se activa una vez
    threshold: 0.2, // Porcentaje de visibilidad para activar la animación
  });
   const [ref5, inView5] = useInView({
     triggerOnce: false, // La animación solo se activa una vez
     threshold: 0.2, // Porcentaje de visibilidad para activar la animación
   });
    const [ref6, inView6] = useInView({
      triggerOnce: false, // La animación solo se activa una vez
      threshold: 0.2, // Porcentaje de visibilidad para activar la animación
    });
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.8 }}
      >
        <section className="flex flex-col items-center" id="profile">
          <div className="flex flex-row max-w-[1170px]">
            <div className="basis-1/2 flex flex-col items-center justify-center py-28 mx-4">
              <Image
                src={Contenido1}
                alt="fotografía del creador del protafolio"
                width={400}
                height={400}
                className="rounded-xl box-shadow-xl"
              />
            </div>
            <div className="basis-1/2 flex justify-center items-center flex-col">
              <div className="p-12 w-[600px] text-lg text-[#27374D]">
                <p className="text-4xl font-extrabold">Marcos de trabajo</p>
                <br />
                <p>La quinta semana tocó los marcos de trabajo.</p>
                <div className="pl-10">
                  <ul className="list-disc">
                    <li>React App</li>
                    <li>Vite</li>
                    <li>Remix</li>
                    <li>NextJS</li>
                    <li>Actividades desarrolladas.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>

      <section>
        <div className="w-full flex flex-col justify-center items-center p-10 pt-5 bg-[#27374D] text-[#DDE6ED] ">
          <motion.div
            ref={ref2}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col p-4 w-[800px]">
              <p className="text-3xl font-extrabold text-center  p-4 m-2">
                React App:
              </p>
              <div className="flex flex-col items-center justify-center text-center">
                <div>
                  <Image
                    src={react}
                    alt="fotografía del creador del protafolio"
                    width={400}
                    height={400}
                    className="rounded-xl box-shadow-xl"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <div className=" p-3 m-2">
                  <p className="">
                    React es una biblioteca de JavaScript para construir
                    interfaces de usuario interactivas y reactivas. Permite
                    crear componentes reutilizables que gestionan su propio
                    estado y se combinan para formar interfaces de usuario más
                    grandes.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="w-full flex flex-col justify-center items-center p-10 pt-5 text-[#27374D]">
          <motion.div
            ref={ref3}
            initial="hidden"
            animate={inView3 ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col p-4 w-[800px]">
              <p className="text-3xl font-extrabold text-center  p-4 m-2">
                Vite
              </p>

              <div className="flex flex-col">
                <div className="p-3 m-2">
                  <div className="flex flex-col items-center justify-center text-center">
                    <div>
                      <Image
                        src={vite}
                        alt="fotografía del creador del protafolio"
                        width={600}
                        height={400}
                        className="rounded-xl box-shadow-xl"
                      />
                    </div>
                  </div>
                  <br />
                  <p className="flex text-center">
                    Vite es un marco de construcción web ultrarrápido y ligero
                    que se centra en el desarrollo de aplicaciones frontend
                    modernas. Fue creado por Evan You, el creador de Vue.js,
                    pero también es compatible con otros frameworks como React y
                    Preact. Vite utiliza la importación nativa del navegador (ES
                    modules) para un inicio de desarrollo rápido y utiliza un
                    servidor de desarrollo basado en ESM (ECMAScript Modules)
                    para proporcionar una experiencia de desarrollo fluida. Vite
                    es conocido por su velocidad en la compilación y recarga en
                    caliente (HMR - Hot Module Replacement).
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="w-full flex flex-col justify-center items-center p-10 pt-5 bg-[#27374D] text-[#DDE6ED] ">
          <motion.div
            ref={ref4}
            initial="hidden"
            animate={inView4 ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col p-4 w-[800px]">
              <p className="text-3xl font-extrabold text-center  p-4 m-2">
                Remix:
              </p>
              <div className="flex flex-col items-center justify-center text-center">
                <div>
                  <Image
                    src={Remix}
                    alt="fotografía del creador del protafolio"
                    width={400}
                    height={400}
                    className="rounded-xl box-shadow-xl"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <div className=" p-3 m-2">
                  <p className="">
                    Remix es un marco de trabajo para el desarrollo web que
                    combina lo mejor de React, el enrutamiento, la gestión del
                    estado y el rendimiento. Fue creado por el equipo de React
                    Router y se enfoca en brindar una experiencia de desarrollo
                    unificada y robusta. Remix utiliza el enrutamiento estático
                    y dinámico, así como un modelo de programación basado en
                    componentes para construir aplicaciones web. También
                    proporciona herramientas para la carga de datos optimizada y
                    el manejo del estado de la aplicación.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="w-full flex flex-col justify-center items-center p-10 pt-5 text-[#27374D]">
          <motion.div
            ref={ref5}
            initial="hidden"
            animate={inView5 ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col p-4 w-[800px]">
              <p className="text-3xl font-extrabold text-center  p-4 m-2">
                NextJS
              </p>

              <div className="flex flex-col">
                <div className="p-3 m-2">
                  <div className="flex flex-col items-center justify-center text-center">
                    <div>
                      <Image
                        src={Next}
                        alt="fotografía del creador del protafolio"
                        width={600}
                        height={400}
                        className="rounded-xl box-shadow-xl"
                      />
                    </div>
                  </div>
                  <br />
                  <p className="flex text-center">
                    Next.js es un marco de trabajo de React para el desarrollo
                    de aplicaciones web del lado del servidor (SSR - Server-Side
                    Rendering) y del lado del cliente (CSR - Client-Side
                    Rendering). Proporciona un entorno completo para construir
                    aplicaciones web con React, incluyendo enrutamiento,
                    renderizado del lado del servidor, gestión del estado,
                    generación estática de sitios (SSG - Static Site
                    Generation), entre otros. Next.js facilita la creación de
                    aplicaciones web escalables, eficientes y rápidas, y es
                    ampliamente utilizado en la comunidad de React. Cada uno de
                    estos marcos de trabajo tiene sus propias características y
                    enfoques, por lo que la elección entre ellos dependerá de
                    las necesidades específicas del proyecto y de las
                    preferencias personales. Todos ellos proporcionan
                    herramientas y abstracciones para acelerar el desarrollo web
                    y mejorar la experiencia del desarrollador al trabajar con
                    React.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="w-full flex flex-col justify-center items-center p-10 pt-5 bg-[#27374D] text-[#DDE6ED]">
          <motion.div
            ref={ref6}
            initial="hidden"
            animate={inView6 ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col p-4 w-[800px]">
              <p className="text-3xl font-extrabold text-center  p-4 m-2">
                Actividades Desarrolladas
              </p>
              <br />
              <p className="text-lg">Frameworks</p>
              <p> ReactApp</p>
              <br />
              <div className="flex flex-col items-center justify-center text-center pl-6">
                <Image
                  src={Ejer01}
                  alt="fotografía del creador del protafolio"
                  width={1200}
                  height={900}
                  className="rounded-xl box-shadow-xl"
                />
              </div>
              <p> ViteApp</p>
              <br />
              <div className="flex flex-col items-center justify-center text-center pl-6">
                <Image
                  src={Ejer02}
                  alt="fotografía del creador del protafolio"
                  width={1200}
                  height={900}
                  className="rounded-xl box-shadow-xl"
                />
              </div>
              <p> RemixApp</p>
              <br />
              <div className="flex flex-col items-center justify-center text-center pl-6">
                <Image
                  src={Ejer03}
                  alt="fotografía del creador del protafolio"
                  width={1200}
                  height={900}
                  className="rounded-xl box-shadow-xl"
                />
              </div>
              <p> NextApp</p>
              <br />
              <div className="flex flex-col items-center justify-center text-center pl-6">
                <Image
                  src={Ejer04}
                  alt="fotografía del creador del protafolio"
                  width={1200}
                  height={900}
                  className="rounded-xl box-shadow-xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Semana07;
