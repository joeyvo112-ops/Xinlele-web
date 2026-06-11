import { Share2, Globe, Mail, ArrowRight, Compass, ShieldCheck } from "lucide-react";
import React, { useState, FormEvent } from "react";

export default function Footer() {
  const [newsEmail, setNewsEmail] = useState("");

  const handleSubscribeMail = (e: FormEvent) => {
    e.preventDefault();
    if (newsEmail.trim().length > 0) {
      alert(`Email "${newsEmail}" đã được liệt kê vào danh bạ ưu đãi sỉ đầu mùa thành công!`);
      setNewsEmail("");
    }
  };

  return (
    <footer id="footer-contact" className="bg-earth-dark text-stone-300 py-16 border-t border-accent/15 select-none">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 border-b border-white/5 pb-12 mb-12">
          
           {/* Logo & Bio column */}
          <div className="lg:col-span-4 space-y-5 text-left">
            <div className="flex items-center gap-3">
              <div className="flex items-center bg-[#FCEA10] px-4 py-1.5 rounded-lg border border-yellow-400/55 shadow-xs select-none">
                <span className="text-[#009E49] font-brand font-black text-2xl tracking-wider select-none leading-none scale-y-105">
                  XINLELE
                </span>
              </div>
              <div className="flex flex-col">
                <h3 className="font-sans text-[10px] text-[#10B981] font-black tracking-widest uppercase leading-none">Nông Sản Sạch</h3>
                <span className="font-sans text-[8px] text-stone-400 font-bold leading-none mt-1">TIÊU CHUẨN CAO CẤP</span>
              </div>
            </div>
            
            <p className="text-xs text-stone-400 font-sans leading-relaxed">
              Chúng tôi cam kết mang đến những sản phẩm nông sản sạch, thơm giòn đậm vị, tuyệt đối an toàn cho sức khỏe cộng đồng từ các nông trại canh tác theo định hướng thông minh bản sắc.
            </p>

            <div className="flex items-center gap-2.5">
              <button onClick={() => alert("Website: m.xinlele.media")} className="p-2 border border-white/10 rounded-full hover:bg-stone-800 transition-colors cursor-pointer text-stone-400 hover:text-white" title="Trang chủ hạt">
                <Globe className="h-4 w-4" />
              </button>
              <button onClick={() => alert("Đường link chia sẻ thông số sỉ lẻ")} className="p-2 border border-white/10 rounded-full hover:bg-stone-800 transition-colors cursor-pointer text-stone-400 hover:text-white" title="Chia sẻ">
                <Share2 className="h-4 w-4" />
              </button>
              <button onClick={() => alert("Gửi thư hợp tác: contact@xinlele.media")} className="p-2 border border-white/10 rounded-full hover:bg-stone-800 transition-colors cursor-pointer text-stone-400 hover:text-white" title="Gửi thư hỗ trợ">
                <Mail className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* SẢN PHẨM Category column */}
          <div className="lg:col-span-3 text-left space-y-4">
            <h4 className="font-display font-extrabold text-xs text-primary uppercase tracking-wider">
              SẢN PHẨM
            </h4>
            <ul className="space-y-2 text-xs text-stone-450 font-medium">
              <li><a href="#best-sellers" className="hover:text-white transition-colors">Đậu phộng nguyên vị &amp; ngũ vị</a></li>
              <li><a href="#best-sellers" className="hover:text-white transition-colors">Hạt giống rau củ quả dại</a></li>
              <li><a href="#best-sellers" className="hover:text-white transition-colors">Kẹo mứt xi muội mặn ngọt</a></li>
              <li><a href="#best-sellers" className="hover:text-white transition-colors">Mì kiều mạch sấy lạnh nguyên cám</a></li>
            </ul>
          </div>

          {/* DANH MỤC Links column */}
          <div className="lg:col-span-2 text-left space-y-4">
            <h4 className="font-display font-extrabold text-xs text-primary uppercase tracking-wider">
              DANH MỤC
            </h4>
            <ul className="space-y-2 text-xs text-accent font-bold">
              <li><a href="#" className="hover:text-white transition-colors block">Trang chủ</a></li>
              <li><a href="#best-sellers" className="hover:text-white transition-colors block text-stone-400 font-medium">Giới thiệu</a></li>
              <li><a href="#best-sellers" className="hover:text-white transition-colors block text-stone-400 font-medium">Cửa hàng hạt</a></li>
              <li><a href="#footer-contact" className="hover:text-white transition-colors block text-stone-400 font-medium">Điện thư liên hệ</a></li>
            </ul>
          </div>

          {/* ĐĂNG KÝ Newsletter column */}
          <div className="lg:col-span-3 text-left space-y-4">
            <h4 className="font-display font-extrabold text-xs text-primary uppercase tracking-wider">
              ĐĂNG KÝ NHẬN THÔNG BÁO
            </h4>
            <p className="text-xs text-stone-450 leading-relaxed">
              Nhận thông tin báo giá nông sản đầu vụ, ưu đãi sỉ độc quyền và các tài liệu kỹ thuật đóng gói hữu ích khác.
            </p>
            
            <form onSubmit={handleSubscribeMail} className="flex items-center bg-stone-900 border border-white/10 rounded-lg p-1">
              <input
                id="footer-email-input"
                type="email"
                required
                value={newsEmail}
                onChange={(e) => setNewsEmail(e.target.value)}
                placeholder="Email của bạn..."
                className="w-full bg-transparent px-2.5 py-1.5 text-xs text-stone-200 outline-hidden border-none"
              />
              <button
                id="footer-email-submit"
                type="submit"
                className="bg-primary hover:bg-primary-light text-white p-2.5 rounded-md cursor-pointer transition-colors"
                aria-label="Submit subscriber email"
              >
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom copyright details */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-stone-500 font-semibold border-t border-white/5 pt-4">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            <span>© Bản quyền thuộc về Xinlele. Thiết kế website thương mại điện tử Xinlele Media.</span>
          </div>
          <div className="flex items-center gap-4 text-stone-400 font-bold">
            <a href="#wholesale-b2b" className="hover:underline">Báo Giá Sỉ B2B</a>
            <a href="#best-sellers" className="hover:underline">Chính Sách Gói Thử</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
