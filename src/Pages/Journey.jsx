import React, { useEffect } from "react";
import { Trophy, Code2, Plane, GraduationCap, Rocket, Star, Zap, Award } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const milestones = [
  {
    year: "2026",
    title: "Scaling Products & Graduation",
    description: "Scaling ScreenWise and SmashIt to more users. Completing B.S. in ICT at AUPP and preparing for next ventures.",
    icon: Rocket,
    color: "text-accent",
    bg: "bg-accent/10 border-accent/30",
    dot: "bg-accent",
    dotGlow: "shadow-[0_0_14px_rgba(173,255,47,0.7)]",
    tag: "NOW",
  },
  {
    year: "2025",
    title: "NUS Exchange Program — Singapore",
    description: "Selected for an international exchange program at the National University of Singapore, focusing on Ecosystem & Sustainability.",
    icon: Plane,
    color: "text-blue-400",
    bg: "bg-blue-400/10 border-blue-400/30",
    dot: "bg-blue-400",
    dotGlow: "shadow-[0_0_14px_rgba(96,165,250,0.7)]",
    tag: "Exchange",
  },
  {
    year: "2025",
    title: "Top 3 — ACTSmart Incubation Program",
    description: "ScreenWise ranked Top 3 out of all incubated startups in the ACTSmart Program for innovation in AI-powered HR technology.",
    icon: Trophy,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10 border-yellow-400/30",
    dot: "bg-yellow-400",
    dotGlow: "shadow-[0_0_14px_rgba(250,204,21,0.7)]",
    tag: "Award",
  },
  {
    year: "2024",
    title: "Launched ScreenWise & Joined Camnexa",
    description: "Co-founded ScreenWise — an AI HR screening SaaS. Simultaneously joined Camnexa as a full-stack developer building enterprise products.",
    icon: Zap,
    color: "text-purple-400",
    bg: "bg-purple-400/10 border-purple-400/30",
    dot: "bg-purple-400",
    dotGlow: "shadow-[0_0_14px_rgba(192,132,252,0.7)]",
    tag: "Career",
  },
  {
    year: "2024",
    title: "AWS Cloud Certifications",
    description: "Earned AWS Academy Cloud Foundations and Cloud Architecting certifications, deepening expertise in cloud infrastructure and scalable system design.",
    icon: Award,
    color: "text-orange-400",
    bg: "bg-orange-400/10 border-orange-400/30",
    dot: "bg-orange-400",
    dotGlow: "shadow-[0_0_14px_rgba(251,146,60,0.7)]",
    tag: "Certification",
  },
  {
    year: "2024",
    title: "Meta Frontend Developer Certificate",
    description: "Completed a 9-course Meta Frontend Developer Professional Certificate on Coursera, reinforcing React, UX, and modern web development practices.",
    icon: Star,
    color: "text-pink-400",
    bg: "bg-pink-400/10 border-pink-400/30",
    dot: "bg-pink-400",
    dotGlow: "shadow-[0_0_14px_rgba(244,114,182,0.7)]",
    tag: "Certification",
  },
  {
    year: "2023",
    title: "Enrolled at AUPP",
    description: "Began B.S. in Information and Communication Technology at the American University of Phnom Penh. First major full-stack project: AUPP Alumni Networking platform.",
    icon: GraduationCap,
    color: "text-accent",
    bg: "bg-accent/10 border-accent/30",
    dot: "bg-accent",
    dotGlow: "shadow-[0_0_14px_rgba(173,255,47,0.5)]",
    tag: "Education",
  },
  {
    year: "2022",
    title: "Started the Coding Journey",
    description: "Wrote my first lines of code. Fell in love with building things from scratch — from simple Python scripts to first web apps. The journey began.",
    icon: Code2,
    color: "text-grayText",
    bg: "bg-white/5 border-white/10",
    dot: "bg-white/40",
    dotGlow: "shadow-[0_0_10px_rgba(255,255,255,0.2)]",
    tag: "Origin",
  },
];

const MilestoneCard = ({ m, index }) => {
  const Icon = m.icon;
  return (
    <div
      className="relative flex gap-5"
      data-aos="fade-up"
      data-aos-delay={index * 60}
    >
      {/* Icon node + vertical line */}
      <div className="relative flex flex-col items-center flex-shrink-0">
        <div className={`w-12 h-12 rounded-full border flex items-center justify-center z-10 ${m.bg}`}>
          <Icon className={`w-5 h-5 ${m.color}`} />
        </div>
        {/* line below icon */}
        <div className="flex-1 w-px bg-white/5 mt-2" />
      </div>

      {/* Card */}
      <div className="flex-1 pb-8">
        <div className="group bg-[#2c2620] border border-white/5 rounded-xl p-5 hover:border-accent/20 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(173,255,47,0.05)]">
          <div className="flex items-center gap-3 flex-wrap mb-3">
            <span className={`text-[10px] font-black uppercase tracking-[0.25em] px-2.5 py-1 rounded-full border ${m.bg} ${m.color}`}>
              {m.tag}
            </span>
            <span className="text-grayText text-[11px] font-bold uppercase tracking-widest">{m.year}</span>
          </div>
          <h3 className="text-base font-black uppercase tracking-tight mb-2 text-white group-hover:text-accent transition-colors duration-300">
            {m.title}
          </h3>
          <p className="text-white/55 text-xs leading-relaxed">{m.description}</p>
        </div>
      </div>
    </div>
  );
};

const Journey = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 700 });
  }, []);

  const leftCol = milestones.filter((_, i) => i % 2 === 0);
  const rightCol = milestones.filter((_, i) => i % 2 === 1);

  return (
    <section className="relative bg-background overflow-hidden" id="Journey">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pt-16 sm:pt-24 pb-16 sm:pb-24">

        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-4">
            JOURNEY & <span className="text-accent">ACHIEVEMENTS</span>
          </h2>
          <p className="text-grayText max-w-xl mx-auto text-sm font-bold uppercase tracking-widest">
            Milestones, awards & events that define my story
          </p>
        </div>

        {/* Mobile: single column */}
        <div className="lg:hidden space-y-0">
          {milestones.map((m, i) => (
            <MilestoneCard key={i} m={m} index={i} />
          ))}
        </div>

        {/* Desktop: two columns */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-x-12">
          <div>
            {leftCol.map((m, i) => (
              <MilestoneCard key={i} m={m} index={i * 2} />
            ))}
          </div>
          <div>
            {rightCol.map((m, i) => (
              <MilestoneCard key={i} m={m} index={i * 2 + 1} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Journey;
