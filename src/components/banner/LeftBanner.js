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
        As a recent graduate with a Master's in Data Science and a Bachelor's in Applied Mathematics from the University of Monastir, 
        I have established a robust academic foundation in data engineering, machine learning, and software development. 
        During my exchange semester in Computer Science at Hochschule Schmalkalden - University of Applied Sciences in Germany, 
        I expanded my technical skills and gained international experience. My research interests lie in the design of scalable data pipelines and the transformation of complex 
        data into meaningful insights. I am currently seeking opportunities to contribute to innovative teams that are at the forefront of Data Engineering, AI, 
        and Software Development.

        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner