import React from "react";
import Image from "next/image";
import Link from "next/link";
import Contenido1 from "../public/img/funweb.jpg";
import Internet from "../public/img/internet.jpg";
import TCPIP from "../public/img/TCPIP.webp";
export const Semana02 = () => {
  return (
    <>
      <section className="flex flex-row max-w-[1170px]" id="profile">
        <div className="basis-1/2 flex flex-col items-center justify-center py-28 px-4 mx-4">
          <Image
            src={Contenido1}
            alt="fotografía del creador del protafolio"
            width={500}
            height={400}
            className="rounded-2xl"
          />
        </div>
        <div className="basis-1/2 flex justify-center flex-col">
          <div className="p-12 w-[600px] text-lg text-[#393646]">
            <p className="text-2xl font-bold">
              Figma
            </p>
            <br />
            <p>En la primera semana se tocaron los subtemas:</p>
            <div className="pl-10">
              <ul className="list-disc">
                <li>Tecnologías de desarrollo web</li>
                <li>Tecnologías web</li>
                <li>¿Cómo fuciona la web?</li>
                <li>TCP/IP</li>
                <li>Roles Dev</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full flex flex-col justify-center items-center p-10 pt-5">
          <div className="flex flex-col p-4 w-[800px]">
            <p className="text-3xl font-extrabold text-center  p-4 m-2">
              Tecnologías de desarrollo de software
            </p>
            <br />
            <div className="flex flex-row">
              <div className="basis-1/2 p-3 m-2">
                <p className="font-bold text-lg text-center">TDS Nativo</p>
                <p>
                  Programas desarrollados para un determinado sistema operativo
                  (Ejm, un software de w10 que no se pueda ejecutar en Linux,
                  una app de android en un iOS)
                </p>
              </div>
              <div className="basis-1/2 p-3 m-2 ">
                <p className="font-bold text-lg text-center">TDS Web</p>
                <p className="flex items-center">
                  Desarrollados mayormente para multiplaforma ya que la web
                  suele ser universal.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col p-4 w-[800px]">
            <p className="text-3xl font-extrabold text-center  p-4 m-2">
              Tecnologías de desarrollo web.
            </p>
            <br />
            <div className="flex flex-row">
              <div className="basis-1/3 p-3 m-2">
                <p className="font-bold text-lg text-center">Básicas</p>
                <ul className="list-disc">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>HTTP</li>
                </ul>
              </div>
              <div className="basis-1/3 p-3 m-2">
                <p className="font-bold text-lg text-center">
                  Lenguajes de Escritura
                </p>
                <p className="flex text-center">JavaScript & WebAPIs</p>
              </div>
              <div className="basis-1/3 p-3 m-2 ">
                <p className="font-bold text-lg text-center">Gráficos</p>
                <ul className="list-disc">
                  <li>
                    <span className="font-semibold">SVG:</span>graficos en
                    vectores, se convierten a escala sin problemas
                  </li>
                  <li>
                    <span className="font-semibold">WebGL:</span>Es una API de
                    javascript, permite diutjar gráficos 3D o 2Dutilizando
                    elementos HTML5
                  </li>
                  <li>
                    <span className="font-semibold">MathML:</span>Lenguaje de
                    marcado matemático para ecuaciones complicadas y sintexis
                    matemáticas
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col p-4 w-[800px]">
            <p className="text-3xl font-extrabold text-center  p-4 m-2">
              ¿Cómo funciona la web?/DNS
            </p>
            <br />
            <div className="flex flex-row">
              <div className="basis-1/2 p-3 m-2 flex items-center">
                <div className="flex items-center">
                  <p>
                    Directorio telefónico de Internet, las personas acceden a la
                    información en línea a través de nombres de dominio. como
                    www.uncp.edu.pe. Los navegadores web interactuan mediante
                    direcciones de Protocolo de internet (IP). El DNS traduce
                    los nombres de dominio a direcciones IP para que sea posible
                    la carga de recursos en internet
                  </p>
                </div>
              </div>
              <div className="basis-1/2 p-3 m-2 ">
                <Image
                  alt="imagen de como funciona el internet"
                  src={Internet}
                  width={400}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col p-4 w-[800px]">
            <p className="text-3xl font-extrabold text-center  p-4 m-2">
              TCP/IP - Capas
            </p>
            <br />
            <div className="flex flex-row">
              <div className="basis-1/2 p-3 m-2 ">
                <Image
                  alt="imagen de como funciona el internet"
                  src={TCPIP}
                  width={300}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
              </div>
              <div className="basis-1/2 p-3 m-2 flex items-center justify-center">
                <div className="basis-1/3 p-3 m-2">
                  <p className=" text-center w-[400px]">
                    La transferencia anteriormente mencionada se hace en el
                    conjunto de protocolos TCP/IP el cual subdivide las tareas
                    en varias capas para simplificar las tareas de un protocolo
                    a otro protocolo
                  </p>
                  <ul className="list-decimal p-8">
                    <li>
                      <span className="font-semibold">Capa de enlace:</span>
                      Controla los dispositivos hardware y los medios de la red
                    </li>
                    <li>
                      <span className="font-semibold">Capa de internet:</span>
                      Determina la mejor ruta a través de la red
                    </li>
                    <li>
                      <span className="font-semibold">Capa de transporte:</span>
                      Permite la comunicación entre dispositivos de distintas
                      redes
                    </li>
                    <li>
                      <span className="font-semibold">Capa de aplicación:</span>
                      Representa los datos del usuario
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col p-4 w-[800px]">
            <p className="text-3xl font-extrabold text-center  p-4 m-2">
              Roles Dev
            </p>
            <div className="flex flex-row">
              <div className="p-3 m-2 flex">
                <div className=" p-3 m-2 flex flex-col">
                  <ul className="list-disc p-8">
                    <li>
                      <span className="font-semibold">
                        Lado Cliente - FrontEnd:
                      </span>
                      Aplicaciones Web: Navegadores y sus aplicaciones se basan
                      en CSS HTML JS Aplicaciones de escritorio: APPS se pueden
                      crear con los frameworks de las web como Electron, node
                      Desarrollo frontend incorpora HTML, CSS y JS existen
                      determinadas herramientas para cada uno de ellos
                    </li>
                    <li>
                      <span className="font-semibold">
                        Lado del servidor Backend:
                      </span>
                      Servidores web (Función principal, proporcionar las
                      páginas web al cliente) (Programa que si se instala se
                      convierte en un servidor web, se tiene que dar las
                      caracteristicas adicionales para que logre esto) Lenguajes
                      de backend: PHP frameworks: Laravel, symfony, cakePHP Java
                      frameworks: Spinrg, blade, dropwizard Python frameworks:
                      django, pyramid, flask ASP.net frameworks: .net Ruby
                      frameworks: rails jsNode frameworks: Express koa Gestores
                      de bases de datos
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Semana02;
