import { ArrowUpDownIcon, Bitcoin, ChevronDown, EuroIcon, InfoIcon, SettingsIcon } from "lucide-react";

export default function TradeConfirm() {
  return (
    <div className="bg- p-20 w-full h-screen flex justify-center items-start">
      <div className="bg-gray-100 rounded-xl p-3 w-full h-150 gap-2 max-w-md flex flex-col items-center justify-center">
        <div className="w-full bg-gray-100 rounded-xl flex items-center justify-between text-black">
          <p className="ml-1">Trade anything, make your way!</p> 
          <SettingsIcon size={20} />
        </div>
        <div className="w-full bg-gray-100 rounded p-4 flex justify-between items-center text-white border border-gray-300">
          <div className="flex flex-col ">
            <p className="flex text-gray-800 text-sm">
              Avail Bal 300.00btc.{" "}
              <p className="rounded-xl bg-gray-700 p-1 text-xs text-gray-200">
                Max
              </p>
            </p>
            <p className="font-bold text-xl text-gray-900">5.233445</p>
            <p className="flex text-gray-800 text-xs">= $409,220</p>
          </div>
          <div className="flex flex-col items-right gap-3">
            <div className="text-green-200 rounded-xl w-11 bg-green-700 flex justify-center ml-20 text-sm">
            <p>
              Lend
            </p>
            </div>
            <div className="flex justify-end text-orange-600">
              <Bitcoin />
              <select
                className="rounded-xl border text-black bg-gray-200 text-sm border-gray-600 w-20"
                name="crypto"
                id="crypto"
              >
                <option value="btc">BTC</option>
                <option value="eth">ETH</option>
                <option value="ltc">EUR</option>
              </select>{" "}
            </div>
          </div>
        </div>
        <div className="bg-orange-500 hover:bg-orange-600 rounded p-4 flex items-center justify-center text-black border border-gray-300">
          <ArrowUpDownIcon size={20}/>
        </div>
        <div className="w-full bg-gray-920 rounded p-4 flex justify-between items-center text-white border border-gray-300">
          <div className="flex flex-col">
            <p className="flex text-gray-800 text-sm">
              143462 varDebtEUR
              <p className="rounded-xl bg-gray-700 p-1 text-xs text-gray-200 ml-1">
                Max
              </p>
            </p>
            <p className="font-bold text-xl text-red-600">- 0.232132</p>
            <p className="flex text-gray-800 text-xs">= $745,34</p>
          </div>
          <div className="flex flex-col items-right gap-3">
            <div className="text-red-200 rounded-xl w-11 bg-red-800 flex justify-center ml-20  text-sm">
            <p>
              Debt
            </p>
            </div>
            <div className="flex justify-end text-blue-900">
              <EuroIcon />
              <select
                className="rounded-xl border text-black bg-gray-200 text-sm border-gray-600 w-20"
                name="crypto"
                id="crypto"
              >
                <option value="btc">EUR</option>
                <option value="eth">BTC</option>
                <option value="ltc">ETH</option>
              </select>{" "}
            </div>
          </div>
        </div>
        <div className="flex h-8 w-full justify-center bg-gray-100 item-center border border-gray-300 rounded-xl">
          <div className="text-gray-600 p-1 rounded-xl w-full hover:bg-gray-300 text-center">
            25%
          </div>
          <div className="text-gray-600 p-1 rounded-xl w-full hover:bg-gray-300 text-center">
            50%
          </div>
          <div className="text-gray-600 p-1 rounded-xl w-full hover:bg-gray-300 text-center">
            75%
          </div>
          <div className="text-gray-600 p-1 rounded-xl w-full hover:bg-gray-300 text-center">
            100%
          </div>
          <div className="text-gray-600 p-1 rounded-xl w-full hover:bg-gray-300 text-center">
            Custom
          </div>
        </div>
        <div className="flex w-full p-2 border border-gray-300 rounded-xl flex justify-between">
      <div className="flex flex-col text-sm text-black p-2">
        <div className="flex gap-1 justify-start">
        <p>Mininum received </p> 

        <InfoIcon size={15} className="text-gray-200 bg-gray-600 rounded-xl"/>
        </div>
        <div className="flex gap-1 r">
        <p>Transiction fee</p>
        <InfoIcon size={15} className="text-gray-200 bg-gray-600 rounded-xl"/>
        </div>
        <div className="flex gap-1 r">
        <p>Network cost</p>
        <InfoIcon size={15} className="text-gray-200 bg-gray-600 rounded-xl"/>
        </div><div className="flex gap-1 r">
        <p>Max slippage tolerance</p>
        <InfoIcon size={15} className="text-gray-200 bg-gray-600 rounded-xl"/>
        </div>
        <div className="text-orange-800 flex mt-2">
        <p>More details</p>
        <ChevronDown className="w-4 h-4 mt-1" />
        </div>
      </div>

     
      <div className="flex flex-col text-sm text-black p-2">
        <p className="font-bold text-l">$743.97</p>
        <p>0.0006 ETH ($0.02)</p>
        <p>$0.002</p>
        <p>0.3%</p>
      </div>
    </div>
    <button className="bg-orange-500 w-full text-black p-2 rounded-xl hover:bg-orange-600 transition">
    Trade
  </button>
      </div>
    </div>
  );
}
