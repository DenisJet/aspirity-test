import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

export default function Button({ type = 'button', children }: ButtonProps) {
  return (
    <button className='bg-blue-700 uppercase text-sm font-semibold py-2.5 px-4' type={type}>
      {children}
    </button>
  );
}
