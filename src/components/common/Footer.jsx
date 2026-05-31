import React from "react";

function Footer() {
  return (
    <footer className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-6 py-8 text-center">
      <p className="text-sm text-slate-400">
        Copyright {new Date().getFullYear()} Muhammadhu Aadhil. Built with React and Tailwind CSS.
      </p>
    </footer>
  );
}

export default Footer;
