import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createRouter,
  createHashHistory
} from '@tanstack/react-router';
import { routeTree } from '@/routeTree.gen';
import '@/index.css';

const memoryHistory = createHashHistory();

// Create a new router instance
const router = createRouter({
  routeTree,
  history: memoryHistory,
  basepath: import.meta.env?.BASE_URL || '/live-resume/'
});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}
