import React from "react";
import Title from "./Title";
import assets from "../assets/assets";
import toast from "react-hot-toast";

const ContactUs = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "2f86bf10-a5dc-441f-8a3c-9f51b61b9632");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        toast.success("Thank you for your submission");
        event.target.reset();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div
      id="contact-us"
      className="
        flex flex-col items-center gap-7
        px-4 sm:px-12 lg:px-24 xl:px-40
        pt-24 text-gray-700 dark:text-white
      "
    >
      <Title
        title="Reach out to us"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />

      <form
        className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl w-full"
        onSubmit={onSubmit}
      >
        {/* NAME */}
        <div>
          <p className="mb-2 text-sm font-medium">Your Name</p>
          <div
            className="
            flex items-center gap-2 px-3 rounded-lg
            border border-gray-300 dark:border-gray-600
            bg-white dark:bg-gray-800
          "
          >
            <img src={assets.person_icon} alt="" className="w-4 opacity-70" />
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 text-sm bg-transparent outline-none"
              required
            />
          </div>
        </div>

        {/* EMAIL */}
        <div>
          <p className="mb-2 text-sm font-medium">Email Id</p>
          <div
            className="
            flex items-center gap-2 px-3 rounded-lg
            border border-gray-300 dark:border-gray-600
            bg-white dark:bg-gray-800
          "
          >
            <img src={assets.email_icon} alt="" className="w-4 opacity-70" />
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 text-sm bg-transparent outline-none"
              required
            />
          </div>
        </div>

        {/* MESSAGE */}
        <div className="sm:col-span-2">
          <p className="mb-2 text-sm font-medium">Message</p>
          <textarea
            rows={8}
            name="message"
            placeholder="Enter your message"
            className="
              w-full p-4 text-sm outline-none rounded-lg
              border border-gray-300 dark:border-gray-600
              bg-white dark:bg-gray-800 resize-none
            "
            required
          />
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="
            w-max flex items-center gap-2
            bg-primary text-white text-sm
            px-10 py-3 rounded-full
            hover:scale-105 transition-transform
          "
        >
          Submit
          <img src={assets.arrow_icon} alt="" className="w-4" />
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
