import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { HeroSection } from '@/components/ui/hero-section';
import { SectionHeader } from '@/components/ui/section-header';
import { ArrowRight } from 'lucide-react';

const posts = [
  {
    title: 'The Future of Influencer Marketing in 2024',
    excerpt: 'Discover the emerging trends and technologies shaping influencer marketing.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    category: 'Trends',
    date: 'Mar 15, 2024',
  },
  {
    title: 'How to Choose the Right Influencers for Your Brand',
    excerpt: 'A comprehensive guide to finding and vetting influencers.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    category: 'Strategy',
    date: 'Mar 10, 2024',
  },
  {
    title: 'Measuring ROI in Influencer Marketing',
    excerpt: 'Key metrics and tools to track campaign performance.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    category: 'Analytics',
    date: 'Mar 5, 2024',
  },
];

const categories = [
  'All',
  'Strategy',
  'Trends',
  'Analytics',
  'Case Studies',
  'Tips & Tricks',
];

export function BlogPage() {
  return (
    <>
      <HeroSection
        title="Insights & Resources"
        description="Stay updated with the latest trends and strategies in influencer marketing"
        image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-20">
        <div className="container">
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === 'All' ? 'default' : 'outline'}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.title} className="overflow-hidden">
                <div className="aspect-[16/9] relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                    <span>{post.category}</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Button variant="outline" className="w-full">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container text-center">
          <SectionHeader
            title="Subscribe to Our Newsletter"
            description="Get the latest insights and trends delivered to your inbox"
            align="center"
            className="mb-8"
          />
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-md border bg-background px-3 py-2"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}