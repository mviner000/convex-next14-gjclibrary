import Link from "next/link";

export default function Home() {
  return (
    <main className="mt-5">
      <Link className="border border-green-500 p-3 rounded-lg hover:bg-gray-200/50" href="/settings">Go to Settings Now...</Link>
    </main>
  );
}
