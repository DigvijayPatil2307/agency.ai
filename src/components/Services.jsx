import React from "react";
import assets from "../assets/assets";
import Title from "./Title";
import ServiceCard from "./ServiceCard";
import { motion } from "motion/react";

const Services = () => {
  const servicesData = [
    {
      title: "Advertising",
      description:
        "we turn bold ideas into powerful digital solutions that connect, engage...",
      icon: assets.ads_icon,
    },
    {
      title: "Content Marketing",
      description: "we help you execute your plan and deliver results.",
      icon: assets.marketing_icon,
    },
    {
      title: "Content Writing",
      description: "we help you create marketing strategy that drives results.",
      icon: assets.content_icon,
    },
    {
      title: "Social Media",
      description:
        "we help you build a strong social media presence and engage with ou audience. ",
      icon: assets.social_icon,
    },
  ];

  return (
    <motion.div
      id="services"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      {/* Background Image Animation */}
      <motion.img
        src={assets.bgImage2}
        alt=""
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="absolute -top-110 -left-70 -z-1 dark:hidden"
      />

      <Title
        title="How Can we help ?"
        desc="From strategy to execution , we craft digital solutions that move your business forward."
      />

      {/* Stagger container for cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="flex flex-col md:grid grid-cols-2"
      >
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
