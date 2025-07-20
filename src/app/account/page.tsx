import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AccountPage() {
  // In a real app, you'd fetch user data here.
  const user = {
    name: "Alice Johnson",
    email: "alice@example.com",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
            <Avatar className="mx-auto h-24 w-24 mb-4">
                <AvatarImage src={user.avatar} alt={user.name} data-ai-hint="user portrait" />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
          <CardTitle className="text-3xl font-headline">My Account</CardTitle>
          <CardDescription>Manage your account details below.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">Full Name</span>
            <p className="font-semibold">{user.name}</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">Email Address</span>
            <p className="font-semibold">{user.email}</p>
          </div>
          <div className="flex justify-center pt-4">
            <Button variant="destructive">Log Out</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
