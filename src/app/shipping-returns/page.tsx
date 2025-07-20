
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, RotateCw } from "lucide-react";

export default function ShippingReturnsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary mb-4">
          Shipping & Returns
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Information about how we get our products to you and how to handle returns.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <Truck className="h-8 w-8 text-accent" />
              <CardTitle className="font-headline">Shipping Policy</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              We are committed to delivering your furniture safely and efficiently. All orders are processed within 1-2 business days.
            </p>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Shipping Times:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Standard Shipping:</strong> 5-7 business days.</li>
                <li><strong>Expedited Shipping:</strong> 2-3 business days.</li>
                <li><strong>White Glove Delivery:</strong> 7-10 business days (includes in-room setup and packaging removal).</li>
              </ul>
            </div>
            <p>
              Shipping costs are calculated at checkout based on your location and the size of your order. You will receive a tracking number via email as soon as your order ships.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <RotateCw className="h-8 w-8 text-accent" />
              <CardTitle className="font-headline">Return Policy</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              We want you to love your purchase. If you're not completely satisfied, you can return most items within 30 days of delivery for a full refund or exchange.
            </p>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Conditions for Return:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Items must be in new, unused condition.</li>
                <li>Items must be returned in their original packaging.</li>
                <li>Custom-made or final sale items cannot be returned.</li>
              </ul>
            </div>
            <p>
              To initiate a return, please contact our customer support team with your order number. Return shipping costs may apply.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
