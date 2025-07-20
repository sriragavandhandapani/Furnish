
import Link from "next/link";
import { Sofa, Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-accent/10 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Sofa className="h-6 w-6 text-primary" />
              <span className="font-headline text-xl font-bold">Furnish</span>
            </Link>
            <p className="text-muted-foreground">
              High-quality, modern furniture to create your perfect space.
            </p>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-headline font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/#products" className="text-muted-foreground hover:text-primary transition-colors">Shop</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Shop */}
          <div>
            <h3 className="font-headline font-semibold text-lg mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link href="/category/living-room" className="text-muted-foreground hover:text-primary transition-colors">Living Room</Link></li>
              <li><Link href="/category/bedroom" className="text-muted-foreground hover:text-primary transition-colors">Bedroom</Link></li>
              <li><Link href="/category/dining" className="text-muted-foreground hover:text-primary transition-colors">Dining</Link></li>
              <li><Link href="/category/lighting" className="text-muted-foreground hover:text-primary transition-colors">Lighting</Link></li>
            </ul>
          </div>
          
          {/* Column 4: Help */}
           <div>
            <h3 className="font-headline font-semibold text-lg mb-4">Help</h3>
            <ul className="space-y-2">
              <li><Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQs</Link></li>
              <li><Link href="/shipping-returns" className="text-muted-foreground hover:text-primary transition-colors">Shipping & Returns</Link></li>
              <li><Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

        </div>
        
        <Separator className="my-8" />
        
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Furnish. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
