
"use client";

import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const placeholders = [
  "Oak Dining Table...",
  "Velvet Armchair...",
  "Modern Bookshelves...",
  "Floor Lamps...",
];

export function SearchBox() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [placeholder, setPlaceholder] = useState(placeholders[0]);

  useEffect(() => {
    let currentPlaceholderIndex = 0;
    let currentText = "";
    let isDeleting = false;
    let letterIndex = 0;

    const type = () => {
      const fullText = placeholders[currentPlaceholderIndex];

      if (isDeleting) {
        currentText = fullText.substring(0, letterIndex - 1);
        letterIndex--;
      } else {
        currentText = fullText.substring(0, letterIndex + 1);
        letterIndex++;
      }

      setPlaceholder(currentText);

      if (!isDeleting && currentText === fullText) {
        // Pause at end
        isDeleting = true;
        setTimeout(type, 2000);
      } else if (isDeleting && currentText === "") {
        // Move to next placeholder
        isDeleting = false;
        currentPlaceholderIndex = (currentPlaceholderIndex + 1) % placeholders.length;
        setTimeout(type, 500);
      } else {
        // Continue typing/deleting
        const typingSpeed = isDeleting ? 50 : 100;
        setTimeout(type, typingSpeed);
      }
    };

    const timer = setTimeout(type, 1000);

    return () => clearTimeout(timer);
  }, []);
  
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = inputRef.current?.value;
    if (query) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-sm">
      <Input
        ref={inputRef}
        type="search"
        placeholder={placeholder}
        className="h-9 w-full rounded-full bg-secondary pr-10 transition-all duration-300"
      />
      <Button
        type="submit"
        variant="ghost"
        size="icon"
        className="absolute right-0 top-1/2 h-9 w-9 -translate-y-1/2 rounded-full text-muted-foreground hover:bg-transparent hover:text-primary"
      >
        <Search className="h-5 w-5" />
        <span className="sr-only">Search</span>
      </Button>
    </form>
  );
}
