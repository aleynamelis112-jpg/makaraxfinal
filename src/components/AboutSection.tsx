import React from 'react';
import { Heart, ShieldCheck, Zap, Smartphone, Sparkles } from 'lucide-react';

const features = [
  { icon: Sparkles, title: "Özel Tasarım", text: "Her ürün, dostlarınızın mutluluğu için özenle seçilir." },
  { icon: ShieldCheck, title: "Güvenilir Alışveriş", text: "WhatsApp üzerinden birebir iletişim ile güvenli sipariş." },
  { icon: Smartphone, title: "Mobil Uyumlu", text: "Her cihazda kusursuz ve hızlı kullanım deneyimi." },
  { icon: Zap, title: "Hızlı İletişim", text: "Sorularınıza anında cevap veren canlı destek hattı." },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 blur-[100px] -z-10" />
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              Biz kimiz ve neyi <br /> 
              <span className="text-primary">amaçlıyoruz?</span>
            </h2>
            <p className="text-xl text-white/70 mb-10 leading-relaxed">
              Makara Pati, patili dostlarımız için eğlenceli, sevimli ve özel ürünleri bir araya getiren modern bir platformdur. 
              Hayvan sevgisini yaymayı ve kullanıcılarına sıcak, güvenilir bir alışveriş deneyimi sunmayı amaçlar.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <f.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{f.title}</h4>
                    <p className="text-sm text-white/60">{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 rounded-[2rem] rotate-3 scale-105 group-hover:rotate-0 transition-transform duration-500" />
            <div className="relative aspect-square rounded-[2rem] overflow-hidden border border-white/10 glass shadow-2xl">
              <img 
                src="https://picsum.photos/seed/makarapati/800/800" 
                alt="Makara Pati About" 
                className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                data-ai-hint="happy pet"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Heart className="text-primary fill-primary" size={20} />
                    <span className="font-bold text-white uppercase tracking-widest text-sm">Sevgimizle Hazırlandı</span>
                  </div>
                  <p className="text-white/80 italic">"Onların mutluluğu, bizim en büyük motivasyonumuz."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}