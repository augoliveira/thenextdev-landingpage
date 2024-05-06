import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";
import CardBox from "./CardBox";

const Box = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
      Box de 
        <span className="text-textGreen tracking-wide">Banheiro</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
      Conheça todos os produtos em vidro disponíveis para diversos ambientes
      </p>
      <CardBox />
    </motion.div>
  );
};

export default Box;
