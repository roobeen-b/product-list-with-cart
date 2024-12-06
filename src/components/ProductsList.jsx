import products from "../data/data.json";
import ProductItem from "./ProductItem";

const ProductsList = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Desserts</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductItem product={product} key={product.name} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
