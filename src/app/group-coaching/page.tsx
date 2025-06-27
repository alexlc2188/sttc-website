'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function GroupCoaching() {
  return (
    <main className="bg-white text-zinc-900 pt-24">
      {/* Hero Section */}
      <section
        className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center text-white px-4"
        style={{ backgroundImage: `url('/images/group-coaching-hero.jpg')` }}
      >
        <div className="bg-black/70 backdrop-blur-sm p-6 md:p-10 rounded-xl text-center shadow-lg max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Group Coaching at STTC</h1>
          <p className="text-lg md:text-xl">Develop your skills, compete with friends, and train with our elite coaches in a fun, supportive environment.</p>
        </div>
      </section>

      {/* Coaching Tiers Section */}
<section className="px-6 py-20 max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold text-center mb-12 text-red-600">Our Group Programs</h2>
  <div className="grid md:grid-cols-2 gap-12">

    {/* Junior Training */}
    <div className="bg-sky-100 p-6 rounded-xl shadow-md hover:shadow-lg transition">
      <h3 className="text-2xl font-semibold mb-4 text-sky-900">Junior Group Training</h3>
      <p className="mb-4">Designed for kids and teens looking to build fundamental skills, coordination, and a love for the game. Suitable for all levels.</p>
      <p className="text-sm text-zinc-700 mb-2">🕒 Saturdays 2:00pm – 4:30pm<br />🕒 Sundays 2:00pm – 4:00pm</p>
    </div>

    {/* High Performance */}
    <div className="bg-red-100 p-6 rounded-xl shadow-md hover:shadow-lg transition">
      <h3 className="text-2xl font-semibold mb-4 text-red-800">High Performance Training</h3>
      <p className="mb-4">Train with the best. This program is aimed at intermediate to advanced players who compete at regional/state/national level. Intensity, focus, and strategy are core elements.</p>
      <p className="text-sm text-zinc-700 mb-2">
        🕒 Mon/Tue/Thur/Fri 6:30 – 8:30pm
        </p>
    </div>

    {/* Adult Group Training */}
<div className="bg-sky-100 p-6 rounded-xl shadow-md hover:shadow-lg transition md:col-span-2">
  <h3 className="text-2xl font-semibold mb-4 text-sky-900">Adult Group Training</h3>
  <p className="mb-4">A welcoming space for adults of all experience levels to learn, improve, and enjoy the sport. Great for fitness, technique, and meeting other players.</p>
  <p className="text-sm text-zinc-700 mb-2">🕒 Fridays 6:30pm - 8:30pm</p>
</div>

  </div>
</section>


      {/* Benefits Section */}
      <section className="bg-zinc-100 py-20 px-6">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-12 text-zinc-800">Why Join Group Coaching?</h2>

    <div className="grid gap-12 md:grid-cols-3 text-left">
      <div className="flex flex-col items-center text-center md:items-start md:text-left px-4">
        <h4 className="text-lg font-semibold mb-2">Expert-Led Training</h4>
        <p className="text-zinc-700">All sessions are run by experienced, qualified coaches who bring passion and strategy to the table.</p>
      </div>
      <div className="flex flex-col items-center text-center md:items-start md:text-left px-4">
        <h4 className="text-lg font-semibold mb-2">Friendly & Supportive Atmosphere</h4>
        <p className="text-zinc-700">Meet other players, make friends, and grow together with a strong community culture.</p>
      </div>
      <div className="flex flex-col items-center text-center md:items-start md:text-left px-4">
        <h4 className="text-lg font-semibold mb-2">Clear Progression Path</h4>
        <p className="text-zinc-700">From beginner to elite—we help you move through levels confidently and consistently.</p>
      </div>
    </div>
  </div>
</section>

<section className="py-20 px-6 bg-white">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-zinc-900 mb-6">Pricing</h2>
    <p className="text-lg text-zinc-700 mb-4">
      All group coaching sessions are priced at
      <span className="text-red-600 font-semibold"> $60 per session</span>.
    </p>
    <p className="text-md text-zinc-500">
      Payment can be made per session or in advance.
    </p>
  </div>
</section>



      {/* Call to Action */}
      <section className="text-center py-20 px-6 bg-zinc-100">
        <h2 className="text-3xl font-bold text-zinc-900 mb-6">Ready to Join a Session?</h2>
        <p className="text-lg mb-8">Whether you're just starting out or training for competition, we’ve got a group for you.</p>
        <Link
          href="/contact-us"
          className="inline-block bg-red-600 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition font-semibold hover:bg-red-700 duration-300"
        >
          Contact Us to Book Your Spot
        </Link>
      </section>
    </main>
  );
}
