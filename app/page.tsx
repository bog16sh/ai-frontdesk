"use client";

import { useRef, useState } from "react";

export default function Home() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const startCheckIn = async () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      try {
        await videoRef.current.play();
      } catch (err) {
        console.log("Autoplay blocked:", err);
      }
    }
    setStep(2);
  };

  return (
    <main className="min-h-screen bg-neutral-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-sm border p-6">
        
        {/* Video */}
        <video
          ref={videoRef}
          src="/welcome.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full rounded-2xl mb-6"
        />

        {/* Step 1 */}
        {step === 1 && (
          <>
            <h1 className="text-3xl font-bold mb-2">Welcome 👋</h1>
            <p className="text-gray-600 mb-6">
              Your virtual front desk assistant is ready.
            </p>

            <button
              onClick={startCheckIn}
              className="w-full bg-black text-white py-3 rounded-xl text-lg font-medium"
            >
              Start Check-in
            </button>
          </>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <>
            <h1 className="text-2xl font-bold mb-2">
              Find your reservation
            </h1>
            <p className="text-gray-600 mb-4">
              Enter your name to continue.
            </p>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full border rounded-xl px-4 py-3 mb-4 outline-none focus:ring-2 focus:ring-black"
            />

            <button
              onClick={() => setStep(3)}
              className="w-full bg-black text-white py-3 rounded-xl text-lg font-medium"
            >
              Continue
            </button>
          </>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <>
            <h1 className="text-2xl font-bold mb-2">
              Hello, {name || "guest"}!
            </h1>
            <p className="text-gray-600 mb-4">
              You are checked in. Here is your info:
            </p>

            <div className="bg-neutral-100 rounded-xl p-4 mb-4">
              <p className="font-medium">WiFi</p>
              <p className="text-gray-600">Hotel123</p>
            </div>

            <button
              onClick={() => setStep(1)}
              className="w-full border py-3 rounded-xl text-lg font-medium"
            >
              Start Over
            </button>
          </>
        )}
      </div>
    </main>
  );
}
