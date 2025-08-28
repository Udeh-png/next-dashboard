import { Card } from "@/components/Card";
import Image from "next/image";
import { auth } from "../../../../auth";
import { FaRegCircleUser } from "react-icons/fa6";

export default async function ProfilePage() {
  const session = await auth();
  const userSession = session?.user;
  return (
    <Card className="overflow-hidden !p-0 flex flex-col-reverse">
      {userSession && (
        <div
          className="flex items-end justify-between relative z-10 text-white p-5 backdrop-blur-[3px] h-full bg-[rgba(255,255,255,0.3)]"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent 0%, transparent 10%, black 50%, black 100%)",
          }}
        >
          <div>
            <p className="font-semibold">{userSession?.name}</p>
            <p className="text-[10px]">Web Designer</p>
          </div>
          <div>
            <button className="text-sm border-[1.8px] px-4 py-[6px] rounded-full">
              $1,200
            </button>
          </div>
        </div>
      )}

      <div className="h-full w-full flex justify-center items-center">
        <div className="h-[95%] w-[95%] relative">
          {userSession ? (
            <Image
              fill
              src={userSession?.image ? userSession?.image : "/"}
              alt="Profile Picture"
            />
          ) : (
            <FaRegCircleUser className="h-full w-full" />
          )}
        </div>
      </div>
    </Card>
  );
}
