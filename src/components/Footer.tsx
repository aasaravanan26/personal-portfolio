export default function Footer() {
  return (
    <footer className="relative border-t border-gray-200 dark:border-gray-700 py-6">
      <div className="max-w-4xl mx-auto px-4 flex justify-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Aakash Saravanan. All rights reserved.
      </div>
    </footer>
  );
}