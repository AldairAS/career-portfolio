import React from "react";
import Image from "next/image";
import Ejer01 from "../public/img/ejerc01.png";
import Ejer02 from "../public/img/ejerc02.png";
import Ejer03 from "../public/img/ejerc03.png";
import Contenido1 from "../public/img/dombom.png";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
export const Semana04 = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // La animación solo se activa una vez
    threshold: 0.1, // Porcentaje de visibilidad para activar la animación
  });
  const [ref2, inView2] = useInView({
    triggerOnce: false, // La animación solo se activa una vez
    threshold: 0.1, // Porcentaje de visibilidad para activar la animación
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
                <p className="text-4xl font-extrabold">Manejo del BOM y DOM</p>
                <br />
                <p>
                  La tercera semana se tocó el manejo del documento con
                  identificadores JavaScript.
                </p>
                <div className="pl-10">
                  <ul className="list-disc">
                    <li>Manejo del BOM y DOM</li>
                    <li>Actividades desarrolladas</li>
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
                Manejo del BOM y DOM
              </p>
              <div className="flex flex-col items-center justify-center text-center">
                <div>
                  <Image
                    src={Contenido1}
                    alt="fotografía del creador del protafolio"
                    width={400}
                    height={400}
                    className="box-shadow-xl"
                  />
                </div>
              </div>

              <h1 className="text-lg font-semibold">
                Manejo del BOM (Browser Object Model)
              </h1>
              <p className="pl-3">
                Interfaz que tiene todo navegador para interactuar con la
                ventana usamos el objeto window
              </p>

              <ul className="list-disc pl-8">
                <li>Navegador</li>
                <li>pantalla</li>
                <li>ubicación</li>
                <li>Historia</li>
                <li>Documento</li>
              </ul>
              <br />
              <h2 className="text-lg font-semibold">
                Modelo de objetos documentos (DOM)
              </h2>
              <p className="pl-3">
                Todo objeto tiene un conjunto de propiedades. El objeto de
                ventana es una propiedad adicional del objeto macro de la
                ventana. El DOM (Modelo de Objetos del Documento) se considera
                un subconjunto de la ventana principal. El DOM se puede
                actualizar mediante programación para reflejar los cambios
                realizados en el documento web.
              </p>
              <br />
              <h2 className="pl-6 font-semibold">División del DOM</h2>
              <ul className="list-disc pl-12">
                <li>
                  Core DOM: Modelo estándar para todos los tipos de documentos
                </li>
                <li>
                  xml DOM: Modelo estándar para documentos XML (Lenguaje de
                  marcas extensivas). Está siendo reemplazado por archivos JSON
                </li>
                <li>HTML DOM: Modelo estándar para documentos HTML</li>
              </ul>
              <br />
              <h2 className="pl-6 font-semibold">Para qué utilizar el DOM:</h2>

              <ul className="list-disc pl-12">
                <li>Cambiar todos los elementos HTML en la página</li>
                <li>Cambiar todos los atributos HTML en la página</li>
                <li>Cambiar todos los estilos CSS en la página</li>
                <li>Eliminar elementos y atributos HTML existentes</li>
                <li>Agregar nuevos elementos y atributos HTML</li>
                <li>
                  Reaccionar a todos los eventos (pulsar, etc) HTML existentes
                  en la página
                </li>
                <li>Crear nuevos eventos en la página</li>
              </ul>

              <h2 className="pl-6 font-semibold">Métodos HTML DOM</h2>
              <p className="pl-7">
                Están asociados al objeto document y elemento:
              </p>
              <ul className="list-disc pl-12">
                <li>Encontrar elementos HTML</li>
                <ul>
                  <li>document.getElementById(id)</li>
                  <li>document.getElementsByTagName(name)</li>
                  <li>document.getElementsByClassName(name)</li>
                </ul>
                <li>Cambiar elementos HTML</li>
                <ul>
                  <li>element.innerHTML = new html content</li>
                  <li>element.attribute = new value</li>
                </ul>
              </ul>
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
                Actividades Desarrolladas
              </p>
              <br />

              <p className="text-lg">Ejercicios con el manejo del DOM</p>
              <p> Ejercicio 01</p>
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
              <p> Ejercicio 02</p>
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
              <p> Ejercicio 03</p>
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
             
            </div>
          </motion.div>
        </div>

      </section>
    </>
  );
};

export default Semana04;
