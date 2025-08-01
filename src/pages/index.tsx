import { useEffect } from "react";
import { useRouter } from "next/router";
import Seo from "@/components/Other/Seo";

const HomePage = () => {
  const router = useRouter();
  
  useEffect(() => {
    // Redirect to the unified about page with home section
    router.push('/about#home');
  }, [router]);

  return (
    <>
      <Seo
        title="Kushal Mandala • Portfolio"
        description="Welcome to my portfolio. I'm Kushal, an AI & Data Science student passionate about building innovative solutions that bridge data, code, and the cloud."
      />
      <div className="h-screen w-full flex items-center justify-center bg-primary">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent mx-auto"></div>
          <p className="text-white/60 mt-4">Redirecting...</p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
