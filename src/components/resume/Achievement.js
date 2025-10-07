import React, { useState } from 'react';
import Slider from "react-slick";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import { 
  ETL,
  PostgreSQL,
  NumpyLogo,
  ScikitLogo,
  NLTKLogo,
  SeabornLogo,
  JsonLogo,
  BeautifulsoupLogo,
  SeleniumLogo,
  AWSLogo,
  QtLogo,
  ExcelLogo,
  OrtoolsLogo,
  DEAPLogo,
  MatplotLogo,
  PandasLogo,
  PythonLogo,

  htmlLogo, 
  cssLogo, 
  jsLogo, 
  codeigniterLogo, 
  mysqlLogo, 
  PyttLogo,


  CSharpLogo,
  DotNetLogo,
 
  VSCodeLogo,
  PowerBILogo,
  n8nLogo, 
  telegramLogo, 
  googleDocsLogo, 
  googleDriveLogo, 
  ollamaLogo,

  
} from "../../assets";
import Title from '../layouts/Title';
import { work1 } from '../../assets';
import { work2 } from '../../assets';

import { work5 } from '../../assets';
import { work6 } from '../../assets';
import { work7 } from '../../assets';
import {workCoverLetterAI} from '../../assets';
import {workAccountSys} from '../../assets';
import {workBankDW} from '../../assets';
// SampleNextArrow component
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-1/2 right-0 transform -translate-y-1/2 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

// SamplePrevArrow component
function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-1/2 left-0 transform -translate-y-1/2 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

