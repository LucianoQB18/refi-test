import { InfoSection } from "@/app/components/info-section";
import { PercentageSelector } from "@/app/components/percentage-selector";
import { TradeCard } from "@/app/components/trade-card";
import { ArrowUpDownIcon, SettingsIcon } from "lucide-react";

export default function TradeConfirm() {
  return (
    <div className="bg- p-20 w-full h-screen flex justify-center items-start">
      <div className="bg-gray-100 rounded-xl p-3 w-full h-150 gap-2 max-w-md flex flex-col items-center justify-center">
        <div className="w-full bg-gray-100 rounded-xl flex items-center justify-between text-gray-600">
          <p className="ml-1">Trade anything, make your way!</p>
          <SettingsIcon size={20} />
        </div>

        <TradeCard
          type="lend"
          title="Avail Bal 300.00btc."
          value="5.233445"
          convertedValue="$409,220"
          options={["BTC", "ETH", "LTC"]}
          icon="btc"
        />

        <div className="cursor-pointer bg-orange-500 hover:bg-orange-600 rounded p-4 flex items-center justify-center font-medium border border-gray-300">
          <ArrowUpDownIcon size={20} />
        </div>

        <TradeCard
          type="debt"
          title="143462 varDebtEUR"
          value="0.232132"
          convertedValue="$745,34"
          options={["EUR", "BTC", "ETH"]}
          icon="eur"
        />

        <PercentageSelector />

        <InfoSection />

        <button className="cursor-pointer bg-orange-500 w-full font-medium p-2 rounded-xl hover:bg-orange-600 transition">
          Trade
        </button>
      </div>
    </div>
  );
};
