import React, { useState, useEffect, useCallback, memo } from "react"
import { Github, Linkedin, Mail, ExternalLink, Instagram, Send, FileText } from "lucide-react"
import AOS from 'aos'
import 'aos/dist/aos.css'

// Memoized Components
const SocialIcon = memo(({ Icon, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-accent hover:border-accent group transition-all duration-300"
  >
    <Icon className="w-4 h-4 text-white group-hover:text-background transition-colors" />
  </a>
));

const TECH_STACK = [
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
  { icon: "tech/nodejs.svg", language: "Node JS" },
  { icon: "tech/python.png", language: "Python" },
  { icon: "https://favtutor.com/resources/images/uploads/Java_logo.png", language: "Java" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", language: "MySQL" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", language: "PostgreSQL" },
  { icon: "tech/firebase.svg", language: "Firebase" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", language: "AWS" },
  { icon: "tech/vercel.svg", language: "Vercel" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", language: "Git" },
  { icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", language: "Postman" },
  { icon: "https://www.pngall.com/wp-content/uploads/13/Figma-Logo-PNG-Photo.png", language: "Figma" },
];

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  const [currentTech, setCurrentTech] = useState(0);

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      disable: "mobile",
    });
    setIsLoaded(true);

    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % TECH_STACK.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background text-white font-sans overflow-hidden select-none" id="Home">
      <div className={`relative z-10 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>

        {/* Header Section - Inspired by the reference image */}
        <header className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pt-6 sm:pt-12 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
          <div className="text-sm font-bold tracking-widest text-white/50" data-aos="fade-right">
            SOPHAL VAUNG
          </div>

          <div className="flex items-center gap-3" data-aos="fade-down" data-aos-delay="200">
            <SocialIcon Icon={Send} href="https://t.me/pol_g0o" />
            <SocialIcon Icon={Github} href="https://github.com/vaungsophal" />
            <SocialIcon Icon={Linkedin} href="https://www.linkedin.com/in/sophal-vaung/" />
          </div>

          <div className="text-sm font-medium tracking-wider text-white/50 hover:text-white transition-colors cursor-pointer" data-aos="fade-left">
            2023451VAUNG@AUPP.EDU.KH
          </div>
        </header>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 min-h-[calc(100vh-100px)] flex flex-col justify-center pt-4 pb-12 sm:py-20 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24">

            {/* Left: Image Card */}
            <div className="w-full lg:w-[450px]" data-aos="fade-right" data-aos-delay="400">
              <div className="relative group">
                <div className="absolute -inset-1 bg-accent/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-[#161616] border border-white/5 shadow-2xl">
                  {/* Background overlay for the image like in reference */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>

                  {/* Using the user's photo from the assets if exists, otherwise a placeholder */}
                  <img
                    src="/hero.png"
                    alt="Sophal Vaung"
                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />

                  {/* Card Footer Text */}
                  <div className="absolute bottom-8 left-8 z-20">
                    <h3 className="text-sm font-semibold tracking-tight text-white/70">@vaungsophal</h3>
                    <p className="text-green-500/70 text-sm font-semibold tracking-widest mt-1">Open for work</p>
                    {/* <p className="text-green-500/70 text-sm font-sm tracking-widest mt-1">Let's collaborate and build something amazing together</p> */}
                  </div>

                  {/* Floating Icon Badges */}
                  <div className="absolute top-8 left-8 z-20 group/tech-badge cursor-pointer">
                    <div className="absolute inset-0 bg-accent/20 blur-xl opacity-0 group-hover/tech-badge:opacity-100 transition-opacity duration-500"></div>
                    <img
                      key={currentTech}
                      src={TECH_STACK[currentTech].icon}
                      alt={TECH_STACK[currentTech].language}
                      className="relative z-10 w-10 h-10 md:w-12 md:h-12 object-contain drop-shadow-2xl animate-fade-in-up transition-all duration-500 group-hover/tech-badge:scale-110 group-hover/tech-badge:brightness-125"
                    />
                  </div>

                  <div className="absolute bottom-1/2 right-6 translate-y-1/2 z-20 flex flex-col gap-4">
                    <a href="https://github.com/vaungsophal" target="_blank" rel="noopener noreferrer" className="p-3 bg-black/40 backdrop-blur-md rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 group">
                      <Github className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
                    </a>
                    <a href="https://www.linkedin.com/in/sophal-vaung/" target="_blank" rel="noopener noreferrer" className="p-3 bg-black/40 backdrop-blur-md rounded-lg border border-white/10 hover:border-[#0077b5]/20 transition-all duration-300 group">
                      <Linkedin className="w-5 h-5 text-[#0077b5]/50 group-hover:text-[#0077b5] transition-colors" />
                    </a>
                    <a href="https://t.me/pol_g0o" target="_blank" rel="noopener noreferrer" className="p-3 bg-black/40 backdrop-blur-md rounded-lg border border-white/10 hover:border-[#229ED9]/20 transition-all duration-300 group">
                      <Send className="w-5 h-5 text-[#229ED9]/50 group-hover:text-[#229ED9] transition-colors" />
                    </a>
                  </div>
                </div>
              </div>
            </div>



            {/* Right: Content Text */}
            <div className="w-full flex-1 space-y-8 text-center lg:text-left">
              <div className="space-y-3">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] tracking-tighter" data-aos="fade-up" data-aos-delay="600">
                  Hello, I'm <span className="text-accent">Sophal VAUNG</span>,
                  <br />
                  <span className="text-white/40">Software Developer</span>
                  <br />
                  Based in <span className="text-white">Phnom Penh.</span>
                </h1>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 sm:gap-12" data-aos="fade-up" data-aos-delay="800">
                <div className="flex items-baseline gap-4">
                  <span className="text-4xl md:text-5xl font-black text-accent animate-pulse-glow">4th Year</span>
                  <span className="text-white/40 font-medium tracking-widest uppercase text-[10px] sm:text-xs">University Student</span>
                </div>

                <a
                  href="https://drive.google.com/file/d/1LIXG-Eobjfi479vtVgMC-IKl8Zyjpfoo/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-8 py-4 bg-white/5 border border-white/10 rounded-xl hover:border-accent/50 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-accent translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500"></div>
                  <div className="relative flex items-center gap-3">
                    <FileText className="w-5 h-5 text-white group-hover:text-background transition-colors" />
                    <span className="text-sm font-bold tracking-widest group-hover:text-background transition-colors uppercase">DOWNLOAD CV</span>
                  </div>
                </a>
              </div>


              {/* Mobile Tech Stack Marquee */}
              <div className="w-full block lg:hidden overflow-hidden py-4" data-aos="fade-up" data-aos-delay="1000">
                <div className="flex relative w-full max-w-lg mask-gradient-x">
                  <div className="flex animate-marquee whitespace-nowrap gap-12 pr-12">
                    {TECH_STACK.map((tech, index) => (
                      <div key={index} className="flex items-center justify-center w-12 h-12 transition-all duration-300 hover:scale-110 cursor-pointer">
                        <img
                          src={tech.icon}
                          alt={tech.language}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap gap-12 pr-12">
                    {TECH_STACK.map((tech, index) => (
                      <div key={index} className="flex items-center justify-center w-12 h-12 transition-all duration-300 hover:scale-110 cursor-pointer">
                        <img
                          src={tech.icon}
                          alt={tech.language}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Desktop Tech Stack Marquee */}
              <div className="w-full hidden lg:block overflow-hidden py-10" data-aos="fade-up" data-aos-delay="1000">
                <div className="flex relative w-full max-w-lg mask-gradient-x">
                  <div className="flex animate-marquee whitespace-nowrap gap-12 pr-12">
                    {TECH_STACK.map((tech, index) => (
                      <div key={index} className="flex items-center justify-center w-12 h-12 transition-all duration-300 hover:scale-110 cursor-pointer">
                        <img
                          src={tech.icon}
                          alt={tech.language}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap gap-12 pr-12">
                    {TECH_STACK.map((tech, index) => (
                      <div key={index} className="flex items-center justify-center w-12 h-12 transition-all duration-300 hover:scale-110 cursor-pointer">
                        <img
                          src={tech.icon}
                          alt={tech.language}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Decorative Text - Large subtle text at the bottom or side */}
        <div className="fixed bottom-0 right-0 p-8 opacity-[0.02] pointer-events-none select-none z-0">
          <h2 className="text-[15rem] font-black leading-none tracking-tighter">SOPHAL</h2>
        </div>
      </div>
    </div>
  );
};

export default memo(Home);