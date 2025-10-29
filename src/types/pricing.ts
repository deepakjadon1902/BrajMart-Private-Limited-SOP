export interface PricingService {
  id: string;
  category: string;
  serviceCategory?: string;
  projectType: string;
  clientRateINR: string;
  clientRateUSD: string;
  costToCompany: string;
  profitMargin: string;
  timeline: string;
  buffer: string;
  isCategoryHeader?: boolean;
  isSubcategory?: boolean;
  price?: number;
}

export interface FilterState {
  search: string;
  category: string;
  priceRange: string;
}
