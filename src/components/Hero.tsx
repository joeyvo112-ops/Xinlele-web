import { ArrowRight, Leaf, Sparkles, PhoneCall } from "lucide-react";

interface HeroProps {
  onScrollToRetail: () => void;
  onScrollToFreeSamples: () => void;
}

export default function Hero({ onScrollToRetail, onScrollToFreeSamples }: HeroProps) {
  return (
    <section className="relative min-h-[640px] md:min-h-[720px] bg-stone-950 flex items-center justify-center overflow-hidden py-24 px-6 md:px-12">
      
      {/* Background Image of rustic peanuts and wooden elements resembling the reference mockup */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/regenerated_image_1780844310090.png"
          alt="Đậu phộng sấy thô hữu cơ"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transform scale-102 filter brightness-[1.15] contrast-[1.1] saturate-[1.15]"
        />
        {/* Precise overlay gradient to create shadow on the left-hand text for 100% legibility while highlighting the middle-right nuts */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/85 via-stone-950/25 to-stone-950/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
      </div>

      {/* Floating badge for trust */}
      <div className="absolute top-8 left-8 hidden lg:flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/15 text-white z-10 select-none">
        <Leaf className="h-4 w-4 text-accent animate-pulse" />
        <span className="text-4xs font-bold uppercase tracking-widest">Nông Trại Đạt Chuẩn Organic USDA</span>
      </div>

      {/* Hero content container without the redundant dark card border - direct high rendering */}
      <div className="max-w-7xl mx-auto relative z-10 w-full text-center md:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 flex flex-col space-y-5 md:space-y-6">
            
            {/* Small uppercase eyebrow text tag positioned exactly */}
            <div className="flex items-center justify-center md:justify-start gap-1.5">
              <span className="text-accent text-xs font-black uppercase tracking-widest">
                GIAO TẬN TAY NGƯỜI DÙNG
              </span>
              <span className="h-0.5 w-8 bg-accent rounded-full hidden md:inline-block" />
            </div>

            {/* Display headline matching Image 2 precisely: "ĐẬU PHỘNG GIÒN BÙI, TRỌN VẸN NIỀM VUI" */}
            <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6.5xl text-white tracking-tight leading-[1.1] uppercase max-w-3xl drop-shadow-md">
              ĐẬU PHỘNG <span className="text-accent">GIÒN BÙI</span>,<br />
              TRỌN VẸN NIỀM VUI
            </h2>

            {/* Subheading excerpt matching page 2 text exactly */}
            <p className="font-sans text-stone-100 text-sm md:text-md leading-relaxed max-w-2xl font-normal drop-shadow-sm">
              Đậu phộng nguyên vỏ vị hồ đào, đậu phộng ngũ vị, mì kiều mạch, kẹo xí muội - hàng nông sản nội địa Trung Quốc từ vùng An Huy, Thượng Hải
            </p>

            {/* CTA Controls Block */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4 shrink-0">
              {/* Solid Yellow Pill Button 'MUA NGAY' representing layout 2 */}
              <button
                id="hero-buy-now-btn"
                onClick={onScrollToRetail}
                className="w-full sm:w-auto px-10 py-4 bg-accent hover:bg-accent-hover text-earth-dark font-black text-xs rounded-full uppercase tracking-widest transition-all duration-300 transform hover:scale-105 active:scale-97 shadow-lg cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap font-display font-extrabold"
              >
                MUA NGAY <ArrowRight className="h-4.5 w-4.5 text-earth-dark stroke-[3]" />
              </button>

              {/* Outline Pillow Button 'NHẬN MẪU THỬ MIỄN PHÍ' representing layout 2 */}
              <button
                id="hero-info-btn"
                onClick={onScrollToFreeSamples}
                className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/10 text-white font-bold text-xs rounded-full uppercase tracking-wider transition-all duration-300 border-2 border-white/60 hover:border-white cursor-pointer flex items-center justify-center gap-2"
              >
                NHẬN MẪU THỬ MIỄN PHÍ CHO NHÀ BÁN SỈ, QUÁN ĂN, NHÀ HÀNG
              </button>
            </div>

            <div className="pt-6 hidden sm:flex items-center gap-6 justify-center md:justify-start divide-x divide-white/10">
              <div className="flex items-center gap-2 text-stone-300">
                <span className="text-accent font-bold text-sm">100k+</span>
                <span className="text-4xs uppercase tracking-wider text-stone-400">Khách sỉ lẻ tin dùng</span>
              </div>
              <div className="flex items-center gap-2 text-stone-300 pl-6">
                <span className="text-accent font-bold text-sm">ISO 22000</span>
                <span className="text-4xs uppercase tracking-wider text-stone-400">Tiêu chuẩn An toàn Thực phẩm</span>
              </div>
            </div>

          </div>

          {/* Right side element to balance the screen layout */}
          <div className="lg:col-span-4 hidden lg:flex justify-end relative">
            <div className="bg-gradient-to-br from-stone-900/40 to-stone-950/60 text-white p-6 rounded-2xl border border-white/10 shadow-2xl max-w-sm space-y-4 text-left relative overflow-hidden backdrop-blur-md">
              <div className="absolute right-0 top-0 opacity-10 translate-x-4 -translate-y-4">
                <Sparkles className="w-24 h-24 text-accent" />
              </div>
              <div className="flex items-center gap-2 pb-2 border-b border-white/10">
                <div className="p-2 bg-primary text-white rounded-lg">
                  <Leaf className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-xs">Phục Vụ Sự Kiện</h4>
                  <p className="text-4xs text-stone-300">Khối Khách sạn & Cafeteria</p>
                </div>
              </div>
              <p className="text-xs text-stone-200 leading-relaxed font-light">
                "Chúng tôi tư vấn loại bao bì, nhãn hiệu logo riêng và định lượng sấy mộc riêng cho đĩa đồ ăn nhẹ tặng thêm đón khách sảnh lớn."
              </p>
              <div className="text-accent text-xs font-bold leading-none flex items-center gap-1 bg-white/5 p-2.5 rounded-lg border border-white/10">
                <PhoneCall className="h-3.5 w-3.5 text-accent animate-bounce" />
                <span>Hợp tác sỉ: 091.229.448</span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
