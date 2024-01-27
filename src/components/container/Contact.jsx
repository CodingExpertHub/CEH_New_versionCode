import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="section" id="contact">
      <div className="text-center max-w-[600px] mx-auto">
        <div className="sm:text-3xl text-2xl font-bold mb-5">Contact Us</div>

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-white p-6 rounded-md shadow-md mb-5" // Increased padding, width, and height
          style={{ maxWidth: "1000px" }} // Set a maximum width for responsiveness
        >
          {/* <p className="text-lg font-semibold">Contact Details:</p> */}
          <p className="text-base text-gray">Email: info@codinexperthub.in</p>
          <p className="text-base text-gray">Phone: +91-6302440159</p><br></br>
          <motion.button
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="text-sm text-white bg-Teal sm:p-3 p-2 shadow-md font-bold"
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
