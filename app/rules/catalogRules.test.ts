import { describe, it, expect } from "vitest"
import type { ProductInput } from "./types"
import { allRules } from "./index"
import {
  missingDescription,
  shortDescription,
  missingSeoTitle,
  missingSeoDescription,
  missingProductType,
  titleTooShort,
  titleTooLong,
  seoTitleTooLong,
  seoDescriptionTooLong,
  missingVendor
} from "./catalogRules"

const goodProduct: ProductInput = {
  title: "Lavender soy candle",
  description: "Hand-poured soy candle with real lavender oil. Burns for 40 hours.",
  seoTitle: "Lavender Soy Candle",
  seoDescription: "Hand-poured lavender candle, 40 hour burn.",
  productType: "Candle",
  vendor: "Maria's Candles",
}

describe("all rules together", () => {
  it("find no problems on a perfect product", () => {
    const problems = allRules.filter((rule) => rule.check(goodProduct))
    expect(problems).toEqual([])
  })
})

describe("missingVendor", () => {
    it("finds the problem when vendor is null", () => {
        expect(missingVendor.check({...goodProduct, vendor : null})).toBe(true)
    })
    it("finds the problem when vendor is empty", () => {
        expect(missingVendor.check({...goodProduct, vendor : ""})).toBe(true)
    })
     it("finds no problem when vendor exists", () => {
        expect(missingVendor.check(goodProduct)).toBe(false)
    })
} )

describe("missingDescription", () => {
  it("finds the problem when description is null", () => {
    expect(missingDescription.check({ ...goodProduct, description: null })).toBe(true)
  })

  it("finds the problem when description is empty", () => {
    expect(missingDescription.check({ ...goodProduct, description: "" })).toBe(true)
  })

  it("finds no problem when description exists", () => {
    expect(missingDescription.check(goodProduct)).toBe(false)
  })
})

describe("shortDescription", () => {
  it("finds the problem when description is null", () => {
    expect(shortDescription.check({ ...goodProduct, description: null })).toBe(true)
  })

  it("finds the problem at 49 characters", () => {
    expect(shortDescription.check({ ...goodProduct, description: "a".repeat(49) })).toBe(true)
  })

  it("finds no problem at exactly 50 characters", () => {
    expect(shortDescription.check({ ...goodProduct, description: "a".repeat(50) })).toBe(false)
  })
})

describe("missingSeoTitle", () => {
  it("finds the problem when SEO title is null", () => {
    expect(missingSeoTitle.check({ ...goodProduct, seoTitle: null })).toBe(true)
  })

  it("finds no problem when SEO title exists", () => {
    expect(missingSeoTitle.check(goodProduct)).toBe(false)
  })
})

describe("missingSeoDescription", () => {
  it("finds the problem when SEO description is null", () => {
    expect(missingSeoDescription.check({ ...goodProduct, seoDescription: null })).toBe(true)
  })

  it("finds no problem when SEO description exists", () => {
    expect(missingSeoDescription.check(goodProduct)).toBe(false)
  })
})

describe("missingProductType", () => {
  it("finds the problem when product type is empty", () => {
    expect(missingProductType.check({ ...goodProduct, productType: "" })).toBe(true)
  })

  it("finds no problem when product type exists", () => {
    expect(missingProductType.check(goodProduct)).toBe(false)
  })
})

describe("titleTooShort", () => {
  it("finds the problem at 9 characters", () => {
    expect(titleTooShort.check({ ...goodProduct, title: "a".repeat(9) })).toBe(true)
  })

  it("finds no problem at exactly 10 characters", () => {
    expect(titleTooShort.check({ ...goodProduct, title: "a".repeat(10) })).toBe(false)
  })
})

describe("titleTooLong", () => {
  it("finds the problem at 71 characters", () => {
    expect(titleTooLong.check({ ...goodProduct, title: "a".repeat(71) })).toBe(true)
  })

  it("finds no problem at exactly 70 characters", () => {
    expect(titleTooLong.check({ ...goodProduct, title: "a".repeat(70) })).toBe(false)
  })
})

describe("seoTitleTooLong", () => {
  it("finds the problem at 61 characters", () => {
    expect(seoTitleTooLong.check({ ...goodProduct, seoTitle: "a".repeat(61) })).toBe(true)
  })

  it("does not crash when SEO title is null", () => {
    expect(seoTitleTooLong.check({ ...goodProduct, seoTitle: null })).toBe(false)
  })
})

describe("seoDescriptionTooLong", () => {
  it("finds the problem at 161 characters", () => {
    expect(seoDescriptionTooLong.check({ ...goodProduct, seoDescription: "a".repeat(161) })).toBe(true)
  })

  it("does not crash when SEO description is null", () => {
    expect(seoDescriptionTooLong.check({ ...goodProduct, seoDescription: null })).toBe(false)
  })
})

// YOUR TURN: write the missingVendor tests here