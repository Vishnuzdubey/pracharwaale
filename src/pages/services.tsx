import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { HeroSection } from '@/components/ui/hero-section';
import { SectionHeader } from '@/components/ui/section-header';
import {
  Users,
  Target,
  BarChart3,
  Camera,
  MessageSquare,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Users,
    title: 'Influencer Sourcing',
    description: 'Find the perfect influencers who align with your brand values and target audience.',
  },
  {
    icon: Target,
    title: 'Campaign Management',
    description: 'End-to-end campaign execution, from strategy to reporting and optimization.',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    description: 'Comprehensive analytics and insights to measure campaign performance and ROI.',
  },
  {
    icon: Camera,
    title: 'Content Creation',
    description: 'Professional content creation services to enhance your campaign'
  },
  {
    icon: MessageSquare,
    title: 'Community Management',
    description: 'Engage with your audience and build lasting relationships.',
  },
  {
    icon: TrendingUp,
    title: 'Growth Strategy',
    description: 'Data-driven strategies to scale your influencer marketing efforts.',
  },
];

export function ServicesPage() {
  return (
    <>
      <HeroSection
        title="Our Services"
        description="Comprehensive influencer marketing solutions tailored to your needs"
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-20">
        <div className="container">
          <SectionHeader
            title="What We Offer"
            description="From influencer discovery to campaign execution and analytics, we provide end-to-end solutions for your influencer marketing needs."
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} className="p-6">
                  <Icon className="h-12 w-12 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Our process"
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
            </div>
            <div>
              <SectionHeader
                title="Our Process"
                description="We follow a proven methodology to ensure campaign success"
              />
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-none w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Discovery & Strategy</h4>
                    <p className="text-muted-foreground">
                      Understanding your goals and developing a tailored strategy
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-none w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Influencer Selection</h4>
                    <p className="text-muted-foreground">
                      Finding the perfect influencers for your brand
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-none w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Campaign Execution</h4>
                    <p className="text-muted-foreground">
                      Managing the campaign from start to finish
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-none w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Analysis & Optimization</h4>
                    <p className="text-muted-foreground">
                      Measuring results and optimizing for better performance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container text-center">
          <SectionHeader
            title="Ready to Get Started?"
            description="Let's create impactful campaigns together"
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