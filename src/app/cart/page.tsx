"use client";

import Link from "next/link";
import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import { CartItem } from "@/components/cart/cart-item";
import { CartSummary } from "@/components/cart/cart-summary";
import { ShoppingCart } from "lucide-react";

export default function CartPage() {
  const { state } = useCart();

  if (state.items.length === 0) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <ShoppingCart className="mx-auto h-16 w-16 text-muted-foreground" />
        <h1 className="mt-4 text-3xl font-bold font-headline">
          Your Cart is Empty
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Looks like you haven't added anything to your cart yet.
        </p>
        <Button asChild className="mt-6">
          <Link href="/">Start Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold font-headline mb-8">Shopping Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="space-y-6">
            {state.items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div>
          <CartSummary />
        </div>
      </div>
    </div>
  );
}
