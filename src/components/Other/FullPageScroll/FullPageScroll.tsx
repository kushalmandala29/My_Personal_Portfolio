import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import About from '@/components/Templates/About/About';

const FullPageScroll = () => {
  const router = useRouter();

  // Initialize current page based on route
  useEffect(() => {
    // Handle project detail pages - don't interfere with them
    if (router.pathname.startsWith('/projects/')) {
      return; // Don't set currentPage for project detail pages
    }
    
    // Always redirect to the unified about page
    if (router.pathname === '/' || router.pathname === '/contact' || router.pathname === '/skills' || router.pathname === '/certifications') {
      let hash = '#home';
      if (router.pathname === '/contact') hash = '#contact';
      router.push(`/about${hash}`);
    }
  }, [router]);

  const CurrentComponent = About;

  return (
    <>
      {/* Page Content */}
      <div className="h-full w-full overflow-hidden">
        <CurrentComponent />
      </div>
    </>
  );
};

export default FullPageScroll;
