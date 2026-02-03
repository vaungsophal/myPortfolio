import React, { useEffect, memo, useMemo } from "react"
import { FileText, Code, Award, Globe, ArrowUpRight, Sparkles, UserCheck } from "lucide-react"
import AOS from 'aos'
import 'aos/dist/aos.css'

// Memoized Components
const Header = memo(() => (
  <div className="text-center lg:mb-8 mb-2 px-[5%]">
    <div className="inline-block relative group">
      <h2
        className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tighter"
        data-aos="zoom-in-up"
        data-aos-duration="600"
      >
        About <span className="text-accent">Me</span>
      </h2>
    </div>
    <p
      className="mt-4 text-grayText max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-3 tracking-widest uppercase font-bold text-xs"
      data-aos="zoom-in-up"
      data-aos-duration="800"
    >
      <span className="w-8 h-[1px] bg-accent/30"></span>
      Innovating Modern Solutions
      <span className="w-8 h-[1px] bg-accent/30"></span>
    </p>
  </div>
));

const ProfileImage = memo(() => (
  <div className="flex justify-center lg:justify-end items-center p-0 py-8 lg:p-12">
    <div
      className="relative group"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {/* Subtle background glow */}
      <div className="absolute -inset-4 bg-accent/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-700"></div>

      <div className="relative">
        <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-xl overflow-hidden border border-white/10 transform transition-all duration-700 group-hover:scale-105 group-hover:rotate-2 shadow-2xl">
          <img
            src="/Photo.png"
            alt="Profile"
            className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
        </div>

        {/* Floating Accent Box */}
        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 backdrop-blur-xl border border-accent/20 rounded-xl -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-700"></div>
      </div>
    </div>
  </div>
));

const StatCard = memo(({ icon: Icon, value, label, description, animation }) => (
  <div data-aos={animation} data-aos-duration={1300} className="relative group">
    <div className="relative z-10 bg-[#161616] border border-white/5 rounded-xl p-6 sm:p-8 transition-all duration-500 hover:border-accent/30 hover:-translate-y-2 h-full">
      <div className="flex items-center justify-between mb-6">
        <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 transition-colors group-hover:bg-accent group-hover:border-accent">
          <Icon className="w-6 h-6 text-white group-hover:text-background transition-colors" />
        </div>
        <span className="text-3xl font-black text-white">{value}</span>
      </div>

      <h3 className="text-sm font-bold tracking-[0.2em] text-accent uppercase mb-2">{label}</h3>
      <p className="text-sm text-grayText leading-relaxed">{description}</p>
    </div>
  </div>
));

const AboutPage = () => {
  const { totalProjects, totalCertificates, YearExperience } = useMemo(() => {
    const startDate = new Date("2022-01-08");
    const today = new Date();
    const experience = today.getFullYear() - startDate.getFullYear() -
      (today < new Date(today.getFullYear(), startDate.getMonth(), startDate.getDate()) ? 1 : 0);

    return {
      totalProjects: 12, // Default or mock values if storage empty
      totalCertificates: 5,
      YearExperience: experience
    };
  }, []);

  useEffect(() => {
    AOS.init({ once: true, disable: "mobile" });
  }, []);

  const statsData = useMemo(() => [
    {
      icon: Code,
      value: totalProjects,
      label: "TOTAL PROJECTS",
      description: "Developing robust and scalable web applications with modern tech stacks.",
      animation: "fade-right",
    },
    {
      icon: Award,
      value: totalCertificates,
      label: "CERTIFICATES",
      description: "Validating expertise through professional certifications and continuous learning.",
      animation: "fade-up",
    },
    {
      icon: Globe,
      value: "4th",
      label: "ACADEMIC YEAR",
      description: "Pursuing excellence in ICT at American University of Phnom Penh.",
      animation: "fade-left",
    },
  ], [totalProjects, totalCertificates]);

  return (
    <div className="min-h-screen pb-20 text-white max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 mt-10 sm:mt-20" id="About">
      <Header />

      <div className="w-full mx-auto pt-10 lg:pt-16 relative">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-black tracking-tighter" data-aos="fade-right">
                I'M A <span className="text-accent">SOFTWARE DEVELOPER</span>
                <br />
                & ENTREPRENEUR
              </h2>
              <div className="h-1 w-20 bg-accent mx-auto lg:mx-0 rounded-full"></div>
            </div>

            <p className="text-lg text-grayText leading-relaxed max-w-xl mx-auto lg:mx-0" data-aos="fade-right" data-aos-delay="200">
              I specialize in building high-quality digital experiences. Currently a 4th-year
              student at AUPP, I blend technical skills with entrepreneurial thinking to
              create solutions that matter.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4" data-aos="fade-up" data-aos-delay="400">
              <button className="px-8 py-4 bg-accent text-background font-bold rounded-xl hover:scale-105 transition-all shadow-lg shadow-accent/20">
                VIEW MY WORK
              </button>
              <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all">
                LEARN MORE
              </button>
            </div>
          </div>

          <ProfileImage />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 sm:mt-24">
          {statsData.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(AboutPage);