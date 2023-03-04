import React from "react";
import {
  IconAward,
  IconBrandCss3,
  IconBrandDocker,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandSvelte,
  IconBrandThreejs,
  IconBrandTypescript,
} from "@tabler/icons-react";

const TechStack = () => {
  return (
    <div className="mt-10">
      <h3>Tech Stack</h3>
      <div className="grid grid-cols-4 mt-4 gap-2">
        <div className="flex align-middle gap-1">
          <IconBrandJavascript />
          <p className="dark:text-gray-700">JavaScript</p>
        </div>

        <div className="flex align-middle gap-1">
          <IconBrandTypescript />
          <p className="dark:text-gray-700">TypeScript</p>
        </div>
        <div className="flex align-middle gap-1">
          <IconBrandNextjs />
          <p className="dark:text-gray-700">NextJS</p>
        </div>
        <div className="flex align-middle gap-1">
          <IconBrandReact />
          <p className="dark:text-gray-700">React</p>
        </div>
        <div className="flex align-middle gap-1">
          <IconBrandDocker />
          <p className="dark:text-gray-700">Docker</p>
        </div>
        <div className="flex align-middle gap-1">
          <IconBrandHtml5 />
          <p className="dark:text-gray-700">Html</p>
        </div>
        <div className="flex align-middle gap-1">
          <IconBrandCss3 />
          <p className="dark:text-gray-700">CSS</p>
        </div>

        <div className="flex align-middle gap-1">
          <IconBrandSvelte />
          <p className="dark:text-gray-700">Svelte</p>
        </div>
        <div className="flex align-middle gap-1">
          <IconBrandThreejs />
          <p className="dark:text-gray-700">ThreeJs</p>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
