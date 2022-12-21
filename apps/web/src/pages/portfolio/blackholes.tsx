/* eslint-disable react/jsx-no-comment-textnodes */
import Head from "next/head";
import { Menu } from "ui";
import { TitlePylar } from "ui";
import { Footer } from "ui";
import { motion } from "framer-motion";

export default function Home() {
  console.log("✅ BlackHoles by Pylar AI, a Miguel Gargallo Startup");
  return (
    <div className="min-w-screen flex min-h-screen flex-col bg-black">
      <Head>
      <title>Nombre de tu collección by Tu nombre</title>
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
            <div className="flex flex-col items-center justify-center">
              <button className="m-2 justify-center rounded-2xl bg-blue-600 py-3 px-4 text-xs font-bold text-white shadow-md hover:shadow-xl md:block">
                <a className="text-center" href="/">
                  Back to Home
                </a>
              </button>
              <p className="py-8 text-center text-2xl font-bold text-white">
                A trip from the first Pylar&trade; AI Prompt, to the final
                result.
              </p>
              <div className="pylarDiv">
                <motion.p
                  className="px-2 text-center text-2xl font-bold text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.6 }}
                >
                  From this
                </motion.p>
                <motion.p
                  className="px-2 text-center text-2xl font-bold text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8 }}
                >
                  To this
                </motion.p>
              </div>
              <div className="pylarDiv">
                <motion.img
                  className="pylarDimension"
                  src="https://raw.githubusercontent.com/superdatas/pylarAI-results/main/120522/00006-350538659-A%20black%20hole.png"
                  alt="Black Hole by Stable Diffusion 2.0 and Pylar Prompt guidelines"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                />
                <motion.img
                  className="pylarDimension"
                  src="https://raw.githubusercontent.com/superdatas/pylarAI-results/main/120522/00019-991914028-A%20black%20hole.png"
                  alt="Black Hole by Stable Diffusion 2.0 and Pylar Prompt guidelines"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 }}
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center"></div>
          </motion.div>
        </div>
        <div className="pylarDiv py-6">
          <motion.img
            className="pylarDimension"
            src="https://raw.githubusercontent.com/superdatas/pylarAI-results/main/120522/00006-350538659-A%20black%20hole.png"
            alt="Black Hole by Stable Diffusion 2.0 and Pylar Prompt guidelines"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          />
          <motion.img
            className="pylarDimension"
            src="https://raw.githubusercontent.com/superdatas/pylarAI-results/main/120522/00007-1118474699-A%20black%20hole.png"
            alt="Black Hole by Stable Diffusion 2.0 and Pylar Prompt guidelines"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
          />
          <motion.img
            className="pylarDimension"
            src="https://raw.githubusercontent.com/superdatas/pylarAI-results/main/120522/00008-3734026194-A%20black%20hole.png"
            alt="Black Hole by Stable Diffusion 2.0 and Pylar Prompt guidelines"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
          />
          <motion.img
            className="pylarDimension"
            src="https://raw.githubusercontent.com/superdatas/pylarAI-results/main/120522/00009-3663762282-A%20black%20hole.png"
            alt="Black Hole by Stable Diffusion 2.0 and Pylar Prompt guidelines"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0 }}
          />
          <motion.img
            className="pylarDimension"
            src="https://raw.githubusercontent.com/superdatas/pylarAI-results/main/120522/00010-2103428778-A%20black%20hole.png"
            alt="Black Hole by Stable Diffusion 2.0 and Pylar Prompt guidelines"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
          />
          <motion.img
            className="pylarDimension"
            src="https://raw.githubusercontent.com/superdatas/pylarAI-results/main/120522/00011-3218461420-A%20black%20hole.png"
            alt="Black Hole by Stable Diffusion 2.0 and Pylar Prompt guidelines"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4 }}
          />
          <motion.img
            className="pylarDimension"
            src="https://raw.githubusercontent.com/superdatas/pylarAI-results/main/120522/00012-20977947-A%20black%20hole.png"
            alt="Black Hole by Stable Diffusion 2.0 and Pylar Prompt guidelines"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.6 }}
          />
          <motion.img
            className="pylarDimension"
            src="https://raw.githubusercontent.com/superdatas/pylarAI-results/main/120522/00013-2025677393-A%20black%20hole.png"
            alt="Black Hole by Stable Diffusion 2.0 and Pylar Prompt guidelines"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8 }}
          />
          <motion.img
            className="pylarDimension"
            src="https://raw.githubusercontent.com/superdatas/pylarAI-results/main/120522/00014-731644993-A%20black%20hole.png"
            alt="Black Hole by Stable Diffusion 2.0 and Pylar Prompt guidelines"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.0 }}
          />
          <motion.img
            className="pylarDimension"
            src="https://raw.githubusercontent.com/superdatas/pylarAI-results/main/120522/00015-2541901117-A%20black%20hole.png"
            alt="Black Hole by Stable Diffusion 2.0 and Pylar Prompt guidelines"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.2 }}
          />
          <motion.img
            className="pylarDimension"
            src="https://raw.githubusercontent.com/superdatas/pylarAI-results/main/120522/00016-3158458335-A%20black%20hole.png"
            alt="Black Hole by Stable Diffusion 2.0 and Pylar Prompt guidelines"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.4 }}
          />
          <motion.img
            className="pylarDimension"
            src="https://raw.githubusercontent.com/superdatas/pylarAI-results/main/120522/00017-1736791612-A%20black%20hole.png"
            alt="Black Hole by Stable Diffusion 2.0 and Pylar Prompt guidelines"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.6 }}
          />
          <motion.img
            className="pylarDimension"
            src="https://raw.githubusercontent.com/superdatas/pylarAI-results/main/120522/00018-2488075906-A%20black%20hole.png"
            alt="Black Hole by Stable Diffusion 2.0 and Pylar Prompt guidelines"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.8 }}
          />
          <motion.img
            className="pylarDimension"
            src="https://raw.githubusercontent.com/superdatas/pylarAI-results/main/120522/00019-991914028-A%20black%20hole.png"
            alt="Black Hole by Stable Diffusion 2.0 and Pylar Prompt guidelines"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.0 }}
          />
        </div>
        <motion.div className="flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.2 }}
        >
          <a href="https://github.com/superdatas/pylarAI-results" target="_blank" rel="noreferrer"
            className="py-8 text-center text-sm font-bold text-white">Copyright © 2022 Pylar&trade; AI Images. All Rights Reserved.
            Images on Github.</a>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
