import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';

import Home from '@/components/Templates/Home/Home';
import About from '@/components/Templates/About/About';
import Contact from '@/components/Templates/Contact/Contact';

const pages = [
  { component: Home, route: '/', name: 'Home' },
  { component: About, route: '/about', name: 'About' },
  { component: Contact, route: '/contact', name: 'Contact' }
];

const FullPageScroll = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize current page based on route
  useEffect(() => {
    // Handle project detail pages - don't interfere with them
    if (router.pathname.startsWith('/projects/')) {
      return; // Don't set currentPage for project detail pages
    }
    
    const currentIndex = pages.findIndex(page => page.route === router.pathname);
    if (currentIndex !== -1) {
      setCurrentPage(currentIndex);
    }
  }, [router.pathname]);

  // Handle wheel scroll
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Don't handle wheel events on project detail pages
      if (router.pathname.startsWith('/projects/')) {
        return;
      }
      
      // Special handling for About page internal scrolling
      if (router.pathname === '/about') {
        const scrollContainer = document.querySelector('.h-full.overflow-y-auto.scrollbar-custom');
        if (scrollContainer) {
          const isAtTop = scrollContainer.scrollTop === 0;
          const isAtBottom = scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight - 10;
          
          // Allow scrolling up from About page only if at the very top
          if (e.deltaY < 0 && isAtTop && currentPage > 0) {
            e.preventDefault();
            if (isScrolling) return;
            setIsScrolling(true);
            const prevPage = currentPage - 1;
            setCurrentPage(prevPage);
            router.push(pages[prevPage].route);
            setTimeout(() => {
              window.dispatchEvent(new Event('urlchange'));
              setIsScrolling(false);
            }, 600);
            return;
          }
          
          // Allow scrolling down from About page only if at the very bottom
          if (e.deltaY > 0 && isAtBottom && currentPage < pages.length - 1) {
            e.preventDefault();
            if (isScrolling) return;
            setIsScrolling(true);
            const nextPage = currentPage + 1;
            setCurrentPage(nextPage);
            router.push(pages[nextPage].route);
            setTimeout(() => {
              window.dispatchEvent(new Event('urlchange'));
              setIsScrolling(false);
            }, 600);
            return;
          }
          
          // Otherwise, let the About page handle its own scrolling
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
      
      // Reset scrolling flag after animation and dispatch nav update
      setTimeout(() => {
        window.dispatchEvent(new Event('urlchange'));
        setIsScrolling(false);
      }, 600);
    };

    // Add event listener to document instead of container
    document.addEventListener('wheel', handleWheel, { passive: false });
    return () => document.removeEventListener('wheel', handleWheel);
  }, [currentPage, isScrolling, router]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't handle keyboard events on project detail pages
      if (router.pathname.startsWith('/projects/')) {
        return;
      }
      
      if (isScrolling) return;
      
      // Special handling for About page
      if (router.pathname === '/about') {
        const scrollContainer = document.querySelector('.h-full.overflow-y-auto.scrollbar-custom');
        if (scrollContainer) {
          const isAtTop = scrollContainer.scrollTop === 0;
          const isAtBottom = scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight - 10;
          
          if ((e.key === 'ArrowUp' || e.key === 'PageUp') && isAtTop && currentPage > 0) {
            e.preventDefault();
            setIsScrolling(true);
            const prevPage = currentPage - 1;
            setCurrentPage(prevPage);
            router.push(pages[prevPage].route);
            setTimeout(() => {
              window.dispatchEvent(new Event('urlchange'));
              setIsScrolling(false);
            }, 600);
            return;
          }
          
          if ((e.key === 'ArrowDown' || e.key === 'PageDown') && isAtBottom && currentPage < pages.length - 1) {
            e.preventDefault();
            setIsScrolling(true);
            const nextPage = currentPage + 1;
            setCurrentPage(nextPage);
            router.push(pages[nextPage].route);
            setTimeout(() => {
              window.dispatchEvent(new Event('urlchange'));
              setIsScrolling(false);
            }, 600);
            return;
          }
          
          // Let About page handle its own keyboard scrolling
          return;
        }
      }
      
      if ((e.key === 'ArrowDown' || e.key === 'PageDown') && currentPage < pages.length - 1) {
        e.preventDefault();
        setIsScrolling(true);
        const nextPage = currentPage + 1;
        setCurrentPage(nextPage);
        router.push(pages[nextPage].route);
        setTimeout(() => {
          window.dispatchEvent(new Event('urlchange'));
          setIsScrolling(false);
        }, 600);
      } else if ((e.key === 'ArrowUp' || e.key === 'PageUp') && currentPage > 0) {
        e.preventDefault();
        setIsScrolling(true);
        const prevPage = currentPage - 1;
        setCurrentPage(prevPage);
        router.push(pages[prevPage].route);
        setTimeout(() => {
          window.dispatchEvent(new Event('urlchange'));
          setIsScrolling(false);
        }, 600);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, isScrolling, router]);

  // Handle touch gestures for mobile
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      // Don't handle touch events on project detail pages
      if (router.pathname.startsWith('/projects/')) {
        return;
      }
      touchStartY = e.touches[0].clientY;
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      // Don't handle touch events on project detail pages
      if (router.pathname.startsWith('/projects/')) {
        return;
      }
      
      // Special handling for About page - allow internal scrolling
      if (router.pathname === '/about') {
        const scrollContainer = document.querySelector('.h-full.overflow-y-auto.scrollbar-custom');
        if (scrollContainer) {
          const isAtTop = scrollContainer.scrollTop === 0;
          const isAtBottom = scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight - 10;
          const diff = touchStartY - e.touches[0].clientY;
          
          // Only prevent default if trying to navigate to other pages
          if ((diff < 0 && isAtTop) || (diff > 0 && isAtBottom)) {
            if (Math.abs(diff) > 10) {
              e.preventDefault();
            }
          }
          return;
        }
      }
      
      if (Math.abs(e.touches[0].clientY - touchStartY) > 10) {
        e.preventDefault();
      }
    };
    
    const handleTouchEnd = (e: TouchEvent) => {
      // Don't handle touch events on project detail pages
      if (router.pathname.startsWith('/projects/')) {
        return;
      }
      
      if (isScrolling) return;
      
      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY - touchEndY;
      
      // Special handling for About page
      if (router.pathname === '/about') {
        const scrollContainer = document.querySelector('.h-full.overflow-y-auto.scrollbar-custom');
        if (scrollContainer) {
          const isAtTop = scrollContainer.scrollTop === 0;
          const isAtBottom = scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight - 10;
          
          if (Math.abs(diff) > 50) {
            if (diff < 0 && isAtTop && currentPage > 0) {
              // Swipe down (previous page) from top
              setIsScrolling(true);
              const prevPage = currentPage - 1;
              setCurrentPage(prevPage);
              router.push(pages[prevPage].route);
              setTimeout(() => {
                window.dispatchEvent(new Event('urlchange'));
                setIsScrolling(false);
              }, 600);
              return;
            } else if (diff > 0 && isAtBottom && currentPage < pages.length - 1) {
              // Swipe up (next page) from bottom
              setIsScrolling(true);
              const nextPage = currentPage + 1;
              setCurrentPage(nextPage);
              router.push(pages[nextPage].route);
              setTimeout(() => {
                window.dispatchEvent(new Event('urlchange'));
                setIsScrolling(false);
              }, 600);
              return;
            }
          }
          return;
        }
      }
      
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
        
        setTimeout(() => {
          window.dispatchEvent(new Event('urlchange'));
          setIsScrolling(false);
        }, 600);
      }
    };

    let touchStartY = 0;

    document.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd, { passive: false });
    
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentPage, isScrolling, router]);

  const CurrentComponent = pages[currentPage]?.component;

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
            {CurrentComponent && <CurrentComponent />}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default FullPageScroll;
