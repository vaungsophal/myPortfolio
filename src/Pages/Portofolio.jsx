import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardProject from "../components/CardProject";
import TechStackIcon from "../components/TechStackIcon";
import AOS from "aos";
import "aos/dist/aos.css";
import Certificate from "../components/Certificate";
import { Code, Award, Boxes } from "lucide-react";

// ToggleButton Component
const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="px-3 py-1.5 text-slate-300 hover:text-white text-sm font-medium transition-all duration-300 ease-in-out flex items-center gap-2 bg-white/5 hover:bg-white/10 rounded-md border border-white/10 hover:border-white/20 backdrop-blur-sm group relative overflow-hidden"
  >
    <span className="relative z-10 flex items-center gap-2">
      {isShowingMore ? "See Less" : "See More"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`transition-transform duration-300 ${isShowingMore ? "group-hover:-translate-y-0.5" : "group-hover:translate-y-0.5"
          }`}
      >
        <polyline points={isShowingMore ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}></polyline>
      </svg>
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500/50 transition-all duration-300 group-hover:w-full"></span>
  </button>
);

// TabPanel Component
function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const techStacks = [
  { icon: "python.png", language: "Python" },
  { icon: "https://favtutor.com/resources/images/uploads/Java_logo.png", language: "Java" },
  { icon: "html.svg", language: "HTML" },
  { icon: "css.svg", language: "CSS" },
  { icon: "tailwind.svg", language: "Tailwind CSS" },
  { icon: "javascript.svg", language: "JavaScript" },
  { icon: "typescript.svg", language: "TypeScript" },
  { icon: "reactjs.svg", language: "ReactJS" },
  { icon: "vite.svg", language: "Vite" },
  { icon: "https://www.wpgraphql.com/_next/image?url=%2Flogos%2Flogo-nextjs.png&w=384&q=75", language: "Next JS" },
  { icon: "nodejs.svg", language: "Node JS" },
  { icon: "bootstrap.svg", language: "Bootstrap" },
  { icon: "firebase.svg", language: "Firebase" },
  { icon: "vercel.svg", language: "Vercel" },
  { icon: "https://www.pngall.com/wp-content/uploads/13/Figma-Logo-PNG-Photo.png", language: "Figma" },
  // { icon: "nextjs.svg", language: "Next JS" },
  // { icon: "typescript.svg", language: "Angular" },
  // { icon: "vuejs.svg", language: "Vue JS" },
  // { icon: "mongodb.svg", language: "MongoDB" },
  // { icon: "mysql.svg", language: "MySQL" },
  // { icon: "postgresql.svg", language: "PostgreSQL" },
  // { icon: "sqlite.svg", language: "SQLite"},
  // { icon: "SweetAlert.svg", language: "SweetAlert2" }
  // { icon: "MUI.svg", language: "Material UI" },
];

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const isMobile = window.innerWidth < 768;
  const initialItems = isMobile ? 4 : 6;

  // Static data for projects
  const projects = [
    {
      id: 1,
      Img: "https://s3-alpha.figma.com/hub/file/5133548925/6dcf8298-fd72-4aba-a023-a5298b36b990-cover.png",
      Title: "Task Manager Application",
      Description: "The Task Manager Application is a simple yet powerful tool designed to help users organize and manage tasks effectively. This application provides a user-friendly platform to create, assign, and track tasks, ensuring that users stay on top of their daily responsibilities.",
      Link: "https://task-manager-pol.vercel.app/",
      TechStack: ["Tailwind", "CSS", "TypeScript", "React", "Next.js", "Firebase"],
      Features: [
        "Task creation and management",
        "Task prioritization and deadlines",
        "User authentication and authorization",
        "Automatic email notifications for users",
        "Real-time notifications and reminders",
        "Cross-platform support (Web & Mobile)",
        "Search and filtering options",
      ],
    },
    {
      id: 2,
      Img: "https://tairo.cssninja.io/img/screens/dashboards-banking-2.png",
      Title: "Financail Management System",
      Description: "The Expense Tracker Application is a streamlined tool designed to assist users in overcoming challenges with financial management. This application provides a user-friendly platform to track expenses, manage budgets, and gain better control over personal or organizational finances.",
      Link: "https://github.com/vaungsophal/Expense-Tracker-App.git",
      TechStack: ["Python", "SQLite", "Tkinter"],
      Features: [
        "Expense Logging & Categorization",
        "Budget Management",
        "Secure Financial Records",
        "Interactive Dashboard",
        "Multi-Device Compatibility",
        "Recurring Expense Tracking",
        "Export & Report Generation",
      ],
    },
    {
      id: 3,
      Img: "https://github.com/sophal-vaung/me/blob/main/e9tzyh9m.png?raw=true",
      Title: "DDoS Detection and Mitigation",
      Description: "This project implements a machine learning-based system for detecting and classifying Distributed Denial of Service (DDoS) attacks. The system features an interactive Streamlit interface for real-time analysis of network traffic data, making it simple to differentiate between benign and malicious patterns.",
      Link: "https://vaungsophal-ddos-detection.streamlit.app/",
      TechStack: ["Python", "Skitlearn", "Tensorflow", "Streamlit"],
      Features: [
        "Real-Time Network Traffic Analysis",
        "Machine Learning-Based Anomaly Detection",
        "Automated DDoS Attack Classification",
        "User-Friendly Streamlit Dashboard",
        "High-Accuracy Detection Workflows",
      ],
    },
  ];
  // Static data for certificates
  const certificates = [
    // web dev certificates
    { Img: "https://github.com/sophal-vaung/me/blob/main/cert-web_page-0001.jpg?raw=true" },
    { Img: "https://github.com/sophal-vaung/me/blob/main/cert-js_page-0001%20(1).jpg?raw=true" },
    { Img: "https://github.com/sophal-vaung/me/blob/main/cert-frontend_page-0001.jpg?raw=true" },
    { Img: "https://github.com/sophal-vaung/me/blob/main/cert-js_page-0001.jpg?raw=true" },
    // programming certificates
    { Img: "https://github.com/sophal-vaung/me/blob/main/cert-py.png?raw=true" },
    { Img: "https://udemy-certificate.s3.amazonaws.com/image/UC-1a738d82-949a-45bf-941e-0d44e7ae55ac.jpg?v=1726725571000" },
  ];

  useEffect(() => {
    AOS.init({ once: false });
    localStorage.setItem("projects", JSON.stringify(projects)); // Save projects to localStorage
  }, []);

  useEffect(() => {
    localStorage.setItem("certificates", JSON.stringify(certificates));
  }, [certificates]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleShowMore = (type) => {
    if (type === "projects") {
      setShowAllProjects((prev) => !prev);
    } else {
      setShowAllCertificates((prev) => !prev);
    }
  };

  const displayedProjects = showAllProjects ? projects : projects.slice(0, initialItems);
  const displayedCertificates = showAllCertificates ? certificates : certificates.slice(0, initialItems);

  return (
    <div className="px-[5%] sm:px-[10%] lg:px-[10%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden" id="Portofolio">
      <div className="text-center pb-10" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          Portfolio Showcase
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Explore my journey through projects, certifications, and technical expertise.
        </p>
      </div>

      <Box sx={{ width: "100%" }}>
        <AppBar position="static" elevation={0} sx={{ bgcolor: "transparent", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "20px" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="fullWidth"
            sx={{
              minHeight: "70px",
              "& .MuiTab-root": {
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontWeight: "600",
                color: "#94a3b8",
                textTransform: "none",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                padding: "20px 0",
                zIndex: 1,
                margin: "8px",
                borderRadius: "12px",
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: "rgba(139, 92, 246, 0.1)",
                  transform: "translateY(-2px)",
                },
                "&.Mui-selected": {
                  color: "#fff",
                  background: "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))",
                  boxShadow: "0 4px 15px -3px rgba(139, 92, 246, 0.2)",
                },
              },
            }}
          >
            <Tab icon={<Code className="mb-2 w-5 h-5 transition-all duration-300" />} label="Projects" {...a11yProps(0)} />
            <Tab icon={<Award className="mb-2 w-5 h-5 transition-all duration-300" />} label="Certificates" {...a11yProps(1)} />
            <Tab icon={<Boxes className="mb-2 w-5 h-5 transition-all duration-300" />} label="Tech Stack" {...a11yProps(2)} />
          </Tabs>
        </AppBar>

        <SwipeableViews axis={theme.direction === "rtl" ? "x-reverse" : "x"} index={value} onChangeIndex={setValue}>
          {/* Projects Tab */}
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
                {displayedProjects.map((project, index) => (
                  <div key={project.id} data-aos="fade-up" data-aos-duration="1000">
                    <CardProject
                      Img={project.Img}
                      Title={project.Title}
                      Description={project.Description}
                      Link={project.Link}
                      id={project.id}
                    />
                  </div>
                ))}
              </div>
            </div>
            {projects.length > initialItems && (
              <div className="mt-6 w-full flex justify-start">
                <ToggleButton onClick={() => toggleShowMore("projects")} isShowingMore={showAllProjects} />
              </div>
            )}
          </TabPanel>

          {/* Certificates Tab */}
          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 gap-4">
                {displayedCertificates.map((certificate, index) => (
                  <div key={index} data-aos="fade-up" data-aos-duration="1000">
                    <Certificate ImgSertif={certificate.Img} />
                  </div>
                ))}
              </div>
            </div>
            {certificates.length > initialItems && (
              <div className="mt-6 w-full flex justify-start">
                <ToggleButton onClick={() => toggleShowMore("certificates")} isShowingMore={showAllCertificates} />
              </div>
            )}
          </TabPanel>

          {/* Tech Stack Tab */}
          <TabPanel value={value} index={2} dir={theme.direction}>
            <div className="mx-auto flex justify-center items-center overflow-hidden pb-[5%]">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-8 gap-5">
                {techStacks.map((stack, index) => (
                  <div key={index} data-aos="fade-up" data-aos-duration="1000">
                    <TechStackIcon TechStackIcon={stack.icon} Language={stack.language} />
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  );
}