"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ThankYouPage() {
  useEffect(() => {
    import("canvas-confetti").then((module) => {
      const confetti = module.default;
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    });
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
      {/* STTC Logo */}
      <div className="mb-6 opacity-80">
        <Image
          src="/images/sttc-logo.png"
          alt="STTC Logo"
          width={80}
          height={80}
          className="mx-auto"
        />
      </div>

      <h1 className="text-3xl font-bold text-red-500 mb-4">Thank You!</h1>

      <p className="text-zinc-700 text-lg max-w-md">
        Your message has been successfully sent. We’ll get back to you as soon as possible.
      </p>

      <Link
        href="/"
        className="mt-6 inline-block bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
      >
        Return to Home
      </Link>
    </main>
  );
}
