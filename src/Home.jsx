import CartItems from "./components/CartItems";
import ProductsList from "./components/ProductsList";

function HomePage() {
  return (
    <div className="flex flex-col gap-4 lg:flex-row p-2 md:p-6 lg:p-12 bg-gray-100 min-h-screen">
      <div className="lg:w-[75%]">
        <ProductsList />
      </div>
      <div className="lg:w-[25%]">
        <CartItems />
      </div>
    </div>
  );
}

export default HomePage;
