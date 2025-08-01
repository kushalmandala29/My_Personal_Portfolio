import { useEffect } from "react";
import { useRouter } from "next/router";
import Seo from "@/components/Other/Seo";

const ContactPage = () => {
  const router = useRouter();
  
  useEffect(() => {
    // Redirect to the unified about page with contact section
    router.push('/about#contact');
  }, [router]);

  return (
    <>
      <Seo
        title="Contact • Kushal Mandala • Portfolio"
        description="Ready to start a conversation about your next project? Get in touch with me here. I'm excited to discuss your ideas and how I can help you achieve your software development goals."
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

export default ContactPage;
