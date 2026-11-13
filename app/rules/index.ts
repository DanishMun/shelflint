import type { Rule } from "./types"

import {
  missingSeoTitle,
  missingDescription,
  shortDescription,
  missingSeoDescription,
  missingProductType,
  missingVendor,
  titleTooShort,
  titleTooLong,
  seoTitleTooLong,
  seoDescriptionTooLong,
} from "./catalogRules"
 /*[] here this means a list of Rule. and these are all store in a variable allRules.
 for (const rule of allRules) {
  if (rule.check(product)) {
    // this product has this problem
  }
That reads: "go through the list one rule at a time. Run its check on the product.
 If it returns true, the product has that problem."*/
 
export const allRules: Rule[] = [
  missingDescription,
  shortDescription,
  missingSeoTitle,
  missingSeoDescription,
  missingProductType,
  missingVendor,
  titleTooShort,
  titleTooLong,
  seoTitleTooLong,
  seoDescriptionTooLong,
]