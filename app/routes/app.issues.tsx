
import ScoreCard from "app/components/ScoreCard"
import prisma from "app/db.server";
import type {
 
  LoaderFunctionArgs,
} from "react-router";
import { authenticate } from "../shopify.server";
import { useLoaderData } from "react-router";

// Only fetches 5 products for now. Full catalogue scan comes later,
// as a background job — this runs on every page load and must stay fast.

export const loader = async ({ request }: LoaderFunctionArgs) => { 
 const {admin, session}=await authenticate.admin(request);
  const shop = session.shop;
const response = await admin.graphql(
    `#graphql
     query {
  products(first: 5) {
    nodes {
      id
      title
      description
    }
    
  }
}`)

 const responseJson = await response.json();
const products = responseJson.data.products.nodes;

for (const p of products) {
  await prisma.productSnapshot.upsert({
    where: { shop_productGid: { shop, productGid: p.id } },
    update: { title : p.title,
      description: p.description,
      fetchedAt: new Date(),
    },
    create: { shop: shop,
      productGid: p.id,
      title: p.title,
      description: p.description,
      fetchedAt: new Date(),
    },
  })
}
 const saved = await prisma.productSnapshot.findMany({
  where: { shop },
  orderBy: { title: "asc" },
})

return { products: saved }
  
};




  export default function IssuesPage() {
  
      const {products} = useLoaderData<typeof loader>();
    if (products.length==0) return (
      <ErrorBoundary/>
    )
   
else 
return(<s-page heading="Issues">
    <s-section heading="product issues">
      <ScoreCard score={58} productCount={214}/>
    {products.map((productf)=> 
        <s-paragraph key={productf.id}>Product Name: {productf.title}  </s-paragraph>
    )}
    </s-section>
</s-page>)
}

export function ErrorBoundary() {
  return (
    <s-page heading="Something went wrong">
      <s-section>
        <s-paragraph>We could not load your products. Please try again.</s-paragraph>
      </s-section>
    </s-page>
  )
}
