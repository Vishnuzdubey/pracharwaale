import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  BarChart3,
  Users,
  Target,
  TrendingUp,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

export function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="container text-center text-white space-y-6">
          <h1 className="text-5xl font-bold leading-tight">
            Connecting Brands with Influencers That Deliver Results
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            We build authentic partnerships that drive growth and engagement
            through data-driven strategies and creative excellence.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="default">
              Get Started
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold">500+</div>
              <div className="text-muted-foreground">Successful Campaigns</div>
            </div>
            <div>
              <div className="text-4xl font-bold">10M+</div>
              <div className="text-muted-foreground">Audience Reached</div>
            </div>
            <div>
              <div className="text-4xl font-bold">1000+</div>
              <div className="text-muted-foreground">Active Influencers</div>
            </div>
            <div>
              <div className="text-4xl font-bold">95%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer comprehensive influencer marketing solutions tailored to
              your brand's unique needs and objectives.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <Users className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Influencer Sourcing
              </h3>
              <p className="text-muted-foreground">
                Find the perfect influencers who align with your brand values
                and target audience.
              </p>
            </Card>
            <Card className="p-6">
              <Target className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Campaign Management
              </h3>
              <p className="text-muted-foreground">
                End-to-end campaign execution, from strategy to reporting and
                optimization.
              </p>
            </Card>
            <Card className="p-6">
              <BarChart3 className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Analytics & Reporting
              </h3>
              <p className="text-muted-foreground">
                Comprehensive analytics and insights to measure campaign
                performance and ROI.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Success Story: Fashion Brand X
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-1 text-primary" />
                  <div>
                    <p className="font-semibold">500% ROI</p>
                    <p className="text-muted-foreground">
                      Achieved through strategic influencer partnerships
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-1 text-primary" />
                  <div>
                    <p className="font-semibold">2M+ Reach</p>
                    <p className="text-muted-foreground">
                      Across Instagram and TikTok platforms
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-1 text-primary" />
                  <div>
                    <p className="font-semibold">25% Sales Increase</p>
                    <p className="text-muted-foreground">
                      Direct attribution to influencer campaigns
                    </p>
                  </div>
                </div>
              </div>
              <Button className="mt-6" variant="default">
                View Case Study
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Case Study"
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Amplify Your Brand?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Let's create impactful influencer marketing campaigns that drive
            real results for your business.
          </p>
          <Button size="lg">
            Schedule a Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </>
  );
}