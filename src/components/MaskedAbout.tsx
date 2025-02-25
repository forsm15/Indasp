import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const MaskedAbout = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Split section animation
  const splitLeft = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "-50%", "-100%"]);
  const splitRight = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "50%", "100%"]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.2, 0.5], [1, 1, 0]); // Disappear heading
  const contentOpacity = useTransform(scrollYProgress, [0.5, 0.8, 1], [0, 1, 1]); // Reveal content
  const contentY = useTransform(scrollYProgress, [0.5, 1], ["50%", "0%"]); // Slide content up

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden bg-gray-900 text-white">
      {/* Initial Section Before Splitting */}
      <motion.div 
        style={{ opacity: headingOpacity }} 
        className="absolute inset-0 flex items-center justify-center text-5xl font-bold"
      >
        About Workshop 🚀
      </motion.div>

      {/* Splitting Effect */}
      <motion.div 
        style={{ x: splitLeft }} 
        className="absolute inset-0 bg-black w-1/2 h-full left-0"
      />
      <motion.div 
        style={{ x: splitRight }} 
        className="absolute inset-0 bg-black w-1/2 h-full right-0"
      />

      {/* Content Appearing After Split */}
      <motion.div 
        style={{ opacity: contentOpacity, y: contentY }} 
        className="relative max-w-7xl w-full mx-auto px-6 lg:px-8 mt-20"
      >
        <h2 className="text-4xl font-bold text-center mb-6">
          Introduction to Data Science with Python 🚀
        </h2>

        <p className="text-lg text-center leading-relaxed max-w-4xl mx-auto">
          A power-packed, hands-on experience designed for first-year engineering students and beginners who want to kickstart their Data Science journey.
        </p>

        {/* Achievements */}
        <div className="mt-8">
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
            <li>📖 Top 3 receive special training for research & job interviews.</li>
            <li>🎁 Exciting rewards for outstanding participants.</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default MaskedAbout;
