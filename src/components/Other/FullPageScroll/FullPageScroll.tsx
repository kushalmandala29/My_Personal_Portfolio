import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';

import Home from '@/components/Templates/Home/Home';
import About from '@/components/Templates/About/About';
import Projects from '@/components/Templates/Projects/Projects';
import Contact from '@/components/Templates/Contact/Contact';

const pages = [
  { component: Home, route: '/', name: 'Home' },
  { component: About, route: '/about', name: 'About' },
  { component: Projects, route: '/projects', name: 'Projects' },
  { component: Contact, route: '/contact', name: 'Contact' }
];

const FullPageScroll = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize current page based on route
  useEffect(() => {
    const currentIndex = pages.findIndex(page => page.route === router.pathname);
    if (currentIndex !== -1) {
      setCurrentPage(currentIndex);
    }
  }, [router.pathname]);

  // Handle wheel scroll
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Check if the scroll is happening within the projects grid area
      const target = e.target as HTMLElement;
      const projectsGrid = document.querySelector('.grid.grid-cols-1.lg\\:grid-cols-3.gap-6.pb-8');
      const projectsScrollContainer = document.querySelector('.projects-scroll-container');
      
      // If scrolling within projects grid or its scroll container, allow normal scrolling
      if (projectsGrid && (projectsGrid.contains(target) || projectsScrollContainer?.contains(target))) {
        return; // Let the normal scroll happen
      }
      
      // If scrolling within projects scroll container and there's more content to scroll
      if (projectsScrollContainer && projectsScrollContainer.contains(target)) {
        const container = projectsScrollContainer as HTMLElement;
        const canScrollDown = container.scrollTop < container.scrollHeight - container.clientHeight;
        const canScrollUp = container.scrollTop > 0;
        
        // If can scroll within projects, don't trigger page navigation
        if ((e.deltaY > 0 && canScrollDown) || (e.deltaY < 0 && canScrollUp)) {
          return;
        }
      }
      
      e.preventDefault();
      
      if (isScrolling) return;
      
      setIsScrolling(true);
      
      if (e.deltaY > 0 && currentPage < pages.length - 1) {
        // Scroll down
        const nextPage = currentPage + 1;
        setCurrentPage(nextPage);
        router.push(pages[nextPage].route);
      } else if (e.deltaY < 0 && currentPage > 0) {
        // Scroll up
        const prevPage = currentPage - 1;
        setCurrentPage(prevPage);
        router.push(pages[prevPage].route);
      }
      
      // Reset scrolling flag after animation
      setTimeout(() => setIsScrolling(false), 1000);
    };

    // Add event listener to document instead of container
    document.addEventListener('wheel', handleWheel, { passive: false });
    return () => document.removeEventListener('wheel', handleWheel);
  }, [currentPage, isScrolling, router]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return;
      
      if ((e.key === 'ArrowDown' || e.key === 'PageDown') && currentPage < pages.length - 1) {
        e.preventDefault();
        setIsScrolling(true);
        const nextPage = currentPage + 1;
        setCurrentPage(nextPage);
        router.push(pages[nextPage].route);
        setTimeout(() => setIsScrolling(false), 1000);
      } else if ((e.key === 'ArrowUp' || e.key === 'PageUp') && currentPage > 0) {
        e.preventDefault();
        setIsScrolling(true);
        const prevPage = currentPage - 1;
        setCurrentPage(prevPage);
        router.push(pages[prevPage].route);
        setTimeout(() => setIsScrolling(false), 1000);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, isScrolling, router]);

  // Handle touch gestures for mobile
  useEffect(() => {
    let touchStartY = 0;
    
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      if (Math.abs(e.touches[0].clientY - touchStartY) > 10) {
        e.preventDefault();
      }
    };
    
    const handleTouchEnd = (e: TouchEvent) => {
      if (isScrolling) return;
      
      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY - touchEndY;
      
      if (Math.abs(diff) > 50) { // Minimum swipe distance
        setIsScrolling(true);
        
        if (diff > 0 && currentPage < pages.length - 1) {
          // Swipe up (next page)
          const nextPage = currentPage + 1;
          setCurrentPage(nextPage);
          router.push(pages[nextPage].route);
        } else if (diff < 0 && currentPage > 0) {
          // Swipe down (previous page)
          const prevPage = currentPage - 1;
          setCurrentPage(prevPage);
          router.push(pages[prevPage].route);
        }
        
        setTimeout(() => setIsScrolling(false), 1000);
      }
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd, { passive: false });
    
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentPage, isScrolling, router]);

  const CurrentComponent = pages[currentPage].component;

  return (
    <>
      {/* Scroll Hint */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 text-white/60 text-sm animate-bounce">
        <div className="flex flex-col items-center gap-1">
          <span>Scroll to navigate</span>
          <div className="w-0.5 h-6 bg-white/40"></div>
        </div>
      </div>

      {/* Page Content */}
      <div 
        ref={containerRef}
        className="h-full w-full overflow-hidden"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="h-full w-full"
          >
            <CurrentComponent />
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default FullPageScroll;
