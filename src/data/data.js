import {FaLinkedin,FaGithub,FaDiscord,FaYoutube} from "react-icons/fa";
  
  import { MdFlight,MdCloudDone,MdOutlineAutoFixHigh } from "react-icons/md";
  
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
  import boto3Logo from "../assets/images/boto3.png";
  import lambdaLogo from "../assets/images/lambda.png";
  import samLogo from "../assets/images/sam.jpg";
  import cliLogo from "../assets/images/awscli.png";
  import powerbiLogo from "../assets/images/powerbi.jpg";
  import s3Logo from "../assets/images/s3.png";
  import n8nLogo from "../assets/images/n8n.png";
  import telegramLogo from "../assets/images/telegram.png";
  import googleDocsLogo from "../assets/images/docs.png";
  import googleDriveLogo from "../assets/images/Drive.png";
  import ollamaLogo from "../assets/images/ollama.png";

  


  
  // Features Data
  export const featuresData = [
    {
  id: 3,
  icon: <MdOutlineAutoFixHigh />,
  title: "AI Cover Letter Generator 🤖",
  des: `The AI Cover Letter Generator is a fully automated workflow built with n8n that creates personalized cover letters in under two minutes. 
  Starting from a simple Telegram message containing a resume and a LinkedIn job description, the workflow leverages AI to generate, format, and deliver a professional cover letter as a PDF file — without any manual steps.\n\n

  📱 User Interaction:\n
  Start a conversation with a Telegram bot and send your resume plus job description.\n
  🤖 AI Text Generation:\n
  The workflow uses an AI agent to analyze both documents and craft a tailored cover letter.\n
  🗂️ Structured JSON Output:\n
  AI results are returned as a clean, well-structured JSON for smooth processing.\n
  📝 Dynamic Document Creation:\n
  Google Docs template is automatically updated with the generated content.\n
  📑 PDF Conversion:\n
  Google Drive instantly converts the document into a downloadable PDF.\n
  🚀 Instant Delivery:\n
  The finished cover letter is sent back to the user on Telegram.\n
  🔄 Reusable Template:\n
  The system resets the Google Docs template for the next use.\n\n

  ⚙️ Powered by:\n
  n8n • Telegram Bot API • Google Docs API • Google Drive API • OLAMMA AI\n\n

  ⏱️ End-to-end automation — from input to professional PDF in under 2 minutes.`,
  photos: [
    n8nLogo,
    telegramLogo,
    googleDocsLogo,
    googleDriveLogo,
    ollamaLogo
  ],
  languages: [],
  links: [
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7361282900094349312/"
    },
    {
      icon: <FaYoutube />,
      url: "https://www.youtube.com/watch?v=gEcmiGJHj2s&t=1s"
    }
  ]
}
,
      {
        id: 2,
        icon: <MdCloudDone />,
        title: "Nouvelair Delay AWS + Power BI ☁️📊",
        des: `Nouvelair Delay AWS is a cloud-based, serverless flight delay monitoring system that automates data collection, reporting, and visualization. Built to scale and simplify real-time aviation delay analytics, this project fetches data from the Aviationstack API, stores it in AWS S3, and powers a live Power BI dashboard — with daily automated summaries posted directly to Discord.\n\n

      📡 Serverless Pipeline:\n
      Automated daily data fetch from Aviationstack via AWS Lambda.\n
      Structured data saved as JSON to S3 bucket.\n

      🔁 Local Sync + BI:\n
      Python script syncs data locally from S3.\n
      Power BI reads local data and updates dynamic dashboards.\n

      📊 KPI Reporting:\n
      Dashboard tracks delay categories, airport stats, and flight counts.\n
      Posted summary to Discord every day at 17:00 CET.\n

      🧠 Smart Automation:\n
      Fully scheduled using AWS SAM.\n
      Visual insights auto-refreshed and shareable with teams.\n

      🔗 Public Discord Channel to follow daily updates.`
      ,
        photos: [
          pythonLogo,
          boto3Logo,
          s3Logo,
          lambdaLogo,
          samLogo,
          cliLogo,
          powerbiLogo,
          discordapi
        ],
        languages: [pythonLogo],
        links: [
          {
            icon: <FaLinkedin />,
            url: "https://www.linkedin.com/posts/amemi-amir_dataengineering-powerbi-aws-activity-7329026584059789313-iX4Q?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC3q3tsBDcsEo6yyUNSAgIGyiAMk6zlCqy0"
          },
          {
            icon: <FaGithub />,
            url: "https://github.com/AmirAmemi/nouvelair-delay-aws"
          },
          {
            icon: <FaDiscord />,
            url: "https://discord.com/invite/NjhaeBWCMJ"
          }
        ]
      },
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
// Amir Amemi
  ];
  