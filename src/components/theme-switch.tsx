'use client'

import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeSwitch() {
  const { setTheme, resolvedTheme } = useTheme()

  if(resolvedTheme === 'dark') {
    return (
      <div>
        <FiSun onClick={() => setTheme("light")} />
      </div>
    );
  }

  if(resolvedTheme === 'light') {
    return (
      <div>
        <FiMoon onClick={() => setTheme("dark")} />
      </div>
    );
  }
}