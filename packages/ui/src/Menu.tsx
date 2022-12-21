import { motion, useScroll } from "framer-motion";
import "./styles.css";
import { generateJSXMeshGradient } from "meshgrad";
import { MenuLogo } from "./MenuLogo";
import { PortfolioMenu } from "./PortfolioMenu";
const ELEMENTS = 12;

export const Menu = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="hidden sm:block">
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="flex flex-row items-center justify-between bg-gradient-to-r from-black to-gray-800">
        <MenuLogo />
        <button
          className="m-2 hidden rounded-full py-3 px-4 text-xs font-bold text-black shadow-md hover:shadow-xl md:block"
          style={generateJSXMeshGradient(ELEMENTS)}
        >
          <a href="/portfolio">Portfolio</a>
        </button>
        <button className="rounded-xl py-2 px-4 font-bold text-white">
          <a href="/about">About</a>
        </button>
        <button className="hidden rounded-xl py-2 px-4 font-bold text-white sm:block">
          <a href="/mensaje">Mensaje</a>
        </button>
        <button className="hidden rounded-xl py-2 px-4 font-bold text-white sm:block">
          <a href="/contacto">Contacto</a>
        </button>
      </div>
      <PortfolioMenu />
    </div>
  );
};
