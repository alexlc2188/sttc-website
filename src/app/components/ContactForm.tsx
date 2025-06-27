"use client";

import { useState } from "react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = (formData: FormData) => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.get("name")) newErrors.name = "Name is required.";
    if (!formData.get("email")) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.get("email") as string))
      newErrors.email = "Enter a valid email address.";
    if (!formData.get("message")) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    form.submit(); // Let FormSubmit.co handle the POST
  };

  return (
    <form
      onSubmit={handleSubmit}
      action="https://formsubmit.co/sttclegends@gmail.com"
      method="POST"
      className="grid gap-6 text-left"
    >
      {/* Hidden settings for FormSubmit */}
      <input type="hidden" name="_captcha" value="false" />
      <input
        type="hidden"
        name="_next"
        value="https://localhost:3000/thank-you"
      />
      <input
        type="hidden"
        name="_subject"
        value="New STTC Contact Form Submission"
      />

      <div>
        <label className="block text-sm font-medium text-zinc-800 mb-1">
          Name
        </label>
        <input
          type="text"
          name="name"
          autoComplete="off"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white text-zinc-900 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-800 mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          autoComplete="off"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white text-zinc-900 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-800 mb-1">
          Message
        </label>
        <textarea
          name="message"
          rows={5}
          autoComplete="off"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white text-zinc-900 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`${
          isSubmitting ? "bg-red-300 cursor-not-allowed" : "bg-red-500 hover:bg-red-600"
        } text-white font-semibold py-2 px-6 rounded-lg transition`}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
