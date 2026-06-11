import { useState } from "react";
import { CartItem, Product } from "./types";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CategoryList from "./components/CategoryList";
import BestSellers from "./components/BestSellers";
import PromoSection from "./components/PromoSection";
import TestimonialSection from "./components/TestimonialSection";
import B2BSection from "./components/B2BSection";
import NewsletterBanner from "./components/NewsletterBanner";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import { Sparkles, HelpingHand, ShieldCheck, Flame } from "lucide-react";

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");

  const handleAddToCart = (product: Product, quantity: number) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.product.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { product, quantity }];
    });
    // Open the cart drawer for instant feedback and a higher checkout conversion rate
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === productId ? { ...item, quantity: newQty } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleCategorySelectFromHero = (categoryLabel: string) => {
    setSelectedCategory(categoryLabel);
    scrollToSection("best-sellers");
  };

  return (
    <div className="bg-surface-cream text-earth-dark selection:bg-secondary selection:text-white min-h-screen font-sans antialiased overflow-x-hidden">
      
      {/* Top Banner - Urgency-inducing promotional line with absolute alignment */}
      <div className="bg-[#28180b] text-stone-200 py-2.5 px-6 text-center text-4xs font-black tracking-widest uppercase flex flex-wrap items-center justify-center gap-2 select-none border-b border-amber-950/20">
        <Flame className="h-3.5 w-3.5 text-secondary animate-pulse shrink-0" />
        <button
          onClick={() => scrollToSection("wholesale-b2b")}
          className="bg-accent hover:bg-amber-400 text-earth-dark px-3 py-1 rounded-full text-[10px] font-black tracking-wider transition-all cursor-pointer uppercase flex items-center gap-1 shadow-xs hover:scale-103 active:scale-97 duration-150 shrink-0"
        >
          Nhận mẫu thử B2B miễn phí &rarr;
        </button>
        <span className="text-stone-300 font-bold">Ưu đãi B2B đầu mùa: Gửi mẫu thử 5 món ăn phục vụ tận nơi miễn phí!</span>
        <span className="hidden sm:inline-block h-1.5 w-1.5 bg-[#eab308] rounded-full" />
        <span className="hidden sm:inline">Thời gian có hạn từ 01/06 - 15/06!</span>
      </div>

      {/* Shared Responsive Header */}
      <Header
        cart={cart}
        onCartClick={() => setIsCartOpen(true)}
        onNavigateToB2B={() => scrollToSection("wholesale-b2b")}
      />

      {/* Main Hero Banner with custom overlay */}
      <Hero
        onScrollToRetail={() => scrollToSection("best-sellers")}
        onScrollToFreeSamples={() => scrollToSection("free-samples-section")}
      />

      {/* Floating Category Overlap */}
      <CategoryList
        onCategorySelect={handleCategorySelectFromHero}
        selectedCategory={selectedCategory}
      />

      {/* Retail Storefront Section */}
      <BestSellers
        onAddToCart={handleAddToCart}
        selectedCategoryFromHome={selectedCategory}
      />

      {/* Flash Sale Promo Section */}
      <PromoSection
        onAddToCart={handleAddToCart}
      />

      {/* Wholesale & HORECA Customized Bulk Calculator & AI Hub */}
      <B2BSection />

      {/* Testimonials block */}
      <TestimonialSection />

      {/* Promo subscription panel */}
      <NewsletterBanner />

      {/* Brand value statement ribbons */}
      <div className="bg-white/90 border-t border-b border-border-earth/10 flex flex-wrap justify-center items-center py-8 px-6 gap-8 md:gap-16 text-center select-none shrink-0 relative z-10">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-emerald-700" />
          <span className="font-display font-bold text-xs uppercase tracking-tight text-earth-dark">Nông sản OCOP 5 Sao</span>
        </div>
        <div className="flex items-center gap-2">
          <HelpingHand className="h-5 w-5 text-emerald-700" />
          <span className="font-display font-bold text-xs uppercase tracking-tight text-earth-dark">Hỗ trợ hộ nông dại Việt</span>
        </div>
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-emerald-700" />
          <span className="font-display font-bold text-xs uppercase tracking-tight text-earth-dark">Gia công chuẩn ISO 22000</span>
        </div>
      </div>

      {/* Main Footer contacts */}
      <Footer />

      {/* Shopping Cart Drawer panel */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

    </div>
  );
}
