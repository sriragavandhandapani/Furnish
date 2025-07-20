
"use client";

import { useSearchParams } from "next/navigation";
import { getProducts } from "@/lib/products";
import { ProductGrid } from "@/components/products/product-grid";
import { useEffect, useState } from "react";
import type { Product } from "@/types";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const allProducts = getProducts();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (query) {
      const results = allProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.description.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]);
    }
  }, [query, allProducts]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {query ? (
        <>
          <h1 className="text-3xl font-bold font-headline mb-2">
            Search Results for "{query}"
          </h1>
          <p className="text-muted-foreground mb-8">
            Found {filteredProducts.length} results.
          </p>
          {filteredProducts.length > 0 ? (
            <ProductGrid products={filteredProducts} />
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                No products found matching your search.
              </p>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-16">
          <h1 className="text-3xl font-bold font-headline mb-2">
            Please enter a search term
          </h1>
          <p className="text-muted-foreground">
            Use the search bar in the header to find products.
          </p>
        </div>
      )}
    </div>
  );
}
