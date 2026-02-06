export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  color: string;
  popular?: boolean;
  paymentUrl?: string;
}

export interface Client {
  name: string;
  subscribers: string;
  imageUrl: string;
  avatarUrl: string;
}

export interface ShowcaseItem {
  id: number;
  beforeUrl: string;
  afterUrl: string;
  title: string;
  client: string;
  category: string;
  size: string;
  clientAvatarUrl?: string;
  isHiddenFromHome?: boolean;
  views?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  channel: string;
  quote: string;
  avatarUrl: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}