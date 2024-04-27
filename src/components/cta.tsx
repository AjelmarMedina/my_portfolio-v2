
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ContactMethods } from './(cta)/contact-methods';
import { CtaForm } from "./(cta)/cta-form";

export function Cta() {
  return (
    <div id="cta" className="flex flex-col justify-center items center w-full md:h-screen px-4 py-14 md:py-24 md:px-28 bg-neutral-50">
      <Card className="mx-auto max-w-xl shadow-2xl">
        <CardHeader className="text-center">
          <CardTitle className="prose-display-xs">Get in Contact!</CardTitle>
          <CardDescription>
            Enter your information and what you&apos;d like to talk about.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CtaForm />
          {/* Other Contacts */}
          <div className="flex flex-col justify-center items-center mt-4 text-center prose-text-sm">
            <p>Want to get in contact in other ways?</p>
            <ContactMethods />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
