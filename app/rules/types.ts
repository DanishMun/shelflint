export type Rule = {
  id: string
  severity: "high" | "medium" | "low"
  message: string
  check: (product: ProductInput) => boolean
}


export type ProductInput = {

    title : string;
    description : string | null;
    seoTitle: string | null;
    seoDescription :string| null;
    productType: string| null;
    vendor: string| null;
}

