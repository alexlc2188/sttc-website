'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function TableHire() {
  return (
    <main className="bg-white text-zinc-900 pt-24">

      {/* Hero Section */}
      <section
        className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center text-white px-4"
        style={{ backgroundImage: `url('/images/table-hire-hero.jpg')` }}
      >
        <div className="bg-black/70 backdrop-blur-sm p-6 md:p-8 rounded-xl text-center shadow-lg max-w-xl w-full">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 drop-shadow-md">Table Hire at STTC</h1>
          <p className="text-base md:text-lg drop-shadow-sm">Practice at your pace or have a casual hit. Affordable, flexible, and convenient.</p>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-12 px-4 md:px-16 text-zinc-800">
        <h2 className="text-2xl font-semibold mb-8 text-center">How It Works</h2>
        <div className="grid gap-8 md:grid-cols-3 text-center">
          <div>
            <h3 className="text-lg font-medium mb-2">1. Check Availability</h3>
            <p>
              See when tables are free on our{' '}
              <Link href="/timetable" className="text-red-500 underline hover:text-red-600">
                Weekly Timetable
              </Link>.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">2. Book Your Spot</h3>
            <p>
              Use our contact form, message us via Instagram or WeChat, or call us on{' '}
              <a href="tel:+61421373698" className="text-red-500 hover:underline font-semibold">
                +61 421 373 698
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">3. Come and Play!</h3>
            <p>Rackets and balls are available – just show up and play.</p>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="bg-zinc-100 py-12 px-4 md:px-16 text-zinc-800">
        <h2 className="text-2xl font-semibold mb-6 text-center">Pricing</h2>
        <div className="overflow-x-auto">
          <table className="w-full max-w-md mx-auto border border-zinc-300 text-center text-sm md:text-base">
            <thead className="bg-red-500 text-white">
              <tr>
                <th className="py-2 px-4">Duration</th>
                <th className="py-2 px-4">Price (per table)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="py-2 px-4">30 minutes</td>
                <td className="py-2 px-4">$10</td>
              </tr>
              <tr className="bg-white">
                <td className="py-2 px-4">1 hour</td>
                <td className="py-2 px-4">$20</td>
              </tr>
              <tr className="bg-white">
                <td className="py-2 px-4">2 hours</td>
                <td className="py-2 px-4">$30</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="bg-white py-12 px-4 md:px-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Want to Book a Table?</h2>
        <p className="mb-6">Get in touch with us to reserve your spot or ask any questions.</p>
        <Link href="/contact-us">
          <span className="inline-block bg-red-500 text-white py-2 px-6 font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-105 hover:bg-red-600 transition duration-300">
            Contact Us
          </span>
        </Link>
      </section>

    </main>
  );
}
