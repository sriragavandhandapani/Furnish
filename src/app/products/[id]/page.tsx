"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import { getProductById, getProducts } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { ProductRecommendations } from "@/components/products/product-recommendations";
import { useCart } from "@/hooks/use-cart";
import { useToast } from "@/hooks/use-toast";
import React from "react";

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = React.use(params);
  const product = getProductById(id);
  const products = getProducts();
  const { dispatch } = useCart();
  const { toast } = useToast();

  if (!product) {
    notFound();
  }
  
  const handleAddToCart = () => {
    dispatch({ type: "ADD_ITEM", payload: product });
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="flex items-center justify-center">
            <div className="aspect-square w-full max-w-md overflow-hidden rounded-lg shadow-lg">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={800}
                    height={800}
                    className="w-full h-full object-cover"
                    data-ai-hint={`${product.category}`}
                />
            </div>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            {product.name}
          </h1>
          <p className="text-muted-foreground mb-6">
            {product.description}
          </p>
          <p className="text-4xl font-bold font-body text-primary mb-8">
            ${product.price.toFixed(2)}
          </p>
          <div className="flex gap-4">
            <Button size="lg" onClick={handleAddToCart}>
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <ProductRecommendations
          product={product}
          allProducts={products}
        />
      </div>
    </div>
  );
}
