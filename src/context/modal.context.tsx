'use client';
import { createContext, useState } from 'react';

export type ModalContext = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const ModalContext = createContext<ModalContext>({
  isOpen: false,
  setIsOpen: () => {},
});

export const ModalContextProvider = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return <ModalContext.Provider value={{ isOpen, setIsOpen }}>{children}</ModalContext.Provider>;
};
