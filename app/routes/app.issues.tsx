
import ScoreCard from "app/components/ScoreCard"


const issues = [
  { id: 1, product: "Wool Coat", problem: "Description too short" },
  { id: 2, product: "Linen Shirt", problem: "Image has no alt text" },
  { id: 3, product: "Denim Jacket", problem: "No SEO title" },
]



export default function IssuesPage() {
return(<s-page heading="Issues">

    <s-section heading="product issues">
      <ScoreCard score={58} productCount={214}/>
    {issues.map((issue)=> 
        <s-paragraph key={issue.id}>Product Name: {issue.product} Product Issue: {issue.problem} </s-paragraph>
    )}
    </s-section>
</s-page>)
}
