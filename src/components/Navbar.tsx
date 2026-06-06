"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Ana Sayfa', href: '#home' },
  { name: 'Ürünler', href: '#products' },
  { name: 'Hakkımızda', href: '#about' },
  { name: 'İletişim', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-2",
      scrolled ? "bg-background/95 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between h-[70px]">
        {/* Logo - Height: 70px as requested, width auto */}
        <Link href="/" className="h-[70px] flex items-center group">
          <div className="relative h-[70px] w-auto min-w-[140px] flex items-center">
            <Image 
              src="/images/logo.jpg" 
              alt="Makara Pati" 
              height={70}
              width={210}
              className="h-[70px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              priority
              quality={100}
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-xs font-black uppercase tracking-widest text-white/70 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link href={getWhatsAppUrl()} target="_blank">
            <Button className="bg-primary hover:bg-orange-600 text-white rounded-full font-black px-10 btn-premium h-12 text-sm uppercase tracking-tighter">
              WhatsApp
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 top-[86px] bg-background/98 backdrop-blur-3xl z-40 md:hidden transition-all duration-500",
        isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      )}>
        <div className="flex flex-col items-center justify-center h-full gap-10 p-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-4xl font-black text-white hover:text-primary transition-colors tracking-tighter"
            >
              {link.name}
            </Link>
          ))}
          <Link href={getWhatsAppUrl()} target="_blank" className="w-full mt-10">
            <Button className="w-full bg-primary hover:bg-orange-600 text-white h-20 text-2xl font-black rounded-[2rem] shadow-2xl">
              WhatsApp'tan Yaz
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
