"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product, getWhatsAppUrl, STORE_INFO } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Truck, ShieldCheck, MessageCircle, Info, CheckCircle2 } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const productName = product.name || "Makara Pati Özel Ürün";

  return (
    <div className="group glass-card rounded-[2.5rem] overflow-hidden flex flex-col h-full hover:scale-[1.02] transition-all duration-500 shadow-2xl">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-black/40">
        <Image 
          src={product.image} 
          alt={productName}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
      </div>

      {/* Details */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-bold mb-4 line-clamp-2 min-h-[3rem] group-hover:text-primary transition-colors leading-tight">
          {productName}
        </h3>
        
        <div className="mt-auto space-y-3">
          <div className="flex items-center justify-between mb-4">
            <span className="text-3xl font-black text-primary tracking-tighter">
              0 TL
            </span>
            <Badge variant="outline" className="border-primary/30 text-primary/80">
              {product.category}
            </Badge>
          </div>

          <div className="grid grid-cols-1 gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="w-full border-white/10 bg-white/5 hover:bg-white/10 text-white rounded-xl py-6 font-bold">
                  <Info size={18} className="mr-2" />
                  Bilgi Al
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-[95vw] p-0 overflow-hidden border-white/10 glass rounded-[2rem] md:rounded-[3rem] animate-in fade-in zoom-in duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Left: Image */}
                  <div className="relative aspect-square lg:h-full min-h-[300px]">
                    <Image 
                      src={product.image} 
                      alt={productName}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Right: Info */}
                  <div className="p-8 md:p-12 flex flex-col">
                    <DialogHeader className="mb-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/30 px-3 py-1 flex items-center gap-1">
                          <CheckCircle2 size={14} />
                          Stokta Var
                        </Badge>
                        <Badge variant="outline" className="border-white/10 text-white/60">
                          {product.category}
                        </Badge>
                      </div>
                      <DialogTitle className="text-3xl md:text-4xl font-black text-white leading-tight mb-2">
                        {productName}
                      </DialogTitle>
                      <div className="text-4xl font-black text-primary tracking-tighter">
                        0 TL
                      </div>
                    </DialogHeader>

                    <div className="space-y-6 mb-10">
                      <p className="text-white/60 leading-relaxed">
                        Makara Pati güvencesiyle sunulan bu özel ürün, patili dostunuzun sağlığı ve mutluluğu için en kaliteli malzemelerle tasarlanmıştır. Modern görünümü ve dayanıklı yapısıyla öne çıkar.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3 text-white/70">
                          <Truck className="text-primary" size={20} />
                          <span className="text-sm font-medium">Türkiye Geneli Teslimat</span>
                        </div>
                        <div className="flex items-center gap-3 text-white/70">
                          <ShieldCheck className="text-primary" size={20} />
                          <span className="text-sm font-medium">Güvenli Sipariş</span>
                        </div>
                        <div className="flex items-center gap-3 text-white/70">
                          <MessageCircle className="text-primary" size={20} />
                          <span className="text-sm font-medium">WhatsApp Destek</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-auto">
                      <Link href={getWhatsAppUrl(productName, true)} target="_blank" className="block w-full">
                        <Button className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-black rounded-2xl py-8 text-xl shadow-2xl transition-all hover:scale-[1.02] active:scale-95 border-none">
                          <MessageCircle className="mr-2" size={24} />
                          WhatsApp'tan Sipariş Ver
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <Link href={getWhatsAppUrl(productName, false)} target="_blank" className="block">
              <Button className="w-full bg-primary hover:bg-orange-600 text-white font-black rounded-xl py-6 btn-premium shadow-xl border-none">
                <MessageCircle size={18} className="mr-2" />
                WhatsApp'tan Sipariş Ver
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
