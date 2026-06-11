import React, { useState } from "react";
import { BEST_SELLERS } from "../data";
import { Product } from "../types";
import ProductCard from "./ProductCard";
import { ArrowDownAZ, Star } from "lucide-react";

interface BestSellersProps {
  onAddToCart: (product: Product, quantity: number) => void;
  selectedCategoryFromHome?: string;
}

export default function BestSellers({ onAddToCart, selectedCategoryFromHome }: BestSellersProps) {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState("Tất cả");

  const categoriesSet = ["Tất cả", "Đậu phộng", "Kẹo mứt", "Mì kiều mạch"];

  const filteredProducts = activeCategoryFilter === "Tất cả" 
    ? BEST_SELLERS 
    : BEST_SELLERS.filter(item => item.category === activeCategoryFilter);

  return (
    <section id="best-sellers" className="py-20 max-w-7xl mx-auto px-6">
      
      {/* Title with Gold underline like Image 1 */}
      <div className="text-center relative max-w-lg mx-auto mb-12">
        <div className="flex items-center justify-center gap-1.5 text-secondary text-xs font-bold uppercase tracking-widest bg-accent/20 px-3.5 py-1 rounded-full w-max mx-auto shadow-4xs border border-accent/45 mb-3">
          <Star className="h-3.5 w-3.5 fill-secondary text-secondary" />
          <span>Sản Phẩm Đạt OCOP 5 Sao</span>
        </div>
        <h2 className="font-display font-extrabold text-2xl md:text-3xl text-earth-dark uppercase tracking-tight">
          SẢN PHẨM BÁN CHẠY
        </h2>
        <div className="h-1 bg-primary w-24 mx-auto mt-4 rounded-full" />
      </div>

      {/* Categories Simple Sub-Tabs for high conversion filtering */}
      <div className="flex justify-center items-center gap-1 border-b border-border-earth/10 max-w-md mx-auto mb-10 pb-0.5">
        {categoriesSet.map((catOpt) => {
          const isSelected = activeCategoryFilter === catOpt;
          return (
            <button
              key={catOpt}
              id={`filter-tab-${catOpt.replace(/\s+/g, "-")}`}
              onClick={() => setActiveCategoryFilter(catOpt)}
              className={`p-3 px-5 text-2xs uppercase tracking-wider font-extrabold cursor-pointer border-b-2 transition-all ${
                isSelected 
                  ? "border-secondary text-secondary" 
                  : "border-transparent text-earth-muted hover:text-earth-dark"
              }`}
            >
              {catOpt}
            </button>
          );
        })}
      </div>

      {/* Grid of Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>

      {/* Low-friction business value badge below card grid */}
      <div id="free-samples-section" className="mt-12 bg-white rounded-2xl p-5 border border-border-earth/10 text-center max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 shadow-3xs">
        <div className="text-left md:max-w-2xl">
          <h4 className="font-display font-extrabold text-xs text-earth-dark">Đặt mua thử nghiệm với số lượng linh hoạt</h4>
          <p className="text-4xs text-earth-muted mt-1 leading-relaxed">
            Bạn muốn kiểm duyệt chất lượng hạt trước khi kết nối hợp đồng sỉ? Chúng tôi hỗ trợ giao ngay các gói nhỏ 150g - 500g từ giỏ hàng nhanh, hoàn trả 100% hóa đơn nếu sản phẩm có độ ẩm vượt mức mong đợi.
          </p>
        </div>
        <button
          id="scroll-to-b2b-btn"
          onClick={() => {
            document.getElementById("wholesale-b2b")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex-shrink-0 bg-primary hover:bg-primary-light text-white font-extrabold tracking-wider text-[10px] px-5 py-3 rounded-xl uppercase transition-all shadow-md cursor-pointer"
        >
          Điền khảo sát &amp; nhận mẫu sỉ miễn phí
        </button>
      </div>

    </section>
  );
}
