export default async function Navbar() {
  return (
    <form className="flex justify-between pt-2 h-full max-w-[1400px] mx-auto">
      <p
        className="font-bold bg-clip-text text-[clamp(15px,5vw,36px)]"
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
