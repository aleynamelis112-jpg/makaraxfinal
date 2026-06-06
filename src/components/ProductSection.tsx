"use client";

import React, { useState, useMemo } from 'react';
import { PRODUCTS, Category } from '@/lib/constants';
import ProductCard from './ProductCard';
import { cn } from '@/lib/utils';

const categories: Category[] = ["Tümü", "Köpek", "Kuş", "Diğer"];

export default function ProductSection() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("Tümü");

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchesCategory = selectedCategory === "Tümü" || product.category === selectedCategory;
      return matchesCategory;
    });
  }, [selectedCategory]);

  return (
    <section id="products" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
            Özel <span className="text-primary">Ürünlerimiz</span>
          </h2>
          <p className="text-white/60 text-xl max-w-2xl mx-auto">
            Dostlarınızın mutluluğu için özenle seçilmiş en kaliteli pet ürünleri.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "px-8 py-3 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 border",
                selectedCategory === cat 
                  ? "bg-primary border-primary text-white shadow-[0_0_20px_rgba(255,128,0,0.4)]" 
                  : "bg-white/5 border-white/10 text-white/60 hover:text-white hover:bg-white/10"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid: Desktop 4, Tablet 2, Mobile 1 */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product, idx) => (
              <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-32 bg-white/5 rounded-[3rem] border border-dashed border-white/10">
            <p className="text-white/40 text-2xl font-bold">Henüz ürün bulunmuyor.</p>
          </div>
        )}
      </div>
    </section>
  );
}
