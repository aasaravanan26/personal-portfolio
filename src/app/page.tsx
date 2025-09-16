"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import TypingText from "@/components/TypingText";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <main className="flex flex-col items-start justify-center max-w-2xl mx-auto px-4 py-20">
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
        Aakash Saravanan
      </h1>
      <TypingText text="Welcome to my portfolio!" speed={90} />
      <section className="mt-1 space-y-3 text-gray-700 dark:text-gray-300">
      <div>
        <h2 className="text-xl mb-1">what i'm doing</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Senior Software Engineer at Oracle, working on parallel query execution</li>
          <li>improving database performance and scaling query execution across complex workloads</li>
          <li>learning advanced distributed systems and modern system architectures</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">what i'm proud of</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>graduated with Bachelor's and Master's in Computer Engineering from Purdue University</li>
          <li>mentoring junior engineers and helping them grow in system-level thinking</li>
          <li>building a strong grasp of systems-level C/C++ and database internals</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">what i'm interested in</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Distributed systems and database internals</li>
          <li>low-level systems programming</li>
          <li>traveling, playing basketball, and enjoying a good movie</li>
        </ul>
      </div>
    </section>
      <div className="flex flex-wrap gap-3 pt-4">
      <Link
        href="/projects"
        className="no-underline px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-white/5 text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        Projects
      </Link>
      <Link
        href="/contact"
        className="no-underline px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-white/5 text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        Contact
      </Link>
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-white/5 text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
          </button>
        )}
      </div>
    </main>
  );
}
