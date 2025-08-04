import Link from "next/link";
import {
  RiLinkedinLine,
  RiFacebookLine,
  RiInstagramLine,
  RiGithubLine,
  RiTwitterLine,
  RiMailLine,
  RiCodeLine,
  RiTerminalLine
} from "react-icons/ri";

const Socials = () => {

  return (
    <div className="flex items-center justify-center xl:gap-x-6 gap-x-4 text-lg">
      <Link
        target="_blank"
        href={"https://github.com/kushalmandala29"}
        className="flex flex-col items-center gap-2 hover:text-accent transition-all duration-300 group"
        aria-label={"github"}
      >
        <div className="p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 group-hover:border-accent/50 group-hover:bg-accent/10 transition-all duration-300">
          <RiGithubLine className="w-6 h-6 xl:w-8 xl:h-8" />
        </div>
        <span className="text-xs xl:text-sm font-medium text-white/70 group-hover:text-accent transition-colors duration-300">
          GitHub
        </span>
      </Link>
     
     
      <Link
        target="_blank"
        href={"https://www.linkedin.com/in/kushal-mandala-3382b1249/"}
        className="flex flex-col items-center gap-2 hover:text-accent transition-all duration-300 group"
        aria-label={"linkedin"}
      >
        <div className="p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 group-hover:border-accent/50 group-hover:bg-accent/10 transition-all duration-300">
          <RiLinkedinLine className="w-6 h-6 xl:w-8 xl:h-8" />
        </div>
        <span className="text-xs xl:text-sm font-medium text-white/70 group-hover:text-accent transition-colors duration-300">
          LinkedIn
        </span>
      </Link>

      <Link
        target="_blank"
        href={"https://www.hackerrank.com/profile/h2200080035"}
        className="flex flex-col items-center gap-2 hover:text-accent transition-all duration-300 group"
        aria-label={"hackerrank"}
      >
        <div className="p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 group-hover:border-accent/50 group-hover:bg-accent/10 transition-all duration-300">
          <RiCodeLine className="w-6 h-6 xl:w-8 xl:h-8" />
        </div>
        <span className="text-xs xl:text-sm font-medium text-white/70 group-hover:text-accent transition-colors duration-300">
          HackerRank
        </span>
      </Link>

      <Link
        target="_blank"
        href={"https://leetcode.com/u/kushalmandala/"}
        className="flex flex-col items-center gap-2 hover:text-accent transition-all duration-300 group"
        aria-label={"leetcode"}
      >
        <div className="p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 group-hover:border-accent/50 group-hover:bg-accent/10 transition-all duration-300">
          <RiTerminalLine className="w-6 h-6 xl:w-8 xl:h-8" />
        </div>
        <span className="text-xs xl:text-sm font-medium text-white/70 group-hover:text-accent transition-colors duration-300">
          LeetCode
        </span>
      </Link>
   
      <Link
        target="_blank"
        href="mailto:2200080035aids@gmail.com"
        className="flex flex-col items-center gap-2 hover:text-accent transition-all duration-300 group"
        aria-label={"email"}
      >
        <div className="p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 group-hover:border-accent/50 group-hover:bg-accent/10 transition-all duration-300">
          <RiMailLine className="w-6 h-6 xl:w-8 xl:h-8" />
        </div>
        <span className="text-xs xl:text-sm font-medium text-white/70 group-hover:text-accent transition-colors duration-300">
          Email
        </span>
      </Link>
    </div>
  );
};

export default Socials;
