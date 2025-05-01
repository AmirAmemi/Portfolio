import { FaMobile, FaServer, FaCode, FaCheckCircle, FaProjectDiagram, FaBullhorn } from "react-icons/fa";
import { FaTrophy, FaMedal, FaRegSmile, FaLinkedin, FaGlobe, FaGithub } from "react-icons/fa";
import { MdFlight } from "react-icons/md";

import pythonLogo from "../assets/images/python.png";

import SqlLogo from "./images/sqlLogo.jpeg";
import PostgreSQL from "./images/Postgresql.png";
import PandasLogo from "./images/pandas.png";
import Matplotlib from "./images/Matplotlib_icon.png";
import Pillow from "./images/pillow.png";
import requests from "./images/requests.png";
import gitactions from "./images/gitactions.png";
import discordapi from "./images/DiscordApi.png";
import linekdinapi from "./images/LinedInApi.png";
import tweepi from "./images/tweepi.png";




// Features Data
export const featuresData = [
  {
    id: 1,
    icon: <MdFlight />, // Icon for plane
    title: "Nouvelair Delay Watch",
    des: "Nouvelair Delay Watch is a fully automated system that fetches daily flight data for Nouvelair, cleans and analyzes delays, generates a beautiful custom report, and posts it automatically on Discord (and optionally LinkedIn or other platforms).Designed to deliver real-time insights about delays, worst flights, and delay distribution by hour and route.",
    photos: [PostgreSQL,PandasLogo,Matplotlib,Pillow,requests,gitactions,discordapi,linekdinapi,tweepi],
    languages: [pythonLogo,SqlLogo],
    links: [
        {
          icon: <FaLinkedin />,
          url: "https://www.linkedin.com/posts/amemi-amir_dataengineering-python-etl-activity-7322892546186072064-lDqs?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC3q3tsBDcsEo6yyUNSAgIGyiAMk6zlCqy0"
        },
        {
          icon: <FaGithub />,
          url: "https://github.com/AmirAmemi/nouvelair-delay-watch"
        }
      ]
  }
];
