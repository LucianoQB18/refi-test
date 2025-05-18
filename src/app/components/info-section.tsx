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
    <div className="flex flex-col sm:flex-row w-full p-4 border border-gray-300 rounded-xl gap-4 bg-gray-100">
      <div className="flex flex-col text-sm text-black gap-2 flex-1">
        {infos.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <p>{item.label}</p>
            <Info size={15} />
          </div>
        ))}
      </div>
      <div className="flex flex-col text-sm text-black gap-2 items-start sm:items-end flex-1">
        {infos.map((item) => (
          <p
            key={item.label}
            className={`${
              item.label === "Mininum received"
                ? "font-bold text-lg"
                : ""
            }`}
          >
            {item.value}
          </p>
        ))}
      </div>
    </div>
  );
}
