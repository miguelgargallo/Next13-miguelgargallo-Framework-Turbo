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
        ¿Está buscando una forma fiable y eficaz de generar imágenes generativas
        y otros datos de alta calidad? No busque más Pylar, la organización de
        investigación líder en el campo de la tecnología de IA.
      </motion.p>
      <motion.p
        className="m-2 p-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0 }}
      >
        Nuestra tecnología de IA de última generación, impulsada por algoritmos
        de difusión estables y modelos privados, es capaz de producir resultados
        altamente realistas y personalizables. Nuestro servicio de IA basado en
        preguntas permite a los usuarios proporcionar datos de entrada
        específicos y generar resultados personalizados, garantizando que
        satisfacen sus necesidades y requisitos específicos.
      </motion.p>
      <motion.p
        className="m-2 p-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        Nuestra tecnología tiene una amplia gama de aplicaciones potenciales,
        como la generación de imágenes para su uso en investigación y
        publicaciones, la creación de simulaciones realistas para pruebas y
        análisis, y el desarrollo de nuevas herramientas y tecnologías
        impulsadas por IA.{" "}
      </motion.p>
      <motion.p
        className="m-2 p-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        Además de nuestra tecnología de IA, también nos asociamos con
        instituciones académicas y organizaciones de investigación para
        facilitar la colaboración y el intercambio de conocimientos. Gracias a
        estas asociaciones, podemos mantenernos a la vanguardia de la
        investigación y el desarrollo de la IA, y ofrecer a nuestros clientes
        acceso a los últimos avances en este campo.{" "}
      </motion.p>
      <motion.p
        className="m-2 p-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        Nuestra experiencia en tecnología de IA también nos ha llevado a recibir
        reconocimientos y premios de organizaciones del sector e instituciones
        académicas. Este reconocimiento pone de relieve la alta calidad de
        nuestro trabajo y nuestras contribuciones al campo de la IA.{" "}
      </motion.p>
      <motion.p
        className="m-2 p-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        No pierda la oportunidad de beneficiarse de nuestra tecnología de IA de
        vanguardia. Póngase en contacto con nosotros hoy mismo para obtener más
        información sobre nuestros productos y servicios, y para hablar de cómo
        podemos ayudarle a alcanzar sus objetivos.
      </motion.p>
    </div>
  );
};
