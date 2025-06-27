'use client';

import { useState } from 'react';
import Image from 'next/image';
import ContactForm from '@/app/components/ContactForm';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FaInstagram, FaWhatsapp, FaWeixin } from 'react-icons/fa';

export default function ContactPage() {
  const [showWeChatModal, setShowWeChatModal] = useState(false);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setShowWeChatModal(false);
    }
  };

  return (
    <main className="bg-white text-zinc-900 pt-40 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <p className="uppercase text-lg text-red-600 tracking-widest">Contact Us</p>
        <h1 className="text-4xl font-extrabold mt-6 mb-10">
          Our Club Is Your Club
        </h1>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-zinc-700 mb-6">
          <div className="flex items-center gap-2">
            <Mail className="text-red-600" size={20} />
            <span>sydneytabletenniscenter@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="text-red-600" size={20} />
            <span>24 Parramatta Road, Lidcombe 2141</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="text-red-600" size={20} />
            <span>+61 421 373 698</span>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="my-12 space-y-4">
          <h2 className="text-lg font-semibold text-zinc-800">Follow or Message Us</h2>
          <div className="flex justify-center gap-8 text-2xl">
            <a
              href="https://www.instagram.com/sydneytabletenniscenter"
              className="hover:text-pink-500 transition duration-300 hover:scale-110 hover:drop-shadow-[0_0_6px_rgba(239,68,68,0.6)]"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/61421373698"
              className="hover:text-green-500 transition duration-300 hover:scale-110 hover:drop-shadow-[0_0_6px_rgba(34,197,94,0.6)]"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.xiaohongshu.com/user/profile/6256b3a5000000001000ddf3?xsec_token=ABX9eJTdz-vmEBYEW1mEadbGg_O6awH3ZI5Y9Qa8NzLwg=&xsec_source=pc_search"
              className="hover:scale-110 transition duration-300 hover:drop-shadow-[0_0_6px_rgba(239,68,68,0.6)] flex items-center justify-center"
              aria-label="Xiaohongshu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/xiaohongshu-seeklogo.svg"
                alt="Xiaohongshu Icon"
                width={24}
                height={24}
                className="object-contain"
              />
            </a>
            <button
              type="button"
              onClick={() => setShowWeChatModal(true)}
              className="cursor-pointer hover:text-green-500 transition duration-300 hover:scale-110 hover:drop-shadow-[0_0_6px_rgba(239,68,68,0.6)]"
              aria-label="WeChat"
            >
              <FaWeixin />
            </button>
          </div>
        </div>

        {/* WeChat Modal with fade-in + backdrop close */}
        {showWeChatModal && (
          <div
            onClick={handleBackdropClick}
            className="fixed inset-0 z-50 bg-black/70 bg-opacity-40 background-blur-sm flex items-center justify-center animate-fadeIn"
          >
            <div className="bg-white p-6 rounded-lg shadow-xl text-center relative max-w-sm w-full">
              <button
                onClick={() => setShowWeChatModal(false)}
                className="absolute top-2 right-3 text-zinc-600 hover:text-black text-xl font-bold"
                aria-label="Close WeChat Modal"
              >
                ×
              </button>
              <h3 className="text-lg font-semibold mb-4">Scan to contact us on WeChat</h3>
              <img
                src="/images/wechat-qr.jpg"
                alt="STTC WeChat QR Code"
                className="w-48 mx-auto rounded"
              />
            </div>
          </div>
        )}

        {/* About Text */}
        <p className="max-w-2xl mx-auto text-zinc-600 leading-relaxed text-lg mb-20">
          The Sydney Table Tennis Club is dedicated to creating a vibrant community through the sport of table tennis.
          We welcome players of all levels to train, compete, and grow together — united by passion and fair play.
        </p>

        {/* Map */}
        <div className="rounded-xl overflow-hidden shadow-lg mb-20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.816363255951!2d151.03599097626928!3d-33.86593277322259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bda3ebd55b1b%3A0x7a6e08d79d5f2f3d!2s24%20Parramatta%20Rd%2C%20Lidcombe%20NSW%202141%2C%20Australia!5e0!3m2!1sen!2sau!4v1714021536807"
            width="100%"
            height="300"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full border-0"
          ></iframe>
        </div>

        {/* Contact Form */}
        <h1 className="text-4xl font-extrabold mt-2 mb-6">
          Send us your enquiries
        </h1>
        <div className="bg-white border border-red-300 p-8 rounded-xl shadow-xl">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
