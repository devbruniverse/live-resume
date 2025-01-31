import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import Navbar from '@/components/Navbar';

export const Route = createRootRoute({
  component: () => (
    <main className="flex flex-col items-center gap-8 h-full min-h-screen">
      <Navbar />
      <Outlet />
      {/* <TanStackRouterDevtools /> */}
    </main>
  )
});
