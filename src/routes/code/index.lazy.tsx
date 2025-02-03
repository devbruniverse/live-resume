import CustomLink from '@/components/basic/CustomLink';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/code/')({
  component: RouteComponent
});

function RouteComponent() {
  return (
    <div className="flex flex-col container px-4 gap-2">
      <h2 className="text-2xl">Code Time!</h2>
      <p>
        In this section, you can check some components, UI elements or coding
        challenges I've made in the past
      </p>
      <p>
        I'm currently migrating code from different services such as Bitbucket
        into this repo.
      </p>
      <h3 className="text-xl">Components List</h3>
      <ul>
        <li>
          <CustomLink href="stopwatch" label="StopWatch" />
        </li>
      </ul>
    </div>
  );
}
