import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

const MaskedAbout = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Disable outer scrolling while inside the section
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto"; // Restore scrolling after exit
    };
  }, []);

  // Heading moves 3× faster than content
  const headingY = useTransform(scrollYProgress, [0, 0.1], ["0%", "-100%"]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  // Content scrolls normally inside without showing scrollbar
  const contentY = useTransform(scrollYProgress, [0.3, 1], ["50%", "0%"]);
  const contentOpacity = useTransform(scrollYProgress, [0.3, 1], [0, 1]);

  // Heading returns at the end
  const headingReturnY = useTransform(scrollYProgress, [0.9, 1], ["100%", "0%"]);
  const headingReturnOpacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

  return (
    <div 
      ref={containerRef} 
      className="relative min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Initial Heading (Moves up 3× faster) */}
      <motion.h1 
        style={{ y: headingY, opacity: headingOpacity }}
        className="absolute top-1/2 text-5xl font-bold"
      >
        Introduction to Data Science 🚀
      </motion.h1>

      {/* Full Content Appearing After Split */}
      <motion.div 
        style={{ opacity: contentOpacity, y: contentY }} 
        className="relative max-w-7xl w-full mx-auto px-6 lg:px-8 h-screen overflow-y-scroll scrollbar-hidden"
      >
        {/* Introduction */}
        <h2 className="text-4xl font-bold text-center mb-12">
          Introduction to Data Science with Python 🚀
        </h2>
        <p className="text-lg text-center leading-relaxed max-w-4xl mx-auto">
          A power-packed, hands-on experience designed for first-year engineering students and beginners who want to kickstart their Data Science journey.
        </p>

        {/* Why Are We Doing This? */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-center mb-4">Why Are We Doing This?</h3>
          <ul className="list-disc text-lg space-y-2 max-w-4xl mx-auto text-center">
            <li>🎯 Organized major Ideathons with 250+ participants.</li>
            <li>🤝 Built partnerships with top startups.</li>
            <li>🎙 Hosted industry professionals from Unisys, Cisco, and more.</li>
            <li>📈 500+ students trained, 30% secured internships.</li>
          </ul>
        </div>

        {/* What You’ll Learn */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-center mb-4">What You’ll Learn 📚</h3>
          <ul className="grid md:grid-cols-2 gap-4 text-lg max-w-4xl mx-auto">
            <li>✅ Python Basics & Data Structures</li>
            <li>📊 Data Analysis with Pandas & Matplotlib</li>
            <li>🌐 Flask & Web Deployment</li>
            <li>🔗 GitHub & Version Control</li>
            <li>🏅 Research Paper Writing & Networking</li>
            <li>💼 Internship & Career Prep</li>
          </ul>
        </div>

        {/* Who Is This For? */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-center mb-4">Who Is This For? 👨‍💻</h3>
          <ul className="list-disc text-lg space-y-2 max-w-4xl mx-auto text-center">
            <li>🚀 Beginners in Data Science</li>
            <li>🎯 Looking for internship opportunities</li>
            <li>🛠 Want to build real projects</li>
            <li>📜 Interested in publishing research papers</li>
          </ul>
        </div>

        {/* Prerequisites */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-center mb-4">Prerequisites 🖥</h3>
          <ul className="list-disc text-lg space-y-2 max-w-4xl mx-auto text-center">
            <li>🐍 Python installed</li>
            <li>📝 VS Code / Jupyter Notebook</li>
            <li>🔗 Git & GitHub Account</li>
          </ul>
          <p className="mt-4 text-gray-400 text-center">We’ll provide setup guides before the sessions start.</p>
        </div>

        {/* Workshop Outcome */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-center mb-4">What You’ll Get 🎯</h3>
          <ul className="list-disc text-lg space-y-2 max-w-4xl mx-auto text-center">
            <li>💡 Build real-world projects.</li>
            <li>🎓 Internship & research paper opportunities.</li>
            <li>🤝 Industry interactions & expert mentorship.</li>
            <li>📜 Certificate of Completion.</li>
          </ul>
        </div>

        {/* Prizes & Recognition */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-center mb-4">Prizes & Recognition 🏆</h3>
          <ul className="list-disc text-lg space-y-2 max-w-4xl mx-auto text-center">
            <li>🏅 Top 3-10 get mentorship from industry experts.</li>
            <li>📖 Top 3 receive research & job interview training.</li>
            <li>🎁 Exciting rewards for outstanding participants.</li>
          </ul>
        </div>
      </motion.div>

      {/* Heading Reappears at the End */}
      <motion.h1 
        style={{ y: headingReturnY, opacity: headingReturnOpacity }}
        className="absolute bottom-1/2 text-5xl font-bold"
      >
        Introduction to Data Science 🚀
      </motion.h1>
    </div>
  );
};

export default MaskedAbout;
