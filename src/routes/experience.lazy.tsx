import { createLazyFileRoute } from '@tanstack/react-router'
import JobsListing from '@/components/JobsListing'

export const Route = createLazyFileRoute('/experience')({
  component: RouteComponent,
})

function RouteComponent() {
  return <JobsListing />
}
