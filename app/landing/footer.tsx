"use client";
export default function Footer() {
  return (
    <footer className="bg-background border-t py-8 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} ChatBot Hizmeti. Tüm hakları saklıdır.
        </div>
        <div className="flex items-center gap-4">
          {/* Sosyal medya ikonları için placeholder */}
          <a href="mailto:info@chatbothizmeti.com" className="text-primary hover:underline text-sm">info@chatbothizmeti.com</a>
          <a href="#" className="text-muted-foreground hover:text-primary transition">Instagram</a>
          <a href="#" className="text-muted-foreground hover:text-primary transition">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
} 