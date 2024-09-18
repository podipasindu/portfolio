import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            year: "Jun 2024 - Present",
            role: "Marketing Executive",
            company: "Redragon Sri Lanka · Part-time",
            description: `Developed and executed targeted media marketing campaigns, creating engaging content to boost brand visibility and sales. Analyzed sales data to identify trends, provided actionable insights for inventory management, and recommended strategic marketing focuses based on product performance.`,
            type: "Remote",
            technologies: ["Social Media Marketing", "Graphic Design", "Microsoft Power BI"], // List of technologies
        },
        {
            year: "Dec 2023 - Present",
            role: "Marketing and Operations Executive",
            company: "Technodora Pvt Ltd · Part-time",
            description: `As a software engineer, I worked on developing web applications using JavaScript frameworks like React and Angular. I collaborated with cross-functional teams to design and implement scalable software solutions, improving overall project efficiency and customer satisfaction.`,
            type: "Remote",
            technologies: ["Social Media Marketing", "Odoo", "Microsoft Power BI", "Search Engine Optimization (SEO)"], // List of technologies
        },
        {
            year: "Jan 2022 -  Apr 2023",
            role: "Seller",
            company: "eBay · Part-time",
            description: `Seasoned eBay seller with over a year of hands-on experience, adeptly navigating both direct shipping and dropshipping models. During this tenure, honed skills in product sourcing, inventory management, and customer service, while also mastering the art of market analysis and sales optimization. These experiences not only strengthened my business acumen but also instilled valuable lessons in data analysis and decision-making. As an aspiring data scientist, I leverage these insights to inform strategic approaches and enhance performance metrics. Continuously learning and adapting, I am poised to apply my multifaceted expertise to drive innovation and success in the field of data science.`,
            type: "Remote",
            technologies: ["Marketing", "Customer Service", "Communication"], // List of technologies
        }
    ];

    return (
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl text-white">Experience</h2>
            {experiences.map((experience, index) => (
                <motion.div
                    key={index}
                    className="mb-8 flex flex-wrap lg:justify-center"
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 50 }} // Initial state for the whole experience item
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.div
                        className="w-full mb-2 text-sm text-neutral-400"
                        whileInView={{ x: 0, opacity: 1 }} // Animation when in view
                        initial={{ x: -50, opacity: 0 }} // Initial state for the year
                        transition={{ duration: 0.5 }}
                    >
                        {experience.year}
                    </motion.div>
                    <motion.div
                        className="w-full max-w-xl lg:w-3/4"
                        whileInView={{ x: 0, opacity: 1 }} // Animation when in view
                        initial={{ x: 50, opacity: 0 }} // Initial state for the rest of the content
                        transition={{ duration: 0.5 }}
                    >
                        <h6 className="mb-2 font-semibold text-white">
                            {experience.role}
                            <span className="text-sm text-purple-100 block">
                                {experience.company}
                            </span>
                        </h6>
                        <p className="text-neutral-400 mb-4">
                            {experience.description}
                        </p>
                        <div className="text-sm text-neutral-400 mt-2">
                            <strong>Type:</strong> {experience.type}
                        </div>
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
        </div>
    );
};

export default Experience;
