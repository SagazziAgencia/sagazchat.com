import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "./contact-form";

export function Contact() {
  return (
    <section id="contact" className="w-full py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="space-y-4 text-center lg:text-left">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              Get in Touch
            </h2>
            <p className="text-foreground/80 md:text-lg max-w-md mx-auto lg:mx-0">
              Have questions or want to learn more? Drop us a line, and we'll be happy to help.
            </p>
          </div>
          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
