import { RiReactjsLine } from "react-icons/ri";
import { SiTailwindcss, SiJavascript, SiHtml5, SiPython, SiKeras, SiOpencv, SiVisualstudiocode, SiJupyter } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import TensorFlowIcon from '../tensorflow.svg'; // Path to your TensorFlow SVG
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <motion.div 
      className="border-b border-neutral-800 pb-24"
      initial={{ opacity: 0, y: 50 }} // Initial state for the whole section
      whileInView={{ opacity: 1, y: 0 }} // State when in view
      transition={{ duration: 0.8 }} // Transition properties
    >
      <h2 className="my-20 text-center text-4xl text-white">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconVariants(5)} // Increased duration for slower movement
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-6xl text-blue-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)} // Increased duration for slower movement
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTailwindcss className="text-6xl text-blue-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)} // Increased duration for slower movement
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiJavascript className="text-6xl text-yellow-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)} // Increased duration for slower movement
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiHtml5 className="text-6xl text-orange-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)} // Increased duration for slower movement
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={TensorFlowIcon} alt="TensorFlow" className="w-16 h-16" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)} // Increased duration for slower movement
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPython className="text-6xl text-blue-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)} // Increased duration for slower movement
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiKeras className="text-6xl text-red-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)} // Increased duration for slower movement
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiOpencv className="text-6xl text-blue-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)} // Increased duration for slower movement
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiVisualstudiocode className="text-6xl text-blue-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)} // Increased duration for slower movement
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiJupyter className="text-6xl text-yellow-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)} // Increased duration for slower movement
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaJava className="text-6xl text-red-600" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Technologies;
