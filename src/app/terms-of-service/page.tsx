
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary mb-4">
          Terms of Service
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Last Updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="font-headline">Agreement to Terms</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-muted-foreground">
          <p>
            These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and Furnish (“we,” “us” or “our”), concerning your access to and use of the website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”).
          </p>

          <div className="space-y-2">
            <h2 className="text-xl font-headline font-semibold text-foreground">User Representations</h2>
            <p>
              By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Service; (4) you are not a minor in the jurisdiction in which you reside; (5) you will not access the Site through automated or non-human means, whether through a bot, script, or otherwise; (6) you will not use the Site for any illegal or unauthorized purpose; and (7) your use of the Site will not violate any applicable law or regulation.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-headline font-semibold text-foreground">Prohibited Activities</h2>
            <p>
              You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
            </p>
          </div>
          
          <div className="space-y-2">
            <h2 className="text-xl font-headline font-semibold text-foreground">Governing Law</h2>
            <p>
              These Terms of Service and your use of the Site are governed by and construed in accordance with the laws of the State, applicable to agreements made and to be entirely performed within the State, without regard to its conflict of law principles.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-headline font-semibold text-foreground">Contact Us</h2>
            <p>
              In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at support@furnish.com.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
