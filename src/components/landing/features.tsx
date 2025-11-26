import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, MessageSquare, Users, BarChart } from 'lucide-react';

const features = [
  {
    icon: <MessageSquare className="h-8 w-8 text-primary" />,
    title: 'Unified Inbox',
    description: 'Manage all your customer conversations from one single, powerful inbox. Never miss a message again.'
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: 'AI-Powered Responses',
    description: 'Leverage the power of AI to provide instant, accurate, and helpful answers to common customer questions.'
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Team Collaboration',
    description: 'Work together with your team to resolve customer issues faster. Assign, tag, and comment on conversations.'
  },
  {
    icon: <BarChart className="h-8 w-8 text-primary" />,
    title: 'Insightful Analytics',
    description: 'Gain valuable insights into your customer support performance and team productivity with our detailed reports.'
  }
];

export function Features() {
  return (
    <section id="features" className="w-full py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            Features Built for You
          </h2>
          <p className="mt-4 text-foreground/80 md:text-lg">
            Everything you need to deliver world-class customer support.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="flex flex-col text-center items-center p-6 transition-transform transform hover:-translate-y-2">
              <CardHeader className="p-0">
                <div className="bg-primary/10 p-4 rounded-full">
                  {feature.icon}
                </div>
              </CardHeader>
              <CardContent className="p-0 mt-4">
                <CardTitle className="text-xl font-headline mb-2">{feature.title}</CardTitle>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
