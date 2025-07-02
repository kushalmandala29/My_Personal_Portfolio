import { RiDownloadLine } from "react-icons/ri";
import { motion } from "framer-motion";

const ResumeBtn = () => {
  const handleDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Path to your resume file in public folder
    link.download = 'Kushal_Resume.pdf'; // Downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.button
      onClick={handleDownload}
      className="group relative overflow-hidden bg-accent/20 hover:bg-accent/30 border border-accent/30 hover:border-accent/50 rounded-full px-6 py-3 text-white transition-all duration-300 ease-in-out"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex items-center gap-3">
        <RiDownloadLine className="text-accent text-xl group-hover:animate-bounce" />
        <span className="font-medium">Download Resume</span>
      </div>
      
      {/* Background animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
    </motion.button>
  );
};

export default ResumeBtn;
