import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Education */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Exchange Semester in Computer Science"
            subTitle="Hochschule Schmalkalden - University of Applied Sciences, Germany"
            result="2024 - 2025"
            des="Participated in an international exchange program focusing on software development, algorithms, and computer systems. This experience enhanced my programming skills and exposed me to diverse learning environments and collaborative tech project."
          />
          <ResumeCard
            title="Master’s Degree in Data Science"
            subTitle="Faculty of Science of Monastir, Tunisia "
            result="2022 - 2024"
            des="Focused on advanced topics in machine learning, big data analytics, statistical modeling, and data engineering. Gained hands-on experience with tools such as Python, SQL, and cloud technologies. Completed projects involving predictive modeling, data visualization, and real-world data problem solving."
          />
          <ResumeCard
            title="Bachelor’s Degree in Applied Mathematics "
            subTitle="Faculty of Science of Monastir, Tunisia"
            result="2018 - 2022"
            des="Built a strong foundation in mathematics, statistics, and computational methods. Studied subjects like linear algebra, probability, optimization, and numerical analysis, which laid the groundwork for problem-solving in data-intensive environments."
          />
        </div>
      </div>
      {/* Job Experience */}
      
    
    </motion.div>
  );
}

export default Education
