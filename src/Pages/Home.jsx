import React, { useState, useEffect, memo } from "react"
import { Github, Linkedin, Send, Zap, ChevronDown } from "lucide-react"
import AOS from 'aos'
import 'aos/dist/aos.css'

const SKILLS = [
  'AI Engineering',
  'Data Enthusiast',
  'Entrepreneur',
]

const EXPERIENCE_LOGOS = ['aupp', 'camma', 'screenwise', 'nbc']

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    AOS.init({ once: true, duration: 800, disable: false })
    setIsLoaded(true)
  }, [])

  const scrollToContact = (e) => {
    e.preventDefault()
    document.querySelector('#Contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen text-white overflow-hidden select-none relative bg-[#2c2620]" id="Home">

      {/* Background: blurred warm image */}
      <img
        src="/hero-me.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ filter: 'blur(12px) brightness(0.22) sepia(0.3)', transform: 'scale(1.05)' }}
      />
      <div className="absolute inset-0 bg-[#2c2620]/60" />

      {/* ── DESKTOP: single unified container — image + name + panels move together ── */}
      <div className={`hidden lg:block absolute inset-0 z-20 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="relative h-full max-w-7xl mx-auto px-16">

          {/* Portrait image */}
          <img
            src="/hero-me.png"
            alt="Sophal Vaung"
            className="hero-img-layer"
            style={{ width: '100%', display: 'block', opacity: 0.92 }}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          />

          {/* Name — pinned over image */}
          <div className="absolute top-32 xl:top-36 left-0 right-0 text-center overflow-hidden">
            <h1
              className="font-pixel text-white uppercase"
              style={{ fontSize: 'clamp(1.3rem, 4vw, 3.4rem)', lineHeight: '1.5', fontWeight: 400 }}
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              SOPHAL VAUNG
            </h1>
          </div>

          {/* Left: Skills + Social */}
          <div className="absolute bottom-16 left-0 space-y-4" data-aos="fade-right" data-aos-delay="400">
            {SKILLS.map((skill, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-accent font-black text-xl leading-none">=&gt;</span>
                <span className="text-white font-semibold text-lg">{skill}</span>
              </div>
            ))}
            <div className="flex items-center gap-5 pt-5">
              <a href="https://t.me/pol_g0o" target="_blank" rel="noopener noreferrer"
                 className="text-white/70 hover:text-accent transition-all duration-300 hover:scale-110">
                <Send className="w-5 h-5" />
              </a>
              <a href="https://github.com/vaungsophal" target="_blank" rel="noopener noreferrer"
                 className="text-white/70 hover:text-accent transition-all duration-300 hover:scale-110">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/sophal-vaung/" target="_blank" rel="noopener noreferrer"
                 className="text-white/70 hover:text-accent transition-all duration-300 hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right: Description + CTA */}
          <div className="absolute bottom-16 right-0 text-right max-w-[280px]" data-aos="fade-left" data-aos-delay="400">
            <p className="text-white/80 text-xs font-bold uppercase tracking-widest leading-[2.2]">
              FULL STACK DEVELOPER WITH 2+ YEARS OF EXPERIENCE IN DEVELOPING ROBUST WEB APPLICATIONS FROM FRONT-END TO BACK-END
            </p>
            <div className="flex items-center justify-end gap-3 mt-8">
              <button
                className="w-12 h-12 rounded-full border border-accent/60 bg-accent/10 backdrop-blur-sm flex items-center justify-center hover:bg-accent transition-all duration-300 group cursor-pointer"
                onClick={scrollToContact}
              >
                <Zap className="w-5 h-5 text-accent group-hover:text-[#1c1714] transition-colors" />
              </button>
              <a
                href="#Contact"
                onClick={scrollToContact}
                className="bg-accent text-[#1c1714] font-black text-sm px-8 py-4 rounded-full uppercase hover:scale-105 hover:shadow-[0_0_30px_rgba(173,255,47,0.5)] transition-all duration-300"
              >
                HIRE ME
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* ── MOBILE LAYOUT ── */}
      <div className={`relative z-30 min-h-screen flex flex-col lg:hidden transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>

        {/* Mobile: foreground portrait */}
        <div
          className="absolute left-0 right-0 z-20 pointer-events-none"
          style={{ top: 0 }}
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <img
            src="/hero-me.png"
            alt="Sophal Vaung"
            className="hero-img-mobile"
            style={{ width: '100%', display: 'block', opacity: 0.92 }}
          />
        </div>

        {/* Mobile: name */}
        <div className="text-center pt-32 md:pt-36 pb-0 overflow-hidden px-2">
          <h1
            className="font-pixel text-white uppercase"
            style={{ fontSize: 'clamp(1.3rem, 4vw, 3.4rem)', lineHeight: '1.5', fontWeight: 400, textShadow: '0 0 30px rgba(255,255,255,0.6), 0 2px 12px rgba(0,0,0,0.8)' }}
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            SOPHAL VAUNG
          </h1>
        </div>

        {/* Mobile: logos pinned at image bottom */}
        <div
          className="absolute left-0 right-0 z-30 pointer-events-none select-none"
          style={{ top: '60vh' }}
        >
          <div className="overflow-hidden py-3 border-y border-white/15">
            <div className="flex animate-logos" style={{ width: 'max-content' }}>
              {[...Array(2)].map((_, clone) =>
                EXPERIENCE_LOGOS.map((name, i) => (
                  <img
                    key={`${clone}-${i}`}
                    src={`/experiences/${name}.png`}
                    alt={name}
                    className="h-7 w-auto object-contain mx-4 flex-shrink-0"
                    style={{ opacity: 1, filter: 'none' }}
                  />
                ))
              )}
            </div>
          </div>
        </div>

        {/* Mobile: bouncing scroll button */}
        <div
          className="absolute left-1/2 -translate-x-1/2 z-40"
          style={{ top: 'calc(60vh + 90px)' }}
        >
          <button
            onClick={() => document.querySelector('#About')?.scrollIntoView({ behavior: 'smooth' })}
            className="relative w-14 h-14 rounded-full flex items-center justify-center animate-bounce"
          >
            <span className="absolute inset-0 rounded-full bg-accent/30 animate-ping" />
            <span className="absolute inset-1 rounded-full border border-accent/50" />
            <span className="absolute inset-2 rounded-full bg-accent/20 backdrop-blur-sm border border-accent shadow-[0_0_18px_rgba(173,255,47,0.7)]" />
            <ChevronDown className="relative z-10 w-5 h-5 text-accent drop-shadow-[0_0_6px_rgba(173,255,47,1)]" />
          </button>
        </div>

        {/* Mobile: bottom content */}
        <div className="flex-1 relative">
          <div className="absolute bottom-0 left-0 right-0 z-10">
            <div className="absolute inset-0 bg-gradient-to-t from-[#2c2620] via-[#2c2620]/80 to-transparent pointer-events-none" />
            <div className="relative px-6 pb-10 pt-16 space-y-4">

              <div className="flex items-center flex-wrap gap-x-3 gap-y-1" data-aos="fade-up" data-aos-delay="150">
                {SKILLS.map((skill, i) => (
                  <React.Fragment key={i}>
                    <span className="text-white font-semibold text-sm">{skill}</span>
                    {i < SKILLS.length - 1 && (
                      <span className="text-accent font-black text-base leading-none">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <p className="text-white/60 text-[11px] font-bold uppercase tracking-widest leading-[2]" data-aos="fade-up" data-aos-delay="200">
                Full Stack Developer · 4+ Years building robust web apps.
              </p>

              <div className="flex items-center justify-between" data-aos="fade-up" data-aos-delay="250">
                <div className="flex items-center gap-5">
                  <a href="https://t.me/pol_g0o" target="_blank" rel="noopener noreferrer"
                     className="text-white/70 hover:text-accent transition-colors">
                    <Send className="w-5 h-5" />
                  </a>
                  <a href="https://github.com/vaungsophal" target="_blank" rel="noopener noreferrer"
                     className="text-white/70 hover:text-accent transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/in/sophal-vaung/" target="_blank" rel="noopener noreferrer"
                     className="text-white/70 hover:text-accent transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
                <a
                  href="#Contact"
                  onClick={scrollToContact}
                  className="bg-accent text-[#1c1714] font-black text-xs px-6 py-3 rounded-full uppercase hover:scale-105 transition-all shadow-[0_0_20px_rgba(173,255,47,0.3)]"
                >
                  HIRE ME
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default memo(Home)
