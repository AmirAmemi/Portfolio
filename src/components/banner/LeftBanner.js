import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Data Engineer.", "Data Scientist.", "Software Developer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Amir Amemi</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#447add"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I am a recent Data Science Master’s graduate with a Bachelor’s degree in Applied Mathematics, both earned from the University of Monastir. 
        I also broadened my academic experience through an exchange program in Computer Science at the University of Schmalkalden in Germany.
        My academic journey has built a strong foundation in data engineering, machine learning, statistical modeling, and software development. 
        I am passionate about turning data into actionable insights and developing efficient, scalable solutions. 
        My areas of interest include Data Engineering, Data Science, and Software Development, and I am eager to contribute to dynamic, innovation-driven teams.

        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner