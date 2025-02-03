import { createRootRoute, Outlet } from '@tanstack/react-router';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/Breadcrumbs';

export const Route = createRootRoute({
  component: () => (
    <main className="flex flex-col items-center gap-8 h-full min-h-screen">
      <Navbar />
      <Breadcrumbs />
      <Outlet />
    </main>
  )
});
