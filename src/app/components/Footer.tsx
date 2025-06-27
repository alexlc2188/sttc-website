'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaInstagram, FaWeixin } from 'react-icons/fa';

export default function Footer() {
  const [showQR, setShowQR] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <>
      <footer className="bg-zinc-900 text-white py-10 text-center">
        <div className="max-w-screen-md mx-auto space-y-6 px-4">
          <div className="flex justify-center gap-8 items-center">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/sydneytabletenniscenter"
              className="text-2xl hover:text-red-400 transition duration-300 hover:scale-110 drop-shadow-md"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            {/* Xiaohongshu */}
            <a
              href="https://www.xiaohongshu.com/user/profile/6256b3a5000000001000ddf3?xsec_token=abc123"
              className="hover:scale-110 transition duration-300 drop-shadow-md flex items-center justify-center"
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

            {/* WeChat */}
            <button
              onClick={() => setShowQR(true)}
              className="cursor-pointer text-2xl hover:text-red-400 transition duration-300 hover:scale-110 drop-shadow-md"
              aria-label="WeChat"
            >
              <FaWeixin />
            </button>
          </div>

          <div>
            <Image
              src="/images/STTC logo latest.png"
              alt="STTC Club Logo"
              width={100}
              height={48}
              className="mx-auto"
            />
          </div>

          <p className="text-sm font-semibold tracking-wide text-zinc-400">
            SYDNEY TABLE TENNIS CLUB
          </p>

          <p className="text-xs text-zinc-500">
            © 2025 Sydney Table Tennis Club. All rights reserved.
          </p>
        </div>
      </footer>

      {hasMounted && showQR && <WeChatQRModal onClose={() => setShowQR(false)} />}
    </>
  );
}

function WeChatQRModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl p-4 shadow-xl relative w-[300px] max-w-[90%]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-zinc-500 hover:text-red-500 text-lg"
          aria-label="Close QR Modal"
        >
          &times;
        </button>
        <h2 className="text-center font-semibold text-zinc-800 mb-3">
          Scan to add us on WeChat
        </h2>
        <Image
          src="/images/wechat-qr.png"
          alt="WeChat QR Code"
          width={250}
          height={250}
          className="mx-auto rounded"
        />
      </div>
    </div>
  );
}
