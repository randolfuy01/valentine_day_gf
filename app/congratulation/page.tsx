"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ValentinePage() {

  const [currentStep, setCurrentStep] = useState<number | null>(null);

  const sections = [
    { title: "Resturaunt", content: "Delicious udon at Udon Mugizo. 🍜", yelpUrl: "https://www.yelp.com/biz/udon-mugizo-san-jose-san-jose"},
    { title: "Signature Drink", content: "Matcha lover at Izumi Matcha. 🍵", yelpUrl: "https://www.yelp.com/biz/izumi-matcha-san-jose"},
    { title: "Sweet Treat", content: "End off our day with dessert at Sulbing. 🍰", yelpUrl: "https://www.yelp.com/biz/sulbing-santa-clara-3"}
  ];

  const yay = "YAY! You are now officially my Valentines";
  const itinerary_button = "Click to view itinerary";

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

      <div className="flex gap-4 mt-2">
        {/* Button to trigger the pop-up */}
        <button
        onClick={() => setCurrentStep(0)}
          className="bg-pink-400 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:bg-pink-500 hover:shadow-2xl transition duration-300 text-xl">
          {itinerary_button}
        </button>

        {/* Pop-up Modal */}
        {currentStep !== null && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-2xl shadow-2xl w-[500px] text-center relative pixel-font">
              {/* Section Title */}
              <h2 className="text-2xl font-bold text-pink-600">{sections[currentStep].title}</h2>
              <p className="mt-4 text-gray-700 text-lg">{sections[currentStep].content}</p>

              {/* Yelp Button */}
              <a
              href={sections[currentStep].yelpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-red-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-red-600 transition duration-300">
                View on Yelp
              </a>

              {/* Navigation Arrows */}
              <div className="flex justify-between mt-6">
                <button
                  onClick={() => setCurrentStep((prev) => (prev !== null ? Math.max(prev - 1, 0) : 0))}
                  className={`p-3 bg-pink-400 text-white rounded-full hover:bg-pink-500 transition duration-300 ${
                    currentStep === 0 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={currentStep === 0}>
                  <ChevronLeft size={24} />
                </button>

                <button
                  onClick={() =>
                    setCurrentStep((prev) => (prev !== null && prev + 1 < sections.length ? prev + 1 : prev))
                  }
                  className={`p-3 bg-pink-400 text-white rounded-full hover:bg-pink-500 transition duration-300 ${
                    currentStep === sections.length - 1 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={currentStep === sections.length - 1}>
                    <ChevronRight size={24} />
                </button>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setCurrentStep(null)}
                className="absolute top-3 right-3 bg-pink-300 text-black p-2 rounded-full hover:bg-pink-500">
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}