"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { useToast } from "@/hooks/use-toast";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const { dispatch } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch({ type: "ADD_ITEM", payload: product });
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <Link href={`/products/${product.id}`} className="group">
      <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-transparent hover:border-accent">
        <CardHeader className="p-0">
          <div className="aspect-square w-full overflow-hidden rounded-t-lg">
            <Image
              src={product.image}
              alt={product.name}
              width={600}
              height={600}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              data-ai-hint={`${product.category}`}
            />
          </div>
        </CardHeader>
        <CardContent className="p-4 flex-grow">
          <p className="text-sm text-muted-foreground">{product.category}</p>
          <CardTitle className="text-lg font-headline leading-tight mt-1">
            {product.name}
          </CardTitle>
        </CardContent>
        <CardFooter className="p-4 flex justify-between items-center">
          <p className="text-xl font-body font-semibold text-primary">
            ${product.price.toFixed(2)}
          </p>
          <Button variant="outline" size="icon" onClick={handleAddToCart}>
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Add to cart</span>
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
