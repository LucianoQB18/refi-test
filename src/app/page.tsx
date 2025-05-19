import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <Link
        href="/windows/tradeConfirm"
        className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-xl transition text-center animate-glow"
      >
        Go to TradeConfirm
      </Link>
    </div>
  );
}
