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


      </div>
    </section>
  );
};

export default Projects;
