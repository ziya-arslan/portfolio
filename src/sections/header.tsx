import { Button } from "@components";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { Bebas_Neue } from "next/font/google";
import { Switch } from "@components";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (!mounted) return null;

    if (currentTheme === "dark") {
      return (
        <Button
          className="bg-gray-200 dark:bg-gray-600"
          onClick={() => setTheme("light")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
        </Button>
      );
    } else {
      return (
        <Button className="bg-gray-200" onClick={() => setTheme("dark")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        </Button>
      );
    }
  };

  return (
    <header className="h-16 flex items-center justify-between">
      <h3 className={`text-2xl ${bebas.className}`}>Ziya.dev</h3>
      <div className="flex gap-2 items-center">
        <Link
          href={"https://github.com/ziya-arslan"}
          className=" flex"
          target={"_blank"}
        >
          <IconBrandGithub width={32} height={32} />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/arslanziya/"}
          className=" flex"
          target={"_blank"}
        >
          <IconBrandLinkedin width={32} height={32} />
        </Link>
        {/* {toggleTheme()} */}
        <Switch />
      </div>
    </header>
  );
};

export default Header;
