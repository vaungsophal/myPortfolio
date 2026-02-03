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

            if (active) {
                setActiveSection(active.id);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const section = document.querySelector(href);
        if (section) {
            const top = section.offsetTop - 80;
            window.scrollTo({
                top: top,
                behavior: "smooth"
            });
        }
        setIsOpen(false);
    };

    return (
        <nav
            className={`fixed w-full top-0 z-50 transition-all duration-500 ${isOpen
                ? "bg-[#030014] opacity-100"
                : scrolled
                    ? "bg-[#030014]/50 backdrop-blur-xl border-b border-white/5"
                    : "bg-transparent"
                }`}
        >
            <div className="mx-auto px-[5%] sm:px-[10%] lg:px-[10%]">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a
                            href="#Home"
                            onClick={(e) => scrollToSection(e, "#Home")}
                            className="text-2xl font-black tracking-tighter text-white hover:text-accent transition-colors duration-300 flex items-center gap-1"
                        >
                            SOPHAL<span className="text-accent text-3xl animate-pulse">.</span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="flex items-center space-x-8">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={(e) => scrollToSection(e, item.href)}
                                    className="group relative px-1 py-2 text-xs font-bold tracking-[0.2em] hover:text-accent transition-colors duration-300"
                                >
                                    <span
                                        className={`relative z-10 transition-colors duration-300 ${activeSection === item.href.substring(1)
                                            ? "text-accent"
                                            : "text-white/70"
                                            }`}
                                    >
                                        {item.label}
                                    </span>
                                    <span
                                        className={`absolute bottom-0 left-0 w-full h-[2px] bg-accent transform origin-left transition-transform duration-300 ${activeSection === item.href.substring(1)
                                            ? "scale-x-100 shadow-[0_0_10px_rgba(163,255,18,0.5)]"
                                            : "scale-x-0 group-hover:scale-x-100"
                                            }`}
                                    />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 text-white/70 hover:text-accent transition-all duration-300 ${isOpen ? "rotate-90 text-accent" : ""}`}
                        >
                            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`md:hidden fixed inset-0 bg-[#030014] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-[-20px] pointer-events-none"
                    }`}
                style={{ top: "80px", height: "calc(100vh - 80px)" }}
            >
                <div className="flex flex-col items-center justify-center h-full space-y-10">
                    {navItems.map((item, index) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={(e) => scrollToSection(e, item.href)}
                            className={`text-3xl font-black uppercase tracking-tighter transition-all duration-500 group relative ${activeSection === item.href.substring(1)
                                ? "text-accent"
                                : "text-white/50 hover:text-white"
                                }`}
                            style={{
                                transitionDelay: `${index * 100}ms`,
                                transform: isOpen ? "translateY(0)" : "translateY(50px)",
                                opacity: isOpen ? 1 : 0,
                            }}
                        >
                            {item.label}
                            <span className={`absolute -bottom-2 left-0 w-full h-[2px] bg-accent transition-transform duration-300 origin-left ${activeSection === item.href.substring(1) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;