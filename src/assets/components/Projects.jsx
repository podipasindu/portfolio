import profilePic1 from '../project-1.jpg'; // First profile picture
import profilePic2 from '../project-2.jpg'; // Second profile picture
import profilePic3 from '../project-3.jpg'; // Third profile picture
import { motion } from 'framer-motion';

// Define the animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const slideInLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
};

const slideInRight = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
};

const getImageElement = (imagePath, width = "200px", height = "200px") => {
    return (
        <motion.img 
            src={imagePath} 
            alt="Project Image" 
            style={{ width: width, height: height, objectFit: 'cover' }} // Adjust image size and style
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        />
    );
};

const Experience = () => {
    const experiences = [
        {
            role: "CAM Object Detection with YOLO and Voice Output",
            description: `This project uses an ESP32-CAM module with a Python script for real-time object detection using the YOLOv3-tiny model. Detected objects are announced via text-to-speech. It involves setting up the ESP32-CAM as a web server to stream images and using Python to detect and announce objects.`,
            technologies: ["Object Detection", "YOLO", "Flask", "ESP32-CAM","Internet of Things (IoT)", "Python","Arduino IDE"],
            image: profilePic1, 
        },
        {
            role: "Heart_Disease_Risk_level_Predictor",
            description: `This project focuses on predicting heart disease risk levels using a trained deep learning model. The model has been developed and fine-tuned on a comprehensive dataset, and it is integrated into a web application for easy interaction and demonstration.`,
            technologies: ["Deep Learning", "Web Development"],
            image: profilePic2, 
        },
        {
            role: "GPT-2_Chatbot",
            description: `This repository contains a simple web application for a chatbot built using the GPT-2 language model from Hugging Face's Transformers library. The chatbot is capable of generating human-like text responses based on the input it receives, making it suitable for various conversational AI applications. Model Output Path: Allows users to specify the path to their custom trained model output directory (model_output), enabling easy integration of personalized chatbot models.`,
            technologies: ["Deep Learning", "Web Development", "Python"],
            image: profilePic3, 
        }
    ];

    return (
        <motion.div 
            className="border-b border-neutral-900 pb-4"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
        >
            <motion.h2 
                className="my-20 text-center text-4xl text-white"
                variants={slideInLeft}
            >
                Projects
            </motion.h2>
            {experiences.map((experience, index) => (
                <motion.div 
                    key={index} 
                    className="mb-16 flex flex-col lg:flex-row lg:justify-start" // Changed to column layout on mobile
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeInUp}
                >
                    <motion.div 
                        className="flex-none w-full lg:w-1/3 mb-4 lg:mb-0 text-sm text-neutral-400"
                        variants={slideInLeft}
                    >
                        {getImageElement(experience.image, "160px", "160px")} {/* Increased size */}
                    </motion.div>
                    <motion.div 
                        className="flex-grow w-full lg:w-2/3 lg:pl-8"
                        variants={slideInRight}
                    >
                        <h6 className="mb-2 font-semibold text-white">
                            {experience.role}
                        </h6>
                        <p className="text-neutral-400 mb-4">
                            {experience.description}
                        </p>
                        <div className="mt-4">
                            <strong>Technologies:</strong>
                            <div className="flex flex-wrap mt-2">
                                {experience.technologies.map((tec, index) => (
                                    <span
                                        key={index}
                                        className="mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                                    >
                                        {tec}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default Experience;
