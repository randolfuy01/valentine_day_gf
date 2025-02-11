import Image from "next/image";
import Link from "next/link";

export default function Home() {

  const love = "I LOVE YOU";
  const penguin_message = "You're the best girlfriend I could ever ask for!";
  const suprise = "Suprise Me";

  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-6 gap-6 sm:p-10 lg:p-20 font-[family-name:var(--font-geist-sans)] bg-pink-100">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Image
          src="/love_pixel.png"
          alt="love"
          width={100}
          height={100}
          className="w-16 h-16 sm:w-20 sm:h-20 animate-bounceY"
        />
        <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-pink-300 pixel-font">
          {love}
        </h1>
        <Image
          src="/love_pixel.png"
          alt="love"
          width={100}
          height={100}
          className="w-16 h-16 sm:w-20 sm:h-20 animate-bounceY"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        {/* Penguin Image */}
        <Image
          src="/love_penguin.png"
          alt="love"
          width={100}
          height={100}
          className="w-20 h-20 sm:w-24 sm:h-24 relative top-4"
        />

        {/* Speech Bubble */}
        <div className="relative bg-white text-black px-4 py-2 rounded-lg shadow-lg text-lg sm:text-xl font-bold pixel-font max-w-xs sm:max-w-md">
          {penguin_message}
          {/* Speech Tail */}
          <div
            className="absolute -left-2 bottom-3 w-0 h-0 
            border-t-[10px] border-t-transparent 
            border-r-[15px] border-r-white 
            border-b-[10px] border-b-transparent"
          >
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4">
        <Link href="/valentine">
          <button className="bg-pink-400 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:bg-pink-400 hover:shadow-2xl transition duration-300 pixel-font text-lg sm:text-xl">
            {suprise}
          </button>
        </Link>
      </div>
    </div>
  );
}
