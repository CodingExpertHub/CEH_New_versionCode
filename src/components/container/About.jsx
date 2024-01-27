import React from "react";
import about from "../../assets/About.jpg";

const About = () => {
  return (
    <div className="section" id="about">
      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        <div className="border-[3px] border-solid border-Teal rounded-lg">
          <img src={about} alt="" className="p-4" />
        </div>
        <div>
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            We provide the <br /> best{" "}
            <span className="text-Teal">online VilearnX courses</span>
          </div>
          <p className="text-sm text-gray leading-7 mb-4">
          At VilearnX, we take pride in delivering the finest online courses designed to elevate your skills and knowledge. 
          Immerse yourself in cutting-edge content, expertly curated to empower learners in various domains. 
          Our courses blend interactive learning, real-world applications, and the latest industry insights to ensure you acquire not just knowledge but mastery. 
          Join us on a transformative journey where education meets excellence, 
          and unlock your full potential with the best online courses at VilearnX
          </p>
          <button className="py-3 px-6 text-sm border border-solid border-gray rounded-lg font-bold">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
