import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Mandatory Internship"
            subTitle="(February 2024 - July 2024)"
            result="Smart Information Trade"
            des={
              <div>
                <p><strong>Project:</strong> “Automated Exam Scheduling Application”</p>
                <p><strong>Context:</strong> The project aimed at developing an automated exam scheduling application that optimized scheduling time, ensured compliance with complex constraints, and integrated seamlessly into the client’s web platform.</p>
                <p><strong>Methodology:</strong> Agile Development</p>
                <p><strong>Achievements:</strong></p>
                <ul className="list-disc ml-5">
                  <li>Development of Automated Scheduling System: Created a scheduling application using Constraint Satisfaction Programming (CSP), reducing scheduling time by over 90%.</li>
                  <li>Achieving 100% Compliance: Ensured 100% compliance with complex scheduling constraints, delivering an optimal solution for the client.</li>
                  
                  <li>Genetic Algorithm Integration: Utilized DEAP and Python to create genetic algorithms, enhancing schedule generation accuracy.</li>
                  
                  <li>Implementation of CSP Methods: Integrated Google OR-Tools for CSP methods, delivering error-free and optimal scheduling solutions.</li>
                  <li>Comparative Analysis: Conducted a detailed analysis demonstrating the superiority of CSP over genetic algorithms in handling diverse and stringent scheduling requirements.</li>
                  <li>Client Platform Integration: Seamlessly integrated the scheduling solution into the client’s official web platform, streamlining administrative processes and improving user accessibility.</li>
                  
                </ul>
                <p><strong>Technologies used:</strong> Python, Pandas, Matplotlib, DEAP, Genetic Algorithm, CSP, Google OR-Tools, Excel, Data Visualization, Qt Designer, PySide6, Optimization Strategies.</p>
              </div>
            }
            logo="../../components/resume/Smart Trade Information.jpg" // Replace with the correct path to the Allence logo
          />
          <ResumeCard
            title="Voluntary Internship"
            subTitle="(June 2023 - September 2023)"
            result="Digital Research & Technologies "
            des={
              <div>
                <p><strong>Project:</strong> “Instagram Profile Analysis for Business Optimization”</p>
                <p><strong>Context:</strong>This project aimed to gather and analyze Instagram data to predict which famous profiles would be the best fit for a business. The goal was to help businesses optimize their influencer marketing strategies by identifying the most suitable influencers based on their profile and engagement metrics.</p>
                <p><strong>Methodology:</strong> Agile Development & Data Analysis</p>
                <p><strong>Achievements:</strong></p>
                <ul className="list-disc ml-5">
                  <li>Data Analysis for Business Insights: Analyzed large datasets using Python and MySQL, providing actionable insights that increased data accuracy by 25%.</li>
                  <li>Development of Data Pipelines: Developed efficient data pipelines using AWS Glue and AWS Redshift, reducing processing time by 30% and improving overall data management efficiency.</li>
                  
                  <li>Statistical Trend Identification: Performed statistical analysis to identify key trends, aiding in better strategic decision-making and improving marketing strategies.</li>
                  
                  <li>Enhancing User Satisfaction: Improved user satisfaction by 20% by integrating data-driven solutions that streamlined operations and decision-making processes.</li>
                  <li>Instagram Data Scripting: Created scripts to gather Instagram profile data, analyze engagement metrics, and predict the most suitable profiles for business collaboration based on key performance indicators.</li>
                  
                  
                </ul>
                <p><strong>Technologies used:</strong> Python, MySQL, AWS Glue, AWS Redshift, HTML5, Selenium, BeautifulSoup, JSON.</p>
              </div>
            }
            logo="../../components/resume/digital_research_technologie_logo.jpeg" // Replace with the correct path to the Electro Plus logo
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
