import "@/styles/globals.css";
import NavBar from "./components/NavBar";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
export default function App({ Component, pageProps }) {
      const [ref, inView] = useInView({
        triggerOnce: false, // La animación solo se activa una vez
        threshold: 0.1, // Porcentaje de visibilidad para activar la animación
      });

      const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      };
  return (
    <>
      <NavBar />
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.6 }}
      >
        <Component {...pageProps} />
      </motion.div>
    </>
  );
}
