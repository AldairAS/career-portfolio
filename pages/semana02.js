import React from "react";
import Image from "next/image";
import Html from "../public/img/html.png";
import Css from "../public/img/css.png";
import Contenido1 from "../public/img/capturaFigma.png";
import Figma from "../public/img/figma.png";
import Emmet from "../public/img/emmet.png"
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
export const Semana02 = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // La animación solo se activa una vez
    threshold: 0.2, // Porcentaje de visibilidad para activar la animación
  });
  const [ref2, inView2] = useInView({
    triggerOnce: false, // La animación solo se activa una vez
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
                width={500}
                height={400}
                className="rounded-xl box-shadow-xl"
              />
            </div>
            <div className="basis-1/2 flex justify-center items-center flex-col">
              <div className="p-12 w-[600px] text-lg text-[#27374D]">
                <p className="text-4xl font-extrabold">
                  Diseño, estructura y Estilos
                </p>
                <br />
                <p>
                  En esta semana se tocó el diseño, la estructura y estilos de
                  una web con figma HTML y css respectivamente.
                </p>
                <div className="pl-10">
                  <ul className="list-disc">
                    <li>Figma</li>
                    <li>HTML</li>
                    <li>CSS</li>
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
                Figma
              </p>
              <div className="flex flex-col items-center justify-center text-center">
                <div>
                  <Image
                    src={Figma}
                    alt="fotografía del creador del protafolio"
                    width={200}
                    height={400}
                    className="rounded-xl box-shadow-xl"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <div className=" p-3 m-2">
                  <p className="">
                    Figma es una herramienta de diseño y prototipado de
                    interfaces de usuario (UI) basada en la nube. Permite a los
                    diseñadores crear diseños de alta calidad, colaborar con
                    otros miembros del equipo y crear prototipos interactivos
                  </p>
                </div>
                <div className=" p-3 m-2 ">
                  <p className="font-bold text-lg">
                    Características Principales
                  </p>
                  <ul className="list-disc pl-6">
                    <li>
                      <span className="font-semibold">
                        Diseño colaborativo:{" "}
                      </span>
                      Figma permite a varios usuarios trabajar simultáneamente
                      en un mismo archivo, lo que facilita la colaboración y la
                      revisión en tiempo real
                    </li>
                    <li>
                      <span className="font-semibold">
                        Diseño basado en la nube:{" "}
                      </span>
                      Figma almacena tus archivos en la nube, lo que facilita el
                      acceso y la edición desde cualquier lugar y en cualquier
                      dispositivo.
                    </li>
                    <li>
                      <span className="font-semibold">
                        Prototipado interactivo:{" "}
                      </span>
                      Puedes crear prototipos interactivos y realizar pruebas de
                      usabilidad directamente en Figma.
                    </li>
                    <li>
                      <span className="font-semibold">
                        Librería de componentes:{" "}
                      </span>
                      Figma permite crear bibliotecas de componentes
                      reutilizables, lo que agiliza el proceso de diseño y
                      asegura la coherencia visual en tus proyectos.
                    </li>
                    <li>
                      <span className="font-semibold">
                        Inspección y exportación de diseño:{" "}
                      </span>
                      Puedes inspeccionar y exportar elementos de diseño,
                      generar especificaciones y generar assets para el
                      desarrollo.
                    </li>
                  </ul>
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
                Estructura y Estilos
              </p>

              <div className="flex flex-row">
                <div className="basis-1/2 p-3 m-2">
                  <div className="flex flex-col items-center justify-center text-center">
                    <div>
                      <Image
                        src={Html}
                        alt="fotografía del creador del protafolio"
                        width={100}
                        height={400}
                        className="rounded-xl box-shadow-xl"
                      />
                    </div>
                  </div>
                  <br />
                  <p className="flex text-center">
                    HTML es el lenguaje de marcado estándar utilizado para crear
                    y estructurar contenido en la web. Se compone de una serie
                    de elementos (etiquetas) que definen la estructura y el
                    significado del contenido dentro de una página web
                  </p>
                </div>
                <div className="basis-1/2 p-3 m-2 ">
                  <div className="flex flex-col items-center justify-center text-center">
                    <div>
                      <Image
                        src={Css}
                        alt="fotografía del creador del protafolio"
                        width={71}
                        height={400}
                        className="rounded-xl box-shadow-xl"
                      />
                    </div>
                  </div>
                  <br />
                  <p className="flex text-center">
                    CSS es un lenguaje utilizado para describir la presentación
                    y el estilo de un documento HTML. Permite controlar el
                    diseño, los colores, las fuentes, los espacios y otros
                    aspectos visuales de un sitio web.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="w-full flex flex-col justify-center items-center p-10 pt-5 bg-[#27374D] text-[#DDE6ED]">
          <motion.div
            ref={ref4}
            initial="hidden"
            animate={inView4 ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col p-4 w-[800px]">
              <p className="text-3xl font-extrabold text-center  p-4 m-2">
                Actividades Desarrolladas
              </p>
              <br />
              <p className="text-lg">Diseño de vista principal de portafolio</p>
              <br />
              <iframe
                width="800"
                height="450"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fjh1K9kqpqSNzQk9vMlm34j%2FUntitled%3Ftype%3Ddesign%26t%3D8V6OnIoQ5KIiUuCW-1"
                allowfullscreen
              />
              <br />
              <p className="text-lg">Atajos Emmet</p>
              <br />
              <div className="flex flex-col items-center justify-center text-center pl-6">
                <Image
                  src={Emmet}
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

export default Semana02;
