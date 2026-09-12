"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { getWhatsAppUrl, STORE_INFO } from '@/lib/constants';
import { Instagram, MessageCircle } from 'lucide-react';

export default function Hero() {
  const instagramUrl = https://instagram.com/${STORE_INFO.instagram.replace('@', '')};

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
        <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] left-[5%] w-[600px] h-[600px] bg-primary/5 blur-[180px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center z-10">
        <div className="animate-fade-in flex flex-col items-center">

          {/* Main Logo Image */}
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

          {/* Main Title */}
          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter text-white">
            Makara Pati
          </h1>

          <div className="mb-12">

            {/* Main Description */}
            <p className="text-2xl md:text-3xl font-medium text-white/80 max-w-3xl mx-auto mb-2 leading-tight">
              Patili dostlar için özel ürünler
            </p>

            {/* Slogan */}
            <p className="text-xl md:text-2xl font-bold text-primary tracking-[0.2em] uppercase">
              Patilere Değen Tasarım
            </p>

            {/* Brand Information */}
            <p class
