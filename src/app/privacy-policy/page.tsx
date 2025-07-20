
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary mb-4">
          Privacy Policy
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Last Updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="font-headline">Our Commitment to Your Privacy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-muted-foreground">
          <p>
            Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
          </p>

          <div className="space-y-2">
            <h2 className="text-xl font-headline font-semibold text-foreground">Collection of Your Information</h2>
            <p>
              We may collect information about you in a variety of ways. The information we may collect on the Site includes personal data, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site, such as online chat and message boards.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-headline font-semibold text-foreground">Use of Your Information</h2>
            <p>
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to: create and manage your account, process your transactions, email you regarding your account or order, and send you a newsletter.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-headline font-semibold text-foreground">Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>
          </div>
          
          <div className="space-y-2">
            <h2 className="text-xl font-headline font-semibold text-foreground">Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at support@furnish.com.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
