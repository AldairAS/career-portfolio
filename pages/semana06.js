import React from "react";
import Image from "next/image";
import Contenido1 from "../public/img/react.png";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
export const Semana06 = () => {
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
                width={400}
                height={400}
                className="rounded-xl box-shadow-xl"
              />
            </div>
            <div className="basis-1/2 flex justify-center items-center flex-col">
              <div className="p-12 w-[600px] text-lg text-[#27374D]">
                <p className="text-4xl font-extrabold">React.js</p>
                <br />
                <p>La sexta semana se tocó React.js</p>
                <div className="pl-10">
                  <ul className="list-disc">
                    <li>ReactJS</li>
                    <li>Renderizado</li>
                    <li>Herramientas de desarrollo.</li>
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
                ReactJS:
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
                    React es una biblioteca de JavaScript desarrollada por
                    Facebook que se utiliza para construir interfaces de usuario
                    interactivas y reactivas. Se centra en la creación de
                    componentes reutilizables que gestionan su propio estado y
                    se combinan para construir interfaces de usuario más
                    grandes.
                  </p>
                  <ul className="list-disc pl-6">
                    <li>
                      <span className="font-semibold"> Componentes:</span> En
                      React, las interfaces de usuario se dividen en componentes
                      reutilizables y autocontenidos. Los componentes son
                      bloques de construcción independientes que pueden ser
                      combinados para formar una aplicación. Pueden ser clases
                      (componentes de clase) o funciones (componentes
                      funcionales).
                    </li>
                    <li>
                      <span className="font-semibold"> Estado: </span>El estado
                      es un objeto que contiene datos que pueden cambiar a lo
                      largo del tiempo y afectar la representación de un
                      componente. Los componentes de clase tienen un estado
                      interno, mientras que los componentes funcionales pueden
                      utilizar el estado utilizando los hooks de React (como
                      useState).
                    </li>
                    <li>
                      <span className="font-semibold"> Props: </span>Las props
                      son los atributos que se pasan de un componente padre a un
                      componente hijo. Permiten la comunicación entre
                      componentes y pueden ser utilizadas para pasar datos y
                      funciones.
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
                Renderizado
              </p>

              <div className="flex flex-col">
                <div className="p-3 m-2">
                  <p className="flex text-center">
                    React permite mostrar diferentes elementos o componentes
                    según ciertas condiciones. Puedes utilizar declaraciones
                    if/else o el operador ternario (? :) para realizar
                    renderizado condicional.
                  </p>
                </div>
                <ul className="list-disc pl-12">
                  <li>
                    <span className="font-semibold">
                      {" "}
                      Ciclo de vida del componente:
                    </span>{" "}
                    Los componentes de clase tienen un ciclo de vida con métodos
                    especiales que se ejecutan en diferentes momentos, como el
                    montaje (componentDidMount), actualización
                    (componentDidUpdate) y desmontaje (componentWillUnmount) del
                    componente.
                  </li>
                  <li>
                    <span className="font-semibold"> Virtual DOM: </span>React
                    utiliza una representación virtual del DOM (Virtual DOM)
                    para realizar actualizaciones eficientes de la interfaz de
                    usuario. El Virtual DOM es una copia ligera del DOM real y
                    permite a React calcular los cambios mínimos necesarios para
                    actualizar la interfaz de usuario de manera eficiente.
                  </li>
                  <li>
                    <span className="font-semibold"> Props: </span>Las props son
                    los atributos que se pasan de un componente padre a un
                    componente hijo. Permiten la comunicación entre componentes
                    y pueden ser utilizadas para pasar datos y funciones.
                  </li>
                </ul>
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
                Herramientas de desarrollo
              </p>
              <br />
              <p className="text-lg">
                React cuenta con una serie de herramientas de desarrollo, como
                React DevTools, que facilitan la depuración y el seguimiento de
                los componentes de React.
              </p>
              <ul className="list-disc pl-6">
                <li>
                  React se puede utilizar en conjunto con otras bibliotecas y
                  herramientas, como React Router para el enrutamiento, Redux
                  para la gestión del estado global, y muchas más.
                </li>
                <li>
                  Para comenzar a utilizar React, es necesario configurar un
                  entorno de desarrollo utilizando herramientas como Create
                  React App, Next.js o configurarlo manualmente.
                </li>
                <li>
                  Recuerda que esta es solo una introducción a React y hay
                  muchos otros conceptos y características para explorar. Si
                  tienes alguna pregunta específica sobre React o deseas más
                  información sobre algún aspecto en particular, no dudes en
                  preguntar.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Semana06;
