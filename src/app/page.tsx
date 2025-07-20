import { ProductGrid } from "@/components/products/product-grid";
import { getProducts } from "@/lib/products";
import { Banner } from "@/components/banner";

export default function Home() {
  const products = getProducts();

  return (
    <>
      <Banner />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-4">
          Featured Products
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Explore our hand-picked selection of standout pieces for every room in your home.
        </p>
        <ProductGrid products={products} />
      </div>
    </>
  );
}
