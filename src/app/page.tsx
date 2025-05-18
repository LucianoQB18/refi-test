import Link from "next/link";


export default function Home() {
  return (
    <div className="p-5 flex justify-center m-60">
    <Link
      href="/windows/tradeConfirm"
      className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-4 py-2 rounded-xl transition"
    >
      Ir para TradeConfirm
    </Link>
    </div>
    
  );
}
