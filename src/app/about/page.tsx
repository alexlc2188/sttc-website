'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="bg-white text-zinc-900 pt-24">

      {/* Hero Section */}
      <section
        className="relative min-h-[70vh] flex items-center justify-center bg-cover bg-center text-white px-4"
        style={{ backgroundImage: `url('/images/sttc-group-banner.jpg')` }}
      >
        <div className="bg-black/60 backdrop-blur-sm p-6 md:p-10 rounded-xl text-center shadow-lg max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About STTC</h1>
          <p className="text-lg md:text-xl">
            Sydney Table Tennis Club – where passion meets performance.
          </p>
        </div>
      </section>

      {/* Club Vision / Philosophy */}
      <section className="px-6 md:px-16 py-12 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-red-600">Our Mission</h2>
        <p className="text-lg text-zinc-700">
          At STTC, we believe in fostering a welcoming and competitive table tennis community. Whether you're a complete beginner or an elite player, we provide the environment, coaching, and support to help you reach your goals and enjoy the sport.
        </p>
      </section>

      {/* Highlights Section */}
      <section className="bg-zinc-100 py-12 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="text-xl font-semibold text-red-600 mb-2">Inclusive for All Levels</h3>
            <p className="text-zinc-700">From juniors to veterans, we welcome players of all skill levels and backgrounds.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="text-xl font-semibold text-red-600 mb-2">Elite Coaching</h3>
            <p className="text-zinc-700">Our experienced coaches bring international experience and a passion for development.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="text-xl font-semibold text-red-600 mb-2">Vibrant Community</h3>
            <p className="text-zinc-700">Regular events, tournaments, and socials keep our club buzzing on and off the tables.</p>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
<section className="py-16 px-6 md:px-16 max-w-5xl mx-auto">
  <h2 className="text-3xl font-bold text-center text-red-600 mb-12">Meet Our Admin Team</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    
    {/* Owen Zhang */}
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
      <Image
        src="/images/admin-owen.jpg"
        alt="Owen (Shaoping Zhang)"
        width={240}
        height={240}
        className="rounded-full object-cover"
      />
      <h3 className="text-2xl font-semibold mt-6">Shaoping "Owen" Zhang</h3>
      <p className="text-red-600 font-medium text-sm mt-1">Club Manager / Head Coach</p>
      <div className="text-zinc-700 mt-4 text-sm leading-relaxed text-left max-w-xs">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>2017</strong> Australian National Singles Quarterfinalist</li>
          <li><strong>2016</strong> Australian Open Round of 16 & ITTF Uni Singles Gold</li>
          <li><strong>2014</strong> National Singles Bronze & Team Silver</li>
          <li><strong>2013</strong> Chinese National Uni League Team Bronze</li>
        </ul>
        <p className="mt-4 font-semibold text-red-600">Coaching Achievements:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li><strong>2018</strong> – Mingxuan Nie: U21 Singles Silver (Senior Nationals)</li>
          <li><strong>2017</strong> – Alex Lee: U18 Singles Gold (Junior Nationals)</li>
          <li><strong>2015</strong> – Jerry Han: U13 Singles Bronze, Team Gold</li>
          <li><strong>2015</strong> – Angela Wang: Singles, Team, Doubles, Mixed Doubles Gold</li>
        </ul>
      </div>
    </div>

    {/* Hongbo Liang */}
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
      <Image
        src="/images/admin-hongbo.jpg"
        alt="Hongbo Liang"
        width={240}
        height={240}
        className="rounded-full object-cover"
      />
      <h3 className="text-2xl font-semibold mt-6">Hongbo Liang</h3>
      <p className="text-red-600 font-medium text-sm mt-1">Club Manager / Technical Adviser</p>
      <div className="text-zinc-700 mt-4 text-sm leading-relaxed text-left max-w-xs">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>AIS National Coach (2022–2032)</strong></li>
          <li>Generation 2032 Brisbane Olympic National Coach</li>
          <li>TTA Performance Coach (2020–2022)</li>
          <li>NSW State Coach Leader (since 2018)</li>
          <li>Started coaching in 2015</li>
          <li>Foreigner player in Japan (2008–2011) — TOKYO OPEN Round 32</li>
          <li>Waseda University (Harimoto’s Uni) AO scholarship – Table Tennis Team</li>
          <li>Provincial Team in Heilongjiang (2001–2007)</li>
          <li><em>(Note: Not available for private coaching)</em></li>
        </ul>
      </div>
    </div>

  </div>

  {/* Link to full coaching team */}
  <div className="mt-12 text-center">
    <Link
      href="/private-coaching"
      className="inline-block bg-red-600 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-md hover:bg-red-700 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
    >
      Learn More About Our Coaches
    </Link>
  </div>
</section>

    </main>
  );
}
