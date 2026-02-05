import React from "react";
import Title from "./Title";
import assets from "../assets/assets";
import { motion } from "motion/react";

const OurWork = () => {
  const workData = [
    {
      title: "Mobile app marketing",
      description:
        "we turn bold ideas into powerful digital solutions that connect, engage....",
      image: assets.work_mobile_app,
    },
    {
      title: "Dashboard management",
      description: "we help you execute your plan and deliver results. ",
      image: assets.work_dashboard_management,
    },
    {
      title: "Fitness app promotion",
      description:
        "we help you create a marketing strategy that drives results.",
      image: assets.work_fitness_app,
    },
  ];

  return (
    <motion.div
      id="our-work"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="
        flex flex-col items-center gap-7 px-4 sm:px-12
        lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Title
          title="Our latest work"
          desc="
          From strategy to execution, we craft digital solutions that move your business froward."
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.15 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl"
      >
        {workData.map((work, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
            className="hover:scale-102 duration-500 transition-all cursor-pointer"
          >
            <motion.img
              src={work.image}
              alt=""
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="w-full rounded-xl"
            />
            <h3 className="mt-3 mb-2 text-lg font-semibold">{work.title}</h3>
            <p className="text-sm opacity-60 w-5/6">{work.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default OurWork;
