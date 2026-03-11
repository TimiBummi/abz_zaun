export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
}

export interface ProductCategory {
  _id: string;
  _type: 'productCategory';
  title: string;
  slug: { current: string };
  description: string;
  shortDescription: string;
  image: SanityImage;
  icon?: string;
  order: number;
  seoTitle?: string;
  seoDescription?: string;
}

export interface Product {
  _id: string;
  _type: 'product';
  title: string;
  slug: { current: string };
  category: { _ref: string };
  description: string;
  features: string[];
  images: SanityImage[];
  specifications?: { label: string; value: string }[];
  order: number;
}

export interface Reference {
  _id: string;
  _type: 'reference';
  title: string;
  slug: { current: string };
  description: string;
  location: string;
  category: string;
  beforeImage?: SanityImage;
  afterImage: SanityImage;
  galleryImages?: SanityImage[];
  completedAt: string;
  featured: boolean;
}

export interface FAQ {
  _id: string;
  _type: 'faq';
  question: string;
  answer: string;
  category: string;
  order: number;
}

export interface SiteSettings {
  _id: string;
  _type: 'siteSettings';
  companyName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
  openingHours: string;
  whatsappNumber: string;
  shopUrl: string;
  partnerLogos: SanityImage[];
  stats: { label: string; value: string }[];
}

export interface Testimonial {
  _id: string;
  _type: 'testimonial';
  name: string;
  location: string;
  quote: string;
  image?: SanityImage;
  rating: number;
}

// Block content type for rich text
export type BlockContent = Array<{
  _type: string;
  _key: string;
  [key: string]: unknown;
}>;

export interface Page {
  _id: string;
  _type: 'page';
  title: string;
  slug: { current: string };
  content: BlockContent;
  seoTitle?: string;
  seoDescription?: string;
}
