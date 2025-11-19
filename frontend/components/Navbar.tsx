import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-40 top-0 border-b border-white/5 glass-panel">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer">
          <Image src="/logo.png" alt="CapyData Logo" priority width={60} height={60} />
          <div className="flex flex-col">
            <span className="font-mono text-xl font-bold tracking-wider text-white group-hover:text-yuzu transition-colors">
              CapyData
            </span>
            <span className="font-mono text-[10px] text-gray-500 tracking-widest">
              THE CHILL MARKET
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 font-mono text-xs tracking-widest text-gray-400">
          <a
            href="#top"
            className="hover:text-yuzu hover:underline decoration-dashed underline-offset-8 transition-all flex items-center gap-2">
            <i data-lucide="search" className="w-3 h-3"></i> TOP DATASET
          </a>
          <a
            href="#flow"
            className="hover:text-hydro hover:underline decoration-dashed underline-offset-8 transition-all flex items-center gap-2">
            <i data-lucide="droplets" className="w-3 h-3"></i> FLOW
          </a>
          <a
            href="#features"
            className="hover:text-capy-brown hover:underline decoration-dashed underline-offset-8 transition-all flex items-center gap-2">
            <i data-lucide="users" className="w-3 h-3"></i> ABOUT US
          </a>
        </div>

        <button className="flex items-center gap-3 px-5 py-2 border border-white/20 rounded-lg font-mono text-xs hover:bg-yuzu hover:text-black hover:border-yuzu transition-all group overflow-hidden relative">
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"></div>
          <span className="relative z-10 flex items-center gap-2">
            <i data-lucide="store" className="w-3 h-3"></i> MARKETPLACE
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
