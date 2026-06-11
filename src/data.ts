import { Product, Testimonial } from "./types";

export const CATEGORIES = [
  { id: "peanuts", label: "Đậu phộng nguyên vỏ vị hồ đào", icon: "Nut" },
  { id: "seeds", label: "Đậu phộng rang ngũ vị", icon: "Sprout" },
  { id: "candy", label: "Kẹo xí muội tí hon cay the", icon: "Candy" },
  { id: "noodles", label: "Mì kiều mạch", icon: "Soup" }
];

export const BEST_SELLERS: Product[] = [
  {
    id: "peanuts-pecan",
    name: "Đậu phộng nguyên vỏ vị hồ đào",
    description: "Hạt đậu phộng chắc mẩy kết hợp hương vị hạt hồ đào giòn ngọt tự nhiên.",
    category: "Đậu phộng",
    price: 55000,
    originalPrice: 61000,
    image: "/src/assets/images/regenerated_image_1780848582703.png",
    tag: "-10%",
    volumeUnits: "Gói 250g"
  },
  {
    id: "peanuts-five-spice",
    name: "Đậu phộng ngũ vị",
    description: "Đậu phộng sấy thảo mộc thơm nồng gia vị truyền thống, giòn tan nồng ấm.",
    category: "Đậu phộng",
    price: 125000,
    image: "/src/assets/images/regenerated_image_1781072710522.png",
    volumeUnits: "Hộp 500g"
  },
  {
    id: "candy-plum",
    name: "Kẹo xí muội cay the tí hon",
    description: "Vị chua ngọt thanh mát hòa quyện vị ớt the nhè nhẹ đánh thức mọi vị giác.",
    category: "Kẹo mứt",
    price: 85000,
    image: "/src/assets/images/regenerated_image_1781072704289.png",
    volumeUnits: "Gói 150g"
  },
  {
    id: "noodles-buckwheat",
    name: "Mì kiều mạch nguyên cám",
    description: "Sợi mì chế biến từ hạt kiều mạch dồi dào dinh dưỡng, hỗ trợ ăn kiêng lành mạnh.",
    category: "Mì kiều mạch",
    price: 145000,
    image: "/src/assets/images/regenerated_image_1781072707583.png",
    volumeUnits: "Hộp 400g"
  }
];

export const PROMO_PRODUCTS: Product[] = [
  {
    id: "promo-mango",
    name: "Xoài cát hữu cơ",
    description: "Xoài cát chín cành xơ cực mỏng, vị ngọt lịm đặc trưng của vùng đồng bằng châu thổ sông Cửu Long.",
    category: "Trái cây",
    price: 140000,
    originalPrice: 180000,
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=600",
    tag: "SẮP HẾT HÀNG!",
    isPromo: true
  },
  {
    id: "promo-avocado",
    name: "Bơ sáp loại 1",
    description: "Bơ sáp Daklak dẻo quánh, vỏ mỏng da căng, béo ngậy tự nhiên cam kết không sượng sần.",
    category: "Trái cây",
    price: 135000,
    originalPrice: 165000,
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&q=80&w=600",
    tag: "CHỈ CÒN 5 KG!",
    isPromo: true
  },
  {
    id: "promo-chicken",
    name: "Gà ta thả vườn",
    description: "Thịt gà ta thuần chủng thả đồi ăn hạt tự nhiên, thịt săn chắc dẻo dai bùi béo bổ dưỡng.",
    category: "Thịt hữu cơ",
    price: 195000,
    originalPrice: 245000,
    image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&q=80&w=600",
    isPromo: true
  },
  {
    id: "promo-orange",
    name: "Cam xoàn organic",
    description: "Mẫu cam đường da xanh ngọt lịm mọng nước, giàu chất xơ dồi dào Vitamin C bảo vệ đề kháng.",
    category: "Trái cây",
    price: 65000,
    originalPrice: 85000,
    image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&q=80&w=600",
    isPromo: true
  }
];

export const TESTIMONIAL: Testimonial = {
  name: "Anh Hoàng Quân",
  role: "Khách hàng thân thiết",
  location: "Hà Nội",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
  quote: "Tôi đã tìm kiếm một nguồn thực phẩm hữu cơ tin cậy từ lâu và Xinlele thực sự làm tôi hài lòng. Chất lượng các loại hạt và mì kiều mạch rất tuyệt vời, hương vị tự nhiên và đóng gói vô cùng tinh tế."
};

export const PACKAGING_OPTIONS = [
  { id: "kraft", label: "Túi giấy Kraft khóa Zipper thân thiện môi trường", desc: "Thích hợp cho kênh bán lẻ cao cấp, in ấn logo sắc nét xanh mát." },
  { id: "pouch-50g", label: "Gói bạc Mini portion-control 50g cho resort/khách sạn", desc: "Chia khẩu phần phù hợp đĩa tiếp khách VIP tại sảnh/bar." },
  { id: "glass", label: "Hũ thủy tinh Borosilicate nắp bần chống ẩm", desc: "Thể hiện độ sang trọng bậc nhất, bảo quản giữ nguyên độ giòn hoàn hảo." },
  { id: "bulk-tin", label: "Thùng thiếc Vacuum sấy khí Nito cho nhà phân phối", desc: "Trọng lượng 5-10kg tiện lợi chiết tách phân phối sỉ hoặc chế biến sâu." },
  { id: "jute", label: "Bao đay thô lót nilon thực phẩm cho HORECA sỉ", desc: "Tối ưu hóa thể tích đóng gói cồng kềnh, giảm 40% giá thành bao bì." }
];

export const BUSINESS_TYPES = [
  "Wholesaler / Đại lý sỉ lớn",
  "HORECA (Khách sạn / Nhà hàng / Café)",
  "Snack Distributor / Nhà phân phối đồ ăn vặt",
  "Organic Retailer / Chuỗi thực phẩm sạch",
  "Supermarket Group / Chuỗi siêu thị",
  "Export Partner / Đối tác xuất khẩu quốc tế",
  "Private Label Builder / OEM gia công thương hiệu riêng"
];
