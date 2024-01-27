import React from "react";

import { profiles } from "../../../Data";

import Course from "../Course/Course";
import { motion } from "framer-motion";

const Courses = () => {
 
  return (
    <div className="section" id="portfolio">
      
      <div className="text-xl font-bold mt-2">Top Testimonials</div>
      <div className="mt-2 overflow-x-hidden w-full  relative">
        <div className="flex gap-8 md:w-full sm:w-[170%] xs:w-[340%] w-[480%] animate-slide">
          {profiles.map((profile ) => {
            return <Course key={profile .id} {...profile } />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Courses;
