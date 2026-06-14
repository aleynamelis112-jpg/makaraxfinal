import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductSection from '@/components/ProductSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import MusicPlayer from '@/components/MusicPlayer';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      
      <div className="relative">
        <Hero />
        <ProductSection />
        <AboutSection />
        <ContactSection />
      </div>

      <Footer />
      <MusicPlayer />
      <ScrollToTop />
    </main>
  );
}
