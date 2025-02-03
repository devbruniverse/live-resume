import { ReactNode } from 'react';

export enum ButtonType {
  DEFAULT = 'default',
  PRIMARY = 'primary',
  DANGER = 'danger'
}

type ButtonProps = {
  children: string | ReactNode;
  type?: ButtonType;
  disabled?: boolean;
  onClick: () => void;
};

const baseButtonClassnames =
  'rounded-md cursor-pointer py-2 border px-4 disabled:cursor-not-allowed disabled:opacity-50 hover:opacity-85 inset-shadow-button ';

function getButtonClassname(type: ButtonType) {
  let buttonTypeClass = 'bg-gray-100 border-gray-200 text-gray-700';

  switch (type) {
    case ButtonType.PRIMARY:
      buttonTypeClass = 'bg-indigo-700 border-indigo-800 text-white';
      break;
    case ButtonType.DANGER:
      buttonTypeClass = 'bg-red-500 border-red-600 text-white';
      break;
  }

  return `${baseButtonClassnames} ${buttonTypeClass}`;
}

export default function Button({
  children,
  type = ButtonType.DEFAULT,
  onClick,
  disabled
}: ButtonProps) {
  return (
    <button
      className={getButtonClassname(type)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
