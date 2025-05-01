import React from 'react';
import Title from '../layouts/Title';
import ProjectsCard from './ProjectsCard';
import { 
  projectOne
} from "../../assets/index"; // Make sure the path is correct

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY GITHUB FOR MORE DETAILS AND KEEP YOUR FEEDBACK"
          des="Last Project"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        
      
<ProjectsCard
  title="Nouvelair Delay Watch 🚀"
  des="Nouvelair Delay Watch is a fully automated system that fetches daily flight data for Nouvelair, cleans and analyzes delays, generates a beautiful custom report, and posts it automatically on Discord (and optionally LinkedIn or other platforms).
Designed to deliver real-time insights about delays, worst flights, and delay distribution by hour and route."
  src={projectOne}
  place="1st"
  
/>
    {/* LinkedIn icon with a link and larger size */}
    <a
    href="https://www.linkedin.com/posts/amemi-amir_dataengineering-python-etl-activity-7322892546186072064-lDqs?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC3q3tsBDcsEo6yyUNSAgIGyiAMk6zlCqy0"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-500 hover:text-blue-700 text-3xl" // Adjusted size
    >
    <FaLinkedin />
    </a>
    {/* Web icon with a link and larger size */}
    <a
    href="https://github.com/AmirAmemi/nouvelair-delay-watch"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-500 hover:text-blue-700 text-3xl" // Adjusted size
    >
    <FaGlobe />
    </a>

      </div>
    </section>
  );
};

export default Projects;
