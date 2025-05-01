import React, { useState, useEffect } from 'react';
import { HiArrowRight } from "react-icons/hi";

import { FaLinkedin, FaGlobe } from "react-icons/fa"; // if not already imported

const Card = ({ item: { title, des, icon, photos, languages, links } }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    if (title === "Pitching" && photos && photos.length > 1) {
      const intervalId = setInterval(() => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
      }, 2500);
      return () => clearInterval(intervalId);
    }
  }, [title, photos]);

  return (
    <div className="relative w-full px-12 h-auto py-10 rounded-lg shadow-shadowOne flex flex-col items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-white transition-colors duration-300 ease-in-out">
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-lg"></div>
      <div className="relative z-10 h-auto overflow-y-hidden">
        <div className="flex flex-col gap-10 translate-y-16 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
          <div className="w-10 h-20 flex flex-col justify-between">
            {icon ? (
              <span className="text-5xl text-designColor">{icon}</span>
            ) : (
              <>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
              </>
            )}
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300 group-hover:text-black transition-colors duration-300 ease-in-out">
              {title}
            </h2>
            <p className="base group-hover:hidden transition-opacity duration-300 ease-in-out">{des}</p>

            {/* Social Links Section */}
            {links && links.length > 0 && (
              <div className="flex gap-4 justify-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 text-3xl"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            )}

            {/* Technologies / Frameworks / Languages */}
            {photos && (
              <div className="flex flex-wrap justify-center gap-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {title === "Deployment" || title === "Pitching" ? (
                  photos.map((photo, index) => (
                    <img
                      key={index}
                      src={photo}
                      alt={`${title.toLowerCase()} logo ${index + 1}`}
                      className="w-20 h-20 object-contain"
                    />
                  ))
                ) : (
                  <>
                    <h3 className="text-lg font-bold text-gray-600 group-hover:text-black">
                      {title === "Nouvelair Delay Watch" || title === "Mobile Development"
                        ? "Frameworks Used:"
                        : "Technologies Used:"}
                    </h3>
                    {photos.map((photo, index) => (
                      <img
                        key={index}
                        src={photo}
                        alt={`technology logo ${index + 1}`}
                        className="w-16 h-16 object-contain"
                      />
                    ))}
                  </>
                )}
              </div>
            )}

            {languages && languages.length > 0 && (
              <div className="flex flex-wrap justify-center gap-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-bold text-gray-600 group-hover:text-black">Programming Languages:</h3>
                {languages.map((logo, index) => (
                  <img
                    key={index}
                    src={logo}
                    alt={`language logo ${index + 1}`}
                    className="w-16 h-16 object-contain"
                  />
                ))}
              </div>
            )}

            <span className="text-2xl text-designColor mt-4 group-hover:text-black transition-colors duration-300">
              <HiArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
