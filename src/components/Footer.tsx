import React from 'react';
import Link from 'next/link';
import { STORE_INFO } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-black tracking-tighter text-white">
            Makara <span className="text-primary">Pati</span>
          </span>
        </div>
        
        <div className="text-white/40 text-sm text-center">
          © {currentYear} Makara Pati. Tüm hakları saklıdır. 
          <span className="mx-2">|</span>
          Modern pet dostu alışveriş deneyimi.
        </div>
        
        <div className="flex items-center gap-6">
          <Link href="#home" className="text-white/60 hover:text-white text-sm transition-colors">Ana Sayfa</Link>
          <Link href="#products" className="text-white/60 hover:text-white text-sm transition-colors">Ürünler</Link>
          <Link href="#contact" className="text-white/60 hover:text-white text-sm transition-colors">İletişim</Link>
        </div>
      </div>
    </footer>
  );
}