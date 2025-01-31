import { IoLogoLinkedin, IoLogoGithub, IoMenuOutline, IoClose } from 'react-icons/io5';
import CustomLink from '@/components/basic/CustomLink';
import { useState } from 'react';

const customLinkStyle = 'group flex items-center gap-1 self-stretch';

function getMenuAnchors(isDesktop = false) {
  let currentClasses = '';

  if (isDesktop) {
    currentClasses = `flex-row gap-4 hidden md:flex`;
  } else {
    currentClasses = `flex flex-col text-right gap-8 font-2xl content-end`;
  }

  return (
    <ul className={currentClasses}>
      {resources.map((linkProps) => (
        <li key={`navbar-${linkProps.href}`} className="flex">
          <CustomLink {...linkProps} style={customLinkStyle} />
        </li>
      ))}
    </ul>
  );
}

export default function Navbar() {
  const [showNavigation, setShowNavigation] = useState(false);

  return (
    <header className="flex sticky flex-row container items-center content-between justify-center h-32 px-4">
      <nav className="flex items-center w-full justify-between">
        <CustomLink href="/" label={<h4 className="font-extrabold">Bruno's Resume</h4>} />
        {getMenuAnchors(true)}
        <button
          className="flex items-center gap-1 border bg-gray-50 border-gray-200 text-gray-500 py-2 px-4 rounded-md flex-row md:hidden z-20"
          onClick={() => setShowNavigation(!showNavigation)}
        >
          {showNavigation ? <IoClose /> : <IoMenuOutline />} Menu
        </button>
      </nav>
      {!!showNavigation && (
        <div className="md:hidden flex items-center justify-center flex-col fixed p-12 left-0 top-0 h-screen w-screen bg-gray-600 backdrop-opacity-50 box-border z-10">
          <div className="flex flex-col bg-gray-50 max-w-sm w-full p-12 rounded-lg text-right ">
            {getMenuAnchors()}
          </div>
        </div>
      )}
    </header>
  );
}

const resources = [
  {
    href: '/',
    label: 'About'
  },
  {
    href: '/experience',
    label: 'Experience'
  },
  {
    href: 'https://github.com/devbruniverse',
    label: 'Github',
    icon: <IoLogoGithub />,
    isExternal: true,
    hideExternalIcon: true
  },
  {
    href: 'https://www.linkedin.com/in/dos-santos-bruno/',
    label: 'LinkedIn',
    icon: <IoLogoLinkedin />,
    isExternal: true,
    hideExternalIcon: true
  }
];
