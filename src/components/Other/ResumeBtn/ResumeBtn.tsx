import { RiEyeLine } from "react-icons/ri";
import { motion } from "framer-motion";

const ResumeBtn = () => {
  const handleViewResume = () => {
    // Open resume in new tab/window instead of downloading
    window.open('/resume.pdf', '_blank');
  };

  return (
    <motion.button
      onClick={handleViewResume}
      className="group relative overflow-hidden bg-accent/20 hover:bg-accent/30 border border-accent/30 hover:border-accent/50 rounded-full px-6 py-3 text-white transition-all duration-300 ease-in-out"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex items-center gap-3">
        <RiEyeLine className="text-accent text-xl group-hover:animate-bounce" />
        <span className="font-medium">View Resume</span>
      </div>
      
      {/* Background animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
    </motion.button>
  );
};

export default ResumeBtn;
