"use client";

import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import type { CartItem as CartItemType } from "@/types";
import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

type CartItemProps = {
  item: CartItemType;
};

export function CartItem({ item }: CartItemProps) {
  const { dispatch } = useCart();
  const { toast } = useToast();

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const quantity = Number(e.target.value);
    if (quantity >= 0) {
      dispatch({ type: "UPDATE_QUANTITY", payload: { id: item.id, quantity } });
    }
  };

  const handleRemove = () => {
    dispatch({ type: "REMOVE_ITEM", payload: { id: item.id } });
    toast({
        title: "Item removed",
        description: `${item.name} has been removed from your cart.`,
        variant: 'destructive'
      });
  };

  return (
    <Card className="flex items-center p-4 gap-4">
      <div className="w-24 h-24 aspect-square rounded-md overflow-hidden flex-shrink-0">
        <Image
          src={item.image}
          alt={item.name}
          width={100}
          height={100}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-grow">
        <Link href={`/products/${item.id}`} className="font-bold font-headline text-lg hover:underline">
            {item.name}
        </Link>
        <p className="text-muted-foreground">${item.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center gap-4">
        <Input
          type="number"
          min="1"
          value={item.quantity}
          onChange={handleQuantityChange}
          className="w-20 text-center"
        />
        <p className="font-semibold w-24 text-right">${(item.price * item.quantity).toFixed(2)}</p>
        <Button variant="ghost" size="icon" onClick={handleRemove}>
          <X className="h-5 w-5" />
          <span className="sr-only">Remove item</span>
        </Button>
      </div>
    </Card>
  );
}
