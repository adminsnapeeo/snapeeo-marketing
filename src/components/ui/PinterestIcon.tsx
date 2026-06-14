import type { SVGProps } from 'react';

export function PinterestIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M8 20c0-2.5 1.5-5 2.5-7.5C11 10 10 8 10 6.5a4 4 0 1 1 7.5 1.5c0 2.5-1.5 4-3 4.5-1 .5-1.5 1-1 2 .5 1.5 2 6 2 6" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}
