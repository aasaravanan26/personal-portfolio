import { Mail, Linkedin, Github, PhoneCall } from "lucide-react";
import TypingText from "@/components/TypingText";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="flex flex-col items-start justify-center max-w-2xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
      <TypingText text="Feel free to reach out - I'd love to connect!" speed={90} />
      <div className="space-y-4 w-full ">
        <a
          href="mailto:aasaravanan26@gmail.com"
          className="no-underline flex items-center gap-3 border border-gray-200 dark:border-gray-700 px-4 py-3 rounded-lg hover:shadow-xl hover:-translate-y-1 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
        >
          <Mail className="w-5 h-5 text-gray-500 dark:text-gray-400 " />
          <span className="text-gray-700 dark:text-gray-300">Email</span>
        </a>
        
        <a
          href="tel:7206661567"
          className="no-underline flex items-center gap-3 border border-gray-200 dark:border-gray-700 px-4 py-3 rounded-lg hover:shadow-xl hover:-translate-y-1 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
        >
          <PhoneCall className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          <span className="text-gray-700 dark:text-gray-300">Phone</span>
        </a>

        <a
          href="https://linkedin.com/in/aakashsaravanan"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline flex items-center gap-3 border border-gray-200 dark:border-gray-700 px-4 py-3 rounded-lg hover:shadow-xl hover:-translate-y-1 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
        >
          <Linkedin className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          <span className="text-gray-700 dark:text-gray-300">LinkedIn</span>
        </a>

        <a
          href="https://github.com/aasaravanan26"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline flex items-center gap-3 border border-gray-200 dark:border-gray-700 px-4 py-3 rounded-lg hover:shadow-xl hover:-translate-y-1 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
        >
          <Github className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          <span className="text-gray-700 dark:text-gray-300">Github</span>
        </a>
      </div>
    </main>
  );
}