// Testimonial component
const Testimonial = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "12px",
                height: "12px",
                background: "#447add",
                borderRadius: "50%",
                cursor: "pointer",
              }
            : {
                width: "12px",
                height: "12px",
                background: "gray",
                borderRadius: "50%",
                cursor: "pointer",
              }
        }
      ></div>
    ),
  };

  return (
    <section
      id="testimonial"
      className="w-full py-20 border-b-[1px] border-b-black relative"
    >
      <div className="flex justify-center items-center text-center mb-8">
        <Title title="" des="My projects" />
      </div>
      <div className="max-w-6xl mx-auto relative">
        <Slider {...settings}>

          {/* Slide 1: Personal Portfolio */}
          <div className="flex justify-center">
            <div className="flex justify-center items-center w-full md:w-[60%] lg:w-[50%] mx-auto">
              <div className="h-auto bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col items-start justify-center">
                <img src={work5} alt="Personal Portfolio" className="w-full rounded-t-lg" />
                <div className="text-left mt-4">
                  <h3 className="text-2xl justify-center font-bold">
                    Automated Scheduling Application
                  </h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Developed an automated scheduling application using Constraint Satisfaction Programming (CSP) to optimize scheduling processes. The solution reduced scheduling time by over 90% and ensured 100% compliance with complex scheduling constraints. It also integrated into the client’s web platform for better accessibility.
                  </p>
                  {/* Technologies Used */}
                  <div className="mt-4">
                    <h4 className="text-xl justify-center font-semibold mb-2">Technologies Used:</h4>
                    <div className="bg-white p-4 rounded-lg flex gap-6 justify-center items-center">
                      <img src={PythonLogo} alt="Python Logo" className="w-12 h-12" />
                      <img src={DEAPLogo} alt="DEAP Logo" className="w-12 h-12" />
                      <img src={OrtoolsLogo} alt="OrTools Logo" className="w-12 h-12" />
                      <img src={PandasLogo} alt="Pandas Logo" className="w-12 h-12" />
                      <img src={MatplotLogo} alt="MatPlotLib Logo" className="w-12 h-12" />
                      <img src={QtLogo} alt="QT Logo" className="w-12 h-12" />
                      <img src={ExcelLogo} alt="Excel Logo" className="w-12 h-12" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Slide: Automated AI Cover Letter Generator */}
          <div className="flex justify-center">
            <div className="flex justify-center items-center w-full md:w-[60%] lg:w-[50%] mx-auto">
              <div className="h-auto bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col items-start justify-center">
                <img src={workCoverLetterAI} alt="Automated AI Cover Letter Generator" className="w-full rounded-t-lg" />
                <div className="text-left mt-4">
                  <h3 className="text-2xl font-bold text-center">
                    Automated AI Cover Letter Generator with n8n, Telegram & Google Docs
                  </h3>
                  <p className="text-base tracking-wide text-gray-500 mt-2">
                    Fully automates cover letter creation using AI, n8n workflows, Telegram, and Google Docs integration.
                  </p>

                  {/* Technologies Used */}
                  <div className="mt-4">
                    <h4 className="text-xl font-semibold text-center mb-2">Technologies Used:</h4>
                    <div className="bg-white p-4 rounded-lg flex gap-6 justify-center items-center flex-wrap">
                      <img src={n8nLogo} alt="n8n Logo" className="w-12 h-12" />
                      <img src={telegramLogo} alt="Telegram Logo" className="w-12 h-12" />
                      <img src={ollamaLogo} alt="OpenAI Logo" className="w-12 h-12" />
                      <img src={googleDocsLogo} alt="Google Docs Logo" className="w-12 h-12" />
                      <img src={googleDriveLogo} alt="Google Drive Logo" className="w-12 h-12" />
                      <img src={JsonLogo} alt="JSON Logo" className="w-12 h-12" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide: Banking Data Warehouse & Reporting System */}
          <div className="flex justify-center">
            <div className="flex justify-center items-center w-full md:w-[60%] lg:w-[50%] mx-auto">
              <div className="h-auto bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col items-start justify-center">
                <img src={workBankDW} alt="Banking Data Warehouse Project" className="w-full rounded-t-lg" />
                <div className="text-left mt-4">
                  <h3 className="text-2xl font-bold text-center">
                    Banking Data Warehouse & Reporting System
                  </h3>
                  <p className="text-base tracking-wide text-gray-500 mt-2">
                    Developed an end-to-end ETL pipeline to integrate, clean, and transform banking transaction data. 
                    Designed a Power BI dashboard for real-time KPI tracking and reporting, enhancing data-driven decisions.
                  </p>

                  {/* Technologies Used */}
                  <div className="mt-4">
                    <h4 className="text-xl font-semibold text-center mb-2">Technologies Used:</h4>
                    <div className="bg-white p-4 rounded-lg flex gap-6 justify-center items-center flex-wrap">
                      <img src={PythonLogo} alt="Python Logo" className="w-12 h-12" />
                      <img src={PostgreSQL} alt="PostgreSQL Logo" className="w-12 h-12" />
                      <img src={PowerBILogo} alt="Power BI Logo" className="w-12 h-12" />
                      <img src={ETL} alt="ETL Logo" className="w-12 h-12" />
                      <img src={AWSLogo} alt="AWS Logo" className="w-12 h-12" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide: Customer Account Management System */}
          <div className="flex justify-center">
            <div className="flex justify-center items-center w-full md:w-[60%] lg:w-[50%] mx-auto">
              <div className="h-auto bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col items-start justify-center">
                <img src={workAccountSys} alt="Customer Account Management Project" className="w-full rounded-t-lg" />
                <div className="text-left mt-4">
                  <h3 className="text-2xl font-bold text-center">
                    Customer Account Management System (.NET + SQL)
                  </h3>
                  <p className="text-base tracking-wide text-gray-500 mt-2">
                    Built a C# desktop application for managing customer accounts and transactions with real-time SQL data synchronization,
                    ensuring high data integrity and performance.
                  </p>

                  {/* Technologies Used */}
                  <div className="mt-4">
                    <h4 className="text-xl font-semibold text-center mb-2">Technologies Used:</h4>
                    <div className="bg-white p-4 rounded-lg flex gap-6 justify-center items-center flex-wrap">
                      <img src={CSharpLogo} alt="C# Logo" className="w-12 h-12" />
                      <img src={DotNetLogo} alt=".NET Logo" className="w-12 h-12" />
                      <img src={JsonLogo} alt="JSON Logo" className="w-12 h-12" />
                      <img src={VSCodeLogo} alt="VSCode Logo" className="w-12 h-12" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* Slide 2: Data Analytics and Predictive Modeling for Instagram Influencer Marketing */}
          <div className="flex justify-center">
            <div className="flex justify-center items-center w-full md:w-[60%] lg:w-[50%] mx-auto">
              <div className="h-auto bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col items-start justify-center">
                <img src={work6} alt="CRA Project" className="w-full rounded-t-lg" />
                <div className="text-left mt-4">
                  <h3 className="text-2xl justify-center font-bold">
                    Data Analytics and Predictive Modeling for Instagram Influencer Marketing
                  </h3>
                  <p className="text-base tracking-wide text-gray-500">
                    At Digital Research & Technologies, I developed data pipelines using AWS Glue and Redshift to analyze Instagram data. By applying Python, MySQL, and web scraping tools, I identified key trends to help businesses select the best-fit influencers, improving campaign performance and decision-making.
                  </p>
                  {/* Technologies Used */}
                  ,
  ,
  ,
  ,
                  <div className="mt-4">
                    <h4 className="text-xl  font-semibold justify-center mb-2">Technologies Used:</h4>
                    <div className="bg-white p-4 rounded-lg flex gap-6 justify-center items-center">
                    <img src={PythonLogo} alt="Python Logo" className="w-12 h-12" />
                    <img src={mysqlLogo} alt="Mysql Logo" className="w-12 h-12" />
                    <img src={AWSLogo} alt="AWS Logo" className="w-12 h-12" />
                    <img src={JsonLogo} alt="Json Logo" className="w-12 h-12" />
                      <img src={BeautifulsoupLogo} alt="Beautifulsoup Logo" className="w-12 h-12" />
                      <img src={SeleniumLogo} alt="Selenium Logo" className="w-12 h-12" />
                      <img src={htmlLogo} alt="HTML Logo" className="w-12 h-12" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 3: Spam Email Detection */}
          <div className="flex justify-center">
            <div className="flex justify-center items-center w-full md:w-[60%] lg:w-[50%] mx-auto">
              <div className="h-auto bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col items-start justify-center">
                <img src={work7} alt="Spam Email Detection" className="w-full rounded-t-lg" />
                <div className="text-left mt-4">
                  <h3 className="text-2xl justify-center font-bold">
                  Spam Email Detection
                  </h3>
                  <p className="text-base tracking-wide text-gray-500">
                  The Spam Email Detection project aims to develop a machine learning-based system that can accurately classify incoming emails as either "spam" or "non-spam" (also known as "ham"). The system will help reduce the number of unwanted and potentially harmful emails that users receive in their inboxes, thus enhancing the overall email experience and security.
                  </p>
                  {/* Technologies Used */}
                  <div className="mt-4">
                    <h4 className="text-xl justify-center font-semibold mb-2">Technologies Used:</h4>
                    <div className="bg-white p-4 rounded-lg flex gap-6 justify-center items-center">
                      <img src={PythonLogo} alt="Python Logo" className="w-12 h-12" />
                      <img src={PandasLogo} alt="Pandas Logo" className="w-12 h-12" />
                      <img src={MatplotLogo} alt="MatPlotLib Logo" className="w-12 h-12" />
                      <img src={NumpyLogo} alt="Numpy Logo" className="w-12 h-12" />
                      <img src={ScikitLogo} alt="Scikit-learn Logo" className="w-12 h-12" />
                      <img src={NLTKLogo} alt="NLTK Logo" className="w-12 h-12" />
                      <img src={SeabornLogo} alt="Seaborn Logo" className="w-12 h-12" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 4: HEALTHCARE CHATBOT */}
          <div className="flex justify-center">
            <div className="flex justify-center items-center w-full md:w-[60%] lg:w-[50%] mx-auto">
              <div className="h-auto bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col items-start justify-center">
                <img src={work2} alt="HEALTHCARE CHATBOT" className="w-full rounded-t-lg" />
                <div className="text-left mt-4">
                  <h3 className="text-2xl justify-center font-bold">
                    HEALTHCARE CHATBOT
                  </h3>
                  <p className="text-base tracking-wide text-gray-500">
                    A chatbot based on sklearn where you can give a symptom and it will ask you questions and will tell you the details and give some advice.                  </p>
                  {/* Technologies Used */}
                  <div className="mt-4">
                    <h4 className="text-xl justify-center font-semibold mb-2">Technologies Used:</h4>
                    <div className="bg-white p-4 rounded-lg flex gap-6 justify-center items-center">
                      <img src={htmlLogo} alt="HTML Logo" className="w-12 h-12" />
                      <img src={cssLogo} alt="CSS Logo" className="w-12 h-12" />
                      <img src={jsLogo} alt="JavaScript Logo" className="w-12 h-12" />
                      <img src={codeigniterLogo} alt="CodeIgniter Logo" className="w-12 h-12" />
                      <img src={mysqlLogo} alt="MySQL Logo" className="w-12 h-12" />
                      <img src={PyttLogo} alt="Pyttsx3 Logo" className="w-12 h-12" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 5: Data Cleaning and Transformation for University Enrollment Data */}
          <div className="flex justify-center">
            <div className="flex justify-center items-center w-full md:w-[60%] lg:w-[50%] mx-auto">
              <div className="h-auto bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col items-start justify-center">
                <img src={work1} alt="Data Cleaning and Transformation for University Enrollment Data" className="w-full rounded-t-lg" />
                <div className="text-left mt-4">
                  <h3 className="text-2xl justify-center font-bold">
                    Data Cleaning and Transformation for University Enrollment Data
                  </h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Designed and implemented an ETL pipeline to clean and standardize student enrollment data from CSV and spreadsheet sources. Automated data cleaning tasks and loaded processed data into a PostgreSQL database for reporting and analysis.                  </p>
                  {/* Technologies Used */}
                  <div className="mt-4">
                    <h4 className="text-xl font-semibold justify-center mb-2">Technologies Used:</h4>
                    <div className="bg-white p-4 rounded-lg flex gap-6 justify-center items-center">
                      <img src={PythonLogo} alt="Python Logo" className="w-12 h-12" />
                      <img src={PandasLogo} alt="Pandas Logo" className="w-12 h-12" />
                      <img src={ETL} alt="ETL Logo" className="w-12 h-12" />
                      <img src={PostgreSQL} alt="PostgreSQL Logo" className="w-12 h-12" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
