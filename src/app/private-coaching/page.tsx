'use client';

import { useState } from 'react';
import Image from 'next/image';
import { coaches } from '@/app/data/coaches';

export default function PrivateCoaching() {
  const [selectedCoach, setSelectedCoach] = useState(null);

  return (
    <main className="bg-white text-zinc-900 pt-30">

      {/* Hero Section */}
      <section
        className="relative w-full min-h-[60vh] flex items-center justify-center bg-cover bg-center text-white"
        style={{ backgroundImage: `url('/images/all-sttc-coaches-2.jpg')` }}
      >
        <div className="bg-black/70 p-8 rounded-xl text-center shadow-xl max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">Private Coaching</h1>
          <p className="text-lg">
            Personalised 1-on-1 training to fast-track your improvement with our elite coaches.
          </p>
        </div>
      </section>

      {/* Coaches Grid */}
      <section className="py-16 bg-zinc-100">
        <h2 className="text-3xl font-semibold text-center mb-12 text-red-600">Meet Our Coaches</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {coaches.map((coach, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer"
              onClick={() => setSelectedCoach(coach)}
            >
              <div className="h-72 flex items-center justify-center bg-zinc-200">
                <Image
                  src={coach.image}
                  alt={coach.name}
                  width={600}
                  height={400}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-red-600 mb-1">{coach.name}</h3>
                <p className="text-sm text-zinc-700 mb-2">{coach.tier}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal Overlay */}
      {selectedCoach && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="bg-white rounded-xl shadow-xl max-w-lg w-full p-6 relative">
            <button
              className="absolute top-4 right-4 text-zinc-500 hover:text-red-500 text-2xl"
              onClick={() => setSelectedCoach(null)}
            >
              &times;
            </button>
            <Image
              src={selectedCoach.image}
              alt={selectedCoach.name}
              width={600}
              height={400}
              className="w-full h-60 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-red-600 mb-1">{selectedCoach.name}</h3>
            <p className="text-sm text-zinc-700 mb-4">{selectedCoach.tier}</p>
            <ul className="list-disc list-inside text-zinc-700 mb-4">
              {selectedCoach.achievements.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="text-sm text-zinc-600">Contact us to book your session.</p>
          </div>
        </div>
      )}

      {/* CTA Section */}
<section className="text-center py-16 bg-white">
  <h2 className="text-3xl font-semibold mb-4 text-red-600">Ready to Book?</h2>
  <p className="text-lg text-zinc-700 mb-6">
    Contact us to arrange your private training session with any of our coaches.
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
