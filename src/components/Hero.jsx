/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="w-[95%] max-w-[1200px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-10 py-10 lg:py-0 mb-20">
      {/* Fadded text */}
      <h3 className="hidden lg:block absolute bottom-5 -z-10 text-[12rem] font-bold text-blue-700/20 uppercase select-none">
        Exercies
      </h3>

      {/* Hero info */}
      <div className="z-10 flex flex-col gap-3 lg:mb-10">
        <h4 className="text-3xl font-medium text-blue-700/80">Fitness Club</h4>

        <h2 className="mb-5 text-5xl font-bold text-blue-900 lg:text-6xl">
          Eat, Sleep, Train, Repeat.
        </h2>

        <p className="text-2xl text-gray-600 mb-5 max-w-[45ch]">
          We’re not just a gym with the latest equipment, we also provide you
          with various classes that will help you achieve your fitness goals.
        </p>

        <Link
          href={"/#exercises"}
          className="text-center max-w-[250px] text-xl font-medium bg-blue-600 text-white p-3 py-4 hover:bg-blue-700 transition-all"
        >
          Explore Exercies
        </Link>
      </div>

      {/* Hero image */}

      <div className="flex-shrink-0 w-full max-w-[500px] lg:w-[60%] lg:max-w-[700px] -z-20">
        <img
          src="assets/banner2.avif"
          alt="Gym banner"
          className="h-[500px] lg:h-[700px] w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
