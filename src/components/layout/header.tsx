
import Link from "next/link";
import { Sofa, Menu, Search } from "lucide-react";
import { UserNav } from "@/components/auth/user-nav";
import { CartIcon } from "@/components/cart-icon";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SearchBox } from "@/components/search-box";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Sofa className="h-6 w-6 text-primary" />
          <span className="font-headline text-xl font-bold">Furnish</span>
        </Link>
        
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link
            href="/"
            className="transition-colors hover:text-primary"
          >
            Home
          </Link>
          <Link
            href="/#products"
            className="transition-colors hover:text-primary"
          >
            Shop
          </Link>
          <Link
            href="/about"
            className="transition-colors hover:text-primary"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="transition-colors hover:text-primary"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <SearchBox />
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="h-6 w-6"/>
              <span className="sr-only">Search</span>
          </Button>
          <CartIcon />
          <div className="hidden md:block">
            <UserNav />
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Sofa className="h-6 w-6 text-primary" />
                  <span className="font-headline text-xl font-bold">Furnish</span>
                </Link>
                <div className="px-4">
                  <SearchBox />
                </div>
                <Link href="/" className="hover:text-primary">
                  Home
                </Link>
                <Link href="/#products" className="hover:text-primary">
                  Shop
                </Link>
                <Link href="/about" className="hover:text-primary">
                  About
                </Link>
                 <Link
                    href="/contact"
                    className="hover:text-primary"
                  >
                    Contact
                  </Link>
                <hr/>
                <UserNav />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
