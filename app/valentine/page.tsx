"use client";

import { useState } from "react";
import Image from "next/image";

export default function ValentinePage() {
  const [clickCount, setClickCount] = useState(0);
  const [isNoDisabled, setIsNoDisabled] = useState(false);
  const [speechMessage, setSpeechMessage] = useState(
    "Whatcha think?",
  );
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
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-4 gap-4 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-pink-100">
      <div className="flex items-center justify-center gap-4">
        <Image
          src="/rose.jpg"
          alt="love_rose"
          width={200}
          height={200}
          className="w-20 h-20 animate-bounceY rounded-lg mr-4"
        />
        <h1 className="font-bold text-3xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-pink-300 pixel-font">
          {question}
        </h1>
        <Image
          src="/rose.jpg"
          alt="love_rose"
          width={200}
          height={200}
          className="w-20 h-20 animate-bounceY rounded-lg ml-4"
        />
      </div>

      <div className="flex items-center justify-center gap-4">
        <button className="bg-pink-300 text-black font-bold py-6 px-12 rounded-2xl shadow-lg hover:bg-pink-400 transition duration-300 pixel-font mb-40">
          Yes
        </button>
        <button
          className={`bg-pink-300 text-black font-bold py-6 px-12 rounded-2xl shadow-lg hover:bg-pink-400 transition duration-300 pixel-font mb-40 ${isNoDisabled ? "bg-gray-300 text-gray-700 cursor-not-allowed" : ""}`}
          onClick={handleNoClick}
          disabled={isNoDisabled}
        >
          No
        </button>
      </div>

      <div className="flex items-center justify-center gap-4">
        {/* Penguin Image */}
        <Image
          src="/love_penguin.png"
          alt="love"
          width={100}
          height={100}
          className="w-40 h-40 relative top-10 mb-40"
        />

        {/* Speech Bubble */}
        <div className="relative bg-white text-black px-4 py-2 rounded-lg shadow-lg text-lg font-bold pixel-font max-w-xs mb-40">
          {speechMessage}
          {/* Speech Tail */}
          <div
            className="absolute -left-2 bottom-3 w-0 h-0 
            border-t-[10px] border-t-transparent 
            border-r-[15px] border-r-white 
            border-b-[10px] border-b-transparent"
          ></div>
        </div>
      </div>
    </div>
  );
}