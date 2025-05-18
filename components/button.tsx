"use client";

import { useState } from "react";
import { Bitcoin } from "lucide-react";

const moedas = [
  { label: "Bitcoin", symbol: "BTC" },
  { label: "Ethereum", symbol: "ETH" },
  { label: "Litecoin", symbol: "LTC" },
];

export default function SelectBitcoin() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(moedas[0]);

  return (
    <div className="relative inline-block w-48">
      <button
        onClick={() => setOpen(!open)}
        className="w-full bg-gray-800 py-2 px-4 rounded flex items-center justify-between"
      >
        <div className="flex items-center space-x-2">
          <Bitcoin size={20} />
          <span>{selected.symbol}</span>
        </div>
        <svg
          className="w-4 h-4 ml-2"
          xmlns="https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=040"
          fill="none"
          viewBox="0 0 24 24"
          stroke=""
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute mt-1 w-full bg-white rounded shadow-lg z-10">
          {moedas.map((moeda) => (
            <div
              key={moeda.symbol}
              onClick={() => {
                setSelected(moeda);
                setOpen(false);
              }}
              className="cursor-pointer px-4 py-2 hover:bg-gray-100 flex items-center space-x-2"
            >

              <Bitcoin size={16} />
              <span>{moeda.label} ({moeda.symbol})</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
