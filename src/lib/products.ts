
import type { Product } from "@/types";

const products: Product[] = [
  {
    id: "1",
    name: "Minimalist Oak Dining Table",
    description:
      "A stunning centerpiece for your dining room. Crafted from solid oak with a minimalist design, it comfortably seats six.",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1740402065437-4edddd2932bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxvYWslMjBkaW5pbmclMjB0YWJsZXxlbnwwfHx8fDE3NTMwMjA1NjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Dining",
  },
  {
    id: "2",
    name: "Plush Velvet Armchair",
    description:
      "Sink into comfort with this plush velvet armchair. Its elegant design and soft upholstery make it a perfect reading nook.",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1601366533287-5ee4c763ae4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxhcm1jaGFpcnxlbnwwfHx8fDE3NTMwMjI0MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Living Room",
  },
  {
    id: "3",
    name: "Modern Floating Bookshelf",
    description:
      "Display your favorite books and decor on this sleek, wall-mounted floating bookshelf. A space-saver with a contemporary feel.",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1578086454990-0cc032d41fc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxmbG9hdGluZyUyMGJvb2tzaGVsZnxlbnwwfHx8fDE3NTMwMjIzODR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Storage",
  },
  {
    id: "4",
    name: "Scandinavian Style Sofa",
    description:
      "A beautiful and comfortable sofa that embodies Scandinavian design. Upholstered in durable fabric with solid wood legs.",
    price: 999.99,
    image: "https://images.unsplash.com/photo-1679558916026-c5a87d6cd490?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxzY2FuZGluYXZpYW4lMjBzdGx5ZSUyMHNvZmF8ZW58MHx8fHwxNzUzMDIyNDI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Living Room",
  },
  {
    id: "5",
    name: "Industrial Metal Floor Lamp",
    description:
      "Illuminate your space with this stylish industrial floor lamp. Features an adjustable head and a sturdy metal base.",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1606425288528-4cebbfc69de7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxmbG9vciUyMGxhbXB8ZW58MHx8fHwxNzUzMDIyMzI2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Lighting",
  },
  {
    id: "6",
    name: "Queen Size Upholstered Bed Frame",
    description:
      "Create a cozy retreat with this upholstered bed frame. The tufted headboard adds a touch of luxury to any bedroom.",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1560185128-e173042f79dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxxdWVlbiUyMHNpemUlMjBiZWR8ZW58MHx8fHwxNzUzMDIyMzEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Bedroom",
  },
    {
    id: "7",
    name: "Mid-Century Modern TV Stand",
    description:
      "A stylish and functional TV stand that brings a mid-century modern vibe to your living room. Ample storage for media devices.",
    price: 279.99,
    image: "https://images.unsplash.com/photo-1580897275296-87979517bd4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHx0diUyMHN0YW5kfGVufDB8fHx8MTc1MzAyMjE5NXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Living Room",
  },
  {
    id: "8",
    name: "Round Marble Coffee Table",
    description:
      "An elegant coffee table with a genuine marble top and a sleek metal frame. A luxurious addition to your living space.",
    price: 450.00,
    image: "https://images.unsplash.com/photo-1647967527216-adea2f078e07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxjb2ZmZWUlMjB0YWJsZXxlbnwwfHx8fDE3NTMwMjIyMDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Living Room",
  },
  {
    id: "9",
    name: "Elegant Walnut Sideboard",
    description: "A timeless walnut sideboard offering ample storage with a sophisticated touch. Perfect for your dining or living room.",
    price: 650.00,
    image: "https://images.unsplash.com/photo-1579283111509-855c7eea1c49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxzaWRlYm9hcmR8ZW58MHx8fHwxNzUzMDIyMTY1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Storage",
  },
  {
    id: "10",
    name: "Leather Executive Office Chair",
    description: "Experience ultimate comfort and style with this ergonomic leather office chair. Features adjustable height and lumbar support.",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1688578735427-994ecdea3ea4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBjaGFpcnxlbnwwfHx8fDE3NTMwMjE5Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Office",
  },
  {
    id: "11",
    name: "Bohemian Rattan Hanging Chair",
    description: "Create a relaxing oasis with this beautiful rattan hanging chair. Includes a comfortable cushion for ultimate lounging.",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1736164508021-0c53a250f928?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxyYXR0YW4lMjBoYW5naW5nJTIwY2hhaXJ8ZW58MHx8fHwxNzUzMDIxOTU2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Outdoor",
  },
  {
    id: "12",
    name: "Contemporary Geometric Rug",
    description: "Add a modern touch to any room with this soft, durable rug featuring a striking geometric pattern. Available in multiple sizes.",
    price: 189.99,
    image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxEZWNvcnxlbnwwfHx8fDE3NTMwMjEyMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Decor",
  },
  {
    id: "13",
    name: "Art Deco Inspired Bookshelf",
    description: "A striking bookshelf with a gold-finished frame and glass shelves, perfect for displaying your treasured items.",
    price: 550.00,
    image: "https://images.unsplash.com/photo-1615884241431-d07c87e30ab2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxOHx8Ym9va3NoZWxmfGVufDB8fHx8MTc1MzAyMTYyMnww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Storage",
  },
  {
    id: "14",
    name: "Plush Bouclé Fabric Sofa",
    description: "A cozy and chic sofa upholstered in trendy bouclé fabric. Its curved design adds a soft, inviting touch to your living room.",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxMaXZpbmclMjBSb29tfGVufDB8fHx8MTc1MzAyMDI2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Living Room",
  },
  {
    id: "15",
    name: "Concrete Top Dining Table",
    description: "A modern dining table featuring a smooth concrete top and sturdy black metal legs. Seats up to six people comfortably.",
    price: 1100.00,
    image: "https://images.unsplash.com/photo-1583845112239-97ef1341b271?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxkaW5pbmclMjB0YWJsZXxlbnwwfHx8fDE3NTMwMjI1MDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Dining",
  },
  {
    id: "16",
    name: "Modern Leather Accent Chair",
    description: "A sleek and stylish accent chair with a genuine leather seat and a minimalist black metal frame. Perfect for any modern space.",
    price: 450.00,
    image: "https://images.unsplash.com/photo-1605822591786-6fd259a868d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxOXx8bGVhdGhlciUyMGFjY2VudCUyMGNoYWlyfGVufDB8fHx8MTc1MzAyMTU5OHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Living Room",
  }
];

export function getProducts(): Product[] {
  return products;
}

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}
