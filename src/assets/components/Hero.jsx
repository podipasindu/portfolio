import profilePic1 from '../profilePic.jpg'; 
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.div
      className="border-b border-neutral-900 pb-4 lg:mb-35 relative" // Added relative positioning
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Social Media Icons */}
      <div className="absolute top-4 right-4 flex space-x-4 z-10"> {/* Position icons */}
        <a 
          href="https://www.linkedin.com/in/pasindu-sandeepa-a1bb131a9" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white text-2xl"
        >
          <i className="fa-brands fa-linkedin"></i> {/* FontAwesome class name */}
        </a>
        <a 
          href="https://www.instagram.com/pasindu_sandeepa/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white text-2xl"
        >
          <i className="fa-brands fa-instagram"></i> {/* FontAwesome class name */}
        </a>
        <a 
          href="https://github.com/podipasindu" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white text-2xl"
        >
          <i className="fa-brands fa-github"></i> {/* FontAwesome class name */}
        </a>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap items-start">
        {/* Name and Description */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-start">
            <motion.h1 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ delay: 0, duration: 0.5 }}
              className="text-white text-left pb-11 text-7xl font-thin tracking-tight lg:mt-1 lg:text-9xl mr-9 ml-9"
            >
              Pasindu Sandeepa
            </motion.h1>

            <motion.span
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent block ml-9 mr-16"
            >
              Machine Learning Developer
            </motion.span>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="text-white text-left mt-5 text-sm ml-9 mr-9"
            >
              <p>
                I am a passionate machine learning developer with a knack for building intelligent systems and
                data-driven solutions. I have honed my skills in machine learning frameworks like TensorFlow
                and PyTorch, as well as data processing tools like Pandas, NumPy, and Scikit-learn. My goal
                is to leverage my expertise to create innovative models that drive business growth and deliver
                exceptional predictive insights.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Profile Pictures */}
        <div className="w-full lg:w-1/2 lg:p-8 flex flex-col lg:flex-row justify-center mt-4 lg:ml-10">
          {/* First Profile Picture */}
          <motion.img 
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            src={profilePic1} 
            alt="Profile Picture 1" 
            className="object-cover rounded-2xl mb-4 lg:mb-0 lg:mr-4" // Margin on bottom for mobile, margin on right for large screens
            style={{ width: '25rem', height: '30rem' }} // Custom size in rem
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
