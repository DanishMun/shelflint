
import ScoreCard from "app/components/ScoreCard"
import type {
 
  LoaderFunctionArgs,
} from "react-router";
import { authenticate } from "../shopify.server";
import { useLoaderData } from "react-router";


export const loader = async ({ request }: LoaderFunctionArgs) => {
  const {admin}=await authenticate.admin(request);
const response = await admin.graphql(
    `#graphql
     query {
  products(first: 5) {
    nodes {
      id
      title
      description
    }
      pageInfo {
  hasNextPage
  endCursor
}
  }
}`)

 const responseJson = await response.json();
  return responseJson;
};


type Product = {

    id : string;
    title : string;
    description : string;
}

export default function IssuesPage() {
    const faultyProducts = useLoaderData<typeof loader>();
    console.log(faultyProducts);
   const products:Product[] = faultyProducts.data.products.nodes;
return(<s-page heading="Issues">
    <s-section heading="product issues">
      <ScoreCard score={58} productCount={214}/>
    {products.map((productf)=> 
        <s-paragraph key={productf.id}>Product Name: {productf.title}  </s-paragraph>
    )}
    </s-section>
</s-page>)
}
