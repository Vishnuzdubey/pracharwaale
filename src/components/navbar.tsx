import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import image from '@/assets/image.png';

export function Navbar() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex items-center justify-center">
      <div className="container flex h-16 items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Sparkles className="h-6 w-6" />
          <span className="font-bold">Parchar Wale</span>
        </Link>
        <div className="flex-1" />
        <div className="flex items-center space-x-6">
          <Link to="/about" className="text-sm font-medium">About</Link>
          <Link to="/services" className="text-sm font-medium">Services</Link>
          <Link to="/influencers" className="text-sm font-medium">Influencers</Link>
          <Link to="/brands" className="text-sm font-medium">Brands</Link>
          <Link to="/case-studies" className="text-sm font-medium">Case Studies</Link>
          <Link to="/blog" className="text-sm font-medium">Blog</Link>
          <Link to="/contact">
            <Button>Contact Us</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}