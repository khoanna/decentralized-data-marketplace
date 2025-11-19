import React from "react";

const FooterSlide = () => {
  return (
    <div className="fixed bottom-0 w-full z-40 border-t border-white/10 bg-void/90 backdrop-blur-sm font-mono text-xs py-2 overflow-hidden flex items-center">
      <div className="whitespace-nowrap animate-marquee flex gap-12 text-gray-500">
        <span className="flex items-center gap-2">
          <i data-lucide="database" className="w-3 h-3 text-hydro"></i>{" "}
          24H_VOLUME: <span className="text-white">420 TB</span>
        </span>
        <span className="flex items-center gap-2">
          <i data-lucide="citrus" className="w-3 h-3 text-yuzu"></i> CAPY_TOKEN:{" "}
          <span className="text-yuzu">$1.337</span>
        </span>
        <span className="flex items-center gap-2">
          <i data-lucide="users" className="w-3 h-3 text-grass"></i>{" "}
          ACTIVE_NODES: <span className="text-grass">8,000+</span>
        </span>
        <span className="flex items-center gap-2">
          <i data-lucide="zap" className="w-3 h-3 text-yuzu"></i> GAS_FEES:{" "}
          <span className="text-white">0.0001 ETH (LOW)</span>
        </span>
        <span className="flex items-center gap-2">
          LATEST_SALE:{" "}
          <span className="text-white">
            Global_Weather_V2 sold for 500 CAPY
          </span>
        </span>
        <span className="flex items-center gap-2">
          <i data-lucide="database" className="w-3 h-3 text-hydro"></i>{" "}
          24H_VOLUME: <span className="text-white">420 TB</span>
        </span>
        <span className="flex items-center gap-2">
          <i data-lucide="citrus" className="w-3 h-3 text-yuzu"></i> CAPY_TOKEN:{" "}
          <span className="text-yuzu">$1.337</span>
        </span>
        <span className="flex items-center gap-2">
          <i data-lucide="users" className="w-3 h-3 text-grass"></i>{" "}
          ACTIVE_NODES: <span className="text-grass">8,000+</span>
        </span>
      </div>
    </div>
  );
};

export default FooterSlide;
