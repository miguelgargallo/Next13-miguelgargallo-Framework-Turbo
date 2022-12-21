import { Version } from "./Version";
import { motion, useScroll } from "framer-motion";
import "./styles.css";
import { generateJSXMeshGradient } from "meshgrad";
import { MenuLogo } from "./MenuLogo";
const ELEMENTS = 12;

export const Navbar = () => {
  const { scrollYProgress } = useScroll();

  return (
    // only show the navbar on phones and tablets
    <div className="sm:hidden">

      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="flex flex-row items-center justify-between bg-gradient-to-r from-black to-gray-800">
        <MenuLogo />
        <button className="rounded-xl py-2 px-4 font-bold text-white">
          <a href="/what-is-pylar">What is Pylar</a>
        </button>
        <button
          className="m-2 hidden rounded-full py-3 px-4 text-xs font-bold text-black shadow-md hover:shadow-xl md:block"
          style={generateJSXMeshGradient(ELEMENTS)}
        >
          <a href="/black-holes">Discover Black Holes</a>
        </button>
        <button className="rounded-xl py-2 px-4 font-bold text-white">
          <a href="/sales">Contact Sales</a>
        </button>
        <button className="hidden rounded-xl py-2 px-4 font-bold text-white sm:block">
          <a href="/inverstors">Investors Relations</a>
        </button>
        <div
          className="hidden py-2 px-4 font-bold text-white md:block"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <button className="hidden py-2 px-4 font-bold text-white md:block">
            <a
              href="http://twitter.com/superdatas"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </button>
          <Version />
        </div>
      </div>
    </div>
  );
};
