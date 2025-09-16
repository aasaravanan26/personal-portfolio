"use client";

import { ThemeProvider, useTheme } from "next-themes";
import { useEffect, useState, ReactNode } from "react";

export default function ThemeProviderWrapper({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme, theme } = useTheme();

  useEffect(() => {
    setMounted(true);

    const storedTheme = localStorage.getItem("theme");
    if (!storedTheme || storedTheme === "system") {
      const hour = new Date().getHours();
      const preferred = hour >= 7 && hour < 19 ? "light" : "dark";
      setTheme(preferred);
      localStorage.setItem("theme", preferred);
    }
  }, []);

  if (!mounted) return null;

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
