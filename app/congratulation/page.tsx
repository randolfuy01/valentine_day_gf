"use client";

import Image from "next/image";

export default function ValentinePage() {

    const yay = "YAY! You are now officially my Valentines";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-pink-100">
        <div className="flex items-center justify-center gap-4">
                <Image
                  src="/love_pixel.png"
                  alt="love"
                  width={100}
                  height={100}
                  className="w-20 h-20"
                />
                <h1 className="font-bold text-2xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-pink-300 pixel-font">
                  {yay}
                </h1>
                <Image
                  src="/love_pixel.png"
                  alt="love"
                  width={100}
                  height={100}
                  className="w-20 h-20"
                />
              </div>
      <div className="flex gap-4">
        <Image
          src="/anniversary.png"
          alt="love_rose"
          width={200}
          height={200}
          className="w-30 h-30 animate-bounceY rounded-lg"
        />
        <Image
          src="/mirror.png"
          alt="love_rose"
          width={200}
          height={200}
          className="w-30 h-30 animate-bounceY rounded-lg"
        />
        <Image
          src="/kiss.png"
          alt="love_rose"
          width={200}
          height={200}
          className="w-30 h-30 animate-bounceY rounded-lg"
        />
        <Image
          src="/concert.png"
          alt="love_rose"
          width={200}
          height={200}
          className="w-30 h-30 animate-bounceY rounded-lg"
        />
      </div>
    </div>
  );
}