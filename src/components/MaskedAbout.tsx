import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const MaskedAbout = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Text movement & opacity transition
  const y1 = useTransform(scrollYProgress, [0, 0.5, 1], ["50%", "0%", "-50%"]);
  const y2 = useTransform(scrollYProgress, [0, 0.5, 1], ["60%", "0%", "-60%"]);
  const y3 = useTransform(scrollYProgress, [0, 0.5, 1], ["70%", "0%", "-70%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden bg-gray-900 text-white flex flex-col items-center justify-center px-6">
      {/* Background Effect */}
      <motion.div className="absolute inset-0 bg-gradient-to-b from-black to-gray-800" style={{ opacity }} />

      {/* Title */}
      <motion.h2 style={{ y: y1, opacity }} className="text-5xl font-bold text-center mb-6">
        Introduction to Data Science with Python 🚀
      </motion.h2>

      {/* Description */}
      <motion.p style={{ y: y2, opacity }} className="text-lg text-center max-w-3xl leading-relaxed">
        A power-packed, hands-on experience designed for first-year engineering students and beginners who want to kickstart their Data Science journey.
      </motion.p>

      {/* Achievements */}
      <motion.ul style={{ y: y3, opacity }} className="mt-6 list-disc text-center text-lg max-w-2xl">
        <li>🎯 Organized major Ideathons with 250+ participants.</li>
        <li>🤝 Built partnerships with top startups.</li>
        <li>🎙 Hosted industry professionals from Unisys, Cisco, and more.</li>
      </motion.ul>
    </div>
  );
};

export default MaskedAbout;
