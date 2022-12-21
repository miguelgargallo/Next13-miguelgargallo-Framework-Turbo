import { motion } from "framer-motion";
import { Signature } from "./Signature";


export const Letter = () => {
  return (
    <div className="text-jusitfy items-center p-16 text-white">
      <motion.p
        className="m-2 p-2 text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0 }}
      >
        Dear Investors,
      </motion.p>
      <motion.p
        className="m-2 p-2 text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0 }}
      >
        I am writing to share with you the exciting progress that our
        organization, Pylar, has made in the field of AI technology. Through the
        use of stable diffusion algorithms and private models, we are able to
        generate high-quality generative images and other data, and offer a
        range of AI-powered solutions to our customers.
      </motion.p>
      <motion.p
        className="m-2 p-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        Our prompt-based AI service allows users to provide specific input data
        and generate customized results. This enables our customers to fine-tune
        the results produced by our AI technology, ensuring that they meet their
        specific needs and requirements.
      </motion.p>
      <motion.p
        className="m-2 p-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        We have seen significant interest in our technology from academic
        institutions and research organizations, who are looking for reliable
        and effective ways to generate high-quality data for their work. In
        addition to licensing our technology, we also generate revenue by
        selling the data produced by our AI, and through partnerships with
        academic institutions and research organizations.
      </motion.p>
      <motion.p
        className="m-2 p-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        Our team of researchers and developers are dedicated to pushing the
        boundaries of what is possible with AI, and to developing innovative
        solutions that address real-world challenges. We have received
        recognition and awards from industry organizations and academic
        institutions for our work in the field, highlighting the high quality of
        our technology and our contributions to the advancement of AI.
      </motion.p>
      <motion.p
        className="m-2 p-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        We are committed to continuing our work in AI technology, and to
        partnering with academic institutions and research organizations to
        drive innovation in the field. We believe that our technology has
        significant potential to generate value for our customers, and to
        support the development of new AI-powered tools and technologies.
      </motion.p>
      <motion.p
        className="m-2 p-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        We appreciate your support and investment in our organization, and we
        look forward to sharing further updates on our progress in the future.
      </motion.p>
      <motion.p
        className="m-2 p-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        Sincerely,
      </motion.p>
      <motion.p
        className="m-2 p-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0 }}
      >
        CEO of Pylar
      </motion.p>
      <motion.p
        className="m-2 p-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
      >
        Miguel Gargallo
      </motion.p>
      <motion.div
        className=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4 }}
      >
        <Signature />
      </motion.div>
    </div>

  );
};
