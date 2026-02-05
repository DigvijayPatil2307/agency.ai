import React from "react";
import assets from "../assets/assets";

const Footer = ({ theme }) => {
  return (
    <footer className="
      border-t border-gray-200 dark:border-gray-700
      bg-gray-50 dark:bg-gray-900
      px-4 sm:px-12 lg:px-24 xl:px-40
      py-12 text-gray-700 dark:text-white/80
    ">
      {/* TOP SECTION */}
      <div className="flex flex-col sm:flex-row justify-between gap-12">
        
        {/* LEFT */}
        <div className="max-w-sm">
          <img
            src={theme === "dark" ? assets.logo_dark : assets.logo}
            alt="logo"
            className="w-32 mb-4"
          />
          <p className="text-sm leading-relaxed text-gray-600 dark:text-white/70">
            From strategy to execution, we craft digital solutions that move your
            business forward.
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-4 sm:items-end">
          <p className="text-sm font-medium">
            Subscribe to our newsletter
          </p>

          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="
                px-4 py-2 text-sm rounded-md
                border border-gray-300 dark:border-gray-600
                bg-white dark:bg-gray-800
                outline-none focus:ring-2 focus:ring-primary
              "
            />
            <button className="
              px-5 py-2 rounded-md
              bg-primary text-white text-sm font-medium
              hover:opacity-90 transition
            ">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="
        mt-12 pt-6
        border-t border-gray-200 dark:border-gray-700
        flex flex-col sm:flex-row
        justify-between items-center gap-4
        text-sm text-gray-500
      ">
        <p>
          © 2025 agency.ai — All Rights Reserved.
        </p>

        <div className="flex gap-5">
          <a href="#"><img src={assets.facebook_icon} className="w-5 opacity-80 hover:opacity-100" /></a>
          <a href="#"><img src={assets.twitter_icon} className="w-5 opacity-80 hover:opacity-100" /></a>
          <a href="#"><img src={assets.instagram_icon} className="w-5 opacity-80 hover:opacity-100" /></a>
          <a href="#"><img src={assets.linkedin_icon} className="w-5 opacity-80 hover:opacity-100" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
