"use client"
import {  useEffect, useState } from "react";

const svg = {
  light: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5 inline-block"
    >
      <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
    </svg>
  ),
  dark: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4 inline-block"
    >
      <path
        fillRule="evenodd"
        d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
        clipRule="evenodd"
      />
    </svg>
  ),
};

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const [activeTheme, setActiveTheme] = useState("light");

  const setDarkTheme = () => {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";

    setActiveTheme("dark");
    // setShowDropdown(false);
  };

  const setLightTheme = () => {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";

    setActiveTheme("light");
    // setShowDropdown(false);
  };

  const toggleTheme = () => {
    if (activeTheme === "dark") {
      setLightTheme();
    } else {
      setDarkTheme();
    }
  };

  // useEffect(() => {
  //   // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  //   if (
  //     localStorage.theme === "dark" ||
  //     (!("theme" in localStorage) &&
  //       window.matchMedia("(prefers-color-scheme: dark)").matches)
  //   ) {
  //     setDarkTheme();
  //   } else {
  //     setLightTheme();
  //   }
  // }, []);

  return (
    <>
      {/* <label className=" relative inline-flex cursor-pointer select-none items-center">
        <input
          type="checkbox"
          checked={isChecked}
          onClick={toggleTheme}
          onChange={handleCheckboxChange}
          className="sr-only"
        />
        <span className="label flex items-center text-sm font-medium text-black">
          Light
        </span>
        <span
          className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${
            isChecked ? "bg-[#212b36]" : "bg-gray-400"
          }`}
        >
          <span
            className={`dot h-6 w-6 rounded-full bg-gray-400 duration-200 ${
              isChecked ? "translate-x-[28px]" : ""
            }`}
          ></span>
        </span>
        <span className="label flex items-center text-sm font-medium text-black">
          Dark
        </span>
      </label> */}
      <div className="flex items-center">
        <button
          // ref={switcherButton}
          onClick={toggleTheme}
          className="px-3 py-2 rounded-full focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={activeTheme === "light" ? "black" : "white"}
            className="w-5 h-5 inline-block"
          >
            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default DarkModeToggle;