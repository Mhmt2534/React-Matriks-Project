// ColorContext.tsx
import React, { createContext, useState, ReactNode } from "react";

interface ColorContextProps {
  isBlack: boolean;
  toggleColor: () => void;
}

export const ColorContext = createContext<ColorContextProps | undefined>(
  undefined
);

interface ColorProviderProps {
  children: ReactNode;
}

export const ColorProvider: React.FC<ColorProviderProps> = ({ children }) => {
  const [isBlack, setIsBlack] = useState(true);

  const toggleColor = () => {
    setIsBlack(!isBlack);
  };

  return (
    <ColorContext.Provider value={{ isBlack, toggleColor }}>
      {children}
    </ColorContext.Provider>
  );
};
