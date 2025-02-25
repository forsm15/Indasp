import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const MaskedAbout = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Transforms for text movement
  const y1 = useTransform(scrollYProgress, [0, 0.5, 1], ["50%", "0%", "-50%"]);
  const y2 = useTransform(scrollYProgress, [0, 0.5, 1], ["60%", "0%", "-60%"]);
  const y3 = useTransform(scrollYProgress, [0, 0.5, 1], ["70%", "0%", "-70%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-gray-900 text-white overflow-hidden flex items-center justify-center px-6">
      {/* Background Effect */}
      <motion.div className="absolute inset-0 bg-gradient-to-b from-black to-gray-800" style={{ opacity }} />

      {/* Scrolling Content */}
      <div className="relative max-w-4xl mx-auto overflow-y-auto h-[80vh] px-6 py-10">
        {/* Title */}
        <motion.h2 style={{ y: y1, opacity }} className="text-5xl font-bold text-center mb-6">
          Introduction to Data Science with Python 🚀
        </motion.h2>

        {/* Intro Paragraph */}
        <motion.p style={{ y: y2, opacity }} className="text-lg text-center leading-relaxed">
          A power-packed, hands-on experience designed for first-year engineering students and beginners who want to kickstart their Data Science journey.
        </motion.p>

        {/* Achievements */}
        <motion.div style={{ y: y3, opacity }} className="mt-8">
          <h3 className="text-2xl font-semibold text-center mb-4">Why Are We Doing This?</h3>
          <ul className="list-disc text-lg text-center space-y-2">
            <li>🎯 Organized major Ideathons with 250+ participants.</li>
            <li>🤝 Built partnerships with top startups.</li>
            <li>🎙 Hosted industry professionals from Unisys, Cisco, and more.</li>
            <li>📈 500+ students trained, 30% secured internships.</li>
          </ul>
        </motion.div>

        {/* What You’ll Learn */}
        <motion.div style={{ y: y1, opacity }} className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">What You’ll Learn 📚</h3>
          <ul className="grid md:grid-cols-2 gap-4 text-lg">
            <li>✅ Python Basics & Data Structures</li>
            <li>📊 Data Analysis with Pandas & Matplotlib</li>
            <li>🌐 Flask & Web Deployment</li>
            <li>🔗 GitHub & Version Control</li>
            <li>🏅 Research Paper Writing & Networking</li>
            <li>💼 Internship & Career Prep</li>
          </ul>
        </motion.div>

        {/* Who Is This For? */}
        <motion.div style={{ y: y2, opacity }} className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Who Is This For? 👨‍💻</h3>
          <ul className="list-disc text-lg space-y-2">
            <li>🚀 Beginners in Data Science</li>
            <li>🎯 Looking for internship opportunities</li>
            <li>🛠 Want to build real projects</li>
            <li>📜 Interested in publishing research papers</li>
          </ul>
        </motion.div>

        {/* Prerequisites */}
        <motion.div style={{ y: y3, opacity }} className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Prerequisites 🖥</h3>
          <ul className="list-disc text-lg space-y-2">
            <li>🐍 Python installed</li>
            <li>📝 VS Code / Jupyter Notebook</li>
            <li>🔗 Git & GitHub Account</li>
          </ul>
          <p className="mt-4 text-gray-400">We’ll provide setup guides before the sessions start.</p>
        </motion.div>

        {/* Workshop Outcome */}
        <motion.div style={{ y: y1, opacity }} className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">What You’ll Get 🎯</h3>
          <ul className="list-disc text-lg space-y-2">
            <li>💡 Build real-world projects.</li>
            <li>🎓 Internship & research paper opportunities.</li>
            <li>🤝 Industry interactions & expert mentorship.</li>
            <li>📜 Certificate of Completion.</li>
          </ul>
        </motion.div>

        {/* Prizes & Recognition */}
        <motion.div style={{ y: y2, opacity }} className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Prizes & Recognition 🏆</h3>
          <ul className="list-disc text-lg space-y-2">
            <li>🏅 Top 3-10 get mentorship from industry experts.</li>
            <li>📖 Top 3 receive special training for research & job interviews.</li>
            <li>🎁 Exciting rewards for outstanding participants.</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default MaskedAbout;
