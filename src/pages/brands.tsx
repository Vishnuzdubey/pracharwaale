import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { HeroSection } from '@/components/ui/hero-section';
import { SectionHeader } from '@/components/ui/section-header';
import { BarChart3, Target, Users, ArrowRight } from 'lucide-react';

const benefits = [
  {
    icon: Users,
    title: 'Targeted Reach',
    description: 'Connect with your ideal audience through carefully selected influencers.',
  },
  {
    icon: Target,
    title: 'Strategic Campaigns',
    description: 'Custom-tailored campaigns aligned with your marketing objectives.',
  },
  {
    icon: BarChart3,
    title: 'Measurable Results',
    description: 'Track ROI and campaign performance with detailed analytics.',
  },
];

const industries = [
  'Fashion & Apparel',
  'Beauty & Cosmetics',
  'Health & Wellness',
  'Technology',
  'Food & Beverage',
  'Travel & Lifestyle',
  'Gaming & Entertainment',
  'Home & Decor',
];

export function BrandsPage() {
  return (
    <>
      <HeroSection
        title="Amplify Your Brand"
        description="Partner with influencers who share your values and connect with your target audience"
        image="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      >
        <Button size="lg" className="mt-6">Schedule a Consultation</Button>
      </HeroSection>

      <section className="py-20  flex justify-center align-center">
        <div className="container">
          <SectionHeader
            title="Why Work With Us"
            description="We help brands create authentic connections and drive measurable results"
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <Card key={benefit.title} className="p-6">
                  <Icon className="h-12 w-12 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 flex justify-center align-center bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                title="Industries We Serve"
                description="We have experience across diverse industries, helping brands connect with their target audience"
              />
              <div className="mt-8 grid grid-cols-2 gap-4">
                {industries.map((industry) => (
                  <div
                    key={industry}
                    className="p-4 bg-background rounded-lg text-center"
                  >
                    {industry}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Team meeting"
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20  flex justify-center align-center">
        <div className="container max-w-4xl">
          <SectionHeader
            title="Our Process"
            description="A streamlined approach to launching successful influencer campaigns"
            align="center"
            className="mb-12"
          />
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-none w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Discovery Call</h3>
                <p className="text-muted-foreground">
                  We'll discuss your goals, target audience, and campaign objectives
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-none w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Strategy Development</h3>
                <p className="text-muted-foreground">
                  Our team creates a customized campaign strategy aligned with your goals
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-none w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Influencer Selection</h3>
                <p className="text-muted-foreground">
                  We identify and vet influencers who align with your brand
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-none w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Campaign Launch</h3>
                <p className="text-muted-foreground">
                  Execute the campaign with ongoing optimization and reporting
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20  flex justify-center align-center bg-muted">
        <div className="container text-center">
          <SectionHeader
            title="Ready to Get Started?"
            description="Let's create an impactful influencer marketing campaign for your brand"
            align="center"
            className="mb-8"
          />
          <Button size="lg">
            Schedule a Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </>
  );
}