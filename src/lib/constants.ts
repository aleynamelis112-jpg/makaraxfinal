export const STORE_INFO = {
  name: "Makara Pati",
  whatsapp: "+90 547 571 71 77",
  whatsappClean: "905475717177",
  instagram: "@makara.pati",
  address: "Konya / Türkiye",
  email: "info@makarapati.com",
};

export type Category = "Tümü" | "Köpek" | "Kuş" | "Diğer";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: Category;
}

/**
 * Ürün listesi 25 adet ile sınırlandırıldı (pet (1) - pet (25)).
 * logo.jpg listeye dahil değildir.
 */
export const PRODUCTS: Product[] = Array.from({ length: 25 }, (_, i) => {
  const id = (i + 1).toString();
  let category: Category = "Diğer";
  if (i % 3 === 0) category = "Köpek";
  else if (i % 5 === 0) category = "Kuş";

  return {
    id,
    name: `Makara Pati Özel Ürün (${id})`,
    price: 0,
    image: `/images/pet%20(${id}).jpeg`,
    category: category,
  };
});

export const getWhatsAppUrl = (productName?: string, isInfoRequest: boolean = false) => {
  const baseUrl = `https://wa.me/${STORE_INFO.whatsappClean}`;
  const text = productName 
    ? isInfoRequest 
      ? `Merhaba, Makara Pati sitesindeki [${productName}] hakkında bilgi almak ve sipariş vermek istiyorum.`
      : `Merhaba, Makara Pati sitesindeki [${productName}] ürününü sipariş vermek istiyorum.`
    : `Merhaba, Makara Pati ürünleri hakkında bilgi almak istiyorum.`;
  return `${baseUrl}?text=${encodeURIComponent(text)}`;
};
