import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5';
import JobsListing from '@/components/JobsListing';

export default function Home() {
  return (
    <main className="flex items-center gap-4 flex-col justify-center">
      <header className="flex flex-row container content-between justify-center">
        <nav className="flex items-center w-full justify-between">
          <h4 className="flex">Bruno's Resume</h4>
          <ul className="flex flex-row ">
            {resources.map(({ href, text, icon }) => (
              <li key={href}>
                <a
                  className="group flex items-center gap-2 self-stretch p-3 leading-normal text-blue-700 hover:underline dark:text-blue-500"
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {icon}
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div className="container w-full space-y-6 pb-8">
        <JobsListing />
      </div>
    </main>
  );
}

const resources = [
  {
    href: 'https://github.com/devbruniverse',
    text: 'Github',
    icon: <IoLogoGithub />
  },
  {
    href: 'https://www.linkedin.com/in/dos-santos-bruno/',
    text: 'LinkedIn',
    icon: <IoLogoLinkedin />
  }
];
