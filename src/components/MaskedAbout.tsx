import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

const MaskedAbout = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Heading moves up and fades out 3x faster
  const headingY = useTransform(scrollYProgress, [0, 0.1], ["0%", "-300%"]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  // Content reveals at normal speed
  const contentY = useTransform(scrollYProgress, [0.3, 0.9], ["50%", "0%"]);
  const contentOpacity = useTransform(scrollYProgress, [0.3, 0.9], [0, 1]);

  // Heading returns at the end
  const headingReturnY = useTransform(scrollYProgress, [0.9, 1], ["100%", "0%"]);
  const headingReturnOpacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

  // Lock scrolling when inside the section, unlock when leaving
  useEffect(() => {
    const section = containerRef.current;

    const handleMouseEnter = () => {
      document.body.classList.add("body-no-scroll");
    };

    const handleMouseLeave = () => {
      document.body.classList.remove("body-no-scroll");
    };

    section?.addEventListener("mouseenter", handleMouseEnter);
    section?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      section?.removeEventListener("mouseenter", handleMouseEnter);
      section?.removeEventListener("mouseleave", handleMouseLeave);
      document.body.classList.remove("body-no-scroll");
    };
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center">
      {/* Initial Heading (Moves up 3x faster) */}
      <motion.h1 
        style={{ y: headingY, opacity: headingOpacity }}
        className="absolute top-1/2 text-5xl font-bold"
      >
        Introduction to Data Science 🚀
      </motion.h1>

      {/* Scrollable Content Section */}
      <div className="relative max-w-7xl w-full mx-auto px-6 lg:px-8 h-screen overflow-y-auto no-scrollbar">
        {/* Introduction */}
        <motion.h2 
          style={{ opacity: contentOpacity, y: contentY }}
          className="text-4xl font-bold text-center mb-12"
        >
          Introduction to Data Science with Python 🚀
        </motion.h2>
        <motion.p 
          style={{ opacity: contentOpacity, y: contentY }}
          className="text-lg text-center leading-relaxed max-w-4xl mx-auto"
        >
          A power-packed, hands-on experience designed for first-year engineering students and beginners who want to kickstart their Data Science journey.
        </motion.p>

        {/* Why Are We Doing This? */}
        <motion.div style={{ opacity: contentOpacity, y: contentY }} className="mt-12">
          <h3 className="text-2xl font-semibold text-center mb-4">Why Are We Doing This?</h3>
          <ul className="list-disc text-lg space-y-2 max-w-4xl mx-auto text-center">
            <li>🎯 Organized major Ideathons with 250+ participants.</li>
            <li>🤝 Built partnerships with top startups.</li>
            <li>🎙 Hosted industry professionals from Unisys, Cisco, and more.</li>
            <li>📈 500+ students trained, 30% secured internships.</li>
          </ul>
        </motion.div>

        {/* What You’ll Learn */}
        <motion.div style={{ opacity: contentOpacity, y: contentY }} className="mt-12">
          <h3 className="text-2xl font-semibold text-center mb-4">What You’ll Learn 📚</h3>
          <ul className="grid md:grid-cols-2 gap-4 text-lg max-w-4xl mx-auto">
            <li>✅ Python Basics & Data Structures</li>
            <li>📊 Data Analysis with Pandas & Matplotlib</li>
            <li>🌐 Flask & Web Deployment</li>
            <li>🔗 GitHub & Version Control</li>
            <li>🏅 Research Paper Writing & Networking</li>
            <li>💼 Internship & Career Prep</li>
          </ul>
        </motion.div>

        {/* Prerequisites */}
        <motion.div style={{ opacity: contentOpacity, y: contentY }} className="mt-12">
          <h3 className="text-2xl font-semibold text-center mb-4">Prerequisites 🖥</h3>
          <ul className="list-disc text-lg space-y-2 max-w-4xl mx-auto text-center">
            <li>🐍 Python installed</li>
            <li>📝 VS Code / Jupyter Notebook</li>
            <li>🔗 Git & GitHub Account</li>
          </ul>
          <p className="mt-4 text-gray-400 text-center">We’ll provide setup guides before the sessions start.</p>
        </motion.div>

        {/* Heading Reappears at the End */}
        <motion.h1 
          style={{ y: headingReturnY, opacity: headingReturnOpacity }}
          className="absolute bottom-1/2 text-5xl font-bold"
        >
          Introduction to Data Science 🚀
        </motion.h1>
      </div>
    </div>
  );
};

export default MaskedAbout;
