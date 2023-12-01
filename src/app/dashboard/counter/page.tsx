import { CartCounter } from "@/shopping-cart/components";

export default function CounterPage() {
  return (
    <div>
      <h1 className="text-2xl mb-6">Productos en el carrito</h1>
      <CartCounter />
    </div>
  );
}
