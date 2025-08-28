import { Card } from "@/components/Card";
import Image from "next/image";

export default async function ProfilePage() {
  return (
    <Card className="overflow-hidden !p-0 flex flex-col-reverse relative">
      {/* <div
        className="flex items-end justify-between relative z-10 text-white p-5 backdrop-blur-[3px] h-full bg-[rgba(255,255,255,0.3)]"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent 0%, transparent 50%, black 70%, black 100%)",
        }}
      >
        <div>
          <p className="font-semibold">Udeh Chisom</p>
          <p className="text-[10px]">Web Designer</p>
        </div>
        <div>
          <button className="text-sm border-[1.8px] px-4 py-[6px] rounded-full">
            $1,200
          </button>
        </div>
      </div> */}

      {/* <Image fill src="/display-pic.jpeg" alt="Profile Picture" /> */}
    </Card>
  );
}
