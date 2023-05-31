import React from "react";
import Image from "next/image";
import Ejerbts from "../public/img/ejerbootstrap.png"
import Ejer01 from "../public/img/ejer01.png"
import Ejer02 from "../public/img/ejer02.png"
import Ejer03 from "../public/img/ejer03.png"
import Reto from "../public/img/retojs.png"

import Contenido1 from "../public/img/btshcj.jpg";
import Bootstrap from "../public/img/Bootstrap_logo.svg.png";
import Javascript from "../public/img/javascript.png"
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
export const Semana03 = () => {
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
                  Bootstrap y JavaScript
                </p>
                <br />
                <p>La tercera semana se tocó Bootstrap y JavaScript.</p>
                <div className="pl-10">
                  <ul className="list-disc">
                    <li>Bootstrap</li>
                    <li>JavaScript</li>
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
                Bootstrap
              </p>
              <div className="flex flex-col items-center justify-center text-center">
                <div>
                  <Image
                    src={Bootstrap}
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
                    Bootstrap es un popular framework de desarrollo web que
                    facilita la creación de interfaces responsivas y modernas.
                  </p>
                </div>
                <div className=" p-3 m-2 ">
                  <p className="font-bold text-lg">Datos generales:</p>
                  <ul className="list-disc pl-6">
                    <li>
                      <span className="font-semibold">Grid System: </span>
                      Bootstrap utiliza un sistema de rejilla (grid system)
                      basado en 12 columnas para ayudar en la creación de
                      diseños responsivos. Permite organizar el contenido en
                      filas y columnas, lo que facilita la adaptación del diseño
                      a diferentes dispositivos y tamaños de pantalla.
                    </li>
                    <li>
                      <span className="font-semibold">Componentes: </span>
                      Bootstrap ofrece una amplia gama de componentes
                      predefinidos listos para usar, como botones, navegación,
                      formularios, tarjetas, carruseles, entre otros. Estos
                      componentes ayudan a agilizar el desarrollo y garantizar
                      una apariencia coherente en toda la aplicación.
                    </li>
                    <li>
                      <span className="font-semibold">
                        Tipografía y Estilos:{" "}
                      </span>
                      Bootstrap incluye estilos CSS predefinidos para
                      tipografía, encabezados, texto resaltado, citas, listas y
                      más. Además, ofrece una amplia variedad de clases de
                      utilidad para aplicar estilos rápidamente, como alineación
                      de texto, espaciado, bordes, colores, etc.
                    </li>
                    <li>
                      <span className="font-semibold">Responsividad: </span>
                      Uno de los puntos fuertes de Bootstrap es su enfoque en la
                      creación de interfaces responsivas. Los componentes y el
                      sistema de rejilla están diseñados para adaptarse
                      automáticamente a diferentes dispositivos y tamaños de
                      pantalla, lo que proporciona una experiencia de usuario
                      consistente en todas las plataformas.
                    </li>
                    <li>
                      <span className="font-semibold">Personalización: </span>
                      Bootstrap permite la personalización mediante la selección
                      de componentes, estilos y variables específicas a través
                      de su página de configuración. También puedes modificar el
                      código fuente de Bootstrap para adaptarlo a tus
                      necesidades específicas.
                    </li>
                    <li>
                      <span className="font-semibold">
                        Integración de JavaScript:{" "}
                      </span>
                      Bootstrap incluye una serie de componentes y utilidades
                      JavaScript, como modal, navegación basada en pestañas,
                      deslizadores (carousels), y más. También es compatible con
                      jQuery, aunque su uso es opcional.
                    </li>
                    <li>
                      <span className="font-semibold">
                        Compatibilidad con navegadores:{" "}
                      </span>
                      Bootstrap es compatible con una amplia gama de
                      navegadores, incluidos los navegadores más populares, como
                      Chrome, Firefox, Safari, Edge, e Internet Explorer 11+.
                    </li>
                    <li>
                      <span className="font-semibold">
                        Documentación y comunidad:{" "}
                      </span>
                      Bootstrap cuenta con una documentación completa y
                      detallada que explica todos los componentes, clases y
                      características disponibles. Además, tiene una gran
                      comunidad de desarrolladores que brindan soporte y
                      comparten recursos y ejemplos.
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
                JavaScript
              </p>

              <div className="flex flex-col">
                <div className="p-3 m-2">
                  <div className="flex flex-col items-center justify-center text-center">
                    <div>
                      <Image
                        src={Javascript}
                        alt="fotografía del creador del protafolio"
                        width={250}
                        height={400}
                        className="rounded-xl box-shadow-xl"
                      />
                    </div>
                  </div>
                  <br />
                  <p className="flex text-center">
                    JavaScript es un lenguaje de programación de alto nivel,
                    interpretado y orientado a objetos que se utiliza
                    principalmente en el desarrollo web
                  </p>
                  <div className=" p-3 m-2 ">
                    <p className="font-bold text-lg">Información clave:</p>
                    <ul className="list-decimal pl-6">
                      <li>
                        <span className="font-semibold">Funcionalidad</span>
                        JavaScript se utiliza para agregar interactividad y
                        dinamismo a las páginas web. Puedes manipular el
                        contenido HTML, cambiar estilos, responder a eventos del
                        usuario, enviar y recibir datos del servidor, crear
                        animaciones y mucho más.
                      </li>
                      <br />
                      <li>
                        <span className="font-semibold">
                          Características principales:{" "}
                        </span>
                        <ul className="list-disc pl-5">
                          <li>
                            Lenguaje interpretado: JavaScript se ejecuta
                            directamente en el navegador sin necesidad de
                            compilación previa.
                          </li>
                          <li>
                            Tipado dinámico: No es necesario declarar
                            explícitamente el tipo de una variable; JavaScript
                            lo determina automáticamente en tiempo de ejecución.
                          </li>
                          <li>
                            Orientado a objetos: Permite la creación de objetos
                            y el uso de herencia y polimorfismo.
                          </li>
                          <li>
                            Funciones de primera clase: Las funciones son
                            tratadas como objetos y pueden ser pasadas como
                            argumentos, devueltas por otras funciones y
                            almacenadas en variables.
                          </li>
                          <li>
                            Manejo de eventos: JavaScript puede responder a
                            eventos del usuario, como clics de ratón,
                            pulsaciones de teclas o cambios en el contenido de
                            un formulario.
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <br />
                    <h1 className="font-semibold">¿Qué es NodeJS?</h1>
                    <p>
                      Breve introducción, historia y qué es lo que hace con
                      JavaScript.
                    </p>

                    <h2>Conceptos básicos</h2>
                    <ul className="list-disc pl-6">
                      <li>
                        Se basa en instrucciones llamadas sentencias que son
                        separadas por un punto y coma (si se requiere usar un
                        webpack debemos usar ese punto y coma necesariamente).
                      </li>
                      <li>
                        Webpack es para generar el .min (une las líneas de
                        código separadas por punto y coma).
                      </li>
                      <li>
                        JavaScript es case-sensitive y utiliza el conjunto de
                        caracteres Unicode.
                      </li>
                      <li>
                        Para incluir un archivo JavaScript, debemos crear una
                        etiqueta &lt;script&gt; y vincularlo al archivo.
                      </li>
                    </ul>
                    <br />
                    <h2 className="font-semibold">Comentarios en JS</h2>
                    <ul>
                      <li> Comentario de una línea</li>
                      <li> Comentario de dos líneas */</li>
                    </ul>
                    <br />
                    <h2 className="font-semibold">Variables y operadores</h2>
                    <ul className="list-disc pl-6">
                      <li>
                        Las variables en JavaScript pueden empezar con una
                        letra, guion bajo (_) o símbolo de dólar ($).
                      </li>
                      <li>
                        JavaScript utiliza un tipo de dato genérico dependiendo
                        de donde se declara la variable.
                      </li>
                      <li>
                        Para declarar una variable global se utiliza{" "}
                        <code>var</code>.
                      </li>
                      <li>
                        Para declarar una variable local se utiliza{" "}
                        <code>let</code>, que se recomienda por el ámbito de
                        bloque.
                      </li>
                      <li>
                        Se puede declarar una constante en JavaScript utilizando{" "}
                        <code>const</code>. No se puede reasignar un valor a una
                        constante, pero se pueden cambiar los elementos de una
                        matriz constante o las propiedades de un objeto
                        constante.
                      </li>
                      <li>
                        La palabra clave <code>undefined</code> se compara como{" "}
                        <code>false</code> en condiciones.
                      </li>
                      <li>
                        Para acceder a una variable global se debe utilizar el
                        objeto <code>window</code>: <code>window.variable</code>
                        .
                      </li>
                      <li>
                        Tipos de datos en JavaScript incluyen boolean, null,
                        undefined, number, bigint, string, symbol y object.
                      </li>
                      <li>
                        El concepto de variable hoisting se refiere a la
                        capacidad de JavaScript de hacer referencia a una
                        variable declarada y utilizada más adelante en el
                        código.
                      </li>
                      <li>
                        JavaScript tiene varios operadores, como operadores
                        aritméticos, operadores de cadena, operadores lógicos,
                        operadores de comparación, operadores de asignación,
                        operador condicional ternario y operadores unitarios.
                      </li>
                      <li>
                        El operador spread (<code>...</code>) permite expandir
                        elementos iterables como arrays, cadenas de texto,
                        objetos, listas de nodos del DOM, objeto arguments de
                        una función, entre otros.
                      </li>
                    </ul>
                    <br />
                    <h2 className="font-semibold">Estructuras de control</h2>
                    <ul className="list-disc pl-6">
                      <li>
                        Las estructuras de control en JavaScript incluyen el uso
                        de <code>if</code> y <code>switch</code>.
                      </li>
                      <li>
                        Los valores falsos en JavaScript incluyen false, 0,
                        undefined, null, NaN y cadena vacía .
                      </li>
                      <li>
                        Las estructuras repetitivas o bucles en JavaScript son{" "}
                        <code>for</code>, <code>while</code>,{" "}
                        <code>do ... while</code>, <code>for ... each</code> y{" "}
                        <code>for ... in</code>.
                      </li>
                    </ul>
                    <br />
                    <h2 className="font-semibold">
                      Funciones y procedimientos
                    </h2>
                    <p>
                      Una función en JavaScript es un bloque de código diseñado
                      para realizar una tarea específica.
                    </p>
                  </div>
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
              <p className="text-lg">Ejercicio en Bootstrap</p>
              <br />
              <div className="flex flex-col items-center justify-center text-center pl-6">
                <Image
                  src={Ejerbts}
                  alt="fotografía del creador del protafolio"
                  width={1200}
                  height={900}
                  className="rounded-xl box-shadow-xl"
                />
              </div>
              <br />
              <p className="text-lg">Ejercicios de JavaScript</p>
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
              <p> Reto</p>
              <br />
              <div className="flex flex-col items-center justify-center text-center pl-6">
                <Image
                  src={Reto}
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

export default Semana03;
