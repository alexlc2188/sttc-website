'use client';

import { useEffect } from 'react';

export default function STTCRegisterPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js';
    script.onload = () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      if (window.jotformEmbedHandler) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        window.jotformEmbedHandler("iframe[id='JotFormIFrame-233237487449871']", "https://form.jotform.com/");
      }
    };
    document.body.appendChild(script);
  }, []);


  return (
    <main className="min-h-screen bg-white text-black py-20 px-4 pt-60 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6">STTC Legends Registration Form</h1>
      <iframe
        id="JotFormIFrame-233237487449871"
        title="STTC War of Legends"
        allow="geolocation; microphone; camera; fullscreen; payment"
        src="https://form.jotform.com/233237487449871"
        style={{ minWidth: '100%', maxWidth: '100%', height: '539px', border: 'none' }}
        scrolling="no"
      />
    </main>
  );
}
