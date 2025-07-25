import Link from "next/link";
import { useRouter } from "next/router";

import { navData } from "@/data/nav"

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const asPath = router.asPath;

  // Function to check if a nav item is active
  const isActive = (linkPath: string) => {
    // Special handling for About tab - it should be active when on /about#top or plain /about
    if (linkPath === '/about#top') {
      return asPath === '/about#top' || (pathname === '/about' && !asPath.includes('#projects'));
    }
    
    // Special handling to prevent About from being active when on projects section
    if (linkPath === '/about' && asPath.includes('#projects')) {
      return false;
    }
    
    // For hash-based links like /about#projects
    if (linkPath.includes('#')) {
      return asPath === linkPath;
    }
    
    // For regular paths
    return linkPath === pathname;
  };

  return (
    <nav className="flex flex-col items-center justify-center gap-y-4 fixed h-fit bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-center fixed bottom-0 xl:relative xl:bottom-[unset] gap-y-10 gap-x-6 px-4 md:px-40 h-[10dvh] xl:px-0 xl:h-max py-4 xl:py-8 bg-[#4a4a4a]/10  backdrop-blur xl:bg-white/10 xl:backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map((link, index) => {
          return (
            <Link
              className={`${isActive(link.path) && "text-accent"
                } relative flex items-center group hover:text-accent transition-all duration-300 xl:w-fit w-6`}
              href={link.path}
              key={index}
              aria-label={link.name}
            >
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                  <div className="text-[12px] leading-none font-semibold capitalize">{link.name}
                  </div>
                  <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
                </div>
              </div>
              <div className="xl:w-5 w-4">{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
