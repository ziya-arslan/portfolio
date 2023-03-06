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
          className="p-2 font-semibold rounded-md hover:ring-2 hover:ring-gray-300 bg-red-700 text-white px-6"
        >
          Contact Me!
        </Link>
      </div>
    </section>
  );
};

export default Hero;
