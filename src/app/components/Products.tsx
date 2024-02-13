import { initialData } from "../lib/seed-data";
import Card from "./Card";

export default function Products() {
  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-3 min-h-[600px] max-w-6xl bg-white text-black rounded-lg p-5 mt-24">
      {initialData.products.map(({ image, price, title }) => (
        <Card
          imgSrc={`/products/${image}`}
          alt="Product 1"
          price={price}
          title={title}
          key={image}
        />
      ))}
    </div>
  );
}
