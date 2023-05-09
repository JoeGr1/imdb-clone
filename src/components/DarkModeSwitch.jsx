"use client";

import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";

import { UseTheme, useTheme } from "next-themes";

const DarkModeSwitch = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  return (
    <>
      <MdLightMode />
      <BsFillMoonFill />
    </>
  );
};

export default DarkModeSwitch;
