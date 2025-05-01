// ProjectsCard.jsx
import React from 'react';
import { FaTrophy, FaMedal, FaRegSmile, FaLinkedin, FaGlobe, FaGithub,FaDiscord} from "react-icons/fa";
import { MdFlight } from "react-icons/md";

const ProjectsCard = ({ title, des, src, place, linkedinLink, githubLink, discordLink }) => {
  const getIcon = () => {
    switch (place) {
      case '1st':
        return <MdFlight className="text-yellow-500 text-2xl mr-2" />;
      case '2nd':
        return <FaMedal className="text-gray-500 text-2xl mr-2" />;
      case 'Finalist':
      default:
        return <FaRegSmile className="text-blue-500 text-2xl mr-2" />;
    }
  };

  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:to-gray-900 transition-colors duration-1000">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="Project visual"
        />
      </div>
      <div className="w-full mt-5 flex flex-col gap-6">
        <div>
          <div className="flex items-center">
            {getIcon()}
            <h3 className="text-base uppercase text-designColor font-normal">
              {title}
            </h3>
          </div>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
            {des}
          </p>
        </div>

        {/* Conditional display of icons */}
        <div className="flex gap-4 mt-2">
          {linkedinLink && (
            <a
              href={linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 text-3xl"
            >
              <FaLinkedin />
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 text-3xl"
            >
              <FaGithub />
            </a>
          )}
          {discordLink && (
            <a
              href={discordLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 text-3xl"
            >
              <FaDiscord />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
