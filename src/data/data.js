import {FaLinkedin,FaGithub,FaDiscord} from "react-icons/fa";
  
  import { MdFlight } from "react-icons/md";
  
  import pythonLogo from "../assets/images/python.png";
  import SqlLogo from "../assets/images/sqlLogo.jpeg";
  import PostgreSQL from "../assets/images/Postgresql.png";
  import PandasLogo from "../assets/images/pandas.png";
  import Matplotlib from "../assets/images/Matplotlib_icon.png";
  import Pillow from "../assets/images/pillow.png";
  import requests from "../assets/images/requests.png";
  import gitactions from "../assets/images/gitactions.png";
  import discordapi from "../assets/images/DiscordApi.png";
  import linekdinapi from "../assets/images/LinedInApi.png";
  import tweepi from "../assets/images/tweepi.png";
  import flight from "../assets/images/ProjectOne.png";
  
  // Features Data
  export const featuresData = [
    {
      id: 1,
      icon: <MdFlight />,
      title: "Nouvelair Delay Watch ✈️",
      des: `Nouvelair Delay Watch is a fully automated system that fetches daily flight data for Nouvelair, cleans and analyzes delays, generates a beautiful custom report, and posts it automatically on Discord (and optionally LinkedIn or other platforms). Designed to deliver real-time insights about delays, worst flights, and delay distribution by hour and route.\n\n
      \n
      \n
  📥 Data Extraction: Fetch daily real-time flight data from the AviationStack API.\n
  🧹 Data Cleaning: Handle missing values, cancellations, and standardize delays.\n
  💾 Flexible Storage: Choose between saving datasets as CSV files or loading into PostgreSQL databases.\n
  📊 Data Analysis:\n
  Calculate average hourly delays for departures and arrivals.\n
  Identify and rank the top 10 most delayed routes.\n
  Detect the worst delayed flight of the day.\n
  Track status distribution (Scheduled, Landed, Cancelled, Active).\n
  📈 Professional Visualization:\n
  Generate clear line plots, bar charts, and summary cards.\n
  Custom-designed black-themed graphical reports.\n
  🤖 Automated Posting:\n
  Discord Webhook (Daily at 10:00 UTC / 12:00 Germany Time).\n
  (Optional) LinkedIn Integration for professional updates.\n
  🛫 Public Discord Server to showcase daily published reports.`,
      photos: [
        PostgreSQL,
        PandasLogo,
        Matplotlib,
        Pillow,
        requests,
        gitactions,
        discordapi,
        linekdinapi,
        tweepi
      ],
      languages: [pythonLogo, SqlLogo],
      links: [
        {
          icon: <FaLinkedin />,
          url: "https://www.linkedin.com/posts/amemi-amir_dataengineering-python-etl-activity-7322892546186072064-lDqs?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC3q3tsBDcsEo6yyUNSAgIGyiAMk6zlCqy0"
        },
        {
          icon: <FaGithub />,
          url: "https://github.com/AmirAmemi/nouvelair-delay-watch"
        },
        {
          icon: <FaDiscord />,
          url: "https://discord.gg/n2vmB4Yshk"
        }
      ]
    }
  ];
  