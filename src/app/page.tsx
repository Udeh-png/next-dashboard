import { Card } from "@/components/Card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[1fr_8fr]">
      <Card>Welcome to the Home Page</Card>
      <div className="flex justify-center items-center">
        <Link
          href="/dashboard"
          className="px-7 py-1 rounded bg-trans-white flex flex-col items-center hover:bg-[rgba(255,255,255,0.6)] transition-colors"
        >
          Dashboard
        </Link>
      </div>
    </div>
  );
}
