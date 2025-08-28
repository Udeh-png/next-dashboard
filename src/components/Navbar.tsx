import { auth } from "../../auth";
import { LoginButton } from "./NavbarComps";
import { SessionProvider } from "next-auth/react";

export default async function Navbar() {
  return (
    <form className="flex justify-between pt-2 h-full max-w-[1300px] mx-auto">
      <p
        className="text-4xl font-bold bg-clip-text"
        style={{
          background:
            "linear-gradient(to right, orange 30%, rgba(170, 169, 173, 0.5))",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        Welcome To The Dashboard
      </p>
    </form>
  );
}
