import React, { useRef, useState } from "react";
import { motion } from "motion/react";

const ServiceCard = ({ service, index }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    const bounds = divRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="relative overflow-hidden 
        max-w-lg m-2 sm:m-4 rounded-xl border
        border-gray-200 dark:border-gray-700 
        shadow-2xl shadow-gray-100 dark:shadow-white/10"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      ref={divRef}
      onMouseMove={handleMouseMove}
    >
      {/* Glow effect */}
      <motion.div
        className={`pointer-events-none absolute 
          w-[300px] h-[300px] blur-3xl rounded-full 
          bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500
          mix-blend-lighten transition-opacity duration-300
          ${visible ? "opacity-70" : "opacity-0"}`}
        animate={{
          opacity: visible ? 0.7 : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{
          top: position.y - 150,
          left: position.x - 150,
        }}
      />

      {/* Content */}
      <motion.div
        whileHover={{ scale: 0.98 }}
        transition={{ duration: 0.3 }}
        className="flex items-center gap-10 p-8 hover:p-7.5 hover:m-0.5 
          transition-all rounded-[10px] bg-white dark:bg-gray-900 
          z-10 relative"
      >
        <motion.div
          whileHover={{ rotate: 5 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-gray-100 dark:bg-gray-700 rounded-full"
        >
          <img
            src={service.icon}
            alt=""
            className="max-w-24 bg-white dark:bg-gray-900 rounded-full m-2"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h3 className="font-bold">{service.title}</h3>
          <p className="text-sm mt-2">{service.description}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;
