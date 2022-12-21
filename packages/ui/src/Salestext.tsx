import { motion } from "framer-motion";

export const Salestext = () => {
  return (
    <div className="text-jusitfy items-center p-16 text-white">
      <motion.p
        className="m-2 p-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0 }}
      >
        Are you looking for a reliable and effective way to generate
        high-quality generative images and other data? Look no further than
        Pylar, the leading research organization in the field of AI technology.
      </motion.p>
      <motion.p
        className="m-2 p-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0 }}
      >
        Our state-of-the-art AI technology, powered by stable diffusion
        algorithms and private models, is capable of producing highly realistic
        and customizable results. Our prompt-based AI service allows users to
        provide specific input data and generate customized results, ensuring
        that they meet their specific needs and requirements.
      </motion.p>
      <motion.p
        className="m-2 p-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        Our technology has a wide range of potential applications, including the
        generation of images for use in research and publications, the creation
        of realistic simulations for testing and analysis, and the development
        of new AI-powered tools and technologies.
      </motion.p>
      <motion.p
        className="m-2 p-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        In addition to our AI technology, we also partner with academic
        institutions and research organizations to facilitate collaboration and
        knowledge sharing. Through these partnerships, we are able to stay at
        the forefront of AI research and development, and provide our customers
        with access to the latest advances in the field.
      </motion.p>
      <motion.p
        className="m-2 p-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        Our expertise in AI technology has also led to us receiving recognition
        and awards from industry organizations and academic institutions. This
        recognition highlights the high quality of our work and our
        contributions to the field of AI.
      </motion.p>
      <motion.p
        className="m-2 p-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        Do not miss out on the opportunity to benefit from our cutting-edge AI
        technology. Contact us today to learn more about our products and
        services, and to discuss how we can help you achieve your goals.
      </motion.p>
    </div>
  );
};
