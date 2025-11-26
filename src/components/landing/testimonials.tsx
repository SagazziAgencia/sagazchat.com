import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const testimonials = [
  {
    id: "avatar1",
    name: "Sarah Johnson",
    title: "CEO, Tech Innovators",
    quote: "Respondezap has completely transformed our customer support. We're resolving issues twice as fast and our customers have never been happier."
  },
  {
    id: "avatar2",
    name: "Michael Chen",
    title: "Support Lead, Creative Solutions",
    quote: "The unified inbox and AI features are game-changers. My team can now handle a higher volume of inquiries without sacrificing quality."
  },
  {
    id: "avatar3",
    name: "Emily Rodriguez",
    title: "Founder, E-commerce Store",
    quote: "As a small business owner, I need tools that are powerful yet easy to use. Respondezap is exactly that. I can't imagine running my store without it."
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            Loved by Teams Worldwide
          </h2>
          <p className="mt-4 text-foreground/80 md:text-lg">
            Don't just take our word for it. Here's what our users have to say.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {testimonials.map((testimonial) => {
            const image = PlaceHolderImages.find(p => p.id === testimonial.id);
            return (
              <Card key={testimonial.name} className="p-6">
                <CardContent className="p-0">
                  <blockquote className="text-lg italic text-foreground/90 border-l-4 border-primary pl-4">
                    {testimonial.quote}
                  </blockquote>
                  <div className="flex items-center gap-4 mt-6">
                    <Avatar>
                      {image && <AvatarImage src={image.imageUrl} alt={image.description} data-ai-hint={image.imageHint} />}
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
