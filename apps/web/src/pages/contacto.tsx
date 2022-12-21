/* eslint-disable react/jsx-no-comment-textnodes */
import Head from "next/head";
import { Menu } from "ui";
import { TitlePylar } from "ui";
import { Footer } from "ui";
import { motion } from "framer-motion";
import { Contact } from "ui";
import { Salestext } from "ui";

export default function Home() {
  console.log("✅ Sales page by Pylar AI, a Miguel Gargallo Startup");
  return (
    <div className="min-w-screen flex min-h-screen flex-col bg-black">
      <Head>
        <title>Nombre del proyecto by Tu nombre</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Menu />
      <main>
        <TitlePylar />
        <Contact />
        <div className="pylarDiv">
          <motion.img
            className="pylarDimension"
            src="https://raw.githubusercontent.com/miguelgargallo/Next13-Gallery-Image-Turbo/main/Data.pylar/Images/Pylar-v1.0/A_photography_of_the_earth__from_the_moon_on_a_fis_AAAGOLpA_RealESRGAN_x4plus.jpeg"
            alt="Earth by Stable Diffusion 1.4 and Pylar Prompt guidelines"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          />
          <motion.img
            className="pylarDimension"
            src="https://raw.githubusercontent.com/miguelgargallo/Next13-Gallery-Image-Turbo/main/Data.pylar/Images/Pylar-v1.1/A_photography_of_the_earth__from_the_moon_on_a_fis_AAAGOLjw_RealESRGAN_x4plus.jpeg"
            alt="Earth by Stable Diffusion 1.5 and Pylar Prompt guidelines"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          />
          <motion.img
            className="pylarDimension"
            src="https://raw.githubusercontent.com/superdatas/pylarAI-results/main/120422/00005-1833717168-Earth%20seen%20fr.png"
            alt="Earth by Stable Diffusion 2.0 and Pylar Prompt guidelines"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
          />
          <Salestext />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
