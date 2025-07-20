"use client";

import { useEffect, useState } from "react";
import {
  generateProductRecommendations,
  type GenerateProductRecommendationsOutput,
} from "@/ai/flows/generate-product-recommendations";
import { Skeleton } from "../ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Terminal } from "lucide-react";
import type { Product } from "@/types";
import { ProductGrid } from "./product-grid";

type ProductRecommendationsProps = {
  product: Product;
  allProducts: Product[];
};

export function ProductRecommendations({
  product,
  allProducts,
}: ProductRecommendationsProps) {
  const [recommendations, setRecommendations] =
    useState<GenerateProductRecommendationsOutput | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        setLoading(true);
        setError(null);
        // Filter out the current product from the list sent to the AI
        const otherProducts = allProducts.filter(p => p.id !== product.id);
        const result = await generateProductRecommendations({
          productName: product.name,
          productDescription: product.description,
          productCategory: product.category,
          products: otherProducts,
        });
        setRecommendations(result);
      } catch (e) {
        setError("Failed to generate recommendations. Please try again later.");
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, [product, allProducts]);

  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold font-headline text-center mb-8">
        You Might Also Like
      </h2>
      {loading && <LoadingSkeleton />}
      {error && <ErrorAlert message={error} />}
      {!loading && !error && recommendations && (
         <ProductGrid products={recommendations.recommendations} />
      )}
    </div>
  );
}

const LoadingSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {[...Array(4)].map((_, i) => (
      <div key={i} className="space-y-2">
        <Skeleton className="h-64 w-full" />
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    ))}
  </div>
);


const ErrorAlert = ({ message }: { message: string }) => (
    <Alert variant="destructive">
        <Terminal className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
            {message}
        </AlertDescription>
    </Alert>
);
