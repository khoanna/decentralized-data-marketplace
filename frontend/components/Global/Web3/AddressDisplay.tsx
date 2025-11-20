"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { useCurrentAccount } from "@mysten/dapp-kit";
import { truncateAddress, copyToClipboard } from "@/lib/utils";
import { useToast } from "@/hooks/useToast";

export function AddressDisplay() {
  const account = useCurrentAccount();
  const { addToast } = useToast();
  const [copied, setCopied] = useState(false);

  if (!account) return null;

  const handleCopy = async () => {
    const success = await copyToClipboard(account.address);
    if (success) {
      setCopied(true);
      addToast("Address copied to clipboard", "success");
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-2 px-3 py-2 glass-input rounded-lg hover:border-yuzu/50 transition-all group"
      title="Click to copy address"
    >
      <span className="font-mono text-xs text-white">
        {truncateAddress(account.address)}
      </span>
      {copied ? (
        <Check className="w-3 h-3 text-success transition-all" />
      ) : (
        <Copy className="w-3 h-3 text-gray-400 group-hover:text-yuzu transition-all" />
      )}
    </button>
  );
}

export default AddressDisplay;
