import Link from "next/link";
import { Button } from "@/components/ui/button";

export function UserNav() {
  // In a real app, you'd check authentication state here.
  const isLoggedIn = false;

  if (isLoggedIn) {
    // This part would be for a logged-in user.
    // For the MVP, we are focusing on the logged-out state.
    return <div>User Menu</div>;
  }

  return (
    <div className="flex items-center gap-2 md:gap-4 flex-col md:flex-row items-start md:items-center">
      <Button asChild variant="ghost">
        <Link href="/login">Login</Link>
      </Button>
      <Button asChild>
        <Link href="/register">Register</Link>
      </Button>
    </div>
  );
}
