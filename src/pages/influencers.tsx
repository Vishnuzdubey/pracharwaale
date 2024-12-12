import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { HeroSection } from '@/components/ui/hero-section';
import { SectionHeader } from '@/components/ui/section-header';
import { Instagram, TikTok, Youtube } from 'lucide-react';

const influencers = [
  {
    name: 'Alex Rivera',
    category: 'Lifestyle & Fashion',
    followers: '500K+',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    platforms: ['Instagram', 'TikTok'],
  },
  {
    name: 'Sarah Chen',
    category: 'Beauty & Wellness',
    followers: '750K+',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    platforms: ['Instagram', 'Youtube'],
  },
  {
    name: 'Marcus Johnson',
    category: 'Tech & Gaming',
    followers: '1M+',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    platforms: ['Youtube', 'TikTok'],
  },
];

const benefits = [
  {
    title: 'Brand Partnerships',
    description: 'Access exclusive collaborations with leading brands.',
  },
  {
    title: 'Growth Support',
    description: 'Get personalized coaching to expand your reach.',
  },
  {
    title: 'Content Strategy',
    description: 'Expert guidance on content creation and optimization.',
  },
  {
    title: 'Analytics Tools',
    description: 'Track your performance with advanced analytics.',
  },
];

export function InfluencersPage() {
  return (
    <>
      <HeroSection
        title="Join Our Influencer Network"
        description="Partner with top brands and take your influence to the next level"
        image="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      >
        <Button size="lg" className="mt-6">Apply Now</Button>
      </HeroSection>

      <section className="py-20">
        <div className="container">
          <SectionHeader
            title="Why Join Us?"
            description="We provide the tools, resources, and opportunities you need to succeed"
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="p-6">
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container">
          <SectionHeader
            title="Featured Influencers"
            description="Meet some of our successful partners"
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {influencers.map((influencer) => (
              <Card key={influencer.name} className="overflow-hidden">
                <div className="aspect-[4/5] relative">
                  <img
                    src={influencer.image}
                    alt={influencer.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{influencer.name}</h3>
                  <p className="text-muted-foreground mb-2">{influencer.category}</p>
                  <p className="text-sm mb-4">{influencer.followers} Followers</p>
                  <div className="flex gap-2">
                    {influencer.platforms.includes('Instagram') && (
                      <Instagram className="h-5 w-5" />
                    )}
                    {influencer.platforms.includes('TikTok') && (
                      <TikTok className="h-5 w-5" />
                    )}
                    {influencer.platforms.includes('Youtube') && (
                      <Youtube className="h-5 w-5" />
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-2xl text-center">
          <SectionHeader
            title="Ready to Grow Your Influence?"
            description="Join our network of successful influencers and take your career to the next level"
            align="center"
            className="mb-8"
          />
          <Button size="lg">Apply to Join</Button>
        </div>
      </section>
    </>
  );
}