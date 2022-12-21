import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <div className="pylarDiv">
      <motion.button
        className="pylarButtonEmailStyle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0 }}
      >
        <a href="mailto:sales@pylar.org" target={"_blank"} rel="noreferrer">
          Mail now
          <span className="ml-2 bg-gradient-to-r from-white to-white bg-clip-text text-transparent">
            &rarr;
          </span>
        </a>
      </motion.button>
      <div className="pylarDiv">
        <motion.button
          className="pylarButtonTwitterStyle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
        >
          <a
            href="https://twitter.com/superdatas"
            target={"_blank"}
            rel="noreferrer"
          >
            MD Twitter now
            <span className="ml-2 bg-gradient-to-r from-white to-white bg-clip-text text-transparent">
              &rarr;
            </span>
          </a>
        </motion.button>
        <motion.button
          className="pylarButtonWhatsappStyle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <a
            href="https://wa.me/+14077067844"
            target={"_blank"}
            rel="noreferrer"
          >
            Whatsapp now
            <span className="ml-2 bg-gradient-to-r from-white to-white bg-clip-text text-transparent">
              &rarr;
            </span>
          </a>
        </motion.button>
        <div className="pylarDiv">
          <motion.button
            className="pylarButtonTelegramStyle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <a
              href="https://telegram.me/pencildomains"
              target={"_blank"}
              rel="noreferrer"
            >
              Telegram Now
              <span className="ml-2 bg-gradient-to-r from-white to-white bg-clip-text text-transparent">
                &rarr;
              </span>
            </a>
          </motion.button>
         {/*  <motion.button
            className="pylarButtonDiscordStyle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
          >
            <a
              href="https://discord.gg/eZQHJuX7Yx"
              target={"_blank"}
              rel="noreferrer"
            >
              Discord Now
              <span className="ml-2 bg-gradient-to-r from-white to-white bg-clip-text text-transparent">
                &rarr;
              </span>
            </a>
          </motion.button>
          <motion.button
            className="pylarButtonInstagramStyle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
          >
            <a
              href="https://instagram.com/miguelgargallo.es"
              target={"_blank"}
              rel="noreferrer"
            >
              Instagram MD
              <span className="ml-2 bg-gradient-to-r from-white to-white bg-clip-text text-transparent">
                &rarr;
              </span>
            </a>
          </motion.button>
          <motion.button
            className="pylarButtonRedditStyle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
          >
            <a
              href="https://www.reddit.com/r/pencildomains/"
              target={"_blank"}
              rel="noreferrer"
            >
              Reddit Here
              <span className="ml-2 bg-gradient-to-r from-white to-white bg-clip-text text-transparent">
                &rarr;
              </span>
            </a>
          </motion.button> */}
        </div>
      </div>
    </div>
  );
};
