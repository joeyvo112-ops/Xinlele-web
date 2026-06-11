import express from "express";
import path from "path";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini client lazily
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      console.warn("WARNING: GEMINI_API_KEY is not defined. AI Bulk Quotes will run in simulation mode.");
    }
    aiClient = new GoogleGenAI({
      apiKey: key || "SIMULATED_KEY",
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

// API endpoint for HORECA & Wholesaler Bulk Quote calculation and consultation
app.post("/api/bulk-quote-ai", async (req, res) => {
  const {
    name,
    email,
    company,
    phone,
    businessType,
    address = "",
    targetProducts = [],
    targetVolumeKg,
    preferredPackaging,
    specificRequirements = "",
    customQuery = ""
  } = req.body;

  if (!email || !name || !businessType) {
    return res.status(400).json({ error: "Missing required fields (email, name, businessType)" });
  }

  // Define pricing benchmarks based on volume
  const volumeGroup = Number(targetVolumeKg) || 100;
  let discountTier = "5%";
  let estPricePerKg = "95,000 đ";
  if (volumeGroup >= 2000) {
    discountTier = "25%";
    estPricePerKg = "75,000 đ";
  } else if (volumeGroup >= 1000) {
    discountTier = "20%";
    estPricePerKg = "80,000 đ";
  } else if (volumeGroup >= 500) {
    discountTier = "15%";
    estPricePerKg = "85,000 đ";
  } else if (volumeGroup >= 250) {
    discountTier = "10%";
    estPricePerKg = "90,000 đ";
  }

  const promptText = `
  You are the Chief Sales Officer and Wholesale Coordinator for 'Xinlele Organic Snacks' (Xín Lề Lề) - a premium Vietnamese agricultural snack enterprise famous for crispy roasted peanuts, traditional seeds, organic noodles, and snack treats.
  
  A potential B2B partner has submitted a request for a bulk wholesale quote and packaging customization through our automated lander.
  
  Partner Profile:
  - Name: ${name}
  - Email: ${email}
  - Company/Brand: ${company || "Not provided (Independent client)"}
  - Phone: ${phone || "Not provided"}
  - Business Channel: ${businessType} (e.g., HORECA, Distributor, Wholesaler, Cafe/Hotel Chain, Organic Retailer, Export Partner)
  - Shipping Address for Samples: ${address || "Not provided"}
  - Target Products of Interest: ${targetProducts.length > 0 ? targetProducts.join(", ") : "Traditional Golden Peanuts & Wheat Buckwheat Noodles"}
  - Target Monthly Volume: ${volumeGroup} kg
  - Preferred Wholesale Packaging Options: ${preferredPackaging || "Standard bulk bag / customized packing"}
  - Specific Packaging / Custom requirements: ${specificRequirements || "No special requests specified"}
  - Additional query or notes from buyer: "${customQuery || "Please provide your standard catalog and bulk discount tier details."}"

  Pricing Reference:
  - Base Retail Price Avg: ~110,000 đ per kg.
  - Est Price for this volume with ${discountTier} bulk discount: ~${estPricePerKg} / kg.
  
  Please write a highly professional, respectful, and persuasive business proposal (primarily in Vietnamese, but with clean English subtitles or key summaries for maximum international appeal) that we will show directly on the screen to convert this client.
  
  Structure your reply into clean segments:
  1. Business Greeting & Acknowledgment: Enthusiastically welcome their brand and analyze their business channel (${businessType}), highlighting how Xinlele can add high margin & premium quality to their specific setup. Address their sample shipping address: ${address}.
  2. Custom Pricing Strategy Proposal: Frame the ${discountTier} bulk rebate based on their target volume of ${volumeGroup} kg. Offer specific custom options.
  3. Tailored Packaging Recommendations: Give creative and technical suggestions for their package preferences (${preferredPackaging}) incorporating local materials. Mention our strict compliance with premium standards (ISO, USDA Organic certificate match, Non-GMO).
  4. Next Commercial Milestones (Call-To-Action): Give them a highly actionable next step like shipping free sample boxes to ${address} in 48 hours for feedback, and coordiation with a B2B Area Manager.
  
  Be warm, professional, highly detailed, numbers-driven, and sales-focused. Never output engineering or system jargon. Deliver clean Markdown.
  `;

  try {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      // Return a professional fallback in mock mode
      const simulatedResponse = `
### KÍNH GỬI ĐỐI TÁC **${company || name.toUpperCase()}**

Chào ông/bà **${name}**,

Chúng tôi vô cùng vinh hạnh nhận được yêu cầu cung cấp báo giá và tư vấn từ quý đối tác thuộc kênh **${businessType}**. Dựa trên nhu cầu phát triển của thương hiệu, **Xinlele (Xín Lề Lề)** tự tin mang đến giải pháp cung cấp nông sản sạch cao cấp tối ưu nhất.

#### 1. Đánh Giá Tiềm Năng & Giải Pháp Kênh Phân Phối
Với định vị thương hiệu nông sản chất lượng cao, các dòng sản phẩm của Xinlele (đặc biệt là dòng *Đậu phộng nguyên vị, Ngũ vị sấy giòn* và *Mì kiều mạch nguyên hạt*) hoàn toàn tương thích với mô hình phân phối của quý đối tác:
- **Kênh Phân Phối / Đối Tác:** Tối ưu hóa chuỗi cung ứng, cam kết date dài 12 tháng, giữ trọn độ ẩm tối ưu.
- **Tiêu Chuẩn Sản Phẩm:** Đạt các tiêu chuẩn Organic nghiêm ngặt, bao bì tinh tế, nâng cấp trải nghiệm của người tiêu dùng cuối.

#### 2. Đề Xuất Báo Giá & Chính Sách Chiết Khấu Ưu Đãi
Với sản lượng đăng ký dự kiến là **${volumeGroup} kg**, chúng tôi hân hạnh áp dụng chính sách **Khách Hàng Doanh Nghiệp Thân Thiết**:
- **Tỷ lệ chiết khấu B2B:** **${discountTier}** trực tiếp trên tổng giá trị đơn hàng.
- **Đơn giá ước tính sản phẩm:** dao động chỉ từ **${estPricePerKg} / kg** (Bao gồm miễn phí vận chuyển nội thành hạt tiêu chuẩn).
- **Cam kết hỗ trợ thanh toán:** Linh hoạt công nợ định kỳ hoặc ưu đãi thêm 2% nếu thanh toán trước 100%.

#### 3. Tư Vấn Quy Cách Đóng Gói (Packaging Option: **${preferredPackaging || "Tiêu Chuẩn"}**)
Dựa trên yêu cầu đóng gói: **"${preferredPackaging}"**, chúng tôi gợi ý giải pháp:
- **Nguyên liệu:** Túi Kraft tái sinh tự phân hủy thân thiện môi trường, ép nhiệt zipper chắn hơi nước tuyệt đối.
- **In ấn Private Label:** Hỗ trợ thiết kế và in đè logo của **${company || "quý đối tác"}** lên mặt trước bao bì với công nghệ mực đậu nành hữu cơ.
- **Phụ lục đặc biệt:** ${specificRequirements || "Bảo quản trong thùng carton 5 lớp chống đập, kiểm soát nhiệt độ nghiêm ngặt trong suốt quá trình trung chuyển."}

#### 4. Kế Hoạch Triển Khai & Bước Tiếp Theo
Để nhanh chóng hiện thực hóa thỏa thuận hợp tác, Xinlele đề xuất:
1. **Gửi Hộp Mẫu Thử (Sample Box) Miễn Phí:** Gửi các mẫu sản phẩm nông sản sạch chọn lọc trực tiếp tới địa chỉ **${address || "địa chỉ đã đăng ký"}** trong vòng **48h** (hoàn toàn miễn phí vận chuyển).
2. **Cuộc Gọi Kết Nối B2B:** Trực tiếp Trưởng phòng dự án Xinlele sẽ liên hệ qua SĐT **${phone}** hoặc Email **${email}** để hoàn thiện hợp đồng khung trong chiều hôm nay.

**Hân hạnh được hợp tác và phục vụ!**
*Xinlele Organic Snacks — Giản dị từ nông trại, Tinh túy tại bàn ăn.*
      `;
      return res.json({ proposal: simulatedResponse, discountTier, estPricePerKg });
    }

    const ai = getGeminiClient();
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: promptText,
    });
    
    return res.json({ 
      proposal: response.text || "Báo giá đang được tính toán, vui lòng liên hệ trực tiếp.",
      discountTier,
      estPricePerKg
    });

  } catch (error: any) {
    console.error("AI Generation Error:", error);
    return res.status(500).json({ error: "Lỗi tạo tài liệu tư vấn thương mại: " + error.message });
  }
});

// Setup Vite or static serving
async function setupViteOrStatic() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Setting up Vite Dev Server Middleware...");
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Setting up production static file serving...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }
}

setupViteOrStatic().then(() => {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(err => {
  console.error("Failed to bootstrap application server:", err);
});
