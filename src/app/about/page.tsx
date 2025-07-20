
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Eye } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary mb-4">
            About Furnish
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Crafting homes with modern, elegant, and timeless furniture pieces that tell a story.
          </p>
        </div>

        <div className="relative aspect-[16/7] w-full rounded-lg overflow-hidden mb-16 shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjB3b3Jrc2hvcHxlbnwwfHx8fDE3NTM5ODg0OTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Our Workshop"
            fill
            className="object-cover"
            data-ai-hint="furniture workshop"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-headline font-bold mb-4">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              Founded on the principle that good design should be accessible to everyone, Furnish began as a small workshop with a big dream. We believe that furniture is more than just functional; it's a form of self-expression.
            </p>
            <p className="text-muted-foreground">
              From humble beginnings, we've grown into a passionate team of designers, artisans, and curators dedicated to bringing you high-quality, modern furniture. We scour the globe for the best materials and the most innovative designs to ensure every piece in our collection is something we'd be proud to have in our own homes.
            </p>
          </div>
          <div className="aspect-video w-full overflow-hidden rounded-lg shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzdHVkaW98ZW58MHx8fHwxNzUzOTg4NTM4fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Design Process"
              width={600}
              height={400}
              className="w-full h-full object-cover"
              data-ai-hint="design studio"
            />
          </div>
        </div>

        <div className="text-center mb-16">
            <h2 className="text-3xl font-headline font-bold mb-10">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                    <CardHeader className="items-center">
                        <div className="p-3 rounded-full bg-accent/20 text-accent">
                            <Target className="h-8 w-8" />
                        </div>
                        <CardTitle className="font-headline pt-2">Our Mission</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                        To provide beautiful, high-quality furniture that inspires modern living and brings lasting comfort and style to your home.
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="items-center">
                        <div className="p-3 rounded-full bg-accent/20 text-accent">
                           <Eye className="h-8 w-8" />
                        </div>
                        <CardTitle className="font-headline pt-2">Our Vision</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                        To be the most trusted and beloved furniture brand, known for our commitment to design, quality, and customer satisfaction.
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="items-center">
                        <div className="p-3 rounded-full bg-accent/20 text-accent">
                            <Users className="h-8 w-8" />
                        </div>
                        <CardTitle className="font-headline pt-2">Our People</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                        To foster a community of passionate designers and craftspeople who are dedicated to creating exceptional furniture pieces.
                    </CardContent>
                </Card>
            </div>
        </div>
      </div>
    </div>
  );
}
