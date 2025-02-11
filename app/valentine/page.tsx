"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ValentinePage() {
  const [clickCount, setClickCount] = useState(0);
  const [isNoDisabled, setIsNoDisabled] = useState(false);
  const [speechMessage, setSpeechMessage] = useState("Whatcha think?");
  const question = "Be my Valentine's?";

  const handleNoClick = () => {
    setClickCount((prevCount) => prevCount + 1);

    if (clickCount === 0) {
      setSpeechMessage("Hey you shouldn't do that!");
    } else if (clickCount === 1) {
      setSpeechMessage("You can't click No!");
      setIsNoDisabled(true);
    }
  };

  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-6 gap-6 sm:p-10 lg:p-20 font-[family-name:var(--font-geist-sans)] bg-pink-100">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Image
          src="/rose.jpg"
          alt="love_rose"
          width={200}
          height={200}
          className="w-16 h-16 sm:w-20 sm:h-20 animate-bounceY rounded-lg"
        />
        <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-pink-300 pixel-font">
          {question}
        </h1>
        <Image
          src="/rose.jpg"
          alt="love_rose"
          width={200}
          height={200}
          className="w-16 h-16 sm:w-20 sm:h-20 animate-bounceY rounded-lg"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link href="/congratulation">
          <button className="bg-pink-300 text-black font-bold py-4 px-8 sm:py-6 sm:px-12 rounded-2xl shadow-lg hover:bg-pink-400 transition duration-300 pixel-font mb-8 sm:mb-16">
            Yes
          </button>
        </Link>
        <button
          className={`bg-pink-300 text-black font-bold py-4 px-8 sm:py-6 sm:px-12 rounded-2xl shadow-lg hover:bg-pink-400 transition duration-300 pixel-font mb-8 sm:mb-16 ${isNoDisabled ? "bg-gray-300 text-gray-700 cursor-not-allowed" : ""}`}
          onClick={handleNoClick}
          disabled={isNoDisabled}
        >
          No
        </button>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Image
          src="/love_penguin.png"
          alt="love"
          width={100}
          height={100}
          className="w-24 h-24 sm:w-32 sm:h-32 relative top-4 mb-8 sm:mb-16"
        />
        
        <div className="relative bg-white text-black px-4 py-2 rounded-lg shadow-lg text-lg sm:text-xl font-bold pixel-font max-w-xs sm:max-w-md mb-8 sm:mb-16">
          {speechMessage}
          <div className="absolute -left-2 bottom-3 w-0 h-0 
            border-t-[10px] border-t-transparent 
            border-r-[15px] border-r-white 
            border-b-[10px] border-b-transparent"
          ></div>
        </div>
      </div>
    </div>
  );
}
