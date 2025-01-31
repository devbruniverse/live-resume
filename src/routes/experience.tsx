import { createFileRoute } from '@tanstack/react-router';
import JobsListing from '@/components/JobsListing';

export const Route = createFileRoute('/experience')({
  component: RouteComponent
});

function RouteComponent() {
  return <JobsListing />;
}
