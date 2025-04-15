import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import { FaLinkedin, FaGlobe } from "react-icons/fa"; // Import LinkedIn and Globe icons
import Title from '../layouts/Title';
import { DSPYTHON,DEPYTHON, DEAWS, quote, AWS, DEDATACAMP } from "../../assets"; // Update if needed

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Testimonial = () => {
  const [dotActive, setDotActive] = useState(0);
  // const [currentImage, setCurrentImage] = useState(testimonialOne);

  // const images = [testimonialOne]; // Array of images
  const interval = 2500; // Interval time in milliseconds

  useEffect(() => {
    const timer = setInterval(() => {
      // setCurrentImage(prevImage => {
      //   // const nextIndex = (images.indexOf(prevImage) + 1) % images.length;
      //   // return images[nextIndex];
      // });
    }, interval);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => {
      setDotActive(next);
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
                color: "blue",
                background: "#000080",
                borderRadius: "50%",
                cursor: "pointer",
              }
            : {
                width: "12px",
                height: "12px",
                color: "blue",
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
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="MY Certifications" des="Certifications" />
      </div>
      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {/* Certification AWS Educate Introduction to Cloud 101 */}
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={AWS} // Dynamic image
                  alt="Testimonial"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    AWS Educate
                  </p>
                  <h3 className="text-2xl font-bold">
                    AWS Educate Introduction to Cloud 101
                  </h3>
                  <p className="text-base tracking-wide text-gray-500">
                    A foundational certification introducing the core concepts of cloud computing.
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div className="flex items-center gap-4"> {/* Increased gap for larger icons */}
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                      AWS Educate Introduction to Cloud 101 
                      </h3>
                      {/* LinkedIn icon with a link and larger size */}
                      <a
                        href="https://www.linkedin.com/posts/amemi-amir_aws-educate-introduction-to-cloud-101-was-activity-7305882185578737664-8Avj?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC3q3tsBDcsEo6yyUNSAgIGyiAMk6zlCqy0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700 text-3xl" // Adjusted size
                      >
                        <FaLinkedin />
                      </a>
                      {/* Web icon with a link and larger size */}
                      <a
                        href="https://www.credly.com/badges/51ed7e51-928c-490e-ad41-5fac4f9a7577/public_url"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700 text-3xl" // Adjusted size
                      >
                        <FaGlobe />
                      </a>
                    </div>
                   
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    Earners of this badge have completed the Cloud Computing 101 training and achieved the required scores on the post-course assessment. They have demonstrated the ability to create simple cloud applications in a virtual lab environment. They have shown a fundamental understanding of AWS cloud core services and understand the technical roles required for cloud success.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Associate Data Engineer */}
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={DEDATACAMP} // Dynamic image
                  alt="Associate Data Engineer"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    DataCamp
                  </p>
                  <h3 className="text-2xl font-bold">
                    Associate Data Engineer
                  </h3>
                  <p className="text-base tracking-wide text-gray-500">
                    A career track focused on real-world data engineering tools and workflows.
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div className="flex items-center gap-4"> {/* Increased gap for larger icons */}
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                      Associate Data Engineer Career Track 
                      </h3>
                      {/* LinkedIn icon with a link and larger size */}
                      <a
                        href="https://www.linkedin.com/posts/amemi-amir_dataengineering-certification-datacamp-activity-7301228415179706368-mGaq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC3q3tsBDcsEo6yyUNSAgIGyiAMk6zlCqy0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700 text-3xl" // Adjusted size
                      >
                        <FaLinkedin />
                      </a>
                      {/* Web icon with a link and larger size */}
                      <a
                        href="https://www.datacamp.com/completed/statement-of-accomplishment/track/b527e73269fd83ca423253b60739a73473412e8e"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700 text-3xl" // Adjusted size
                      >
                        <FaGlobe />
                      </a>
                    </div>
                   
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    This certification track covered key data engineering concepts including relational databases, data pipelines, data ingestion, cleaning, and cloud data storage solutions. Through hands-on projects, I gained experience using tools like SQL, Python, Shell, and data pipeline orchestration.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* New Testimonial: Data Engineering on AWS – Foundations */}
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={DEAWS} // Replace with your image if applicable
                  alt="Data Engineering on AWS – Foundations"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    AWS Training & Certification
                  </p>
                  <h3 className="text-2xl font-bold">
                    Data Engineering on AWS – Foundations
                  </h3>
                  <p className="text-base tracking-wide text-gray-500">
                    An in-depth course on modern cloud-based data engineering practices using AWS.
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div className="flex items-center gap-4"> {/* Increased gap for larger icons */}
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                        Data Engineering on AWS – Foundations
                      </h3>
                      {/* LinkedIn icon with a link and larger size */}
                      <a
                        href="https://www.linkedin.com/posts/amemi-amir_data-engineering-on-aws-foundations-activity-7310107139484594176-tuMa?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC3q3tsBDcsEo6yyUNSAgIGyiAMk6zlCqy0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700 text-3xl" // Adjusted size
                      >
                        <FaLinkedin />
                      </a>
                    </div>
                   
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                  This certification explored core principles of data engineering in the AWS ecosystem. It included hands-on knowledge in  Data discovery and AWS data services, Orchestration and automation of data pipelines,  Security, monitoring, and compliance in data workflows, Infrastructure as Code (IaC) and CI/CD integrations, Cost optimization strategies and networking for scalable data systems  

Cloud-based data engineering is revolutionizing the way organizations scale and manage data—this course provided the practical and architectural skills needed to build efficient and secure data solutions on AWS.s.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Python Project for Data Engineering   */}
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={DEPYTHON} // Dynamic image
                  alt="Testimonial"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    Coursera • Authorized by IBM 
                  </p>
                  <h3 className="text-2xl font-bold">
                    Python Project for Data Engineering  
                  </h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Hands-on certification focused on real-world Python data engineering techniques.
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div className="flex items-center gap-4"> {/* Increased gap for larger icons */}
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                        Python Project for Data Engineering
                      </h3>
                      {/* LinkedIn icon with a link and larger size */}
                      <a
                        href="https://www.linkedin.com/posts/amemi-amir_python-dataengineering-certification-activity-7289205438049325056-HJbD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC3q3tsBDcsEo6yyUNSAgIGyiAMk6zlCqy0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700 text-3xl" // Adjusted size
                      >
                        <FaLinkedin />
                      </a>
                      {/* Web icon with a link and larger size */}
                      <a
                        href="https://www.credly.com/badges/b7d47818-0e18-4fa7-9716-3eb17ec76ca5/public_url"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700 text-3xl" // Adjusted size
                      >
                        <FaGlobe />
                      </a>
                    </div>
                    
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">                   
                    This certification demonstrates foundational Python skills in the context of data engineering. It focused on real-world applications, including  Extracting data from various sources using APIs and web scraping, Working with diverse data formats such as JSON, CSV, and databases  , Cleaning, transforming, and storing data efficiently, Applying automation and scripting for data collection and processing pipelines.  This project-based course solidified practical Python capabilities for managing and engineering data pipelines in modern data workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Python for Data Science and AI     */}
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={DSPYTHON} // Dynamic image
                  alt="Testimonial"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    Coursera • Authorized by IBM 
                  </p>
                  <h3 className="text-2xl font-bold">
                    Python for Data Science and AI  
                  </h3>
                  <p className="text-base tracking-wide text-gray-500">
                    A comprehensive foundation in Python programming for data science and artificial intelligence applications.
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div className="flex items-center gap-4"> {/* Increased gap for larger icons */}
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                        Python for Data Science and AI
                      </h3>
                      {/* LinkedIn icon with a link and larger size */}
                      <a
                        href="https://www.linkedin.com/posts/amemi-amir_python-datascience-ai-activity-7250815911736074241-lyhi?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC3q3tsBDcsEo6yyUNSAgIGyiAMk6zlCqy0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700 text-3xl" // Adjusted size
                      >
                        <FaLinkedin />
                      </a>
                      {/* Web icon with a link and larger size */}
                      <a
                        href="https://www.credly.com/badges/2c9384be-18bf-4cd6-9217-f7d526c2dd9d/public_url"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700 text-3xl" // Adjusted size
                      >
                        <FaGlobe />
                      </a>
                    </div>
                    
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">                   
                    This certification focuses on equipping learners with essential Python programming skills tailored for data science and AI use cases. It covers Python fundamentals and core data structures, Control flow, functions, and object-oriented programming, Data analysis using libraries like Pandas and NumPy, Visualization tools such as Matplotlib and Seaborn, Applying Python to real-world data science and AI problems . This course laid the groundwork for building robust, data-driven applications and conducting insightful data analysis with Python.                   </p>
                </div>
              </div>
            </div>
          </div>
          
          
        </Slider>
      </div>
    </section>
  );
}

export default Testimonial;
