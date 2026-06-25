import React, { useState, useEffect, memo } from "react"
import { Github, Linkedin, Send, Zap } from "lucide-react"
import AOS from 'aos'
import 'aos/dist/aos.css'

const SKILLS = [
  'Frontend Development',
  'Web Development',
  'Full Stack Apps',
]

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
    <div className="min-h-[120vh] text-white overflow-hidden select-none relative" id="Home">

      {/* ── Layer 1: same image as full-screen background (blurred + dark) ── */}
      <img
        src="/hero-me.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ filter: 'blur(10px) brightness(0.12)', transform: 'scale(1.05)' }}
      />
      {/* Extra dark overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* ── Layer 2: holographic rainbow glow (behind the portrait frame) ── */}
      <div
        className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center"
      >
        <div
          style={{
            width: '500px',
            height: '420px',
            background: 'conic-gradient(from 0deg at 50% 50%, #ff6b6b, #ff9e3d, #ffd93d, #9bff6b, #4ecdc4, #4e9bff, #a78bfa, #f72585, #ff6b6b)',
            filter: 'blur(60px)',
            opacity: 0.72,
            transform: 'scaleX(1.5) scaleY(0.65)',
            marginTop: '8vh',
          }}
        />
      </div>

      {/* ── Layer 3: same image, natural aspect ratio, pops up — */}
      <div
        className="absolute left-0 right-0 z-20 pointer-events-none"
        style={{ top: '0' }}
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        <img
          src="/hero-me.png"
          alt="Sophal Vaung"
          className="hero-img-layer"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            opacity: 0.6,
          }}
        />
      </div>

      {/* ── UI content (topmost layer) ── */}
      <div className={`relative z-30 min-h-screen flex flex-col transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>

        {/* Giant Pixel Name */}
        <div className="text-center pt-20 md:pt-24 pb-0 overflow-hidden px-2">
          <h1
            className="font-pixel text-white uppercase"
            style={{ fontSize: 'clamp(0.9rem, 3vw, 3.8rem)', lineHeight: '1.5', fontWeight: 400 }}
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            SOPHAL VAUNG
          </h1>
        </div>

        <div className="flex-1 relative">

          {/* Desktop: left / right panels pinned to bottom */}
          <div className="hidden lg:flex items-end justify-between px-10 xl:px-20 pb-16 absolute inset-0">

            {/* Left: Skills + Social */}
            <div className="space-y-4" data-aos="fade-right" data-aos-delay="400">
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
            <div className="text-right max-w-[280px]" data-aos="fade-left" data-aos-delay="400">
              <p className="text-white/80 text-xs font-bold uppercase tracking-widest leading-[2.2]">
                FULL STACK DEVELOPER WITH 4+ YEARS OF EXPERIENCE IN DEVELOPING ROBUST WEB APPLICATIONS FROM FRONT-END TO BACK-END
              </p>
              <div className="flex items-center justify-end gap-3 mt-8">
                <button
                  className="w-12 h-12 rounded-full border border-accent/60 bg-accent/10 backdrop-blur-sm flex items-center justify-center hover:bg-accent transition-all duration-300 group cursor-pointer"
                  onClick={scrollToContact}
                >
                  <Zap className="w-5 h-5 text-accent group-hover:text-black transition-colors" />
                </button>
                <a
                  href="#Contact"
                  onClick={scrollToContact}
                  className="bg-accent text-black font-black text-sm px-8 py-4 rounded-full uppercase hover:scale-105 hover:shadow-[0_0_30px_rgba(173,255,47,0.5)] transition-all duration-300"
                >
                  HIRE ME
                </a>
              </div>
            </div>
          </div>

          {/* Desktop spacer */}
          <div className="hidden lg:block min-h-[65vh]" />

          {/* Mobile */}
          <div className="lg:hidden px-6 pb-14 space-y-6 mt-[40vh]">
            <div className="space-y-3">
              {SKILLS.map((skill, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-accent font-black text-lg leading-none">=&gt;</span>
                  <span className="text-white font-semibold">{skill}</span>
                </div>
              ))}
            </div>

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

            <p className="text-white/80 text-xs font-bold uppercase tracking-widest leading-[2.2]">
              FULL STACK DEVELOPER WITH 4+ YEARS OF EXPERIENCE IN DEVELOPING ROBUST WEB APPLICATIONS FROM FRONT-END TO BACK-END
            </p>

            <div className="flex items-center gap-3">
              <button
                onClick={scrollToContact}
                className="w-12 h-12 rounded-full border border-accent/60 bg-accent/10 backdrop-blur-sm flex items-center justify-center"
              >
                <Zap className="w-5 h-5 text-accent" />
              </button>
              <a
                href="#Contact"
                onClick={scrollToContact}
                className="bg-accent text-black font-black text-sm px-8 py-4 rounded-full uppercase hover:scale-105 transition-all"
              >
                HIRE ME
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(Home)
