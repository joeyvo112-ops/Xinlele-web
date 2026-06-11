import { ShoppingCart, Search, User, Sparkles, Menu, X, ArrowLeftRight } from "lucide-react";
import React, { useState, FormEvent } from "react";
import { CartItem } from "../types";

interface HeaderProps {
  cart: CartItem[];
  onCartClick: () => void;
  onNavigateToB2B: () => void;
}

export default function Header({ cart, onCartClick, onNavigateToB2B }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim().length > 0) {
      alert(`Kết quả tìm kiếm cho: "${searchQuery}" sẽ xuất hiện trong giây lát.`);
      setSearchOpen(false);
    }
  };

  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur-md z-40 border-b border-border-earth/10 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO AREA */}
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-[#FCEA10] px-4 py-1.5 rounded-lg border border-yellow-400/55 shadow-xs select-none">
            <span className="text-[#009E49] font-brand font-black text-2xl tracking-wider select-none leading-none scale-y-105">
              XINLELE
            </span>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-bold text-earth-dark select-none">
          <a href="#" className="text-secondary border-b-2 border-secondary pb-1">Trang chủ</a>
          <a href="#best-sellers" className="hover:text-primary transition-colors">Cửa hàng</a>
          <a href="#wholesale-b2b" onClick={(e) => { e.preventDefault(); onNavigateToB2B(); }} className="hover:text-primary transition-colors flex items-center gap-1">
            Chính Sách B2B <span className="bg-primary/10 text-primary px-1.5 py-0.5 rounded-full text-4xs">Mới</span>
          </a>
          <a href="#promo-section" className="hover:text-primary transition-colors">Khuyến Mãi</a>
          <a href="#footer-contact" className="hover:text-primary transition-colors">Liên hệ</a>
        </nav>

        {/* UTILITY BAR */}
        <div className="flex items-center gap-3.5">
          {/* Wholesaler quick toggle */}
          <button
            id="header-b2b-cta"
            onClick={onNavigateToB2B}
            className="hidden lg:flex items-center gap-1 text-4xs font-black uppercase text-white bg-primary hover:bg-primary-light px-3.5 py-2 rounded-full cursor-pointer transition-all shadow-sm"
          >
            <ArrowLeftRight className="h-3 w-3 text-accent" />
            Nhận sỉ HORECA
          </button>
          {/* Search Trigger */}
          <div className="relative">
            <button
              id="search-trigger-btn"
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2.5 rounded-full hover:bg-stone-100 text-earth-dark transition-colors"
              aria-label="Search items"
            >
              <Search className="h-4.5 w-4.5" />
            </button>
            {searchOpen && (
              <form
                onSubmit={handleSearchSubmit}
                className="absolute right-0 top-full mt-2 w-64 bg-white rounded-lg p-2 shadow-lg border border-border-earth/25 z-50 flex items-center gap-2"
              >
                <input
                  id="search-input"
                  type="text"
                  placeholder="Gõ tìm đậu phộng, xoài..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-stone-50 border rounded-md px-2 py-1.5 text-xs text-earth-dark focus:outline-hidden focus:ring-1 focus:ring-primary"
                  autoFocus
                />
                <button type="submit" className="p-1 px-2.5 bg-primary text-white rounded text-[10px] font-bold">Tìm</button>
              </form>
            )}
          </div>

          {/* User Profile avatar placeholder */}
          <button
            id="user-profile-btn"
            onClick={() => alert("Hệ thống thành viên cá nhân sẽ được ra mắt ở chu trình nâng cấp tới.")}
            className="p-2.5 rounded-full hover:bg-stone-100 text-earth-dark transition-colors"
          >
            <User className="h-4.5 w-4.5" />
          </button>

          {/* Cart Icon trigger */}
          <button
            id="cart-trigger-btn"
            onClick={onCartClick}
            className="p-2.5 rounded-full bg-stone-50 hover:bg-stone-100 text-earth-dark transition-all relative flex items-center justify-center border border-border-earth/10"
            aria-label="Toggle shopping cart"
          >
            <ShoppingCart className="h-4.5 w-4.5 text-earth-dark" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-secondary text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center animate-bounce shadow-xs">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-earth-dark hover:bg-stone-50 rounded"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

      </div>

      {/* MOBILE DRAWER NAV */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-white px-6 py-4 space-y-3 absolute top-full left-0 right-0 shadow-lg z-30 flex flex-col font-bold text-xs text-earth-dark border-border-earth/10">
          <a href="#" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b">Trang chủ</a>
          <a href="#best-sellers" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b">Cửa hàng hạt bán lẻ</a>
          <a href="#wholesale-b2b" onClick={() => { setMobileMenuOpen(false); onNavigateToB2B(); }} className="py-2 border-b text-primary flex items-center gap-1">
            Chính Sách Sỉ HORECA <span className="bg-primary/10 text-primary text-4xs px-1.5 py-0.5 rounded-full">New</span>
          </a>
          <a href="#promo-section" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b">Đăng ký Flash Sale</a>
          <a href="#footer-contact" onClick={() => setMobileMenuOpen(false)} className="py-2">Hỗ trợ liên hệ</a>
          <button
            id="mobile-b2b-nav-cta"
            onClick={() => { setMobileMenuOpen(false); onNavigateToB2B(); }}
            className="w-full bg-primary text-white text-xs font-black py-3 rounded-lg flex items-center justify-center gap-1.5 shadow-sm uppercase mt-4"
          >
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Yêu cầu báo giá sỉ sảnh tiệc
          </button>
        </div>
      )}
    </header>
  );
}
