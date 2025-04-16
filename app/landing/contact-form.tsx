"use client";
import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto max-w-xl">
        <h2 className="text-3xl font-bold mb-8 text-center">İletişim</h2>
        {submitted ? (
          <div className="bg-green-100 text-green-800 p-6 rounded-xl text-center font-semibold">
            Teşekkürler! Mesajınız başarıyla iletildi. En kısa sürede sizinle iletişime geçeceğiz.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 bg-background p-8 rounded-xl shadow">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">Ad Soyad</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">E-posta</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 font-medium">Mesajınız</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
            >
              Gönder
            </button>
          </form>
        )}
      </div>
    </section>
  );
} 