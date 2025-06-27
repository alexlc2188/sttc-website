'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

const communityImages = [
  '/images/sttc-community1.jpg',
  '/images/sttc-community2.jpg',
  '/images/sttc-community3.jpg',
  '/images/sttc-community4.jpg',
];

export default function Home() {
  return (
    <main className="bg-white text-zinc-900 pt-0">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-cover bg-center text-white px-4"
        style={{ backgroundImage: `url('/images/sttc-hero.jpg')` }}
      >
        <div className="bg-black/60 p-6 md:p-10 rounded-xl text-center max-w-2xl shadow-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Sydney's Table Tennis Center</h1>
          <p className="text-lg mb-6">Train, compete, and connect with the best table tennis community in Sydney.</p>
          <a
            href="#highlights" 
            className="inline-block bg-red-600 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 hover:bg-red-700 transition duration-300">
            Get Started
          </a>
        </div>
      </section>

      {/* Highlights Section */}
      <section id="highlights" className="scroll-mt-36 py-16 px-6 text-center bg-gray-50">
        <h2 className="text-3xl font-bold mb-10">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <HighlightCard
            title="Group & Private Coaching"
            desc="Structured programs for all levels – from beginners to national players."
            link="/private-training"
          />
          <HighlightCard
            title="Table Hire"
            desc="Book tables by the hour for casual play or practice. Affordable and easy to reserve."
            link="/table-hire"
          />
          <HighlightCard
            title="STTC Legends"
            desc="Join our fun and competitive social tournament every weekend."
            link="/sttc-legends"
          />
        </div>
      </section>

      {/* Community Section (Carousel) */}
      <section className="py-20 bg-white text-center px-6">
        <h2 className="text-3xl font-bold mb-6">A Community That Elevates Each Other</h2>
        <p className="max-w-xl mx-auto text-lg mb-10">
          Whether you're here to win titles or just have fun, STTC welcomes everyone. 
          We’re proud of our diverse, passionate members and our legacy of coaching success.
        </p>
        <div className="max-w-6xl mx-auto">
          <Swiper
            modules={[Autoplay, EffectFade, Navigation]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            effect="fade"
            navigation
            slidesPerView={1}
          >
            {communityImages.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl overflow-hidden shadow-md w-full max-w-sm mx-auto">
                  <Image
                    src={src}
                    alt={`STTC community photo ${index + 1}`}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-600 text-white text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Ready to Play?</h2>
        <p className="text-lg mb-6">Come to a session, book coaching, or get in touch today.</p>
        <Link href="/contact-us" className="inline-block bg-white text-red-600 font-semibold px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition duration-300">
          Contact Us
        </Link>
      </section>
    </main>
  );
}

function HighlightCard({ title, desc, link }: { title: string, desc: string, link: string }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="mb-4 text-zinc-700">{desc}</p>
      <Link href={link} className="text-red-600 font-medium hover:underline">Learn More →</Link>
    </div>
  );
}
