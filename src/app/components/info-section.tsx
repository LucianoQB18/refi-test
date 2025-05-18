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
    <div className="flex w-full p-2 border border-gray-300 rounded-xl justify-between">
      <div className="flex flex-col text-sm text-black p-2 gap-1">
        {infos.map((item) => (
          <div key={item.label} className="flex gap-1 items-center">
            <p>{item.label}</p>
            <Info
              size={15}/>
          </div>
        ))}
      </div>

      <div className="flex flex-col text-sm text-black p-2 gap-1">
        {infos.map((item) => (
          <p
            key={item.label}
            className={`${item.label === "Mininum received" ? "font-bold text-lg" : ""}`}
          >
            {item.value}
          </p>
        ))}
      </div>
    </div>
  );
}
