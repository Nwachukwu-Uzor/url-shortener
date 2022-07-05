import React from "react";

import working from "../assets/illustration-working.svg";

const Hero = () => {
  return (
    <section className="py-6 min-h-[70vh] flex items-center relative">
      <div className="w-full max-w-[1240px] mx-auto px-4 grid md:grid-cols-2 gap-10 items-center justify-between">
        <div className="md:order-last mb-[20rem] md:mb-0">
          <img
            src={working}
            alt="working person"
            className="absolute right-[-1rem] md:right-[-10rem] md:translate-y-[-50%] h-[300px] md:h-[500px]"
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="font-bold text-3xl md:text-6xl my-4">
            More than just shorter links
          </h1>
          <p className="leading-loose mb-3">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <a
            href="#"
            className="py-2 block mx-auto text-center md:mx-0 w-[150px] text-white font-bold bg-[#27d3d6] rounded-full hover:opacity-90"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
