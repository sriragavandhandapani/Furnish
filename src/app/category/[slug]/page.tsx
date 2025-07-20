
import { getProducts } from "@/lib/products";
import { ProductGrid } from "@/components/products/product-grid";
import { notFound } from "next/navigation";

function slugToCategory(slug: string) {
    if (!slug) return "";
    return slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const categoryName = slugToCategory(slug);
  const allProducts = getProducts();
  
  const products = allProducts.filter(
    (product) => product.category.toLowerCase() === categoryName.toLowerCase()
  );

  if (products.length === 0 && categoryName) {
    // Optional: if you want to be strict and only allow existing categories
    // notFound();
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold font-headline mb-4">
            {categoryName}
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
            Browse our collection of high-quality furniture for your {categoryName.toLowerCase()}.
        </p>
        {products.length > 0 ? (
            <ProductGrid products={products} />
        ) : (
            <div className="text-center py-16">
                <p className="text-xl text-muted-foreground">
                    There are no products in this category yet.
                </p>
            </div>
        )}
    </div>
  );
}
