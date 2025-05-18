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
    <div className="w-full rounded-xl p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center text-white border border-gray-300 gap-4 sm:gap-0">
      <div className="flex flex-col flex-1">
        <p className="flex text-gray-800 text-sm flex-wrap items-center">
          {title}
          <span className="px-2 rounded-xl bg-gray-700 p-1 text-xs text-gray-200 ml-2">
            Max
          </span>
        </p>
        <p
          className={`font-bold text-xl mt-1 ${
            isLend ? "text-gray-900" : "text-red-600"
          }`}
        >
          {isLend ? value : `- ${value}`}
        </p>
        <p className="text-gray-800 text-xs mt-1">= {convertedValue}</p>
      </div>
      <div className="flex flex-col items-start sm:items-end gap-3 min-w-[100px] w-full sm:w-auto">
        <div
          className={`rounded-xl px-4 py-1 ${
            isLend ? "bg-green-700" : "bg-red-700"
          } text-sm text-center text-white`}
        >
          {isLend ? "Lend" : "Debt"}
        </div>

        <div className="flex items-center gap-2">
          <Icon size={20} style={{ color }} />
          <select className="rounded-xl border text-black bg-gray-100 text-sm border-gray-300 w-24">
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
