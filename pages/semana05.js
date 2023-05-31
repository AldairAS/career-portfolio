import React from "react";
import Image from "next/image";
import Ejer01 from "../public/img/fetchcaptura1.png";
import Ejer02 from "../public/img/fetchcaptura2.png";
import Ejer03 from "../public/img/fetchcaptura3.png";
import Reto from "../public/img/retojsc.png";

import Contenido1 from "../public/img/json.png";
import fetch from "../public/img/fetch.png"
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
export const Semana05 = () => {
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
                  JSON y fetch de información
                </p>
                <br />
                <p>La quinta semana se vieron los siguientes temas .</p>
                <div className="pl-10">
                  <ul className="list-disc">
                    <li>JSON</li>
                    <li>fetch de archivos</li>
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
                JSON (JavaScript Object Notation):
              </p>
              <div className="flex flex-col items-center justify-center text-center">
                <div>
                  <Image
                    src={Contenido1}
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
                    JSON es un formato de intercambio de datos ligero y fácil de
                    leer y escribir. Está basado en la notación de objetos de
                    JavaScript, pero es independiente de cualquier lenguaje de
                    programación. JSON se utiliza ampliamente para transmitir
                    datos estructurados a través de una red y es compatible con
                    muchos lenguajes de programación. La sintaxis de JSON es
                    bastante sencilla. Los datos se representan en pares
                    clave-valor, donde las claves son cadenas de texto y los
                    valores pueden ser cualquier tipo de dato válido, como
                    cadenas, números, booleanos, arrays o incluso objetos JSON
                    anidados. Los datos se delimitan con corchetes {} para
                    objetos y con corchetes [] para arrays.
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
                Fetch API:
              </p>

              <div className="flex flex-col">
                <div className="p-3 m-2">
                  <div className="flex flex-col items-center justify-center text-center">
                    <div>
                      <Image
                        src={fetch}
                        alt="fotografía del creador del protafolio"
                        width={600}
                        height={400}
                        className="rounded-xl box-shadow-xl"
                      />
                    </div>
                  </div>
                  <br />
                  <p className="flex text-center">
                    Fetch es una API moderna de JavaScript que proporciona una
                    forma sencilla y flexible de realizar solicitudes HTTP.
                    Permite enviar y recibir datos de recursos remotos, como
                    archivos JSON, a través de la red. La API Fetch utiliza el
                    objeto fetch para realizar solicitudes HTTP y devuelve una
                    promesa que se resuelve con la respuesta de la solicitud.
                    Puedes utilizar los métodos then() y catch() para manejar la
                    respuesta y los posibles errores.
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
              <p className="text-lg">Ejercicio de fetch</p>
              <p> Archivo JSON</p>
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
              <p> Código fetch</p>
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
              <p> Resultado</p>
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

export default Semana05;
