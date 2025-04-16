"use client";
import { useState } from 'react';

const faqs = [
  {
    question: 'Chat botu nasıl entegre edebilirim?',
    answer:
      'Chat botumuzu subdomain olarak veya embed kodu ile kolayca sitenize entegre edebilirsiniz. Teknik destek ekibimiz kurulumda yardımcı olur.',
  },
  {
    question: 'Fiyatlandırma nasıl işliyor?',
    answer:
      'Fiyatlandırma, ihtiyaçlarınıza ve kullanıcı sayınıza göre özelleştirilir. Detaylı bilgi ve teklif almak için iletişim formunu doldurabilirsiniz.',
  },
  {
    question: 'Kişisel verilerim güvende mi?',
    answer:
      'Evet, tüm verileriniz KVKK ve GDPR uyumlu olarak güvenli bir şekilde işlenir ve saklanır.',
  },
  {
    question: 'Chat botunu kendi markama göre özelleştirebilir miyim?',
    answer:
      'Evet, renkler, logo, dil ve içerik tamamen markanıza göre özelleştirilebilir.',
  },
  {
    question: 'Demo chat ile gerçek ürün arasında fark var mı?',
    answer:
      'Demo chat, ürünün temel özelliklerini gösterir. Gerçek ürün, sizin ihtiyaçlarınıza göre daha fazla özelleştirme ve entegrasyon imkanı sunar.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold mb-10 text-center">Sıkça Sorulan Sorular</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border rounded-lg bg-muted">
              <button
                className="w-full text-left px-6 py-4 font-semibold text-lg focus:outline-none flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                {faq.question}
                <span className="ml-2 text-xl">{openIndex === i ? '−' : '+'}</span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-4 text-muted-foreground animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 