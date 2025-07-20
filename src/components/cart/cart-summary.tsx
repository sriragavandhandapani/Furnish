"use client";

import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function CartSummary() {
  const { state } = useCart();

  const subtotal = state.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const tax = subtotal * 0.08; // Example 8% tax
  const total = subtotal + tax;

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <CardTitle className="font-headline">Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Taxes (8%)</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <Separator />
        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full" size="lg">
            <Link href="/checkout">
                Proceed to Checkout
            </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
