"use client";

const percentages = ["25%", "50%", "75%", "100%", "Custom"];

export function PercentageSelector() {
  return (
    <div className="flex h-8 w-full justify-center bg-gray-100 item-center border border-gray-300 rounded-xl">
      {percentages.map((p) => (
        <div
          key={p}
          className="cursor-pointer text-gray-600 p-1 rounded-xl w-full hover:bg-gray-300 text-center"
        >
          {p}
        </div>
      ))}
    </div>
  );
}
