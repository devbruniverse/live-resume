import { Link } from '@tanstack/react-router';
import { ReactNode } from 'react';
import { IoOpenOutline } from 'react-icons/io5';

type TypeLink = {
  href: string;
  label: string | ReactNode;
  target?: string;
  style?: string;
  icon?: ReactNode;
  isExternal?: boolean;
  hideExternalIcon?: boolean;
};

const anchorStyle = 'leading-normal text-blue-300 hover:underline dark:text-blue-300';

export default function CustomLink({
  href,
  label,
  icon,
  style = '',
  hideExternalIcon,
  target = '_self'
}: TypeLink) {
  if (target == '_blank') {
    return (
      <a
        className={`${anchorStyle} ${style}`}
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {icon}
        {label}
        {!hideExternalIcon && <IoOpenOutline />}
      </a>
    );
  }

  return (
    <Link className={`${anchorStyle} ${style}`} to={href} rel="noreferrer">
      {icon}
      {label}
    </Link>
  );
}
