"use client";

import { use, useState } from "react";
import { ChevronRight, Sparkles, ArrowRight } from "lucide-react";
import { getAssetById } from "@/lib/mockData";
import { notFound } from "next/navigation";
import SimpleAssetHeader from "@/components/ItemDetail/SimpleAssetHeader";
import Link from "next/link";

export default function ItemDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const asset = getAssetById(id);
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);

  if (!asset) {
    notFound();
  }

  const handlePurchase = () => {
    setShowPurchaseModal(true);
  };

  return (
    <main className="min-h-screen pt-28 pb-20 bg-void">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 font-mono text-xs text-gray-400 reveal">
          <Link href="/" className="hover:text-yuzu transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/marketplace" className="hover:text-yuzu transition-colors">
            Marketplace
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white">{asset.title}</span>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Asset Header */}
          <SimpleAssetHeader asset={asset} onPurchase={handlePurchase} />

          {/* Description Section */}
          <div className="glass-card p-8 rounded-xl reveal delay-100">
            <h2 className="text-2xl font-sans font-bold text-white mb-4">
              About This Dataset
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="font-mono text-sm text-gray-400 leading-relaxed">
                {asset.description}
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal delay-200">
            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-yuzu/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-yuzu" />
                </div>
                <p className="font-mono text-xs text-gray-500 uppercase tracking-wider">
                  Quality Score
                </p>
              </div>
              <p className="text-2xl font-sans font-bold text-white">
                {Math.min(95, 80 + Math.floor(asset.amount_sold / 100))}%
              </p>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-grass/10 flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-grass" />
                </div>
                <p className="font-mono text-xs text-gray-500 uppercase tracking-wider">
                  Total Revenue
                </p>
              </div>
              <p className="text-2xl font-sans font-bold text-white">
                {(asset.price * asset.amount_sold).toLocaleString()} CAPY
              </p>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-hydro/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-hydro" />
                </div>
                <p className="font-mono text-xs text-gray-500 uppercase tracking-wider">
                  Popularity
                </p>
              </div>
              <p className="text-2xl font-sans font-bold text-white">
                {asset.amount_sold > 1000 ? 'High' : asset.amount_sold > 500 ? 'Medium' : 'Growing'}
              </p>
            </div>
          </div>
        </div>

        {/* Related Assets */}
        <div className="mt-16 reveal delay-400">
          <h2 className="text-3xl font-sans font-bold text-white mb-6 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-yuzu" />
            Similar Datasets
          </h2>
          <p className="font-mono text-sm text-gray-400 mb-6">
            Explore more datasets in the same category
          </p>
          <Link href="/marketplace">
            <button className="px-6 py-3 glass-input rounded-lg hover:border-yuzu/50 transition-all font-mono text-sm text-white flex items-center gap-2 group">
              Browse Marketplace
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
