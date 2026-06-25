import React, { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CardProject from "../components/CardProject";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    id: 1,
    Img: "/works/AUPPNetworkingApp.png",
    Title: "AUPP Alumni Networking App",
    Description: "Developed an API-first Alumni Networking platform for AUPP. Features a robust role-based permission system and full CI/CD pipeline on AWS.",
    Link: "https://alumniconnect.aupp.edu.kh/login",
    Github: "Private",
    TechStack: ["Next.js", "Node.js", "Tailwind", "AWS"],
    Features: ["Role-based Access Control", "CI/CD Pipeline", "Alumni Directory", "Event Management"],
  },
  {
    id: 2,
    Img: "/works/screenwise0.png",
    Title: "ScreenWise — AI HR Screening",
    Description: "Top 3 award winner in ACTSmart Incubation Program. AI-powered HR screening platform that automates resume screening and candidate ranking.",
    Link: "https://www.screenwisekh.com",
    Github: "Private",
    TechStack: ["Vue.js", "Python", "Flask", "AI"],
    Features: ["AI Resume Screening", "Candidate Ranking", "Auto Scheduling", "HR Dashboard"],
  },
  {
    id: 3,
    Img: "/works/badminton.png",
    Title: "SmashIt — Badminton Booking SaaS",
    Description: "A comprehensive SaaS platform for badminton club owners to manage multiple branches and courts with a robust multi-role system.",
    Link: "https://badmintonzone.camnexa.com",
    Github: "Private",
    TechStack: ["Next.js", "NestJS", "PostgreSQL", "AWS"],
    Features: ["Multi-branch Mgmt", "Court Grid", "4 Role Types", "Real-time Booking"],
  },
  {
    id: 4,
    Img: "/works/ebooksomnorng.png",
    Title: "Ebook Somnorng",
    Description: "A modern ebook marketplace to explore free and premium books with a sleek, user-friendly interface and admin management system.",
    Link: "https://ebooksomnorng.com",
    Github: "Private",
    TechStack: ["Next.js", "Supabase", "NestJS", "Vercel"],
    Features: ["Ebook Marketplace", "Admin Updates", "Interactive Reader", "User Design"],
  },
  {
    id: 5,
    Img: "/works/expense_tracker.png",
    Title: "Financial Management System",
    Description: "Streamlined tool for personal budget management and financial tracking with interactive dashboards and detailed reports.",
    Link: "#",
    Github: "https://github.com/vaungsophal/Expense-Tracker-App.git",
    TechStack: ["Python", "SQLite"],
    Features: ["Expense Tracking", "Budget Planning", "Dashboards", "Reports"],
  },
  {
    id: 6,
    Img: "https://s3-alpha.figma.com/hub/file/5133548925/6dcf8298-fd72-4aba-a023-a5298b36b990-cover.png",
    Title: "Task Manager Application",
    Description: "A powerful tool to organise and manage tasks effectively with real-time notifications and team collaboration features.",
    Link: "https://task-manager-pol.vercel.app/",
    Github: null,
    TechStack: ["React", "Next.js", "Firebase"],
    Features: ["Notifications", "Task Categories", "Drag & Drop", "Collaboration"],
  },
  {
    id: 7,
    Img: "https://github.com/sophal-vaung/me/blob/main/e9tzyh9m.png?raw=true",
    Title: "DDoS Detection System",
    Description: "Machine learning-based system for detecting and classifying DDoS attacks with real-time traffic analysis and threat visualisation.",
    Link: "https://vaungsophal-ddos-detection.streamlit.app/",
    Github: null,
    TechStack: ["Python", "Streamlit", "ML"],
    Features: ["Traffic Analysis", "Attack Classification", "ML Models", "Threat Visual"],
  },
];

const CARD_WIDTH = 340; // px — matches the natural card width
const GAP = 20;

const Projects = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    AOS.init({ once: true, duration: 600 });
  }, []);

  const getSidePadding = () => {
    if (window.innerWidth >= 1024) return 64;  // lg:px-16
    if (window.innerWidth >= 640) return 48;   // sm:px-12
    return 24;                                  // px-6
  };

  const [sidePadding, setSidePadding] = useState(getSidePadding);

  useEffect(() => {
    const onResize = () => setSidePadding(getSidePadding());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const updateState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
    setActiveIndex(Math.round(el.scrollLeft / (CARD_WIDTH + GAP)));
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateState, { passive: true });
    updateState();
    return () => el.removeEventListener("scroll", updateState);
  }, [updateState]);

  const scrollBy = (dir) => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -(CARD_WIDTH + GAP) : (CARD_WIDTH + GAP), behavior: "smooth" });
  };

  const scrollToIndex = (i) => {
    scrollRef.current?.scrollTo({ left: i * (CARD_WIDTH + GAP), behavior: "smooth" });
  };

  return (
    <section className="relative bg-background overflow-hidden" id="Projects">
      <div className="pt-16 sm:pt-24 pb-16 sm:pb-24">

        {/* Header */}
        <div className="text-center mb-12 px-6 sm:px-12 lg:px-16" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-4">
            FEATURED <span className="text-accent">PROJECTS</span>
          </h2>
          <p className="text-grayText max-w-xl mx-auto text-sm font-bold uppercase tracking-widest">
            Things I've built that I'm proud of
          </p>
        </div>

        {/* Counter + arrows */}
        <div className="flex items-center justify-between px-6 sm:px-12 lg:px-16 mb-6" data-aos="fade-up" data-aos-delay="80">
          <span className="text-grayText text-xs font-bold uppercase tracking-widest">
            <span className="text-white font-black">{String(activeIndex + 1).padStart(2, "0")}</span>
            {" / "}{String(projects.length).padStart(2, "0")}
          </span>
          <div className="flex gap-3">
            <button
              onClick={() => scrollBy("left")}
              disabled={!canScrollLeft}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-accent hover:text-accent transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollBy("right")}
              disabled={!canScrollRight}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-accent hover:text-accent transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal scroll */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto pb-4"
          style={{
            gap: `${GAP}px`,
            scrollSnapType: "x mandatory",
            scrollPaddingLeft: `${sidePadding}px`,
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            paddingLeft: `${sidePadding}px`,
            paddingRight: `${sidePadding}px`,
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              style={{ minWidth: `${CARD_WIDTH}px`, scrollSnapAlign: "start" }}
              className="flex"
            >
              <CardProject {...project} />
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className={`rounded-full transition-all duration-300 ${
                i === activeIndex ? "w-6 h-2 bg-accent" : "w-2 h-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
