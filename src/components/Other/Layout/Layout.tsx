import { Jost } from 'next/font/google'
import { useRouter } from 'next/router'

import Nav from '@/components/Other/Nav/Nav'
import Header from '@/components/Other/Header/Header'
import FullPageScroll from '@/components/Other/FullPageScroll/FullPageScroll'

import { ChildrenInterface } from '@/interfaces/ChildrenInterface';

const jost = Jost({
  weight: ['300', '400', '500', '700', '800'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

const Layout = ({ children }: ChildrenInterface) => {
  const router = useRouter();
  const isProjectDetailPage = router.pathname.startsWith('/projects/');

  return (
    <div className={`page bg-gradient bg-contain bg-repeat bg-bottom text-white relative h-screen ${jost.className} max-h-dvh`}>
      <div className={`page bg-cube text-white relative h-screen`}>
        <Nav />
        <Header />
        {isProjectDetailPage ? children : <FullPageScroll />}
      </div>
    </div>
  );
};

export default Layout;
