import React from "react";

const Timeline = () => {
  return (
    <section className="mt-8">
      <h3 className="font-bold">Experience</h3>
      <ol className="border-l border-neutral-300 dark:border-neutral-500 mt-4">
        <li>
          <div className="flex-start flex items-center pt-3">
            <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
            <p className="text-sm text-neutral-500 dark:text-neutral-300">
              Dec 2019 - Jun 2021
            </p>
          </div>
          <div className="mt-2 ml-4 mb-6">
            <h4 className="mb-1.5 text-md font-semibold">
              Software Developer - INC tech.
            </h4>
            <ul className="mb-3 text-neutral-500 dark:text-neutral-300">
              <li>
                Experienced software developer with a background in web
                development and automation app creation
              </li>
              <li>
                Successfully managed a small team and contributed to the
                delivery of various projects
              </li>
              <li>Strong skills in software design and project management</li>
              <li>
                Proven ability to bring value to software development roles
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div className="flex-start flex items-center pt-2">
            <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
            <p className="text-sm text-neutral-500 dark:text-neutral-300">
              13.09.2021
            </p>
          </div>
          <div className="mt-2 ml-4 mb-6">
            <h4 className="mb-1.5 text-md font-semibold">
              Front-end developer - Madde22 / NoSurrender
            </h4>
            <ul className="mb-3 text-neutral-500 dark:text-neutral-300">
              <li>
                Demonstrated a strong ability to create visually appealing and
                user-friendly websites
              </li>
              <li>
                Created dashboards and landing pages using technologies such as
                NextJS, Strapi, and TypeScript
              </li>
              <li>Created a website for a main project involving NFTs</li>
              <li>
                Designed and developed a complex landing page with 3D elements
                and full animation using ThreeJS
              </li>
            </ul>
          </div>
        </li>
      </ol>
    </section>
  );
};

export default Timeline;
