import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";

export function Welcome() {
  return (
    <main className="flex items-center flex-col justify-center">
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
      <div className="max-w-[300px] w-full space-y-6 px-4">Hello world</div>
    </main>
  );
}

const resources = [
  {
    href: "https://reactrouter.com/docs",
    text: "Github",
    icon: <IoLogoGithub />,
  },
  {
    href: "https://rmx.as/discord",
    text: "LinkedIn",
    icon: <IoLogoLinkedin />,
  },
];
