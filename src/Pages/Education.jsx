import React, { useEffect } from "react";
import { GraduationCap, MapPin, Calendar, Sparkles, ChevronRight } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Education = () => {
    useEffect(() => {
        AOS.init({
            once: false,
            duration: 1000,
            disable: "mobile",
        });
    }, []);

    const educationData = [
        {
            id: 1,
            institution: "American University of Phnom Penh",
            location: "Phnom Penh, Cambodia",
            date: "2023 — 2027",
            shortDate: "Bachelor's Degree",
            degree: "B.S. in Information and Communication Technology",
            description: "Comprehensive study of IT systems, software engineering, and digital innovation with a focus on practical applications.",
            logo: "/educations/AUPP.png",
            color: "bg-accent",
            tag: "Bachelor",
            details: [
                "Software Engineering",
                "Digital Innovation",
                "GPA: 3.69/4.00"
            ]
        },
        {
            id: 2,
            institution: "National University of Singapore",
            location: "Singapore",
            date: "2025",
            shortDate: "Exchange Program",
            degree: "Ecosystem & Sustainability",
            description: "Intensive focus on ecosystem health, climate resilience, and sustainable development through advanced workshops.",
            logo: "/educations/NUS.png",
            color: "bg-white",
            tag: "Exchange",
            details: [
                "Ecosystem Health",
                "Climate Resilience",
                "Sustainability"
            ]
        }
    ];

    return (
        <section className="relative min-h-screen py-24 bg-background overflow-hidden" id="Education">
            <div className="px-[5%] sm:px-[10%] relative z-10">
                {/* Header Section */}
                <div className="max-w-3xl mb-20 text-center sm:text-left">
                    <h2 className="text-2xl md:text-3xl font-black mb-6 uppercase tracking-tighter" data-aos="fade-right">
                        EDUCATION <span className="text-accent">HISTORY</span>
                    </h2>
                    <p className="text-grayText text-lg md:text-xl leading-relaxed max-w-2xl font-medium" data-aos="fade-right" data-aos-delay="100">
                        My academic journey is a blend of local excellence and international exposure,
                        shaping my perspective on technology and innovation.
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {educationData.map((edu, index) => (
                        <div
                            key={edu.id}
                            className="group relative"
                            data-aos="fade-up"
                            data-aos-delay={index * 200}
                        >
                            <div className="relative h-full bg-[#161616] border border-white/5 rounded-xl p-10 transition-all duration-500 hover:border-accent/20 hover:shadow-[0_0_20px_rgba(163,255,18,0.1)]">

                                <div className="flex flex-col h-full space-y-8">
                                    {/* Top Row */}
                                    <div className="flex items-center justify-between">
                                        <div className={`px-4 py-1 rounded-xl ${edu.color} text-background text-[10px] font-black uppercase tracking-[0.2em]`}>
                                            {edu.tag}
                                        </div>
                                        <div className="flex items-center gap-2 text-grayText font-bold text-xs uppercase tracking-widest">
                                            <Calendar className="w-3 h-3" />
                                            {edu.date}
                                        </div>
                                    </div>

                                    {/* Institution */}
                                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                                        <div className={`${edu.institution === "National University of Singapore" ? "w-32 h-32" : "w-16 h-16"} flex-shrink-0 transition-all duration-500`}>
                                            <img
                                                src={edu.logo}
                                                alt={edu.institution}
                                                className="w-full h-full object-contain"
                                                onError={(e) => e.target.style.display = 'none'}
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-black text-white leading-tight uppercase tracking-tight">
                                                {edu.institution}
                                            </h3>
                                            <div className="flex items-center gap-2 text-grayText mt-1">
                                                <MapPin className="w-3 h-3" />
                                                <span className="text-xs font-bold uppercase tracking-widest">{edu.location}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Degree */}
                                    <div className="flex-grow space-y-4 pt-4">
                                        <div className="flex items-center gap-2 text-accent">
                                            <GraduationCap className="w-5 h-5" />
                                            <span className="text-sm font-bold tracking-widest uppercase">{edu.shortDate}</span>
                                        </div>
                                        <p className="text-base font-bold text-white uppercase tracking-tight">
                                            {edu.degree}
                                        </p>
                                        <p className="text-grayText text-sm leading-relaxed italic">
                                            "{edu.description}"
                                        </p>
                                    </div>

                                    {/* Details */}
                                    <div className="pt-8 border-t border-white/5 grid grid-cols-2 gap-4">
                                        {edu.details.map((detail, i) => (
                                            <div key={i} className="flex items-center gap-2 group/item">
                                                <ChevronRight className="w-3 h-3 text-accent transition-transform group-hover/item:translate-x-1" />
                                                <span className="text-[10px] text-grayText font-bold uppercase tracking-[0.2em] group-hover:text-white transition-colors">
                                                    {detail}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
