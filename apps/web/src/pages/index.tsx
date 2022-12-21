/* eslint-disable react/jsx-no-comment-textnodes */
import Head from "next/head";
import { Menu } from "ui";
import { TitlePylar } from "ui";
import { Footer } from "ui";
import { motion } from "framer-motion";
import { generateJSXMeshGradient } from "meshgrad";
const ELEMENTS = 12;

export default function Home() {
  console.log("✅ Index page by Pylar AI, a Miguel Gargallo Startup");
  return (
    <div className="min-w-screen flex min-h-screen flex-col bg-black">
      <Head>
        <title>Nombre del proyecto by Tu nombre</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Menu />
      <main>
        <TitlePylar />
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <p
              className="text-center text-2xl font-bold text-white"
            >
              Aquí va una frase de lo que haces.
            </p>
            <p
              className="text-center text-3xl font-bold text-white"
            >
              Que es lo que soluciona tu idea.
            </p>
            <p
              className="text-center text-xl font-bold text-white"
            >
              <div className="m-3 flex flex-col items-center justify-center">
                <button
                  className="m-3 rounded-full py-3 px-4 text-xl font-bold text-black shadow-md hover:shadow-xl md:block"
                  style={generateJSXMeshGradient(ELEMENTS)}
                >
                  <a href="mailto:sales@pylar.org" target={"_blank"}
                    rel="noopener noreferrer">Cambia esto por tu correo 📧</a>
                </button>
              </div>
            </p>
          </motion.div>
        </div>
        <div className="py-12">
          <h3 className="text-center text-2xl font-bold text-white">
            Estos son nuestros trabajos más recientes
          </h3>
          <div className="pylarDiv">
            <motion.img
              className="pylarDimension cursor-pointer"
              src="https://raw.githubusercontent.com/miguelgargallo/Next13-Gallery-Image-Turbo/main/Data.pylar/Images/Pylar-v1.0/A_photography_of_the_earth__from_the_moon_on_a_fis_AAAGOLpA_RealESRGAN_x4plus.jpeg"
              alt="Earth by Stable Diffusion 1.4 and Pylar Prompt guidelines"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            />
            <motion.img
              className="pylarDimension cursor-pointer"
              src="https://raw.githubusercontent.com/miguelgargallo/Next13-Gallery-Image-Turbo/main/Data.pylar/Images/Pylar-v1.1/A_photography_of_the_earth__from_the_moon_on_a_fis_AAAGOLjw_RealESRGAN_x4plus.jpeg"
              alt="Earth by Stable Diffusion 1.5 and Pylar Prompt guidelines"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            />
            <motion.img
              className="pylarDimension cursor-pointer"
              src="https://raw.githubusercontent.com/superdatas/pylarAI-results/main/120422/00005-1833717168-Earth%20seen%20fr.png"
              alt="Earth by Stable Diffusion 2.0 and Pylar Prompt guidelines"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
            />
          </div>
        </div>
        <div className="bg-yellow-600">
          <h3 className="text-center text-2xl font-bold text-black">
            Nuestros avances en IA
          </h3>
          <h2 className="text-center text-2xl font-bold text-black">
            <button className="py-2 underline font-bold text-black ml-2">
              <a href="/portfolio/cats"
              >Descubre nuestra colección</a>
            </button>
          </h2>
          <div className="pylarDiv">
            <a href="/portfolio/cats">
              <motion.img
                className="pylarDimension cursor-pointer"
                src="https://raw.githubusercontent.com/superdatas/pylarAI-results/main/121822/5.png"
                alt="Earth by Stable Diffusion 1.4 and Pylar Prompt guidelines"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
              />
            </a>
            <a href="/portfolio/cats">
              <motion.img
                className="pylarDimension cursor-pointer"
                src="https://raw.githubusercontent.com/superdatas/pylarAI-results/main/121822/6.png"
                alt="Earth by Stable Diffusion 1.5 and Pylar Prompt guidelines"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.0 }}
              /> </a>
            <a href="/portfolio/cats">
              <motion.img
                className="pylarDimension cursor-pointer"
                src="https://raw.githubusercontent.com/superdatas/pylarAI-results/main/121822/7.png"
                alt="Earth by Stable Diffusion 2.0 and Pylar Prompt guidelines"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2 }}
              /> </a>
          </div>
        </div>
        <h2 className="text-center text-2xl font-bold text-white">
          <button className="py-2 underline font-bold text-white ml-2">
            <a href="/portfolio/box"
            >Ir a Colección 2</a>
          </button>
        </h2>
        <div className="pylarDiv">
          <a href="/portfolio/box">
            <motion.img
              className="pylarDimension cursor-pointer"
              src="https://raw.githubusercontent.com/superdatas/pylarAI-results/main/121622/1.png"
              alt="Earth by Stable Diffusion 1.4 and Pylar Prompt guidelines"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.4 }}
            /> </a>
          <a href="/portfolio/box">
            <motion.img
              className="pylarDimension cursor-pointer"
              src="https://raw.githubusercontent.com/superdatas/pylarAI-results/main/121622/5.png"
              alt="Earth by Stable Diffusion 1.5 and Pylar Prompt guidelines"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.6 }}
            /> </a>
          <a href="/portfolio/box">
            <motion.img
              className="pylarDimension cursor-pointer"
              src="https://raw.githubusercontent.com/superdatas/pylarAI-results/main/121622/9.png"
              alt="Earth by Stable Diffusion 2.0 and Pylar Prompt guidelines"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.8 }}
            /> </a>
        </div>
        <h2 className="text-center text-2xl font-bold text-white">
          <button className="py-2 underline font-bold text-white ml-2">
            <a href="/portfolio/human"
            >Ir a Colección 3</a>
          </button>
        </h2>
        <div className="pylarDiv">
          <a href="/portfolio/human">
            <motion.img
              className="pylarDimension cursor-pointer"
              src="https://raw.githubusercontent.com/superdatas/pylarAI-results/main/120622/12.png"
              alt="Earth by Stable Diffusion 1.4 and Pylar Prompt guidelines"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.0 }}
            /> </a>
          <a href="/portfolio/human">
            <motion.img
              className="pylarDimension cursor-pointer"
              src="https://raw.githubusercontent.com/superdatas/pylarAI-results/main/120622/13.png"
              alt="Earth by Stable Diffusion 1.5 and Pylar Prompt guidelines"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.2 }}
            /> </a>
          <a href="/portfolio/human">
            <motion.img
              className="pylarDimension cursor-pointer"
              src="https://raw.githubusercontent.com/superdatas/pylarAI-results/main/120622/14.png"
              alt="Earth by Stable Diffusion 2.0 and Pylar Prompt guidelines"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.4 }}
            /></a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
