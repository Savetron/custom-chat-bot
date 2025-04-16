"use client";
const features = [
  {
    title: 'Kolay Özelleştirme',
    description: 'Chat botunuzu markanıza ve ihtiyaçlarınıza göre kolayca özelleştirin.',
  },
  {
    title: 'Görsel ve Medya Desteği',
    description: 'Kullanıcılarınıza projelerinize ait görselleri ve medya içeriklerini sunun.',
  },
  {
    title: 'Hızlı Entegrasyon',
    description: 'Subdomain veya embed yöntemiyle dakikalar içinde sitenize entegre edin.',
  },
  {
    title: 'Marka Kimliğine Uyum',
    description: 'Renkler, logo ve dil seçenekleriyle tam marka uyumu sağlayın.',
  },
  {
    title: 'Güçlü AI Altyapısı',
    description: 'Grok, OpenAI gibi modern yapay zeka modelleriyle desteklenir.',
  },
  {
    title: 'Sıfır Kurulum, Anında Kullanım',
    description: 'Hiçbir teknik bilgiye gerek kalmadan hemen kullanmaya başlayın.',
  },
];

export default function Features() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold mb-10 text-center">Öne Çıkan Özellikler</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="rounded-xl bg-muted p-6 shadow hover:shadow-lg transition flex flex-col items-center text-center"
            >
              {/* İkon veya görsel için placeholder */}
              <div className="mb-4 size-12 bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl">
                <span>★</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 