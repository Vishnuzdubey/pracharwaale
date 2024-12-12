import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { HeroSection } from '@/components/ui/hero-section';
import { SectionHeader } from '@/components/ui/section-header';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export function ContactPage() {
  return (
    <>
      <HeroSection
        title="Contact Us"
        description="Get in touch with our team to discuss your influencer marketing needs"
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-20  flex justify-center align-center">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <SectionHeader
                title="Get in Touch"
                description="Fill out the form and we'll get back to you shortly"
                className="mb-8"
              />
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-md border bg-background px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-md border bg-background px-3 py-2"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <input
                    type="email"
                    className="w-full rounded-md border bg-background px-3 py-2"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Phone</label>
                  <input
                    type="tel"
                    className="w-full rounded-md border bg-background px-3 py-2"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    I am a...
                  </label>
                  <select className="w-full rounded-md border bg-background px-3 py-2">
                    <option>Brand</option>
                    <option>Influencer</option>
                    <option>Agency</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full rounded-md border bg-background px-3 py-2"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
            <div className="space-y-8">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Office Location</h3>
                    <p className="text-muted-foreground">
                      123 Marketing Street
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      contact@influenceelite.com
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Clock className="h-5 w-5 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM EST
                      <br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20  flex justify-center align-center bg-muted">
        <div className="container text-center">
          <SectionHeader
            title="Follow Us"
            description="Stay connected with us on social media"
            align="center"
            className="mb-8"
          />
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="icon">
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true" path ="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" ></svg>
           
            </Button>
            <Button variant="outline" size="icon">
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              path="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.82 7.63c.008.173.008.347.008.52 0 5.325-4.053 11.46-11.46 11.46-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05 1.883 0 3.616-.636 5.001-1.721-1.771-.037-3.255-1.197-3.767-2.793.249.037.498.062.76.062.361 0 .723-.05 1.06-.137-1.847-.374-3.23-1.995-3.23-3.953v-.05c.536.299 1.16.486 1.82.511-1.085-.723-1.796-1.958-1.796-3.354 0-.748.199-1.434.548-2.032 1.983 2.443 4.964 4.04 8.306 4.215-.062-.299-.1-.61-.1-.935 0-2.232 1.821-4.04 4.065-4.04 1.172 0 2.232.486 2.98 1.271.923-.174 1.808-.511 2.594-.973-.299.948-.948 1.746-1.796 2.257.822-.087 1.621-.312 2.357-.636-.561.81-1.259 1.533-2.057 2.107z"></svg>
           
            
            </Button>
            <Button variant="outline" size="icon">
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              path="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.048 1.407-.06 4.123-.06zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8.25a3.25 3.25 0 110-6.5 3.25 3.25 0 010 6.5z" ></svg>
           
          
            </Button>
            <Button variant="outline" size="icon">
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              path="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></svg>
           
            
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}