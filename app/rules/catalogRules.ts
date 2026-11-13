import { Rule } from "./types"


export const missingSeoTitle: Rule = {
  id: "missing_seo_title",
  severity: "medium",
  message: "This product has no SEO title",
  check: (product) => !product.seoTitle,
}

export const missingDescription: Rule = {
  id: "missing_description",
  severity: "high",
  message: "This product has no description",
  check: (product) => !product.description,
}

export const shortDescription: Rule = {
  id: "short_description",
  severity: "medium",
  message: "Description is shorter than 50 characters",
  check: (product) => (product.description ?? "").length < 50,
}

export const missingSeoDescription: Rule = {
  id: "missing_seo_description",
  severity: "medium",
  message: "This product has no SEO description",
  check: (product) => !product.seoDescription,
}

export const missingProductType: Rule = {
  id: "missing_product_type",
  severity: "medium",
  message: "This product has no product type",
  check: (product) => !product.productType,
}

export const missingVendor: Rule = {
  id: "missing_vendor",
  severity: "low",
  message: "This product has no vendor",
  check: (product) => !product.vendor,
}

export const titleTooShort: Rule = {
  id: "title_too_short",
  severity: "medium",
  message: "Title is shorter than 10 characters",
  check: (product) => product.title.length < 10,
}

export const titleTooLong: Rule = {
  id: "title_too_long",
  severity: "low",
  message: "Title is longer than 70 characters",
  check: (product) => product.title.length > 70,
}

export const seoTitleTooLong: Rule = {
  id: "seo_title_too_long",
  severity: "low",
  message: "SEO title is longer than 60 characters",
  check: (product) => (product.seoTitle ?? "").length > 60,
}

export const seoDescriptionTooLong: Rule = {
  id: "seo_description_too_long",
  severity: "low",
  message: "SEO description is longer than 160 characters",
  check: (product) => (product.seoDescription ?? "").length > 160,
}