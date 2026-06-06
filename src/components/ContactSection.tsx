import React from 'react';
import { MessageCircle, Instagram, MapPin, Mail, Phone, CheckCircle2 } from 'lucide-react';
import { STORE_INFO, getWhatsAppUrl } from '@/lib/constants';
import Link from 'next/link';
import Image from 'next/image';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 bg-black/40">
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-[2.5rem] p-8 md:p-16 border border-white/10 shadow-3xl overflow-hidden relative">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/10 blur-[120px] rounded-full" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6">İletişime Geçin</h2>
              <p className="text-white/60 text-lg mb-10 leading-relaxed">
                Her türlü soru, öneri ve sipariş talepleriniz için bize aşağıdaki kanallardan ulaşabilirsiniz.
              </p>

              <div className="grid grid-cols-1 gap-6">
                {/* Phone */}
                <Link href={`tel:${STORE_INFO.whatsappClean}`} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Phone size={28} />
                  </div>
                  <div>
                    <span className="block text-sm text-white/40 uppercase tracking-widest font-bold">Telefon</span>
                    <span className="text-xl font-medium">{STORE_INFO.whatsapp}</span>
                  </div>
                </Link>

                {/* WhatsApp */}
                <Link href={getWhatsAppUrl()} target="_blank" className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                    <MessageCircle size={28} />
                  </div>
                  <div>
                    <span className="block text-sm text-white/40 uppercase tracking-widest font-bold">WhatsApp</span>
                    <span className="text-xl font-medium">{STORE_INFO.whatsapp}</span>
                  </div>
                </Link>

                {/* Email */}
                <Link href={`mailto:${STORE_INFO.email}`} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Mail size={28} />
                  </div>
                  <div>
                    <span className="block text-sm text-white/40 uppercase tracking-widest font-bold">E-posta</span>
                    <span className="text-xl font-medium">{STORE_INFO.email}</span>
                  </div>
                </Link>

                {/* Instagram */}
                <Link href={`https://instagram.com/${STORE_INFO.instagram.replace('@', '')}`} target="_blank" className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-gradient-to-tr from-orange-500 to-pink-500 group-hover:text-white transition-all duration-300">
                    <Instagram size={28} />
                  </div>
                  <div>
                    <span className="block text-sm text-white/40 uppercase tracking-widest font-bold">Instagram</span>
                    <span className="text-xl font-medium">{STORE_INFO.instagram}</span>
                  </div>
                </Link>

                {/* Address */}
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center">
                    <MapPin size={28} className="text-primary" />
                  </div>
                  <div>
                    <span className="block text-sm text-white/40 uppercase tracking-widest font-bold">Adres</span>
                    <span className="text-xl font-medium">{STORE_INFO.address}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="bg-white/5 rounded-3xl p-8 border border-white/10 h-full flex flex-col justify-center text-center">
                <div className="w-32 h-32 mx-auto mb-8 relative">
                   <Image 
                    src="/images/logo.jpg" 
                    alt="Makara Pati" 
                    width={128} 
                    height={128} 
                    className="rounded-full border-2 border-primary/30 object-cover"
                  />
                </div>
                <h3 className="text-3xl font-black mb-4">Makara Pati Ailesi</h3>
                <p className="text-white/60 mb-8 italic">
                  "Siz ve minik dostunuz için her zaman buradayız."
                </p>
                <div className="h-px bg-white/10 w-full mb-8" />
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-primary/10 border border-primary/20 text-primary font-bold">
                    <CheckCircle2 size={20} />
                    7/24 WhatsApp Destek
                  </div>
                  <div className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold">
                    <CheckCircle2 size={20} className="text-primary" />
                    Hızlı ve Güvenli Teslimat
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}