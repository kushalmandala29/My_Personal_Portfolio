import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import { navData } from "@/data/nav"

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const [currentPath, setCurrentPath] = useState(router.asPath);

  // Listen for URL changes including those made by window.history.replaceState
  useEffect(() => {
    const handleUrlChange = () => {
      const newPath = window.location.pathname + window.location.hash;
      setCurrentPath(newPath);
    };

    // Listen for popstate events (back/forward browser buttons)
    window.addEventListener('popstate', handleUrlChange);
    
    // Listen for custom urlchange events from About component
    window.addEventListener('urlchange', handleUrlChange);
    
    // Listen for router changes (Next.js navigation)
    router.events?.on('routeChangeComplete', handleUrlChange);

    // Update current path when router.asPath changes
    setCurrentPath(router.asPath);

    // Initial update
    handleUrlChange();

    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('urlchange', handleUrlChange);
      router.events?.off('routeChangeComplete', handleUrlChange);
    };
  }, [router.asPath, router.events]);

  // Function to check if a nav item is active
  const isActive = (linkPath: string) => {
    // All navigation now happens within the unified about page with hash routing
    const currentHash = currentPath.split('#')[1] || 'home';
    const linkHash = linkPath.split('#')[1] || 'home';
    
    return currentHash === linkHash;
  };

  // Handle smooth scroll navigation
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, linkPath: string) => {
    e.preventDefault();
    const hash = linkPath.split('#')[1];
    
    if (hash) {
      // Update URL immediately for better UX
      window.history.pushState(null, '', linkPath);
      window.dispatchEvent(new Event('urlchange'));
      
      // Smooth scroll to section
      const element = document.getElementById(hash);
      const scrollContainer = document.querySelector('.h-full.overflow-y-auto.scrollbar-custom');
      
      if (element && scrollContainer) {
        const elementTop = element.offsetTop;
        const offset = hash === 'home' ? 0 : 120; // Same offset as in About component
        
        scrollContainer.scrollTo({
          top: Math.max(0, elementTop - offset),
          behavior: 'smooth'
        });
      }
    }
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
              onClick={(e) => handleNavClick(e, link.path)}
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
