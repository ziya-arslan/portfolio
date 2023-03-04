import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 text-center text-gray-500 text-sm">
      <span className="dark:text-gray-100 text-gray-900 font-bold text-lg mr-2">
        Ziya
      </span>{" "}
      &copy; {new Date().getFullYear()} All Rights Reserved
    </footer>
  );
};

export default Footer;
