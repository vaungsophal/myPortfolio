import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';

const CardProject = ({ Img, Title, Description, Link: ProjectLink, id, TechStack }) => {
  const handleLiveDemo = (e) => {
    if (!ProjectLink) {
      e.preventDefault();
      alert("Live demo link is not available");
    }
  };

  return (
    <div className="group relative w-full">
      <div className="relative overflow-hidden rounded-2xl bg-[#161616] border border-white/5 transition-all duration-500 hover:border-accent/20 hover:shadow-[0_0_15px_rgba(163,255,18,0.1)]">
        <div className="relative p-4 z-10">
          <div className="relative overflow-hidden rounded-xl aspect-video bg-black/20">
            <img
              src={Img}
              alt={Title}
              className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-700"
              onError={(e) => e.target.style.display = 'none'}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          <div className="mt-6 space-y-4">
            <h3 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-accent transition-colors duration-300">
              {Title}
            </h3>

            <p className="text-grayText text-sm leading-relaxed line-clamp-2 font-medium mb-4">
              {Description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {/* Check if TechStack is available and is an array before mapping */}
              {Array.isArray(TechStack) && TechStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-200 bg-white/5 rounded-md hover:bg-accent/10 hover:text-accent transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/5">
              {ProjectLink ? (
                <a
                  href={ProjectLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLiveDemo}
                  className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-accent transition-colors duration-300 group/link"
                >
                  <ExternalLink className="w-4 h-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                  <span className="text-xs tracking-wider">Live Demo</span>
                </a>
              ) : (
                <span className="text-gray-500 text-xs font-bold tracking-wider opacity-50 cursor-not-allowed">Demo Hidden</span>
              )}

              {id ? (
                <Link
                  to={`/project/${id}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-white text-xs font-bold tracking-widest hover:bg-accent hover:text-[#0c0c0c] transition-all duration-300 hover:shadow-[0_0_10px_rgba(163,255,18,0.3)] active:scale-95"
                >
                  DETAILS
                  <ArrowRight className="w-3 h-3" />
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;