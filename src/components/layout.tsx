import { Outlet } from 'react-router-dom';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col w-screen ">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}