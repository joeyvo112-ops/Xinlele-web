import React, { useState } from "react";
import { 
  Sparkles, 
  User, 
  Mail, 
  Phone, 
  Building, 
  MapPin, 
  Layers, 
  Loader2, 
  FileText,
  CheckCircle2,
  PhoneCall
} from "lucide-react";
import { BusinessType } from "../types";

export default function B2BSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [businessType, setBusinessType] = useState<BusinessType>("HORECA (Hotel/Restaurant/Café)");
  const [address, setAddress] = useState("");
  const [volume, setVolume] = useState<number>(500);
  const [specificRequirements, setSpecificRequirements] = useState("");
  const [customQuery, setCustomQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [proposalMarkdown, setProposalMarkdown] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const generateBulkQuoteAI = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    setProposalMarkdown("");
    try {
      const res = await fetch("/api/bulk-quote-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          company,
          businessType,
          address,
          targetVolumeKg: volume,
          preferredPackaging: "Túi giấy Kraft hoặc tùy chỉnh",
          specificRequirements,
          customQuery
        })
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Lỗi tạo báo giá");
      }
      const data = await res.json();
      setProposalMarkdown(data.proposal);
    } catch (err: any) {
      setErrorMsg(err.message || "Không thể kết nối đến hệ thống báo giá.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="wholesale-b2b" className="py-20 bg-stone-50 border-t border-border-earth/10 relative overflow-hidden">
      {/* Decorative earthy bg glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Title Section */}
        <div className="text-center relative max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-1.5 text-secondary text-xs font-bold uppercase tracking-widest bg-accent/20 px-3.5 py-1 rounded-full w-max mx-auto shadow-4xs border border-accent/45 mb-3">
            <Sparkles className="h-3.5 w-3.5 fill-secondary text-secondary" />
            <span>Kết Nối Giao Thương B2B</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-earth-dark uppercase tracking-tight">
            KHẢO SÁT SỈ &amp; NHẬN MẪU THỬ MIỄN PHÍ
          </h2>
          <p className="text-4xs md:text-3xs text-earth-muted mt-3 max-w-lg mx-auto leading-relaxed">
            Hệ thống phân tích nhu cầu Xinlele tự động đánh giá tiêu chí sản lượng và đề xuất phương án chiết khấu linh hoạt chỉ sau 10 giây.
          </p>
          <div className="h-1 bg-primary w-24 mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Box */}
        <div className="max-w-4xl mx-auto">
          
          <div className="bg-white rounded-2xl shadow-xl border border-stone-200/50 overflow-hidden grid grid-cols-1 md:grid-cols-12">
            
            {/* Left information card */}
            <div className="md:col-span-5 bg-stone-900 text-stone-100 p-8 flex flex-col justify-between relative">
              <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
                <Sparkles className="w-32 h-32 text-accent" />
              </div>
              
              <div className="space-y-6 z-10">
                <div>
                  <h3 className="font-display font-extrabold text-sm text-accent uppercase tracking-wider">Hợp Tác Phát Triển</h3>
                  <p className="text-4xs text-stone-300 mt-2 leading-relaxed">
                    Xinlele đồng hành cùng hơn 500 chuỗi nhà hàng, khách sạn và đại lý trên toàn quốc với quy trình cung ứng khép kín, bền vững.
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-stone-800">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-2xs font-bold text-stone-200">Đầy Đủ Chứng Nhận</h4>
                      <p className="text-4xs text-stone-400">Đạt chứng chỉ OCOP 5 Sao, ATVSTP và giấy tờ kiểm định định kỳ.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-2xs font-bold text-stone-200">Miễn Phí Mẫu Thử</h4>
                      <p className="text-4xs text-stone-400">Bộ mẫu thử 3 vị bán chạy nhất gửi trực tiếp tới địa chỉ của bạn trong 48h.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-2xs font-bold text-stone-200">Gia Công OEM/ODM</h4>
                      <p className="text-4xs text-stone-400">Hỗ trợ in ấn nhãn dán, thiết kế bao bì theo bộ nhận diện riêng của bạn.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-stone-800 z-10 space-y-2">
                <p className="text-4xs text-stone-400">Bạn muốn kết nối trực tiếp với Chuyên viên?</p>
                <div className="flex items-center gap-2">
                  <PhoneCall className="h-4 w-4 text-accent" />
                  <a href="tel:0901234567" className="text-2xs font-black text-white hover:text-accent transition-colors">
                    Hotline: 0901 234 567
                  </a>
                </div>
              </div>
            </div>

            {/* Right lead capture form */}
            <div className="md:col-span-7 p-6 md:p-8 bg-white">
              <form onSubmit={generateBulkQuoteAI} className="space-y-4">
                
                {/* Họ tên */}
                <div className="space-y-1 text-left">
                  <label htmlFor="b2b-name" className="flex items-center gap-1.5 text-2xs text-stone-700 font-bold">
                    <User className="w-3.5 h-3.5 text-primary" />
                    <span>Họ và Tên người đại diện *</span>
                  </label>
                  <input
                    id="b2b-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ví dụ: Nguyễn Văn A"
                    className="w-full bg-stone-50 border border-stone-200 rounded-lg p-2.5 text-stone-800 text-xs focus:outline-hidden focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                  />
                </div>

                {/* Email + Hotline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1 text-left">
                    <label htmlFor="b2b-email" className="flex items-center gap-1.5 text-2xs text-stone-700 font-bold">
                      <Mail className="w-3.5 h-3.5 text-primary" />
                      <span>Email liên hệ *</span>
                    </label>
                    <input
                      id="b2b-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="partner@company.com"
                      className="w-full bg-stone-50 border border-stone-200 rounded-lg p-2.5 text-stone-800 text-xs focus:outline-hidden focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                    />
                  </div>

                  <div className="space-y-1 text-left">
                    <label htmlFor="b2b-phone" className="flex items-center gap-1.5 text-2xs text-stone-700 font-bold">
                      <Phone className="w-3.5 h-3.5 text-primary" />
                      <span>SĐT Hotline sỉ *</span>
                    </label>
                    <input
                      id="b2b-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="09xxxxxxxx"
                      className="w-full bg-stone-50 border border-stone-200 rounded-lg p-2.5 text-stone-800 text-xs focus:outline-hidden focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                    />
                  </div>
                </div>

                {/* Công ty + Kênh phân phối */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1 text-left">
                    <label htmlFor="b2b-company" className="flex items-center gap-1.5 text-2xs text-stone-700 font-bold">
                      <Building className="w-3.5 h-3.5 text-primary" />
                      <span>Tên Công ty / Cửa hàng</span>
                    </label>
                    <input
                      id="b2b-company"
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Horeca Group, Minimart..."
                      className="w-full bg-stone-50 border border-stone-200 rounded-lg p-2.5 text-stone-800 text-xs focus:outline-hidden focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                    />
                  </div>

                  <div className="space-y-1 text-left">
                    <label htmlFor="b2b-type" className="text-2xs text-stone-700 block font-bold">Kênh đối tác *</label>
                    <select
                      id="b2b-type"
                      value={businessType}
                      onChange={(e) => setBusinessType(e.target.value as BusinessType)}
                      className="w-full bg-stone-50 border border-stone-200 rounded-lg p-2.5 text-stone-800 text-xs focus:outline-hidden focus:ring-1 focus:ring-primary focus:border-primary transition-all cursor-pointer"
                    >
                      <option value="HORECA (Hotel/Restaurant/Café)">HORECA (Khách sạn/Nhà hàng/Café)</option>
                      <option value="Wholesaler">Wholesaler / Tổng Kho Đại Lý Sỉ</option>
                      <option value="Snack Distributor">Nhà Phân Phối Đồ Ăn Vặt</option>
                      <option value="Organic Food Shop">Chuỗi Thực Phẩm Sạch / Minimart</option>
                      <option value="Supermarket Procurement">Siêu Thị / Bách Hóa</option>
                      <option value="Export / Import Partner">Xuất Khẩu Quốc Tế</option>
                      <option value="Private Label / OEM">Gia Công Nhãn Riêng (OEM)</option>
                    </select>
                  </div>
                </div>

                {/* Địa chỉ nhận mẫu thử */}
                <div className="space-y-1 text-left">
                  <label htmlFor="b2b-address" className="flex items-center gap-1.5 text-2xs text-stone-700 font-bold">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                    <span>Địa chỉ nhận mẫu thử miễn phí *</span>
                  </label>
                  <input
                    id="b2b-address"
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Số nhà, Tên đường, Phường/Xã, Quận/Huyện, Tỉnh/Thành phố..."
                    className="w-full bg-stone-50 border border-stone-200 rounded-lg p-2.5 text-stone-800 text-xs focus:outline-hidden focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                  />
                </div>

                {/* Sản lượng đặt hàng & Yêu cầu bao bì */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1 text-left">
                    <label htmlFor="b2b-volume" className="flex items-center gap-1.5 text-2xs text-stone-700 font-bold">
                      <Layers className="w-3.5 h-3.5 text-primary" />
                      <span>Sản lượng dự kiến (kg/tháng) *</span>
                    </label>
                    <input
                      id="b2b-volume"
                      type="number"
                      required
                      min="100"
                      value={volume}
                      onChange={(e) => setVolume(Math.max(100, Number(e.target.value)))}
                      className="w-full bg-stone-50 border border-stone-200 rounded-lg p-2.5 text-stone-800 text-xs focus:outline-hidden focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                    />
                  </div>

                  <div className="space-y-1 text-left">
                    <label htmlFor="b2b-packaging" className="text-2xs text-stone-700 block font-bold">Yêu cầu thương thảo / Đóng gói sỉ</label>
                    <input
                      id="b2b-packaging"
                      type="text"
                      value={specificRequirements}
                      onChange={(e) => setSpecificRequirements(e.target.value)}
                      placeholder="Ví dụ: Đóng gói 150g màng mờ mạ thiếc..."
                      className="w-full bg-stone-50 border border-stone-200 rounded-lg p-2.5 text-stone-800 text-xs focus:outline-hidden focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                    />
                  </div>
                </div>

                {/* Ghi chú thêm cho AI */}
                <div className="space-y-1 text-left">
                  <label htmlFor="b2b-query" className="text-2xs text-stone-700 block font-bold">Nhu cầu hoặc thắt mắc cần giải đáp thêm</label>
                  <textarea
                    id="b2b-query"
                    rows={2}
                    value={customQuery}
                    onChange={(e) => setCustomQuery(e.target.value)}
                    placeholder="Ví dụ: Cần gói mẫu đậu phộng sấy thảo mộc sớm nhất có thể..."
                    className="w-full bg-stone-50 border border-stone-200 rounded-lg p-2.5 text-stone-800 text-xs focus:outline-hidden focus:ring-1 focus:ring-primary focus:border-primary transition-all resize-none f-12"
                  />
                </div>

                {errorMsg && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-4xs text-red-700 font-semibold text-left">
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-accent hover:bg-amber-500 text-earth-dark font-extrabold py-3 rounded-lg text-xs flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg transition-all"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin text-earth-dark" />
                      ĐANG PHÂN TÍCH TIÊU CHÍ...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4.5 w-4.5 text-earth-dark" />
                      GỬI KHẢO SÁT &amp; NHẬN BÁO GIÁ NGAY
                    </>
                  )}
                </button>
              </form>
            </div>

          </div>

        </div>

        {/* AI Proposal Results Display Section */}
        {proposalMarkdown && (
          <div className="max-w-4xl mx-auto mt-10 bg-white rounded-2xl p-6 md:p-8 shadow-md border border-stone-200/60 transition-all duration-300">
            <div className="flex items-center gap-2.5 border-b pb-4 mb-6 border-stone-100">
              <FileText className="h-5 w-5 text-secondary animate-pulse" />
              <div>
                <h3 className="font-display font-extrabold text-xs text-earth-dark uppercase tracking-wider">Đề xuất thương mại AI Xinlele dành riêng cho quý đối tác</h3>
                <p className="text-4xs text-earth-muted">Phân tích dựa trên sản lượng và kênh liên kết phân phối thực phẩm sạch.</p>
              </div>
            </div>
            
            <div className="prose prose-stone prose-xs max-w-none text-left whitespace-pre-wrap text-2xs leading-relaxed text-stone-700 font-sans" id="ai-proposal-body">
              {proposalMarkdown}
            </div>

            <div className="mt-8 pt-6 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div>
                <p className="font-display font-bold text-2xs text-earth-dark">Mẫu sản phẩm thực tế đang sẵn sàng đóng gói!</p>
                <p className="text-4xs text-earth-muted mt-1">Một nhân viên quản lý đại diện B2B của chúng tôi sẽ gọi điện thoại hoặc gửi email xác minh trong vòng 2 giờ.</p>
              </div>
              <div className="flex items-center gap-2">
                <a href="tel:0901234567" className="px-5 py-2.5 bg-primary text-white hover:bg-primary-light font-bold text-xs rounded-lg transition-all flex items-center gap-1.5 shadow-xs">
                  Xác nhận Hotline: 0901 234 567
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
