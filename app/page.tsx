"use client";

import { useState } from "react";

export default function Home() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");

  return (
    <main className="min-h-screen flex items-center justify-center bg-neutral-50 p-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm border">
        {step === 1 && (
          <>
            <h1 className="text-3xl font-bold mb-3">Welcome 👋</h1>
            <p className="text-gray-600 mb-6">
              Start your check-in in just a few seconds.
            </p>

            <button
              onClick={() => setStep(2)}
              className="w-full rounded-xl bg-black py-3 text-white text-lg font-medium"
            >
              Start Check-in
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <h1 className="text-2xl font-bold mb-3">Find your reservation</h1>
            <p className="text-gray-600 mb-4">
              Enter your name to continue.
            </p>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full rounded-xl border px-4 py-3 mb-4 outline-none focus:ring-2 focus:ring-black"
            />

            <button
              onClick={() => setStep(3)}
              className="w-full rounded-xl bg-black py-3 text-white text-lg font-medium"
            >
              Continue
            </button>
          </>
        )}

        {step === 3 && (
          <>
            <h1 className="text-2xl font-bold mb-3">Hello, {name || "guest"}!</h1>
            <p className="text-gray-600 mb-6">
              Your reservation is ready. You are checked in.
            </p>

            <div className="rounded-xl bg-neutral-100 p-4 mb-4">
              <p className="font-medium">WiFi</p>
              <p className="text-gray-600">Hotel123</p>
            </div>

            <button
              onClick={() => setStep(1)}
              className="w-full rounded-xl border py-3 text-lg font-medium"
            >
              Start Over
            </button>
          </>
        )}
      </div>
    </main>
  );
}
