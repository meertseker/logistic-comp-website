"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";

type ContactFormProps = {
  className?: string;
};

export default function ContactForm({ className }: ContactFormProps) {
  const [state, handleSubmit] = useForm("mgvnnleg");

  if (state.succeeded) {
    return (
      <div className={className}>
        <p className="text-green-700 bg-green-50 border border-green-200 rounded-lg p-4">
          Mesajınız için teşekkürler! En kısa sürede sizinle iletişime geçeceğiz.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={className ?? "space-y-6"} action="https://formspree.io/f/mgvnnleg" method="POST">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Ad Soyad *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#202953] focus:border-transparent bg-white text-[#0E0E0E] placeholder-gray-500"
            placeholder="Adınız ve soyadınız"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            E-posta *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#202953] focus:border-transparent bg-white text-[#0E0E0E] placeholder-gray-500"
            placeholder="ornek@email.com"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Telefon *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#202953] focus:border-transparent bg-white text-[#0E0E0E] placeholder-gray-500"
            placeholder="+90 5XX XXX XX XX"
          />
        </div>
      </div>

      

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Mesajınız *
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#202953] focus:border-transparent bg-white text-[#0E0E0E] placeholder-gray-500"
          placeholder="Mesajınızı buraya yazın..."
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-[#202953] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1a1f3a] transition-colors duration-300 disabled:opacity-70"
      >
        {state.submitting ? "Gönderiliyor..." : "Mesaj Gönder"}
      </button>

      {state.errors && state.errors.length > 0 && (
        <p className="text-red-700 bg-red-50 border border-red-200 rounded-lg p-3" role="alert" aria-live="polite">
          Gönderirken bir hata oluştu. Lütfen tekrar deneyin.
        </p>
      )}
    </form>
  );
}


