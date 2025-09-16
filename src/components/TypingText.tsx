"use client";

import { useEffect, useState } from "react";

interface TypingTextProps {
  text: string;
  speed?: number; // ms per character
}

export default function TypingText({ text, speed = 100 }: TypingTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [blink, setBlink] = useState(true);

  // Typing effect
  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, speed, text]);

  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setBlink((v) => !v);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <p className="text-gray-600 dark:text-gray-400 text-lg font-mono select-none">
      {displayed}
      <span className={`inline-block w-2 ml-1 bg-current ${blink ? "opacity-100" : "opacity-0"} transition-opacity`}>
        &nbsp;
      </span>
    </p>
  );
}
