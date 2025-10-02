import React from 'react';

interface ReactIconProps {
  className?: string;
  size?: number;
  color?: string;
}

export const ReactIcon: React.FC<ReactIconProps> = ({
  className = '',
  size = 24,
  color = '#61DAFB',
}) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="2" fill={color} />
      <path
        d="M12 1C15.5 1 18.5 2.5 20.5 5.5C22.5 8.5 23 12 23 12C23 12 22.5 15.5 20.5 18.5C18.5 21.5 15.5 23 12 23C8.5 23 5.5 21.5 3.5 18.5C1.5 15.5 1 12 1 12C1 12 1.5 8.5 3.5 5.5C5.5 2.5 8.5 1 12 1Z"
        stroke={color}
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M12 7C14 7 16 8 17 10C18 12 18 14 17 16C16 18 14 19 12 19C10 19 8 18 7 16C6 14 6 12 7 10C8 8 10 7 12 7Z"
        stroke={color}
        strokeWidth="1"
        fill="none"
        opacity="0.6"
      />
    </svg>
  );
};
