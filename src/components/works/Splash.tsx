import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Splash = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
      Fachadas de 
        <span className="text-textGreen tracking-wide">Vidro</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
      Conheça todos os produtos em vidro disponíveis para diversos ambientes
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          distinctio doloribus quas ex ea sed.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
          sit adipisci ad exercitationem a amet cum porro recusandae eveniet,
          accusantium animi tenetur rerum, culpa quibusdam! Consectetur
          laboriosam hic harum modi.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam et
          corporis necessitatibus? Pariatur voluptas ad, at et hic deserunt
          sequi?
        </li>
      </ul>
    </motion.div>
  );
};

export default Splash;
