
type props = {
    score : number;
    productCount: number;
}
export default function ScoreCard({score, productCount} : props) {
return(

    <s-section heading="ScoreCard">
      <s-paragraph>Catalog score {score}/100 and {productCount} prodcuts checked</s-paragraph>
    </s-section>
)
}