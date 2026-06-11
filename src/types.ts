export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  tag?: string;
  volumeUnits?: string;
  isPromo?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type BusinessType = 
  | "Wholesaler" 
  | "HORECA (Hotel/Restaurant/Café)" 
  | "Snack Distributor" 
  | "Organic Food Shop" 
  | "Supermarket Procurement" 
  | "Export / Import Partner"
  | "Private Label / OEM";

export interface WholesalerQuoteRequest {
  name: string;
  email: string;
  company: string;
  phone: string;
  businessType: BusinessType;
  targetProducts: string[];
  targetVolumeKg: number;
  preferredPackaging: string;
  specificRequirements: string;
  customQuery: string;
}

export interface WholesalerQuoteResponse {
  proposal: string;
  discountDimension: string;
  estimatedPrice: string;
}

export interface Testimonial {
  name: string;
  role: string;
  location: string;
  avatar: string;
  quote: string;
}
