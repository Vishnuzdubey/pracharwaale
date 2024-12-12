import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { HeroSection } from '@/components/ui/hero-section';
import { SectionHeader } from '@/components/ui/section-header';
import { ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    title: 'Fashion Brand X',
    category: 'Fashion & Apparel',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    results: [
      '500% ROI',
      '2M+ Reach',
      '25% Sales Increase',
    ],
  },
  {
    title: 'Beauty Co Y',
    category: 'Beauty & Cosmetics',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    results: [
      '300% ROI',
      '1.5M+ Reach',
      '40% Engagement Rate',
    ],
  },
  {
    title: 'Tech Start-up Z',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    results: [
      '400% ROI',
      '3M+ Reach',
      '50% Lead Increase',
    ],
  },
];

export function CaseStudiesPage() {
  return (
    <>
      <HeroSection
        title="Success Stories"
        description="Discover how we've helped brands achieve exceptional results"
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-20  flex justify-center align-center">
        <div className="container">
          <SectionHeader
            title="Featured Case Studies"
            description="Real results from our influencer marketing campaigns"
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <Card key={study.title} className="overflow-hidden">
                <div className="aspect-video relative">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-muted-foreground mb-2">
                    {study.category}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{study.title}</h3>
                  <div className="space-y-2">
                    {study.results.map((result) => (
                      <div key={result} className="text-sm">
                        • {result}
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Read Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20  flex justify-center align-center bg-muted">
        <div className="container text-center">
          <SectionHeader
            title="Ready to Be Our Next Success Story?"
            description="Let's create an impactful campaign for your brand"
            align="center"
            className="mb-8"
          />
          <Button size="lg">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </>
  );
}