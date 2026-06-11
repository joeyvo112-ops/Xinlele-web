import { MailCheck, Percent } from "lucide-react";
import React, { useState, FormEvent } from "react";

export default function NewsletterBanner() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim().length > 0) {
      alert(`Xin chúc mừng! Ưu đãi 30% cho hóa đơn đầu tiên đã được liên kết với email: "${email}". Mã voucher đã được gửi.`);
      setEmail("");
    }
  };

  return (
    <div className="bg-primary py-12 px-6 border-t border-b border-secondary/20 relative overflow-hidden select-none">
      
      {/* Abstract vector ripples */}
      <div className="absolute inset-0 opacity-10 flex justify-center items-center pointer-events-none">
        <div className="w-[1000px] h-[1000px] border-[50px] border-white rounded-full animate-pulse" />
      </div>

      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left Side title */}
        <div className="text-center lg:text-left space-y-1 md:max-w-xl">
          <div className="flex items-center justify-center lg:justify-start gap-1">
            <span className="text-stone-900 text-3xs font-black uppercase tracking-widest bg-stone-900/10 px-2.5 py-0.5 rounded-full select-none">
              ƯU ĐÃI ĐĂNG KÝ MỚI
            </span>
          </div>
          <h3 className="font-display font-black text-2xl md:text-3xl text-stone-950 uppercase tracking-tight leading-tight mt-1">
            GIẢM GIÁ 30% ĐƠN HÀNG ĐẦU TIÊN
          </h3>
        </div>

        {/* Right Side Input signup form */}
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-lg"
        >
          <div className="relative w-full flex-1">
            <input
              id="newsletter-promo-input"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Nhập địa chỉ email của bạn..."
              className="w-full bg-white text-stone-900 rounded-full px-5 py-3.5 pr-12 text-2xs font-semibold focus:outline-hidden focus:ring-2 focus:ring-stone-900 shadow-md border-0 placeholder:text-stone-400"
            />
          </div>
          <button
            id="newsletter-promo-submit"
            type="submit"
            className="w-full sm:w-auto bg-stone-900 hover:bg-black text-white font-extrabold px-8 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer text-center-wrap shrink-0 flex items-center justify-center gap-1.5 active:scale-98"
          >
            ĐĂNG KÝ
          </button>
        </form>

      </div>

    </div>
  );
}
