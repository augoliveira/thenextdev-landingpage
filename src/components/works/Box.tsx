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
      <CardBox />
    </motion.div>
  );
};

export default Box;
