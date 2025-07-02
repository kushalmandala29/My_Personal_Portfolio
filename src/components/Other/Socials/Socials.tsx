import Link from "next/link";
import {
  RiLinkedinLine,
  RiFacebookLine,
  RiInstagramLine,
  RiGithubLine,
  RiTwitterLine,
  RiMailLine
} from "react-icons/ri";

const Socials = () => {

  return (
    <div className="flex items-center xl:gap-x-5 gap-x-3 text-lg">
      <Link
        target="_blank"
        href={"https://github.com/kushalmandala29"}
        className="hover:text-accent transition-all duration-300 xl:max-w-[26px] xl:max-h-[26px] max-w-[16px] max-h-[16px]"
        aria-label={"github"}
      >
        <RiGithubLine className="w-5 h-5" />
      </Link>
     
     
      <Link
        target="_blank"
        href={"https://www.linkedin.com/in/kushal-mandala-3382b1249/"}
        className="hover:text-accent transition-all duration-300 xl:max-w-[26px] xl:max-h-[26px] max-w-[16px] max-h-[16px]"
        aria-label={"linkedin"}
      >
        <RiLinkedinLine className="w-5 h-5" />
      </Link>
   
      <Link
        target="_blank"
        href="mailto:2200080035aids@gmail.com"
        className="hover:text-accent transition-all duration-300 xl:max-w-[26px] xl:max-h-[26px] max-w-[16px] max-h-[16px]"
        aria-label={"email"}
      >
        <RiMailLine className="w-5 h-5" />
      </Link>
    </div>
  );
};

export default Socials;
