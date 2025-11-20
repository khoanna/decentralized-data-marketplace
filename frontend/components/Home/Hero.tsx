import Image from "next/image";
import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const Hero = () => {
  return (
    <main className="relative pt-32 pb-20 border-b border-white/5 bg-grid min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-yuzu/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-hydro/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-6 space-y-8 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-yuzu/30 rounded-full bg-yuzu/5 text-yuzu font-mono text-xs font-bold tracking-wide reveal">
              <span className="w-2 h-2 rounded-full bg-yuzu animate-pulse"></span>
              MARKETPLACE V3.0 LIVE
            </div>

            <h1 className="text-6xl md:text-8xl font-sans font-bold leading-[0.9] tracking-tight reveal delay-100 text-white">
              YOUR DATA.<br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-yuzu to-capy-brown">
                YOUR ASSET.
              </span>
            </h1>

            <p className="font-mono text-gray-400 max-w-lg text-sm md:text-base leading-relaxed reveal delay-200">
              The world's first <strong className="text-white">fully decentralized data marketplace</strong> powered by Seal encryption and Walrus storage. Buy, sell, and monetize datasets with complete ownership and zero platform fees.
            </p>

            <div className="flex flex-wrap gap-4 pt-4 reveal delay-300">
              <button className="bg-yuzu text-black px-8 py-4 rounded-lg font-bold font-mono text-sm hover:bg-white hover:scale-105 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(255,159,28,0.4)]">
                BROWSE DATASETS{" "}
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-8 py-4 border border-white/20 rounded-lg font-mono text-sm hover:border-hydro hover:text-hydro transition-colors bg-black/40 backdrop-blur-sm">
                LIST YOUR DATA
              </button>
            </div>

            <div className="flex items-center gap-4 pt-4 opacity-60 reveal delay-500">
              <span className="font-mono text-sm text-gray-500 uppercase">
                Built on:
              </span>
              <div className="flex gap-2 font-mono text-xs text-gray-400">
                <span className="border border-white/10 px-2 py-1 rounded">
                  SUI
                </span>
                <span className="border border-white/10 px-2 py-1 rounded">
                  WALRUS
                </span>
                <span className="border border-white/10 px-2 py-1 rounded">
                  SEAL
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative h-[500px] flex items-center justify-center reveal delay-300 order-1 lg:order-2">
            <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-yuzu/50 shadow-[0_0_60px_rgba(255,159,28,0.3)] animate-float group">
                <Image 
                  src="/capybara.png"
                  alt="Cyber Capybara"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-full object-cover transition-transform duration-700 grayscale-20 contrast-125"
                />

                <div className="absolute inset-0 bg-[linear-linear(rgba(18,16,11,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-size-[100%_2px,3px_100%] pointer-events-none"></div>

                <div className="absolute inset-0 bg-linear-to-tr from-yuzu/20 via-transparent to-hydro/20 mix-blend-overlay z-20"></div>

                <div className="absolute top-0 left-0 w-full h-1 bg-yuzu/50 shadow-[0_0_15px_#FF9F1C] z-30 animate-[scan_4s_ease-in-out_infinite]"></div>

                <div className="absolute top-4 left-4 z-40 flex gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                  <span className="font-mono text-[10px] text-white font-bold tracking-widest bg-black/50 px-2 rounded border border-white/10">
                    LIVE FEED
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 z-40 font-mono text-[10px] text-yuzu bg-black/80 px-3 py-1 rounded border border-yuzu/30 backdrop-blur-md">
                  &gt; SUBJECT: CAPY_01
                  <br />
                  &gt; CHILL_FACTOR: MAX
                </div>
              </div>

              <div className="absolute -z-10 w-[120%] h-[120%] border border-dashed border-white/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute -z-10 w-[110%] h-[110%] border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

              <div className="absolute -right-6 bottom-12 bg-panel border border-yuzu/30 p-4 rounded-xl shadow-xl backdrop-blur-md animate-[float_4s_ease-in-out_infinite_reverse] z-50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yuzu/10 rounded-full flex items-center justify-center text-yuzu">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-gray-400">
                      Verification
                    </div>
                    <div className="text-sm font-sans font-bold text-white">
                      100% Secure
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
