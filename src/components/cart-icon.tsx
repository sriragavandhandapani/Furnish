"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { useEffect, useState } from "react";

export function CartIcon() {
  const { state } = useCart();
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])
  
  const itemCount = isClient ? state.items.reduce((sum, item) => sum + item.quantity, 0) : 0;

  return (
    <Button asChild variant="ghost" size="icon">
      <Link href="/cart">
        <div className="relative">
          <ShoppingBag className="h-6 w-6" />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
              {itemCount}
            </span>
          )}
        </div>
        <span className="sr-only">Shopping Cart</span>
      </Link>
    </Button>
  );
}
