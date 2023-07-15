import { Button } from "@components";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="mt-16">
      <h1 className="text-7xl font-bold">
        Hi 👋 <br /> I am <span className="text-red-600">Ziya</span>
      </h1>
      <h3 className="text-2xl my-3">Frontend developer 👨‍💻</h3>
      <p className="text-gray-700 mb-8">
        Professional front-end developer with a strong drive to deliver visually
        appealing and intuitive websites. Able to work effectively in team
        environments and consistently strive to improve my skills.
      </p>
      <div className="w-full flex justify-center">
        <Link
          href="mailto:arslanziya@hotmail.com"
          className="text-[17px] font-bold border-none rounded-[0.75em] bg-black group"
        >
          <span className="block box-border border-2 border-solid border-black rounded-[0.75em] py-[0.75em] px-[1.5em] bg-[#e8e8e8] text-black translate-y-[-0.2em] transition-transform duration-100 ease-in group-hover:translate-y-[-0.33em] group-active:translate-y-0">
            Contact Me!
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
