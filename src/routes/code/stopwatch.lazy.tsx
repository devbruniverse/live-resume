import { createLazyFileRoute } from '@tanstack/react-router'
import Stopwatch from '@/pages/StopWatch'

export const Route = createLazyFileRoute('/code/stopwatch')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Stopwatch />
}
