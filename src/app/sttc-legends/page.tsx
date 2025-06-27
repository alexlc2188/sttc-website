import React from 'react';
import Link from "next/link";


export default function STTCLegends() {
  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/sttc-legends-hero.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-4">
          <p className="text-white text-sm md:text-base mb-4 tracking-wider font-medium">
            Weekly social tournament hosted by STTC
          </p>
          <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tight mb-6">
            STTC Legends
          </h1>
          <Link href="/sttc-legends/register">
          <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg font-semibold rounded shadow-md hover:shadow-lg hover:scale-105 duration-300 transition border-2 border-white cursor-pointer">
            Join Now
            </button>
          </Link>
        </div>
      </section>

      {/* Red Banner Section */}
      <section className="bg-red-500 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
          <img
            src="/images/sttc-red-banner.jpg"
            alt="Ben in action"
            className="w-full max-w-md object-cover rounded border-4 border-white shadow-lg"
          />

          <div className="text-left max-w-xl">
            <h2 className="text-5xl font-extrabold uppercase mb-4 tracking-tight">STTC Legends</h2>
            <p className="font-semibold mb-3 text-white/90">A WEEKLY SOCIAL TOURNAMENT</p>
            <p className="text-white/80 text-base leading-relaxed">
              Every Saturday, STTC Legends brings players together in an epic, social, and competitive table tennis showdown. Whether you're a first-time visitor or a seasoned club regular, it's your chance to battle, meet or become a legend. 
              Legends is about more than wins. It’s about energy, community, and pushing your limits.
              Whether you're climbing the ranks or just vibing with friends, it’s the weekly event players look forward to.
            </p>
          </div>
        </div>
      </section>

      {/* White Banner Section */}
      <section className="bg-white text-black py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center justify-between gap-10">
          <img
            src="/images/sttc-white-banner.jpeg"
            alt="Newly crowned legends"
            className="w-full max-w-md object-cover rounded border-4 border-black shadow-lg"
          />

          <div className="text-left max-w-xl">
            <h2 className="text-5xl font-extrabold uppercase mb-7 tracking-tight">Become a Legend This Saturday</h2>
            <p className="text-zinc-600 text-base leading-relaxed">
              Don’t just watch — compete.
              STTC Legends is your chance to jump in, play against new faces, and become part of our growing community. Whether you're here for the competition or the vibe, there's a spot waiting for you.
              Spots are limited each week — secure yours now.
            </p>
            <Link href="/sttc-legends/register">
            <button className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 md:px-8 py-3 text-sm md:text-base font-semibold uppercase rounded-full shadow-md hover:shadow-lg hover:scale-105 duration-300 transition w-full sm:w-auto cursor-pointer">
            Register Now
            </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}








      {/* Latest Winners Section */}

      {/* <section className="bg-zinc-100 text-black py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-4xl font-bold tracking-tight">Latest Winners</h2>
            <a
              href="/sttc-legends/winners"
              className="text-sm font-medium text-red-600 hover:underline flex items-center gap-1"
            >
              View All <span className="text-lg">↗</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {winners.map((winner, index) => (
              <div key={index} className="bg-white rounded shadow hover:shadow-lg transition overflow-hidden">
                <img src={winner.image} alt={winner.name} className="w-full h-48 object-cover" />
                <div className="p-5">
                  <p className="text-red-500 text-xs font-bold mb-2">WEEKLY WINNER</p>
                  <h3 className="text-lg font-bold mb-1">{winner.name} – {winner.date}</h3>
                  <p className="text-sm text-zinc-600">{winner.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

