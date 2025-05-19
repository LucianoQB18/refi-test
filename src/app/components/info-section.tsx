"use client";

import { Info } from "lucide-react";

export function InfoSection() {
  const infos = [
    { label: "Mininum received", value: "$743.97" },
    { label: "Transiction fee", value: "0.0006 ETH ($0.02)" },
    { label: "Network cost", value: "$0.002" },
    { label: "Max slippage tolerance", value: "0.3%" },
  ];

  return (
    <div className="flex flex-col w-full p-4 border border-gray-300 rounded-xl gap-3 bg-gray-100">
      {infos.map((item) => (
        <div
          key={item.label}
          className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-1 text-sm text-black"
        >
          <div className="flex items-center gap-1">
            <p>{item.label}</p>
            <Info size={15} />
          </div>
          <p
            className={`${
              item.label === "Mininum received" ? "font-bold text-lg" : ""
            }`}
          >
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}
