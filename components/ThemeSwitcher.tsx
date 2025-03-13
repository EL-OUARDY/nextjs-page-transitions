"use client";
import React, { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="bg-foreground fixed right-4 bottom-2 flex size-10 cursor-pointer items-center justify-center rounded-full"
    >
      {theme === "dark" ? (
        <SunIcon className="text-primary-foreground size-5" />
      ) : (
        <MoonIcon className="text-primary-foreground size-5" />
      )}
    </button>
  );
}

export default ThemeSwitcher;
