import aboutImg from '../me.jpg';
import { motion } from 'framer-motion';

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
        About 
        <span className="text-natural-500"> Me</span>
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
        
        {/* Text Section */}
        <motion.div 
          className="w-full lg:w-1/2 lg:p-8 flex items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-white my-2 max-w-xl py-6 ml-8 mt-0 mr-9">
              I am self-motivated and enthusiastic individual, passionate about the exciting field of machine learning and data science. My goal is to leverage my skills and knowledge in Python, SQL, JavaScript, HTML, and CSS to contribute to cutting-edge developments in these domains. Currently, I am a student at the Institute of Technology, University of Moratuwa, and I am dedicated to expanding my expertise and embracing new challenges in the ever-evolving world of technology. I thrive in fast-paced environments, and my problem-solving nature drives my commitment to creating innovative solutions. Eager to learn and adapt, I am poised to bring a fresh perspective to the field and contribute meaningfully to future projects.
            </p>

            {/* New Description with Motion */}
            <motion.p 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-white my-2 max-w-xl py-6 ml-8 mt-4 mr-9"
            >
              In addition to my technical skills, I am passionate about sharing knowledge and inspiring others to explore the vast world of technology. Through my projects, I aim to make a positive impact and contribute to the advancement of machine learning and data science.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
