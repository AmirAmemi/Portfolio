import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-6 lgl:gap-12"
    >
      {/* Databases & Data Management */}
      <div className="w-full lgl:w-1/2">
        <div className="py-4 font-titleFont flex flex-col gap-1">
          <p className="text-xs text-designColor tracking-[2px] uppercase">Databases & Data Management</p>
          <h2 className="text-lg md:text-xl font-bold">Databases & Data Management</h2>
        </div>
        <div className="flex flex-col gap-2">
          <div className="overflow-x-hidden">
            <p className="text-xs uppercase font-medium">MySql</p>
            <span className="w-full h-1 bgOpacity rounded-md inline-flex mt-1">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[0%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md"
              />
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-xs uppercase font-medium">PostgreSQL</p>
            <span className="w-full h-1 bgOpacity rounded-md inline-flex mt-1">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[0%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md"
              />
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-xs uppercase font-medium">MongoDB</p>
            <span className="w-full h-1 bgOpacity rounded-md inline-flex mt-1">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[0%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md"
              />
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-xs uppercase font-medium">Redis</p>
            <span className="w-full h-1 bgOpacity rounded-md inline-flex mt-1">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[0%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md"
              />
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-xs uppercase font-medium">DynamoDB</p>
            <span className="w-full h-1 bgOpacity rounded-md inline-flex mt-1">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[0%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md"
              />
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-xs uppercase font-medium">Amazon Redshift</p>
            <span className="w-full h-1 bgOpacity rounded-md inline-flex mt-1">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[0%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md"
              />
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-xs uppercase font-medium">AWS S3</p>
            <span className="w-full h-1 bgOpacity rounded-md inline-flex mt-1">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[0%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md"
              />
            </span>
          </div>
        </div>
      </div>

      {/* Programming Languages */}
      <div className="w-full lgl:w-1/2">
        <div className="py-4 font-titleFont flex flex-col gap-1">
          <p className="text-xs text-designColor tracking-[2px] uppercase">Programming Languages</p>
          <h2 className="text-lg md:text-xl font-bold">Programming Languages</h2>
        </div>
        <div className="flex flex-col gap-2">
          {[
            { name: "Python", width: "0%" },
            { name: "Java", width: "0%" },
            { name: "SQL", width: "0%" },
            { name: "Shell scripting", width: "0%" },
            { name: "HTML", width: "0%" },
            { name: "CSS", width: "0%" },
            { name: "JavaScript", width: "0%" }         
          ].map(skill => (
            <div className="overflow-x-hidden" key={skill.name}>
              <p className="text-xs uppercase font-medium">{skill.name}</p>
              <span className="w-full h-1 bgOpacity rounded-md inline-flex mt-1">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className={`w-[${skill.width}] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md`}
                />
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Data Engineering Methodologies */}
      <div className="w-full lgl:w-1/2">
        <div className="py-4 font-titleFont flex flex-col gap-1">
          <p className="text-xs text-designColor tracking-[2px] uppercase">Data Engineering Methodologies</p>
          <h2 className="text-lg md:text-xl font-bold">Data Engineering Methodologies</h2>
        </div>
        <div className="flex flex-col gap-2">
          {[
            { name: "Designing and managing data pipelines", width: "0%" },
            { name: "Data transformation", width: "0%" },
            { name: "Data integration", width: "0%" },
            { name: "Designing data architecture", width: "0%" },
            { name: "Building scalable data pipelines", width: "0%" },
            { name: "Scrum", width: "0%" },
            { name: "CI/CD pipelines", width: "0%" },
            { name: "Version control (Git, GitHub)", width: "0%" },
            { name: "Containerization (Docker)", width: "0%" },
            { name: "Batch processing (ETL jobs)", width: "0%" },
            { name: "Stream processing (Apache Kafka, Apache Flink)", width: "0%" }
          ].map(skill => (
            <div className="overflow-x-hidden" key={skill.name}>
              <p className="text-xs uppercase font-medium">{skill.name}</p>
              <span className="w-full h-1 bgOpacity rounded-md inline-flex mt-1">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className={`w-[${skill.width}] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md`}
                />
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Cloud */}
      <div className="w-full lgl:w-1/2">
        <div className="py-4 font-titleFont flex flex-col gap-1">
          <p className="text-xs text-designColor tracking-[2px] uppercase">Cloud</p>
          <h2 className="text-lg md:text-xl font-bold">Cloud</h2>
        </div>
        <div className="flex flex-col gap-2">
          {[
            { name: "AWS", width: "0%" },
            { name: "Snowflake", width: "0%" },
            { name: "Docker", width: "0%" }
          ].map(skill => (
            <div className="overflow-x-hidden" key={skill.name}>
              <p className="text-xs uppercase font-medium">{skill.name}</p>
              <span className="w-full h-1 bgOpacity rounded-md inline-flex mt-1">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className={`w-[${skill.width}] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md`}
                />
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Data Visualization & Reporting */}
      <div className="w-full lgl:w-1/2">
        <div className="py-4 font-titleFont flex flex-col gap-1">
          <p className="text-xs text-designColor tracking-[2px] uppercase">Data Visualization & Reporting</p>
          <h2 className="text-lg md:text-xl font-bold">Data Visualization & Reporting</h2>
        </div>
        <div className="flex flex-col gap-2">
          {[
            { name: "Tableau", width: "0%" },
            { name: "Power BI", width: "0%" },
            { name: "Matplotlib", width: "0%" },
            { name: "Seaborn", width: "0%" },
            { name: "Plotly", width: "0%" }
          ].map(skill => (
            <div className="overflow-x-hidden" key={skill.name}>
              <p className="text-xs uppercase font-medium">{skill.name}</p>
              <span className="w-full h-1 bgOpacity rounded-md inline-flex mt-1">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className={`w-[${skill.width}] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md`}
                />
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Version Control & Collaboration Tools */}
      <div className="w-full lgl:w-1/2">
        <div className="py-4 font-titleFont flex flex-col gap-1">
          <p className="text-xs text-designColor tracking-[2px] uppercase">Version Control & Collaboration Tools</p>
          <h2 className="text-lg md:text-xl font-bold">Version Control & Collaboration Tools</h2>
        </div>
        <div className="flex flex-col gap-2">
          {[
            { name: "Git", width: "0%" },
            { name: "GitHub", width: "0%" },
            { name: "GitLab", width: "0%" },
            { name: "Jira", width: "0%" },
            { name: "Trello", width: "0%" },
            { name: "Microsoft Teams", width: "0%" }
          ].map(skill => (
            <div className="overflow-x-hidden" key={skill.name}>
              <p className="text-xs uppercase font-medium">{skill.name}</p>
              <span className="w-full h-1 bgOpacity rounded-md inline-flex mt-1">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className={`w-[${skill.width}] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md`}
                />
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* OS Systems */}
      <div className="w-full lgl:w-1/2">
        <div className="py-4 font-titleFont flex flex-col gap-1">
          <p className="text-xs text-designColor tracking-[2px] uppercase">OS Systems</p>
          <h2 className="text-lg md:text-xl font-bold">OS Systems</h2>
        </div>
        <div className="flex flex-col gap-2">
          {[
            { name: "Linux", width: "0%" },
            { name: "Windows", width: "0%" }
          ].map(skill => (
            <div className="overflow-x-hidden" key={skill.name}>
              <p className="text-xs uppercase font-medium">{skill.name}</p>
              <span className="w-full h-1 bgOpacity rounded-md inline-flex mt-1">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className={`w-[${skill.width}] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md`}
                />
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Unit Testing */}
      <div className="w-full lgl:w-1/2">
        <div className="py-4 font-titleFont flex flex-col gap-1">
          <p className="text-xs text-designColor tracking-[2px] uppercase">Unit Testing</p>
          <h2 className="text-lg md:text-xl font-bold">Unit Testing</h2>
        </div>
        <div className="flex flex-col gap-2">
          <div className="overflow-x-hidden">
            <p className="text-xs uppercase font-medium">unittest</p>
            <span className="w-full h-1 bgOpacity rounded-md inline-flex mt-1">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[0%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md"
              />
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-xs uppercase font-medium">pytest</p>
            <span className="w-full h-1 bgOpacity rounded-md inline-flex mt-1">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[0%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md"
              />
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-xs uppercase font-medium">Pandas Testing</p>
            <span className="w-full h-1 bgOpacity rounded-md inline-flex mt-1">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[0%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md"
              />
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-xs uppercase font-medium">Jenkins</p>
            <span className="w-full h-1 bgOpacity rounded-md inline-flex mt-1">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[0%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md"
              />
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
