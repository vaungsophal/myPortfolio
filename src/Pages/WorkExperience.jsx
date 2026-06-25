import React, { useEffect } from "react";
import { MapPin, Calendar, ChevronRight, ExternalLink } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const experiences = [
  {
    id: 1,
    company: "Camma Microfinance Limited",
    logo: "/experiences/camma.png",
    role: "Digital Business Intern",
    type: "Internship · On-site",
    location: "Phnom Penh, Cambodia",
    period: "April 2026 — Present",
    color: "border-accent/30",
    dot: "bg-accent shadow-[0_0_14px_rgba(173,255,47,0.7)]",
    link: null,
    description:
      "Contributing to the development and design of business intelligence and aggressive sale reporting modules by working with the department's SQL server and reporting systems.",
    highlights: [
      "Business intelligence module development",
      "Aggressive sale reporting system design",
      "PHP, PostgreSQL, Docker, SQL Server",
      "Power BI dashboards & data visualization",
    ],
  },
  {
    id: 2,
    company: "American University of Phnom Penh",
    logo: "/experiences/aupp.png",
    role: "Web Application Developer",
    type: "Academic Project · Team Lead",
    location: "Phnom Penh, Cambodia",
    period: "Jan 2026 — March 2026",
    color: "border-blue-400/30",
    dot: "bg-blue-400 shadow-[0_0_14px_rgba(96,165,250,0.7)]",
    link: "https://connectable.aurrasms.com/",
    description:
      "Collaborated with a four-member team to build a community web application for AUPP students with six role-based access levels. Won 1st place in the university competition.",
    highlights: [
      "1st Place — AUPP University Competition",
      "6-level role-based access control system",
      "Next.js, NestJS, PostgreSQL, Docker, AWS",
      "Full CI/CD pipeline deployment",
    ],
  },
  {
    id: 3,
    company: "ScreenWise",
    logo: "/experiences/screenwise.png",
    role: "Co-Founder & Full Stack Developer / AI Engineer",
    type: "Startup · Full-time",
    location: "Phnom Penh, Cambodia",
    period: "June 2025 — Present",
    color: "border-purple-400/30",
    dot: "bg-purple-400 shadow-[0_0_14px_rgba(192,132,252,0.7)]",
    link: "https://www.screenwisekh.com",
    description:
      "Co-founded and led ScreenWise to a Top 3 award in the ACTSmart Incubation Program, earning USD 4,000 and a Singapore tech immersion trip. Designed the full platform architecture.",
    highlights: [
      "Top 3 — ACTSmart Incubation (USD 4,000 + SG immersion)",
      "Scalable backend: Flask & Node.js",
      "Frontend: Vue.js with RESTful API design",
      "AI-driven screening & candidate ranking engine",
    ],
  },
  {
    id: 4,
    company: "Freelance",
    logo: null,
    role: "Software Developer",
    type: "Freelance · Remote",
    location: "Cambodia & Remote",
    period: "Feb 2025 — Present",
    color: "border-orange-400/30",
    dot: "bg-orange-400 shadow-[0_0_14px_rgba(251,146,60,0.7)]",
    link: null,
    description:
      "Successfully delivered 2+ web development projects on time, handling everything from planning and design to implementation and deployment for clients.",
    highlights: [
      "2+ projects delivered end-to-end",
      "Python (Flask, Django), Next.js, Vue.js",
      "Node.js, full-stack architecture design",
      "Client management & agile execution",
    ],
  },
  {
    id: 5,
    company: "Sovannaphumi School",
    logo: null,
    role: "Part-Time English Language Teacher",
    type: "Part-time · On-site",
    location: "Phnom Penh, Cambodia",
    period: "July 2024 — April 2026",
    color: "border-pink-400/30",
    dot: "bg-pink-400 shadow-[0_0_14px_rgba(244,114,182,0.7)]",
    link: null,
    description:
      "Licensed to teach secondary students. Delivered daily lessons and curriculum materials. Conducted peer-teaching sessions to train and collaborate with fellow teachers.",
    highlights: [
      "Secondary level English language instruction",
      "Daily lesson planning & delivery",
      "Peer-teaching & teacher training sessions",
      "Curriculum material development",
    ],
  },
];

const WorkExperience = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 700, disable: "mobile" });
  }, []);

  return (
    <section className="relative bg-background overflow-hidden" id="Experience">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pt-16 sm:pt-24 pb-16 sm:pb-24">

        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-4">
            WORK <span className="text-accent">EXPERIENCE</span>
          </h2>
          <p className="text-grayText max-w-xl mx-auto text-sm font-bold uppercase tracking-widest">
            Companies & roles that shaped my craft
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 lg:left-1/2 lg:-translate-x-1/2 top-0 bottom-0 w-px bg-white/5" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col lg:flex-row gap-0 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 70}
              >
                {/* Card */}
                <div className={`w-full lg:w-[45%] pl-14 lg:pl-0 ${index % 2 === 0 ? "lg:pr-14" : "lg:pl-14"}`}>
                  <div className={`group relative bg-[#2c2620] border ${exp.color} rounded-xl p-6 hover:border-accent/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(173,255,47,0.06)]`}>

                    {/* Header row */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        {exp.logo ? (
                          <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 overflow-hidden flex-shrink-0 flex items-center justify-center">
                            <img
                              src={exp.logo}
                              alt={exp.company}
                              className="w-full h-full object-contain p-1"
                              onError={(e) => e.target.style.display = "none"}
                            />
                          </div>
                        ) : (
                          <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex-shrink-0 flex items-center justify-center">
                            <span className="text-accent font-black text-sm">{exp.company[0]}</span>
                          </div>
                        )}
                        <div>
                          <h3 className="text-white font-black text-sm uppercase tracking-tight leading-tight group-hover:text-accent transition-colors duration-300">
                            {exp.company}
                          </h3>
                          <span className="text-grayText text-[10px] font-bold uppercase tracking-widest">{exp.type}</span>
                        </div>
                      </div>
                      {exp.link && (
                        <a href={exp.link} target="_blank" rel="noopener noreferrer"
                           className="text-white/30 hover:text-accent transition-colors flex-shrink-0">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>

                    {/* Role */}
                    <p className="text-accent text-xs font-black uppercase tracking-wide mb-3">{exp.role}</p>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-3 text-[10px] text-grayText font-bold uppercase tracking-widest mb-4">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{exp.period}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{exp.location}</span>
                    </div>

                    <p className="text-white/55 text-xs leading-relaxed mb-4">{exp.description}</p>

                    {/* Highlights */}
                    <ul className="space-y-1.5">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-white/70">
                          <ChevronRight className="w-3 h-3 text-accent mt-0.5 flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Center dot — desktop */}
                <div className="hidden lg:flex w-[10%] items-center justify-center">
                  <div className={`w-3.5 h-3.5 rounded-full ${exp.dot} z-10`} />
                </div>

                {/* Mobile dot on left line */}
                <div className={`lg:hidden absolute left-[18px] top-6 w-3 h-3 rounded-full ${exp.dot} z-10`} />

                {/* Spacer */}
                <div className="hidden lg:block w-[45%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
