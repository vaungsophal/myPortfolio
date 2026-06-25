import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("Home");

    const navItems = [
        { href: "#Home", label: "HOME" },
        { href: "#About", label: "ABOUT" },
        { href: "#Portofolio", label: "PROJECTS" },
        { href: "#Contact", label: "CONTACT" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            const sections = navItems.map(item => {
                const section = document.querySelector(item.href);
                if (section) {
                    return {
                        id: item.href.replace("#", ""),
                        offset: section.offsetTop - 300,
                        height: section.offsetHeight
                    };
                }
                return null;
            }).filter(Boolean);

            const currentPosition = window.scrollY;
            const active = sections.find(section =>
                currentPosition >= section.offset &&
                currentPosition < section.offset + section.height
            );

            if (active) setActiveSection(active.id);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    }, [isOpen]);

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const section = document.querySelector(href);
        if (section) {
            window.scrollTo({ top: section.offsetTop - 80, behavior: "smooth" });
        }
        setIsOpen(false);
    };

    return (
        <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${
            isOpen
                ? "bg-[#050505]"
                : scrolled
                    ? "bg-[#050505]/80 backdrop-blur-xl border-b border-white/5"
                    : "bg-transparent"
        }`}>
            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
                <div className="flex items-center justify-between h-16 md:h-20">

                    {/* Logo */}
                    <a
                        href="#Home"
                        onClick={(e) => scrollToSection(e, "#Home")}
                        className="font-pixel text-base text-white hover:text-accent transition-colors duration-300"
                    >
                        sv<span className="text-accent text-2xl leading-none">.</span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={(e) => scrollToSection(e, item.href)}
                                className="group relative px-1 py-2 text-sm font-bold tracking-[0.2em] transition-colors duration-300"
                            >
                                <span className={`relative z-10 transition-colors duration-300 ${
                                    activeSection === item.href.substring(1)
                                        ? "text-accent"
                                        : "text-white/70 hover:text-white"
                                }`}>
                                    {item.label}
                                </span>
                                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-accent transform origin-left transition-transform duration-300 ${
                                    activeSection === item.href.substring(1)
                                        ? "scale-x-100"
                                        : "scale-x-0 group-hover:scale-x-100"
                                }`} />
                            </a>
                        ))}
                    </div>

                    {/* Email Pill — Desktop */}
                    <a
                        href="mailto:2023451VAUNG@AUPP.EDU.KH"
                        className="hidden md:block bg-secondary text-white text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-accent hover:text-black transition-all duration-300 tracking-wide whitespace-nowrap"
                    >
                        2023451VAUNG@AUPP.EDU.KH
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`md:hidden p-2 text-white/70 hover:text-accent transition-all duration-300 ${isOpen ? "rotate-90 text-accent" : ""}`}
                    >
                        {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden fixed inset-0 bg-[#050505] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-20px] pointer-events-none"
                }`}
                style={{ top: "64px", height: "calc(100vh - 64px)" }}
            >
                <div className="flex flex-col items-center justify-center h-full space-y-10">
                    {navItems.map((item, index) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={(e) => scrollToSection(e, item.href)}
                            className={`text-2xl font-black uppercase tracking-tighter transition-all duration-500 relative group ${
                                activeSection === item.href.substring(1) ? "text-accent" : "text-white/50 hover:text-white"
                            }`}
                            style={{
                                transitionDelay: `${index * 100}ms`,
                                transform: isOpen ? "translateY(0)" : "translateY(50px)",
                                opacity: isOpen ? 1 : 0,
                            }}
                        >
                            {item.label}
                            <span className={`absolute -bottom-2 left-0 w-full h-[2px] bg-accent transition-transform duration-300 origin-left ${
                                activeSection === item.href.substring(1) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                            }`} />
                        </a>
                    ))}
                    <a
                        href="mailto:2023451VAUNG@AUPP.EDU.KH"
                        className="text-xs text-secondary font-semibold tracking-wide"
                        style={{ opacity: isOpen ? 1 : 0, transitionDelay: `${navItems.length * 100}ms` }}
                    >
                        2023451VAUNG@AUPP.EDU.KH
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
