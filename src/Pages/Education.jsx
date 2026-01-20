import React, { useEffect } from "react";
import { GraduationCap, MapPin, Calendar, Award, Sparkles, ChevronRight } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Education = () => {
    useEffect(() => {
        AOS.init({
            once: false,
            duration: 1000,
        });
    }, []);

    const educationData = [
        {
            id: 1,
            institution: "National University of Singapore",
            location: "Singapore",
            date: "2025",
            shortDate: "July 4-5",
            degree: "Exchange Program on Ecosystem & Sustainability",
            description: "Intensive focus on ecosystem health, climate resilience, and sustainable development through advanced workshops.",
            logo: "/educations/NUS.png",
            color: "from-[#3b82f6] to-[#2dd4bf]",
            tag: "Exchange",
            details: [
                "Ecosystem Health",
                "Climate Resilience",
                "Sustainable Development"
            ]
        },
        {
            id: 2,
            institution: "American University of Phnom Penh",
            location: "Phnom Penh, Cambodia",
            date: "2023 — 2027",
            shortDate: "Bachelor's Degree",
            degree: "B.S. in Information and Communication Technology",
            description: "Comprehensive study of IT systems, software engineering, and digital innovation with a high-performance academic record.",
            logo: "/educations/AUPP.png",
            color: "from-[#8b5cf6] to-[#d946ef]",
            tag: "Bachelor",
            details: [
                "Software Engineering",
                "Digital Innovation",
                "GPA: 3.69/4.00"
            ]
        }
    ];

    return (
        <section className="relative min-h-screen py-24 overflow-hidden" id="Education">
            {/* Background Orbs */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header Section */}
                <div className="max-w-3xl mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6" data-aos="fade-right">
                        <Sparkles className="w-4 h-4 text-yellow-400" />
                        <span className="text-xs font-medium text-gray-300 uppercase tracking-wider">Learning Journey</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight" data-aos="fade-right" data-aos-delay="100">
                        <span className="text-white">Academic</span>
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                            Excellence
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl" data-aos="fade-right" data-aos-delay="200">
                        A transformation from foundational ICT knowledge to global perspectives on sustainability and innovation.
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                    {educationData.map((edu, index) => (
                        <div
                            key={edu.id}
                            className="group relative flex flex-col"
                            data-aos="fade-up"
                            data-aos-delay={index * 200}
                        >
                            {/* Card Body */}
                            <div className="relative h-full bg-[#050505]/40 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 transition-all duration-700 hover:border-white/20 hover:bg-[#080808]/60 overflow-hidden">

                                {/* Background Decorative Logo (Large, faded) */}
                                <div className="absolute -right-12 -bottom-12 w-64 h-64 opacity-[0.03] grayscale transition-all duration-700 group-hover:opacity-[0.07] group-hover:scale-110 pointer-events-none">
                                    <img src={edu.logo} alt="" className="w-full h-full object-contain" />
                                </div>

                                <div className="flex flex-col h-full space-y-8 relative z-10">
                                    {/* Top Row: Tag and Date */}
                                    <div className="flex items-center justify-between">
                                        <div className={`px-4 py-1.5 rounded-full bg-gradient-to-r ${edu.color} text-white text-[10px] font-bold uppercase tracking-[0.2em]`}>
                                            {edu.tag}
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-500 font-mono text-sm leading-none">
                                            <Calendar className="w-4 h-4" />
                                            {edu.date}
                                        </div>
                                    </div>

                                    {/* Institution & Logo Split */}
                                    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                                        <div className="relative w-20 h-20 flex-shrink-0">
                                            <div className="absolute inset-0 bg-white/5 rounded-2xl blur-sm"></div>
                                            <img
                                                src={edu.logo}
                                                alt={edu.institution}
                                                className="w-full h-full object-contain relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-500 transition-all duration-500">
                                                {edu.institution}
                                            </h3>
                                            <div className="flex items-center gap-2 text-gray-400 group-hover:text-gray-300 transition-colors">
                                                <MapPin className="w-4 h-4 text-red-400/60" />
                                                <span className="text-sm font-medium tracking-wide">{edu.location}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Degree & Info */}
                                    <div className="flex-grow space-y-4">
                                        <div className="inline-flex items-center gap-2 text-blue-400 font-semibold mb-2">
                                            <GraduationCap className="w-5 h-5" />
                                            <span className="text-lg">{edu.shortDate}</span>
                                        </div>
                                        <p className="text-xl font-bold text-gray-100 group-hover:text-white transition-colors">
                                            {edu.degree}
                                        </p>
                                        <p className="text-gray-400 leading-relaxed font-light italic opacity-80 group-hover:opacity-100 transition-opacity">
                                            "{edu.description}"
                                        </p>
                                    </div>

                                    {/* Detail List */}
                                    <div className="pt-6 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {edu.details.map((detail, i) => (
                                            <div key={i} className="flex items-center gap-2 group/item">
                                                <ChevronRight className="w-3 h-3 text-purple-500 transition-transform group-hover/item:translate-x-1" />
                                                <span className="text-xs text-gray-500 font-medium group-hover:text-gray-300 transition-colors uppercase tracking-widest">{detail}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Hover Border Glow */}
                                <div className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${edu.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
