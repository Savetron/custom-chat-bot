import Hero from './hero';
import Features from './features';
import DemoChat from './demo-chat';
import FAQ from './faq';
import ContactForm from './contact-form';
import Footer from './footer';

export default function LandingPage() {
  return (
    <main className="flex flex-col min-h-screen bg-background">
      <Hero />
      <Features />
      <section id="demo" className="py-16 bg-muted">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold mb-6 text-center">Demo Chat Bot</h2>
          <DemoChat />
        </div>
      </section>
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
} 