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

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-white font-sans overflow-hidden select-none" id="Home">
      <div className={`relative z-10 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>

        {/* Header Section - Inspired by the reference image */}
        <header className="px-[5%] sm:px-[10%] pt-8 sm:pt-12 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0">
          <div className="text-sm font-bold tracking-widest text-white/50" data-aos="fade-right">
            SOPHAL VAUNG
          </div>

          <div className="flex items-center gap-3" data-aos="fade-down" data-aos-delay="200">
            <SocialIcon Icon={Send} href="https://t.me/pol_g0o" />
            <SocialIcon Icon={Github} href="https://github.com/vaungsophal" />
            <SocialIcon Icon={Linkedin} href="https://www.linkedin.com/in/sophal-vaung/" />
          </div>

          <div className="text-sm font-medium tracking-wider text-white/50 hover:text-white transition-colors cursor-pointer" data-aos="fade-left">
            VAUNG.SOPHAL.2004@GMAIL.COM
          </div>
        </header>

        {/* Main Content */}
        <div className="px-[5%] sm:px-[10%] min-h-[calc(100vh-100px)] flex flex-col justify-center py-20">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

            {/* Left: Image Card */}
            <div className="w-full lg:w-[450px]" data-aos="fade-right" data-aos-delay="400">
              <div className="relative group">
                <div className="absolute -inset-1 bg-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#161616] border border-white/5 shadow-2xl">
                  {/* Background overlay for the image like in reference */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>

                  {/* Using the user's photo from the assets if exists, otherwise a placeholder */}
                  <img
                    src="/Photo.png"
                    alt="Sophal Vaung"
                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />

                  {/* Card Footer Text */}
                  <div className="absolute bottom-8 left-8 z-20">
                    <h3 className="text-2xl font-bold tracking-tight">Sophal VAUNG</h3>
                    <p className="text-accent text-sm font-bold tracking-widest mt-1">AVAILABLE FOR INTERN</p>
                  </div>

                  {/* Floating Icon Badges */}
                  <div className="absolute top-6 left-6 z-20 p-2 bg-black/40 backdrop-blur-md rounded-lg border border-white/10">
                    <img src="/figma-logo.png" alt="Figma" className="w-6 h-6 opacity-80" onError={(e) => e.target.style.display = 'none'} />
                  </div>
                  <div className="absolute bottom-1/2 right-6 translate-y-1/2 z-20 p-2 bg-black/40 backdrop-blur-md rounded-lg border border-white/10">
                    <Github className="w-6 h-6 text-white/80" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Content Text */}
            <div className="flex-1 space-y-10">
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black leading-[1.1] tracking-tighter" data-aos="fade-up" data-aos-delay="600">
                  Hello, I'm <span className="text-dynamic-accent underline decoration-white/5 underline-offset-[12px]">Sophal VAUNG</span>,
                  <br />
                  <span className="text-white/40">Software Developer</span>
                  <br />
                  Based in <span className="text-white">Phnom Penh.</span>
                </h1>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12" data-aos="fade-up" data-aos-delay="800">
                <div className="flex items-baseline gap-4">
                  <span className="text-5xl sm:text-7xl font-black text-dynamic-accent animate-pulse-glow">3rd Year</span>
                  <span className="text-white/40 font-medium tracking-widest uppercase text-xs">University Student</span>
                </div>

                <a
                  href="/CV.pdf"
                  target="_blank"
                  className="group relative px-8 py-4 bg-transparent border border-white/20 rounded-xl hover:border-accent transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-accent translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300"></div>
                  <div className="relative flex items-center gap-3">
                    <FileText className="w-5 h-5 text-white group-hover:text-background transition-colors" />
                    <span className="text-sm font-bold tracking-widest group-hover:text-background transition-colors">DOWNLOAD CV</span>
                  </div>
                </a>
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
  );
};

export default memo(Home);