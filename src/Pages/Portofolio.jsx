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
import AOS from "aos";
import "aos/dist/aos.css";
import Certificate from "../components/Certificate";
import TechStackIcon from "../components/TechStackIcon";
import { Code, Award, Boxes } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

// ToggleButton Component
const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="px-4 py-2 bg-[#161616] border border-white/10 hover:border-accent text-white text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 rounded-md hover:scale-105 flex items-center gap-3 group"
  >
    {isShowingMore ? "SEE LESS" : "SEE MORE"}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-300 ${isShowingMore ? "rotate-180" : ""}`}
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  </button>
);

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
      className={value === index ? "animate-fadeIn" : "opacity-0"}
    >
      <Box sx={{ p: { xs: 1, sm: 3 }, display: value === index ? "block" : "none" }}>
        <Typography component="div">{children}</Typography>
      </Box>
    </div>
  );
}

const techStacks = [
  {
    name: "Frontend Ecosystem",
    items: [
      { icon: "tech/html.svg", language: "HTML" },
      { icon: "tech/css.svg", language: "CSS" },
      { icon: "tech/javascript.svg", language: "JavaScript" },
      { icon: "tech/typescript.svg", language: "TypeScript" },
      { icon: "tech/reactjs.svg", language: "ReactJS" },
      { icon: "tech/nextjss.png", language: "Next JS" },
      { icon: "tech/vite.svg", language: "Vite" },
      { icon: "tech/tailwind.svg", language: "Tailwind CSS" },
      { icon: "tech/bootstrap.svg", language: "Bootstrap" },
      { icon: "tech/MUI.svg", language: "Material UI" },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", language: "Vue.js" },
    ]
  },
  {
    name: "Backend & Services",
    items: [
      { icon: "tech/nodejs.svg", language: "Node JS" },
      { icon: "tech/python.png", language: "Python" },
      { icon: "https://favtutor.com/resources/images/uploads/Java_logo.png", language: "Java" },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", language: "MySQL" },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", language: "PostgreSQL" },
      { icon: "tech/firebase.svg", language: "Firebase" },
    ]
  },
  {
    name: "Cloud & Tools",
    items: [
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", language: "AWS" },
      { icon: "tech/vercel.svg", language: "Vercel" },
      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", language: "Git" },
      { icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", language: "Postman" },
      { icon: "https://www.pngall.com/wp-content/uploads/13/Figma-Logo-PNG-Photo.png", language: "Figma" },
    ]
  }
];

const projects = [
  {
    id: 1,
    Img: "/works/AUPPNetworkingApp.png",
    Title: "AUPP Alumni Networking App",
    Description: "Developed an API-first Alumni Networking platform for AUPP. Features a robust role-based permission system and full CI/CD pipeline.",
    Link: "https://connectable.aurrasms.com/",
    Github: "Private",
    TechStack: ["Next.js", "Node.js", "Tailwind", "AWS"],
    Features: ["Role-based Access Control", "CI/CD Pipeline Integration", "Alumni Directory", "Event Management"],
  },
  {
    id: 2,
    Img: "/works/screenwise0.png",
    Title: "ScreenWise - AI HR Screening",
    Description: "Top 3 award winner in ACTSmart Incubation Program. AI-powered HR screening platform optimized for efficiency.",
    Link: "https://www.screenwisekh.com",
    Github: "Private",
    TechStack: ["Vue.js", "Python", "AI"],
    Features: ["AI-based Resume Screening", "Candidate Ranking", "Automated Interview Scheduling", "HR Dashboard"],
  },
  {
    id: 3,
    Img: "/works/badminton.png",
    Title: "SmashIt - Badminton Booking SaaS",
    Description: "A comprehensive SaaS platform for badminton club owners to manage multiple branches and courts seamlessly. Features a robust multi-role system.",
    Link: "https://badmintonzone.camnexa.com",
    Github: "Private",
    TechStack: ["Next.js", "Node.js", "PostgreSQL", "Tailwind", "NestJS", "ABA Payway", "AWS",],
    Features: ["Multi-branch Management", "Court Availability Grid", "Roles: Admin, Owner, Manager, Customer", "Real-time Booking System"],
  },
  {
    id: 4,
    Img: "/works/ebooksomnorng.png",
    Title: "Ebook Somnorng",
    Description: "A modern ebook marketplace to explore free and premium books. Features a manual admin update system and a sleek, user-friendly interface.",
    Link: "https://ebooksomnorng.com",
    Github: "Private",
    TechStack: ["Next.js", "Supabase", "Node.js", "Tailwind", "NestJS", "Cloudflare", "Vercel", "Framer Motion"],
    Features: ["Ebook Marketplace", "Manual Admin Updates", "Interactive Reader UI", "User-centric Design"],
  },
  {
    id: 5,
    Img: "/works/expense_tracker.png",
    Title: "Financial Management System",
    Description: "Streamlined tool for budget management and financial tracking with interactive dashboards.",
    Link: "#",
    Github: "https://github.com/vaungsophal/Expense-Tracker-App.git",
    TechStack: ["Python", "SQLite"],
    Features: ["Expense Tracking", "Budget Planning", "Interactive Dashboards", "Financial Reports"],
  },
  {
    id: 6,
    Img: "https://s3-alpha.figma.com/hub/file/5133548925/6dcf8298-fd72-4aba-a023-a5298b36b990-cover.png",
    Title: "Task Manager Application",
    Description: "A powerful tool to organize and manage tasks effectively with real-time notifications.",
    Link: "https://task-manager-pol.vercel.app/",
    TechStack: ["React", "Next.js", "Firebase"],
    Features: ["Real-time Notifications", "Task Categorization", "Drag and Drop Interface", "Team Collaboration"],
  },
  {
    id: 7,
    Img: "https://github.com/sophal-vaung/me/blob/main/e9tzyh9m.png?raw=true",
    Title: "DDoS Detection system",
    Description: "Machine learning-based system for detecting and classifying DDoS attacks with real-time traffic analysis.",
    Link: "https://vaungsophal-ddos-detection.streamlit.app/",
    TechStack: ["Python", "Streamlit"],
    Features: ["Real-time Traffic Analysis", "Attack Classification", "Machine Learning Models", "Threat Visualization"],
  }
];


const certificates = [
  { Img: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~0SRSJN14JJOY/CERTIFICATE_LANDING_PAGE~0SRSJN14JJOY.jpeg" },
  { Img: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~SADZDPITNL5Z/CERTIFICATE_LANDING_PAGE~SADZDPITNL5Z.jpeg" },
  { Img: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~B0B3L1H94IUP/CERTIFICATE_LANDING_PAGE~B0B3L1H94IUP.jpeg" },
  { Img: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~19FYUQLYOZA1/CERTIFICATE_LANDING_PAGE~19FYUQLYOZA1.jpeg" },
  { Img: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~G6BCJ812GQFD/CERTIFICATE_LANDING_PAGE~G6BCJ812GQFD.jpeg" },
  { Img: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~AE8KHVKSIX5U/CERTIFICATE_LANDING_PAGE~AE8KHVKSIX5U.jpeg" },
  { Img: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~FT1VAZ7LA7KM/CERTIFICATE_LANDING_PAGE~FT1VAZ7LA7KM.jpeg" },
  { Img: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~MGOEVLUDSORI/CERTIFICATE_LANDING_PAGE~MGOEVLUDSORI.jpeg" },
  { Img: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~ELI4DFDPGW61/CERTIFICATE_LANDING_PAGE~ELI4DFDPGW61.jpeg" },
  { Img: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~LWXRJ511PJXU/CERTIFICATE_LANDING_PAGE~LWXRJ511PJXU.jpeg" },
  { Img: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~V90JCMD2NRGQ/CERTIFICATE_LANDING_PAGE~V90JCMD2NRGQ.jpeg" },
  { Img: "/certificates/ExchangeProgram_RAS2025_SG.jpg" },
  { Img: "/certificates/AWS_Cloud_Architecting.jpg" },
  { Img: "/certificates/AWS_Cloud_Foundations.jpg" },
];

function FullWidthTabs() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [value, setValue] = useState(0);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const initialItems = 6;
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 500,
      offset: 10,
      delay: 0,
    });
    const path = location.pathname;
    if (path === "/portfolio") {
      setValue(0);
      setTimeout(() => {
        document.getElementById("Portofolio").scrollIntoView({ behavior: 'smooth' });
        AOS.refresh();
      }, 100);
    } else if (path === "/certificate") {
      setValue(1);
      setTimeout(() => {
        document.getElementById("Portofolio").scrollIntoView({ behavior: 'smooth' });
        AOS.refresh();
      }, 100);
    } else if (path === "/tech") {
      setValue(2);
      setTimeout(() => {
        document.getElementById("Portofolio").scrollIntoView({ behavior: 'smooth' });
        AOS.refresh();
      }, 100);
    }
  }, [location.pathname]);

  useEffect(() => {
    const timer = setTimeout(() => {
      AOS.refresh();
    }, 300);
    return () => clearTimeout(timer);
  }, [value]);

  useEffect(() => {
    AOS.refresh();
  }, [showAllProjects, showAllCertificates]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const displayedProjects = showAllProjects ? projects : projects.slice(0, initialItems);
  const displayedCertificates = showAllCertificates ? certificates : certificates.slice(0, initialItems);

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 w-full pt-10 min-h-screen bg-background text-white" id="Portofolio">
      <div className="text-center mb-16" data-aos="fade-up">
        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-4">
          WORK <span className="text-accent">GALLERY</span>
        </h2>
        <p className="text-grayText max-w-xl mx-auto text-sm md:text-base font-bold uppercase tracking-widest text-xs">
          Crafting excellence through code and research
        </p>
      </div>

      <Box sx={{ width: "100%" }}>
        <AppBar position="static" elevation={0} sx={{ bgcolor: "transparent", borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="inherit"
            indicatorColor="primary"
            variant="fullWidth"
            sx={{
              minHeight: "80px",
              "& .MuiTabs-indicator": {
                backgroundColor: "#3b82f6",
                height: "4px",
                borderRadius: "2px",
                boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)",
              },
              "& .MuiTab-root": {
                fontSize: { xs: "0.7rem", md: "0.8rem" },
                fontWeight: "900",
                color: "rgba(255,255,255,0.4)",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                transition: "all 0.3s",
                "&:hover": { color: "#fff", textShadow: "0 0 10px rgba(59, 130, 246, 0.3)" },
                "&.Mui-selected": { color: "#3b82f6", textShadow: "0 0 10px rgba(59, 130, 246, 0.5)" },
              },
            }}
          >
            <Tab icon={<Code className="mb-1 w-4 h-4" />} label="PROJECTS" />
            <Tab icon={<Award className="mb-1 w-4 h-4" />} label="CERTIFICATES" />
            <Tab icon={<Boxes className="mb-1 w-4 h-4" />} label="TECH STACK" />
          </Tabs>
        </AppBar>

        <SwipeableViews axis={theme.direction === "rtl" ? "x-reverse" : "x"} index={value} onChangeIndex={setValue}>
          <TabPanel value={value} index={0}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
              {displayedProjects.map((project) => (
                <div key={project.id} data-aos="fade-up">
                  <CardProject {...project} />
                </div>
              ))}
            </div>
            {projects.length > initialItems && (
              <div className="mt-12 flex justify-center">
                <ToggleButton onClick={() => setShowAllProjects(!showAllProjects)} isShowingMore={showAllProjects} />
              </div>
            )}
          </TabPanel>

          <TabPanel value={value} index={1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              {displayedCertificates.length > 0 ? (
                displayedCertificates.map((certificate, index) => (
                  <div key={index} data-aos="fade-up">
                    <Certificate ImgSertif={certificate.Img} />
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-10">
                  <p className="text-grayText">No certificates found.</p>
                </div>
              )}
            </div>
            {certificates.length > initialItems && (
              <div className="mt-12 flex justify-center">
                <ToggleButton onClick={() => setShowAllCertificates(!showAllCertificates)} isShowingMore={showAllCertificates} />
              </div>
            )}
          </TabPanel>

          <TabPanel value={value} index={2}>
            <div className="space-y-16 pt-12 pb-20">
              {techStacks.map((group, index) => (
                <div key={index} className="space-y-8">
                  <div className="flex items-center gap-6" data-aos="fade-right">
                    <h3 className="text-lg font-black uppercase tracking-widest text-white">{group.name}</h3>
                    <div className="h-[1px] flex-grow bg-white/5"></div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {group.items.map((stack, idx) => (
                      <div key={idx} data-aos="zoom-in" data-aos-delay={idx * 10}>
                        <TechStackIcon TechStackIcon={stack.icon} Language={stack.language} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  );
}

export default React.memo(FullWidthTabs);