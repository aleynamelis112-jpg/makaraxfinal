"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { getWhatsAppUrl, STORE_INFO } from '@/lib/constants';
import { Instagram, MessageCircle } from 'lucide-react';

export default function Hero() {
  const instagramUrl = `https://instagram.com/${STORE_INFO.instagram.replace('@', '')}`;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
        <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] left-[5%] w-[600px] h-[600px] bg-primary/5 blur-[180px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center z-10">
        <div className="animate-fade-in flex flex-col items-center">
          {/* Main Logo Image - 70px Height */}
          <div className="relative h-[70px] w-auto mb-12 flex items-center justify-center">
            <Image 
              src="/images/logo.jpg" 
              alt="Makara Pati Logo" 
              height={70}
              width={210}
              className="h-[70px] w-auto object-contain drop-shadow-2xl"
              priority
              quality={100}
            />
          </div>

          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter text-white">
            Makara Pati
          </h1>
          
          <p className="text-2xl md:text-3xl font-medium text-white/80 max-w-3xl mx-auto mb-12 leading-tight">
            Patili dostlar için özel ürünler
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-4xl mx-auto">
            <Link href="#products" className="flex-1">
              <Button size="lg" className="w-full bg-white text-black hover:bg-white/90 rounded-2xl py-8 text-lg font-bold btn-premium">
                Ürünleri İncele
              </Button>
            </Link>

            <Link href={instagramUrl} target="_blank" className="flex-1">
              <Button size="lg" className="w-full bg-gradient-to-tr from-orange-500 via-pink-600 to-purple-600 text-white hover:opacity-90 rounded-2xl py-8 text-lg font-bold shadow-xl border-none">
                <Instagram className="mr-2" size={24} />
                Instagram Sayfamız
              </Button>
            </Link>
            
            <Link href={getWhatsAppUrl()} target="_blank" className="flex-1">
              <Button size="lg" variant="outline" className="w-full border-primary text-primary hover:bg-primary/10 rounded-2xl py-8 text-lg font-bold">
                <MessageCircle className="mr-2" size={24} />
                WhatsApp
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
