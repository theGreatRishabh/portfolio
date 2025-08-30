import React from "react";

const About: React.FC = () => {
  return (
    <div className="grid md:grid-cols-5 gap-12 items-center py-12">
      <div className="md:col-span-2">
        <img
          src="/portfolio/assets/dp.jpeg"
          alt="Rishabh"
          className="rounded-lg shadow-lg w-full h-auto object-cover border-4 border-brand-secondary"
        />
      </div>
      <div className="md:col-span-3 text-brand-text-secondary text-lg space-y-4">
        <p>
          Hello! I'm Rishabh, a passionate Full Stack Developer with a knack for
          creating dynamic and user-friendly web applications. My journey into
          the world of coding started with a simple "Hello, World!" and has
          since evolved into a full-fledged passion for solving complex problems
          and building beautiful, efficient software.
        </p>
        <p>
          I specialize in hybrid mobile app development using React Native,
          Ionic and Capacitor. My goal is to create seamless and engaging user
          experiences across all devices. I have a strong foundation in both
          front-end and back-end technologies, allowing me to build complete
          solutions from the ground up.
        </p>
        <p>
          When I'm not coding, you can find me exploring new tech blogs,
          contributing to open-source projects, or enjoying a good cup of
          coffee.
        </p>
      </div>
    </div>
  );
};

export default About;
