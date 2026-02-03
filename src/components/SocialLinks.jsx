import React from "react";
import {
  Linkedin,
  Github,
  Instagram,
  Youtube,
  ExternalLink
} from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    displayName: "Let's Connect",
    subText: "on LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/sophal-vaung/",
    isPrimary: true,
  },
  {
    name: "Instagram",
    displayName: "Instagram",
    subText: "@vaungsophal",
    icon: Instagram,
    url: "https://www.instagram.com/pol_g0o",
  },
  {
    name: "YouTube",
    displayName: "Youtube",
    subText: "@vaungsophal",
    icon: Youtube,
    url: "https://www.youtube.com/@vaungsophal",
  },
  {
    name: "GitHub",
    displayName: "Github",
    subText: "@vaungsophal",
    icon: Github,
    url: "https://github.com/vaungsophal",
  },
  {
    name: "TikTok",
    displayName: "Tiktok",
    subText: "@19.8",
    icon: ({ className, ...props }) => (
      <svg className={className} width="24px" height="24px" viewBox="0 0 45 45" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
        <title>Tiktok</title>
        <path d="M21.6220653,23.5764245 L21.6220653,11.392751 C23.8996163,12.9794449 26.6204327,13.7141388 29.5251673,13.7633633 L29.5251673,9.44581224 C28.0822286,9.04613878 26.7617388,8.29381224 25.6824735,7.25617959 C25.5110449,7.09724082 25.3494122,6.92826122 25.1926776,6.75438367 C24.7922694,6.4752 24.4126776,6.16736327 24.056351,5.83356735 C22.8186367,4.66026122 22.0041061,3.11030204 21.7396163,1.42540408 L17.3730857,1.42540408 L17.3730857,23.7111184 C17.3730857,27.7957714 15.1690041,29.9560163 12.4334939,29.9560163 C11.6569224,29.9538122 10.8918612,29.7681796 10.2005143,29.414302 C9.50941224,29.0601796 8.91186122,28.5476082 8.45635102,27.9182204 C7.49071837,27.3946286 6.72712653,26.5636898 6.2865551,25.5571592 C5.84573878,24.5508735 5.75341224,23.4260571 6.02377959,22.3609959 C6.29390204,21.2959347 6.91177959,20.3516082 7.77896327,19.6771592 C8.64639184,19.0027102 9.71365714,18.6365878 10.8122694,18.6365878 C11.3564327,18.6412408 11.8961878,18.7362612 12.4090041,18.9182204 L12.4090041,14.1894857 C10.304351,14.1921796 8.24647347,14.8093224 6.48786122,15.9657306 C4.72924898,17.1221388 3.3470449,18.7666286 2.51047347,20.6978939 C1.67390204,22.6291592 1.41969796,24.7627102 1.77896327,26.8362612 C2.13822857,28.9098122 3.09553469,30.8334857 4.53308571,32.3704653 C6.36271837,33.6848327 8.55945306,34.3906286 10.8122694,34.3884296 C16.7730857,34.3884296 21.6220653,30.7445878 21.6220653,23.5764245" fill="currentColor"></path>
      </svg>
    ),
    url: "https://tiktok.com/@19.8v",
  }
];

const SocialLinks = () => {
  const linkedIn = socialLinks.find(link => link.isPrimary);
  const otherLinks = socialLinks.filter(link => !link.isPrimary);

  return (
    <div className="w-full">
      <h3 className="text-xl font-black text-white mb-8 flex items-center gap-3">
        <span className="inline-block w-1 h-8 bg-accent rounded-full"></span>
        Connect With Me
      </h3>

      <div className="flex flex-col gap-4">
        {/* LinkedIn - Primary */}
        <a
          href={linkedIn.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-between p-6 rounded-xl 
                     bg-white/5 border border-white/10 overflow-hidden
                     hover:border-accent/50 transition-all duration-500 hover:shadow-[0_0_20px_rgba(163,255,18,0.1)]"
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-accent" />

          <div className="relative flex items-center gap-4">
            <div className="relative flex items-center justify-center">
              <div
                className="absolute inset-0 opacity-20 rounded-lg transition-all duration-500
                           group-hover:scale-125 group-hover:opacity-20 bg-accent"
              />
              <div className="relative p-3 rounded-lg bg-white/5 group-hover:bg-transparent transition-colors">
                <linkedIn.icon className="w-6 h-6 text-white group-hover:text-accent transition-colors duration-500" />
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-lg font-bold text-white tracking-tight leading-none group-hover:text-accent transition-colors duration-300">
                {linkedIn.displayName}
              </span>
              <span className="text-xs font-medium text-gray-400 group-hover:text-white/80 transition-colors duration-300">
                {linkedIn.subText}
              </span>
            </div>
          </div>

          <ExternalLink
            className="relative w-5 h-5 text-gray-500 group-hover:text-accent
                       opacity-0 group-hover:opacity-100 transition-all duration-300
                       transform group-hover:translate-x-0 -translate-x-1"
          />
        </a>

        {/* Other Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {otherLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-4 p-4 rounded-xl 
                       bg-white/5 border border-white/10 overflow-hidden
                       hover:border-accent/50 transition-all duration-500 hover:shadow-[0_0_15px_rgba(163,255,18,0.05)]"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-accent" />

              <div className="relative flex items-center justify-center">
                <div className="relative p-2 rounded-lg bg-white/5 group-hover:bg-transparent transition-colors">
                  <link.icon className="w-5 h-5 text-gray-300 group-hover:text-accent transition-colors duration-500" />
                </div>
              </div>

              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold text-white group-hover:text-accent transition-colors duration-300">
                  {link.displayName}
                </span>
                <span className="text-[10px] font-medium text-gray-400 group-hover:text-white/80 transition-colors duration-300">
                  {link.subText}
                </span>
              </div>

              <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-accent ml-auto
                                     opacity-0 group-hover:opacity-100 transition-all duration-300
                                     transform group-hover:translate-x-0 -translate-x-2" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;