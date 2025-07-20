"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { CartSummary } from "@/components/cart/cart-summary";

const checkoutSchema = z.object({
  email: z.string().email(),
  shippingName: z.string().min(2, "Name is too short"),
  shippingAddress: z.string().min(5, "Address is too short"),
  shippingCity: z.string().min(2, "City is too short"),
  shippingState: z.string().min(2, "State is too short"),
  shippingZip: z.string().min(5, "Zip code is too short"),
  cardName: z.string().min(2, "Name on card is too short"),
  cardNumber: z.string().regex(/^\d{16}$/, "Invalid card number"),
  cardExpiry: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Invalid format (MM/YY)"),
  cardCVC: z.string().regex(/^\d{3,4}$/, "Invalid CVC"),
});

type CheckoutFormValues = z.infer<typeof checkoutSchema>;

export default function CheckoutPage() {
  const { toast } = useToast();
  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
        email: "",
        shippingName: "",
        shippingAddress: "",
        shippingCity: "",
        shippingState: "",
        shippingZip: "",
        cardName: "",
        cardNumber: "",
        cardExpiry: "",
        cardCVC: "",
    },
  });

  function onSubmit(data: CheckoutFormValues) {
    console.log(data);
    toast({
      title: "Order Placed!",
      description: "Thank you for your purchase. A confirmation has been sent to your email.",
    });
    // Here you would typically process the payment and create the order.
    // For now, we'll just show a success message.
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold font-headline mb-8 text-center">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline">Shipping Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl><Input placeholder="you@example.com" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField control={form.control} name="shippingName" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl><Input placeholder="John Doe" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField control={form.control} name="shippingAddress" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address</FormLabel>
                        <FormControl><Input placeholder="123 Main St" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField control={form.control} name="shippingCity" render={({ field }) => (
                        <FormItem>
                          <FormLabel>City</FormLabel>
                          <FormControl><Input {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField control={form.control} name="shippingState" render={({ field }) => (
                        <FormItem>
                          <FormLabel>State</FormLabel>
                          <FormControl><Input {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField control={form.control} name="shippingZip" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Zip Code</FormLabel>
                          <FormControl><Input {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-headline">Payment Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <FormField control={form.control} name="cardName" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name on Card</FormLabel>
                          <FormControl><Input placeholder="John M Doe" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField control={form.control} name="cardNumber" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Card Number</FormLabel>
                          <FormControl><Input placeholder="•••• •••• •••• ••••" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField control={form.control} name="cardExpiry" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Expiration (MM/YY)</FormLabel>
                          <FormControl><Input placeholder="MM/YY" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField control={form.control} name="cardCVC" render={({ field }) => (
                        <FormItem>
                          <FormLabel>CVC</FormLabel>
                          <FormControl><Input placeholder="123" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
              </Card>
              
              <Button type="submit" className="w-full" size="lg">
                Place Order
              </Button>
            </form>
          </Form>
        </div>
        <div className="md:col-span-1">
            <CartSummary/>
        </div>
      </div>
    </div>
  );
}
