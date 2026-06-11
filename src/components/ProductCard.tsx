import React, { useState } from "react";
import { ShoppingCart, Heart, Activity } from "lucide-react";
import { Product } from "../types";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, quantity: number) => void;
  key?: string;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [liked, setLiked] = useState(false);
  const [hovered, setHovered] = useState(false);

  const formattedPrice = (price: number) => {
    return price.toLocaleString("vi-VN") + " đ";
  };

  return (
    <div
      id={`product-card-${product.id}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bg-white rounded-2xl border border-border-earth/10 p-4 shadow-xs hover:shadow-lg transition-all flex flex-col h-full flex-shrink-0 group overflow-hidden"
    >
      {/* Product Image container */}
      <div className="relative aspect-square w-full rounded-xl bg-stone-50 overflow-hidden mb-4 flexItem">
        
        {/* Discount / Status Tag */}
        {product.tag && (
          <div className="absolute top-2 left-2 z-10 bg-secondary text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-md shadow-xs animate-pulse">
            {product.tag}
          </div>
        )}

        {/* Favorite Heart trigger */}
        <button
          id={`fav-btn-${product.id}`}
          onClick={(e) => {
            e.stopPropagation();
            setLiked(!liked);
          }}
          className="absolute top-2 right-2 z-10 p-2 rounded-full bg-white/80 backdrop-blur-xs hover:bg-white text-earth-dark/70 hover:text-red-500 transition-all shadow-xs"
        >
          <Heart className={`h-4 w-4 ${liked ? "fill-red-500 text-red-500" : ""}`} />
        </button>

        <img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 object-center"
        />
        
        {/* Soft layout overlay */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/40 via-transparent to-transparent h-12 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Details Box */}
      <div className="space-y-1.5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-[11px] font-bold text-earth-muted uppercase">
            <span>{product.category}</span>
            {product.volumeUnits && (
              <span className="bg-stone-100 text-stone-650 px-1.5 py-0.5 rounded text-[10px]">
                {product.volumeUnits}
              </span>
            )}
          </div>
          <h4 className="font-display font-extrabold text-sm text-earth-dark leading-snug mt-1 group-hover:text-primary transition-colors line-clamp-1">
            {product.name}
          </h4>
          <p className="font-sans text-stone-500 text-[11px] leading-relaxed mt-1 line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Pricing & Cart Action block */}
        <div className="pt-3 border-t border-stone-50 mt-3 space-y-2">
          <div className="flex items-baseline gap-2">
            <span className="text-secondary font-display font-extrabold text-md">
              {formattedPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-2xs text-stone-400 line-through font-medium">
                {formattedPrice(product.originalPrice)}
              </span>
            )}
          </div>

          <button
            id={`add-to-cart-${product.id}`}
            onClick={() => onAddToCart(product, 1)}
            className="w-full py-2.5 bg-accent/15 hover:bg-accent/35 text-secondary hover:text-red-900 text-2xs uppercase tracking-wider font-extrabold rounded-lg flex items-center justify-center gap-1.5 cursor-pointer transition-all active:scale-97 border border-accent/25"
          >
            <ShoppingCart className="h-3.5 w-3.5" />
            THÊM VÀO GIỎ
          </button>
        </div>
      </div>

    </div>
  );
}
