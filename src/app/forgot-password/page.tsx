import { ForgotPasswordForm } from "@/components/auth/forgot-password-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <div className="container mx-auto flex items-center justify-center min-h-[calc(100vh-4rem)] px-4 sm:px-6 lg:px-8 py-12">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-headline">Forgot Password?</CardTitle>
          <CardDescription>
            No worries, we'll send you reset instructions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ForgotPasswordForm />
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Remember your password?{" "}
            <Link href="/login" className="font-semibold text-primary hover:underline">
              Login
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
