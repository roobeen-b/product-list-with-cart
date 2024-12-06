import { CartProvider } from "./context/cartProvider";
import HomePage from "./Home";

function App() {
  return (
    <>
      <CartProvider>
        <HomePage />
      </CartProvider>
    </>
  );
}

export default App;
