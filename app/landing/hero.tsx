"use client";
export default function Hero() {
  return (
    <section className="py-20 bg-gradient-to-b from-primary/10 to-background text-center">
      <div className="container mx-auto max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Markanıza Özel Akıllı Chat Bot
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8">
          Dakikalar içinde kendi markanıza özel, görsel destekli ve kolay entegre edilebilen bir sohbet asistanı oluşturun.
        </p>
        <a
          href="#demo"
          className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold shadow hover:bg-primary/90 transition"
        >
          Demo&apos;yu Deneyin
        </a>
      </div>
    </section>
  );
} 