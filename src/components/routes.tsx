import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '@/components/layout';
import { HomePage } from '@/pages/home';
import { AboutPage } from '@/pages/about';
import { ServicesPage } from '@/pages/services';
import { InfluencersPage } from '@/pages/influencers';
import { BrandsPage } from '@/pages/brands';
import { CaseStudiesPage } from '@/pages/case-studies';
import { BlogPage } from '@/pages/blog';
import { ContactPage } from '@/pages/contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'services', element: <ServicesPage /> },
      { path: 'influencers', element: <InfluencersPage /> },
      { path: 'brands', element: <BrandsPage /> },
      { path: 'case-studies', element: <CaseStudiesPage /> },
      { path: 'blog', element: <BlogPage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}