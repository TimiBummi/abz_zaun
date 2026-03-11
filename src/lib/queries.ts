import { sanityClient } from './sanity';

// Product Categories
export async function getProductCategories() {
  return sanityClient.fetch(`*[_type == "productCategory"] | order(order asc) {
    _id, title, slug, description, shortDescription, image, icon, order
  }`);
}

export async function getProductCategory(slug: string) {
  return sanityClient.fetch(`*[_type == "productCategory" && slug.current == $slug][0] {
    _id, title, slug, description, shortDescription, image, icon, seoTitle, seoDescription,
    "products": *[_type == "product" && references(^._id)] | order(order asc) {
      _id, title, slug, description, features, images, specifications, order
    },
    "faqs": *[_type == "faq" && category == ^.title] | order(order asc) {
      _id, question, answer
    }
  }`, { slug });
}

// References
export async function getReferences() {
  return sanityClient.fetch(`*[_type == "reference"] | order(completedAt desc) {
    _id, title, slug, description, location, category, beforeImage, afterImage, galleryImages, completedAt, featured
  }`);
}

export async function getFeaturedReferences(limit = 3) {
  return sanityClient.fetch(`*[_type == "reference" && featured == true] | order(completedAt desc)[0...$limit] {
    _id, title, slug, description, location, category, afterImage, completedAt
  }`, { limit });
}

// FAQs
export async function getFAQs() {
  return sanityClient.fetch(`*[_type == "faq"] | order(order asc) {
    _id, question, answer, category
  }`);
}

// Testimonials
export async function getTestimonials() {
  return sanityClient.fetch(`*[_type == "testimonial"] {
    _id, name, location, quote, image, rating
  }`);
}

// Site Settings
export async function getSiteSettings() {
  return sanityClient.fetch(`*[_type == "siteSettings"][0]`);
}

// Pages
export async function getPage(slug: string) {
  return sanityClient.fetch(`*[_type == "page" && slug.current == $slug][0] {
    _id, title, content, seoTitle, seoDescription
  }`, { slug });
}

// Get all category slugs for static generation
export async function getAllCategorySlugs() {
  return sanityClient.fetch(`*[_type == "productCategory"].slug.current`);
}
