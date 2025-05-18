"use client";

import { Bitcoin, EuroIcon } from "lucide-react";

interface TradeCardProps {
  title: string;
  value: string;
  convertedValue: string;
  type: "lend" | "debt";
  options: string[];
  icon: "btc" | "eur" | "eth";
}

export function TradeCard({
  title,
  value,
  convertedValue,
  type,
  options,
  icon,
}: TradeCardProps) {
  const isLend = type === "lend";

  const getIconProps = () => {
    switch (icon) {
      case "btc":
        return { Icon: Bitcoin, color: "#F7931A" };
      case "eur":
      default:
        return { Icon: EuroIcon, color: "#0046BE" };
    }
  };

  const { Icon, color } = getIconProps();

  return (
    <div className="w-full rounded-xl p-4 flex justify-between items-center text-white border border-gray-300">
      <div className="flex flex-col">
        <p className="flex text-gray-800 text-sm">
          {title}
          <span className="px-2 rounded-xl bg-gray-700 p-1 text-xs text-gray-200 ml-1">
            Max
          </span>
        </p>
        <p
          className={`font-bold text-xl ${
            isLend ? "text-gray-900" : "text-red-600"
          }`}
        >
          {isLend ? value : `- ${value}`}
        </p>
        <p className="text-gray-800 text-xs">= {convertedValue}</p>
      </div>
      <div className="flex flex-col items-right gap-3">
        <div
          className={`rounded-xl w-11 ${
            isLend ? "bg-green-700" : "bg-red-700"
          } flex justify-center ml-20 text-sm`}
        >
          <p>{isLend ? "Lend" : "Debt"}</p>
        </div>
        <div className="flex justify-end text-black items-center gap-1">
          <Icon size={20} style={{ color }} />
          <select className="rounded-xl border text-black bg-gray-100 text-sm border-gray-300 w-20">
            {options.map((opt) => (
              <option key={opt} value={opt.toLowerCase()}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
