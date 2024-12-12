import { Button } from '@/components/ui/button';
import { HeroSection } from '@/components/ui/hero-section';
import { SectionHeader } from '@/components/ui/section-header';
import { TeamCard } from '@/components/team/team-card';
import { CheckCircle } from 'lucide-react';

const teamMembers = [
  {
    name: 'Utkarsh Mishra',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    bio: 'With over 2 years in digital marketing, Utkarsh leads our vision for authentic influencer partnerships.',
  },
  {
    name: 'Michael Chen',
    role: 'Head of Strategy',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    bio: 'Michael brings data-driven insights to every campaign, ensuring measurable results for our clients.',
  },
  {
    name: 'Emma Rodriguez',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    bio: 'Emma creative vision helps brands tell compelling stories through influencer collaborations.',
  },
];

const values = [
  {
    title: 'Authenticity',
    description: 'We believe in genuine connections between brands and influencers.',
  },
  {
    title: 'Innovation',
    description: 'Staying ahead of trends and leveraging new platforms effectively.',
  },
  {
    title: 'Results',
    description: 'Focused on delivering measurable impact for our clients.',
  },
  {
    title: 'Transparency',
    description: 'Clear communication and honest reporting at every step.',
  },
];

export function AboutPage() {
  return (
    <>
      <HeroSection
        title="Our Story"
        description="Building authentic connections between brands and influencers since 2015"
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                title="Who We Are"
                description="We're a team of passionate marketers, creatives, and data analysts who understand the power of authentic influencer partnerships."
              />
              <div className="mt-6 space-y-4">
                {values.map((value) => (
                  <div key={value.title} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 mt-1 text-primary" />
                    <div>
                      <p className="font-semibold">{value.title}</p>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Team collaboration"
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container">
          <SectionHeader
            title="Meet Our Team"
            description="The passionate individuals behind our success"
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container text-center">
          <SectionHeader
            title="Join Our Team"
            description="We're always looking for talented individuals to join our growing team"
            align="center"
            className="mb-8"
          />
          <Button size="lg">View Open Positions</Button>
        </div>
      </section>
    </>
  );
}