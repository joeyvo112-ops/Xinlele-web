import React, { useEffect, useState } from "react";
import { PROMO_PRODUCTS } from "../data";
import { Product } from "../types";
import { Clock, Flame, ShoppingCart } from "lucide-react";

interface PromoSectionProps {
  onAddToCart: (product: Product, quantity: number) => void;
}

export default function PromoSection({ onAddToCart }: PromoSectionProps) {
  // Setup standard countdown timer tick
  const [days, setDays] = useState(8);
  const [hours, setHours] = useState(22);
  const [minutes, setMinutes] = useState(2);
  const [seconds, setSeconds] = useState(8);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSec) => {
        if (prevSec > 0) {
          return prevSec - 1;
        } else {
          setMinutes((prevMin) => {
            if (prevMin > 0) {
              return prevMin - 1;
            } else {
              setHours((prevHr) => {
                if (prevHr > 0) {
                  return prevHr - 1;
                } else {
                  setDays((prevDay) => {
                    if (prevDay > 0) {
                      return prevDay - 1;
                    }
                    return 0;
                  });
                  return 23;
                }
              });
              return 59;
            }
          });
          return 59;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedValue = (val: number) => {
    return val.toString().padStart(2, "0");
  };

  const formattedPrice = (price: number) => {
    return price.toLocaleString("vi-VN") + " đ";
  };

  return (
    <section id="promo-section" className="py-20 bg-stone-900 border-t border-b border-stone-950 relative overflow-hidden">
      
      {/* Background Graphic matching Image 1 deep amber layout */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1595124233519-5eb830ac6150?auto=format&fit=crop&q=80&w=1200"
          alt="Sấy tẩm mộc hữu cơ nền đen"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-15 filter blur-[2px] brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900 via-stone-950/80 to-[#28180b]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Title Information */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3.5">
          <span className="text-primary text-2xs font-extrabold tracking-widest uppercase block">
            CƠ HỘI SĂN ĐƯỢC GIÁ TỐT NHẤT TUẦN
          </span>
          <h2 className="font-display font-black text-2xl md:text-3xl lg:text-4xl text-white tracking-tight uppercase">
            ĐANG KHUYẾN MÃI
          </h2>
          <p className="text-stone-300 text-xs md:text-sm font-sans mx-auto max-w-xl leading-relaxed">
            Chỉ còn <span className="text-primary font-bold">47 gói cuối cùng</span>! Đừng bỏ lỡ cơ hội sở hữu những hạt nông sản giòn bùi, tươi ngon nhất với mức giá ưu đãi độc quyên. Mua ngay kẻo lỡ!
          </p>
        </div>

        {/* TIMER CONTAINER - Circular clocks matching exactly Image 1 */}
        <div className="flex justify-center items-center gap-4 md:gap-6 mb-16 select-none">
          
          {/* Days */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-primary bg-[#2D232E]/70 backdrop-blur-xs flex items-center justify-center font-display font-extrabold text-lg md:text-2xl text-white shadow-xl">
              {formattedValue(days)}
            </div>
            <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider mt-2">NGÀY</span>
          </div>

          <span className="text-white text-xl font-bold -mt-6 hidden md:inline">:</span>

          {/* Hours */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-primary bg-[#2D232E]/70 backdrop-blur-xs flex items-center justify-center font-display font-extrabold text-lg md:text-2xl text-white shadow-xl">
              {formattedValue(hours)}
            </div>
            <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider mt-2">GIỜ</span>
          </div>

          <span className="text-white text-xl font-bold -mt-6 hidden md:inline">:</span>

          {/* Minutes */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-primary bg-[#2D232E]/70 backdrop-blur-xs flex items-center justify-center font-display font-extrabold text-lg md:text-2xl text-white shadow-xl">
              {formattedValue(minutes)}
            </div>
            <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider mt-2">PHÚT</span>
          </div>

          <span className="text-white text-xl font-bold -mt-6 hidden md:inline">:</span>

          {/* Seconds */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-secondary bg-[#2D232E]/70 backdrop-blur-xs flex items-center justify-center font-display font-extrabold text-lg md:text-2xl text-white shadow-xl ring-2 ring-red-500/20">
              {formattedValue(seconds)}
            </div>
            <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider mt-2">GIÂY</span>
          </div>

        </div>

        {/* PROMO ITEMS GRID - Elegantly Dark, high contrast */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROMO_PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              className="bg-[#3E303F]/90 border border-accent/20 rounded-xl p-4 flex flex-col justify-between h-full backdrop-blur-xs shadow-md group relative overflow-hidden"
            >
              <div className="space-y-4">
                {/* Image container */}
                <div className="relative aspect-square rounded-lg overflow-hidden bg-stone-800">
                  {prod.tag && (
                    <div className="absolute top-2 left-2 z-10 bg-secondary text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-sm flex items-center gap-1.5 shadow-sm">
                      <Flame className="h-3 w-3" />
                      {prod.tag}
                    </div>
                  )}
                  <img
                    src={prod.image}
                    alt={prod.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Info Text */}
                <div className="space-y-1 text-left">
                  <h4 className="font-display font-bold text-sm text-white line-clamp-1 group-hover:text-primary transition-colors">
                    {prod.name}
                  </h4>
                  <p className="text-3xs text-stone-300 font-sans leading-relaxed line-clamp-2">
                    {prod.description}
                  </p>
                </div>
              </div>

              {/* Pricing & Add Trigger button */}
              <div className="pt-3 border-t border-accent/15 mt-4 space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-primary font-display font-extrabold text-sm">
                    {formattedPrice(prod.price)}
                  </span>
                  {prod.originalPrice && (
                    <span className="text-4xs text-stone-400 line-through font-semibold">
                      {formattedPrice(prod.originalPrice)}
                    </span>
                  )}
                </div>

                <button
                  id={`promo-add-${prod.id}`}
                  onClick={() => onAddToCart(prod, 1)}
                  className="w-full py-2 bg-secondary hover:bg-red-800 text-white text-4xs uppercase tracking-wider font-extrabold rounded-md flex items-center justify-center gap-1 cursor-pointer transition-all active:scale-97"
                >
                  <ShoppingCart className="h-3.5 w-3.5" />
                  THÊM VÀO GIỎ
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
