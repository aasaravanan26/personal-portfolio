"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState, ReactNode } from "react";

export default function ThemeProviderWrapper({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    setMounted(true);

    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const apply = () => {
      // system first; (optional) time-of-day fallback if needed
      const systemTheme: "light" | "dark" = media.matches ? "dark" : "light";
      setTheme(systemTheme);
    };

    // initial apply
    apply();

    // live updates when user flips system appearance
    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", apply);
    } else {
      // Safari < 14 fallback
      // @ts-ignore
      media.addListener(apply);
    }

    return () => {
      if (typeof media.removeEventListener === "function") {
        media.removeEventListener("change", apply);
      } else {
        // @ts-ignore
        media.removeListener(apply);
      }
    };
  }, []);

  if (!mounted) return null;

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      forcedTheme={theme} // updates instantly on system changes
    >
      {children}
    </ThemeProvider>
  );
}
