"use client";

import { useState } from "react";
import Image from "next/image";
import { coaches } from "@/app/data/coaches";

type Coach = {
  name: string;
  tier: string;
  image: string;
  achievements: string[];
};

export default function PrivateCoaching() {
  const [selectedCoach, setSelectedCoach] = useState<Coach | null>(null);

  return (
    <main className="bg-white text-zinc-900 pt-30">
      {/* Hero Section */}
      <section
        className="relative w-full min-h-[60vh] flex items-center justify-center bg-cover bg-center text-white"
        style={{ backgroundImage: `url('/images/all-sttc-coaches-2.jpg')` }}
      >
        <div className="bg-black/80 p-8 rounded-xl text-center shadow-xl max-w-2xl mt-20 sm:mt-24 md:mt-32">
          <h1 className="text-4xl font-bold mb-4">Private Coaching</h1>
          <p className="text-lg">
            Personalised 1-on-1 training to fast-track your improvement with our
            elite coaches.
          </p>
        </div>
      </section>

      {/* Coaches Grid */}
      <section className="py-16 bg-zinc-100">
        <h2 className="text-3xl font-semibold text-center mb-12 text-red-600">
          Meet Our Coaches
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {coaches.map((coach, index) => (
            <div
              key={index}
              className="relative flex flex-col h-full bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition group cursor-pointer"
              onClick={() => setSelectedCoach(coach)}
            >
              {/* Responsive Image + Overlay */}
              <div className="w-full h-72 sm:h-80 md:h-96 overflow-hidden rounded-t-xl relative">
                <Image
                  src={coach.image}
                  alt={coach.name}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover object-[center_5%]"
                />
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-medium">
                    Click to view more
                  </p>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-red-600 mb-1">
                    {coach.name}
                  </h3>
                  <p className="text-md font-bold text-black">{coach.tier}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal Overlay */}
      {selectedCoach && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4 overflow-y-auto">
          <div className="bg-white rounded-xl shadow-xl max-w-lg w-full p-6 relative my-10">
            <button
              className="absolute top-4 right-4 text-zinc-500 hover:text-red-500 text-2xl"
              onClick={() => setSelectedCoach(null)}
            >
              &times;
            </button>
            <div className="w-full h-72 sm:h-80 md:h-96 overflow-hidden rounded-lg mb-4">
              <Image
                src={selectedCoach.image}
                alt={selectedCoach.name}
                width={600}
                height={600}
                className="w-full h-full object-cover object-[center_5%]"
              />
            </div>
            <h3 className="text-2xl font-bold text-red-600 mb-1">
              {selectedCoach.name}
            </h3>
            <p className="text-md font-bold text-black mb-4">
              {selectedCoach.tier}
            </p>
            <ul className="list-disc pl-5 text-zinc-700 mb-4 space-y-1">
              {selectedCoach.achievements.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="text-md font-semibold text-black">
              Contact us to book your session.
            </p>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="text-center py-16 bg-white">
        <h2 className="text-3xl font-semibold mb-4 text-red-600">
          Ready to Book?
        </h2>
        <p className="text-lg text-zinc-700 mb-6">
          Contact us to arrange your private training session with any of our
          coaches.
        </p>
        <a
          href="/contact-us"
          className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition font-semibold duration-300"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
}
