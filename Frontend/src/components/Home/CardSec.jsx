import product1 from "../../asset/product1.png";
import Card from "./Card";

const CardSec = () => {
  // Here you need different product data for both arrivals newArrivals and Top Selling products
  const cardData = [
    {
      image: product1,
      productTitle: "Product 1",
      productRating: 5,
      productPrice: 120,
    },
    {
      image: product1,
      productTitle: "Product 2",
      productRating: 4.5,
      productPrice: 120,
    },
    {
      image: product1,
      productTitle: "Product 3",
      productRating: 3.5,
      productPrice: 120,
    },
    {
      image: product1,
      productTitle: "Product 4",
      productRating: 2,
      productPrice: 120,
    },
  ];

  return (
    <div id="card-container" className="flex items-start justify-between gap-4 lg:gap-8 min-w-max lg:max-w-lg lg:mx-auto">
      {cardData.map((ele, idx) => (
        <Card key={idx} data={ele} />
      ))}
    </div>
  );
};

export default CardSec;
