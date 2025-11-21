"use client";

import { formatPrice } from "@/lib/utils";
import { BarChart2, TrendingUp, Wallet, Package, Tag, Star } from "lucide-react";
import { useAppContext } from "@/context/AppContext";
import { useCurrentAccount } from "@mysten/dapp-kit";

interface FinancialsTabProps {
  address: string;
}

const FinancialsTab = ({ address }: FinancialsTabProps) => {
  const { allListings } = useAppContext();
  const currentAccount = useCurrentAccount();

  // Check if viewing own profile
  const isOwnProfile = currentAccount?.address === address;

  // Filter assets published by this address
  const publishedAssets = allListings?.filter(asset => asset.owner === address) || [];

  // Calculate financials
  const totalEarned = publishedAssets.reduce((sum, asset) => sum + (asset.price * asset.amount_sold), 0);
  const totalSales = publishedAssets.reduce((sum, asset) => sum + asset.amount_sold, 0);
  const activeListings = publishedAssets.filter(asset => asset.on_listed).length;
  const avgPrice = publishedAssets.length > 0 
    ? publishedAssets.reduce((sum, asset) => sum + asset.price, 0) / publishedAssets.length 
    : 0;

  // Top performing dataset
  const topDataset = [...publishedAssets].sort((a, b) => 
    (b.price * b.amount_sold) - (a.price * a.amount_sold)
  )[0];

  // Privacy check
  if (!isOwnProfile) {
    return (
      <div className="glass-card p-8 rounded-lg text-center">
        <Wallet className="w-12 h-12 text-gray-500 mx-auto mb-4" />
        <p className="font-mono text-sm text-gray-400 mb-2">
          Private Information
        </p>
        <p className="font-mono text-xs text-gray-500">
          Financial data is only visible to the profile owner
        </p>
      </div>
    );
  }

  // Empty state
  if (publishedAssets.length === 0) {
    return (
      <div className="glass-card p-8 rounded-lg text-center">
        <TrendingUp className="w-12 h-12 text-gray-500 mx-auto mb-4" />
        <p className="font-mono text-sm text-gray-400 mb-2">
          No Financial Data Yet
        </p>
        <p className="font-mono text-xs text-gray-500">
          Publish your first dataset to start earning
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass-card p-5 rounded-lg border border-success/30">
          <p className="font-mono text-xs text-gray-400 mb-2 flex items-center gap-2">
            <TrendingUp className="w-3 h-3" />
            Total Revenue
          </p>
          <p className="font-sans text-3xl font-bold text-success mb-1">
            {totalEarned.toFixed(2)}
            <span className="text-sm ml-1">SUI</span>
          </p>
          <p className="font-mono text-xs text-gray-500">
            from {totalSales} sales
          </p>
        </div>

        <div className="glass-card p-5 rounded-lg border border-yuzu/30">
          <p className="font-mono text-xs text-gray-400 mb-2 flex items-center gap-2">
            <Package className="w-3 h-3" />
            Active Listings
          </p>
          <p className="font-sans text-3xl font-bold text-yuzu mb-1">
            {activeListings}
          </p>
          <p className="font-mono text-xs text-gray-500">
            out of {publishedAssets.length} total
          </p>
        </div>

        <div className="glass-card p-5 rounded-lg border border-hydro/30">
          <p className="font-mono text-xs text-gray-400 mb-2 flex items-center gap-2">
            <Tag className="w-3 h-3" />
            Average Price
          </p>
          <p className="font-sans text-3xl font-bold text-hydro mb-1">
            {avgPrice.toFixed(2)}
            <span className="text-sm ml-1">SUI</span>
          </p>
          <p className="font-mono text-xs text-gray-500">
            per dataset
          </p>
        </div>

        <div className="glass-card p-5 rounded-lg border border-pending/30">
          <p className="font-mono text-xs text-gray-400 mb-2 flex items-center gap-2">
            <Star className="w-3 h-3" />
            Total Sales
          </p>
          <p className="font-sans text-3xl font-bold text-pending mb-1">
            {totalSales}
          </p>
          <p className="font-mono text-xs text-gray-500">
            purchases
          </p>
        </div>
      </div>

      {/* Top Performing Dataset */}
      {topDataset && (
        <div className="glass-card p-6 rounded-lg border border-yuzu/30">
          <h3 className="font-sans font-bold text-white mb-4 flex items-center gap-2">
            <Star className="w-5 h-5 text-yuzu" />
            Top Performing Dataset
          </h3>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-mono text-sm text-white mb-1">{topDataset.title}</p>
              <p className="font-mono text-xs text-gray-400">
                {topDataset.amount_sold} sales • {topDataset.price.toFixed(2)} SUI each
              </p>
            </div>
            <div className="text-right">
              <p className="font-mono text-2xl font-bold text-yuzu">
                {(topDataset.price * topDataset.amount_sold).toFixed(2)} SUI
              </p>
              <p className="font-mono text-xs text-gray-500">total revenue</p>
            </div>
          </div>
        </div>
      )}

      {/* Revenue Breakdown */}
      <div className="glass-card p-6 rounded-lg">
        <h3 className="font-sans font-bold text-white mb-4 flex items-center gap-2">
          <BarChart2 className="w-5 h-5 text-yuzu" />
          Revenue Breakdown by Dataset
        </h3>

        <div className="space-y-4">
          {[...publishedAssets]
            .map(asset => ({
              ...asset,
              revenue: asset.price * asset.amount_sold
            }))
            .sort((a, b) => b.revenue - a.revenue)
            .map(asset => {
              const percentage = totalEarned > 0 ? (asset.revenue / totalEarned) * 100 : 0;
              return (
                <div key={asset.id.id} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-sm text-white truncate flex-1 mr-4">
                      {asset.title}
                    </p>
                    <p className="font-mono text-sm text-yuzu font-bold">
                      {asset.revenue.toFixed(2)} SUI ({percentage.toFixed(1)}%)
                    </p>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-linear-to-r from-yuzu to-hydro rounded-full transition-all"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  <p className="font-mono text-xs text-gray-500">
                    {asset.amount_sold} sales • {asset.price.toFixed(2)} SUI each
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default FinancialsTab;
