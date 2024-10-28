import aboutImg from '../cv.jpg';
import { motion } from 'framer-motion';
import cvFile from '../Pasindu.pdf'; // Adjust the path to your actual CV file

const About = () => {
  return (
    <motion.div 
      className="border-b border-neutral-900 pb-4"
      initial={{ opacity: 0, y: 50 }} // Initial state for the whole section
      whileInView={{ opacity: 1, y: 0 }} // State when in view
      transition={{ duration: 0.8 }} // Transition properties
    >
      <motion.h2 
        className="my-20 text-center text-4xl text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Download
        <span className="text-neutral-500"> CV</span>
      </motion.h2>

      <div className="flex flex-wrap">
        {/* Image Section */}
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8 flex justify-center"
        >
          <img 
            src={aboutImg} 
            alt="About Me" 
            className="w-96 h-100 object-cover rounded-2xl" // Increased size
          />
        </motion.div>

        {/* CV Download Button Section */}
        <div className="w-full lg:w-1/2 lg:p-8 flex justify-center items-center mt-8">
          <a 
            href={cvFile} // Link to your CV file
            download="Pasindu_Sandeepa_CV.pdf" // Name of the file when downloaded
            className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition duration-300"
          >
            Download CV
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
