"use client";

const percentages = ["25%", "50%", "75%", "100%", "Custom"];

export function PercentageSelector() {
  return (
    <div className="flex flex-wrap sm:flex-nowrap gap-2 w-full justify-center bg-gray-100 items-center border border-gray-300 rounded-xl p-1">
      {percentages.map((p) => (
        <div
          key={p}
          className="cursor-pointer text-gray-600 flex-1 min-w-[60px] text-sm px-2 py-1 rounded-xl text-center hover:bg-gray-300 transition"
        >
          {p}
        </div>
      ))}
    </div>
  );
}
